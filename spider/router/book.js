/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2018-09-07 15:14:58
 * @Last Modified by: qiuz
 * @Last Modified time: 2018-09-20 20:39:37
 */

const http = require('http'),
    cheerio = require("cheerio"),
		phantom = require('phantom'),
		USER_AGENTS = require('../user-agents'),
    LEN = USER_AGENTS.length - 1,
    saveToDB = require('./save'),
    random = require('../util').random,
    process = require('child_process');

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
			return page.open(data.url).then(function(status) {
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
