/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2018-09-07 15:14:58
 * @Last Modified by: qiuz
 * @Last Modified time: 2018-09-17 17:34:55
 */

const http = require('http'),
    cheerio = require("cheerio"),
		phantom = require('phantom'),
		USER_AGENTS = require('./user-agents'),
    LEN = USER_AGENTS.length - 1,
    saveToDB = require('./save'),
    random = require('./util').random,
    process = require('child_process');

// const data = {
//   author: "七十柒",
// category: "[女生频道]",
// id: "80600",
// lastChapter: "198 我的全部",
// name: "AA制婚约：试婚100天",
// src: "https://www.qu.la/book/80600/",
// state: "连载",
// updateTime: "2018-05-27 00:00:00"
// };
function getBook(data) {
  console.log(data);
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
			return page.open(data.src).then(function(status) {
				if (status !== 'success') {
          page.close();
					ph.exit();
					return;
				}
				return page.property('content').then(function(content) {
          const
            $ = cheerio.load(content)
            , dls = $('#list > dl')
            , cover = $('#fmimg')
            , intro = $('#intro');

          data.intro = intro.html();
          data.cover = 'https://www.qu.la' + $('img', cover).attr('src');

          let contents = [];

          let dtCount = 0;
          dls.children().each((index, child) => {
            if (child.tagName === 'dt') {
              dtCount++;
            } else if (dtCount >= 2){
              let dt = $(child);
              contents.push({
                id: contents.length.toString(),
                chapter: dt.text().trim(),
                src: 'https://www.qu.la' + $('a', dt).attr('href')
              });
            }
          })
          data.contents = contents;
          // saveToDB('books', data);
					page.close();
          ph.exit();
          return data;
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

module.exports = getBook;
