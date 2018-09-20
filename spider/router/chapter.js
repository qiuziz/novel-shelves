/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2018-09-07 17:18:55
 * @Last Modified by: qiuz
 * @Last Modified time: 2018-09-20 19:00:36
 */


const http = require('http'),
    cheerio = require("cheerio"),
		phantom = require('phantom'),
		USER_AGENTS = require('../user-agents'),
    LEN = USER_AGENTS.length - 1,
    random = require('../util').random,
    saveToDB = require('./save'),
    process = require('child_process');

function getBookContents(chapter) {
  console.log(chapter)
  let result = {};

	return phantom.create().then(function(ph) {

		return ph.createPage().then(function(page) {
			page.property('userAgent', USER_AGENTS[random(0, LEN)]);
      page.property('resourceTimeout', 10000); // 10 seconds
      page.on('onResourceTimeout', function(e) {
        console.log(e.errorCode);   // it'll probably be 408
        console.log(e.errorString); // it'll probably be 'Network timeout on resource'
        console.log(e.url);         // the url whose request timed out
        ph.exit(1);
      });
			return page.open(chapter.url).then(function(status) {
				if (status !== 'success') {
          page.close();
					ph.exit();
					return;
				}
				return page.property('content').then(function(content) {
          let
            $ = cheerio.load(content)
            , chapterContent = $('#content');
            $(chapterContent).children().remove('script,div');

          // saveToDB(chapterContent.html());
          result = {
            id: chapter.id,
            bookId: chapter.bookId,
            prev: chapter.prev,
            next: chapter.next,
            title: chapter.chapter,
            content: chapterContent.html()
          };
					page.close();
          ph.exit();
          return result;
				})
			})
		})
		.catch(error => {
			console.log(error);
			page.close();
		});
	})
	.catch(error => {
		console.log(error);
		ph.exit();
  });

}

module.exports = getBookContents;
