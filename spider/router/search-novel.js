/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2018-09-06 13:48:51
 * @Last Modified by: qiuz
 * @Last Modified time: 2018-09-20 20:39:10
 */
const http = require('http'),
    cheerio = require("cheerio"),
		phantom = require('phantom'),
		USER_AGENTS = require('../user-agents'),
    LEN = USER_AGENTS.length - 1,
    random = require('../util').random,
    process = require('child_process');

const imagesArray = [], urls = [];

const pageUrl = 'https://sou.xanbhx.com/search?siteid=qula&q=';



function killPlantomJs() {
  //直接调用命令
  process.exec('ps -ef|grep phantomjs|grep -v grep|cut -c 9-15|xargs kill -9', (error, stdout, stderr) => {
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
}

function novel(name) {
  const url = pageUrl + encodeURI(name);
  global.search_results = {
    results: [],
    urls: [],
    name: name
  };

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
			return page.open(url).then(function(status) {
				if (status !== 'success') {
          page.close();
					ph.exit();
          novel(url);
					return;
				}
				return page.property('content').then(function(content) {
          const
            $ = cheerio.load(content)
            , results = $('.search-list > ul > li');
          let novels = [];
          results.each((index, item) => {
            if (index > 0) {
              const spans = $(item).find('span'),
                url = $('a', spans.eq(1)).attr('href'),
                id = url.substring(23, url.length - 1);

              novels.push({
                id: parseInt(id),
                name: spans.eq(1).text().trim(),
                author: spans.eq(3).text(),
                updateTime: spans.eq(5).text(),
                state: spans.eq(6).text(),
                category: spans.eq(0).text(),
                lastChapter: spans.eq(2).text()
              });
              SEARCH_RESULTS.urls.push({
                id: parseInt(id),
                url: url
              })
            }
          })
          SEARCH_RESULTS.results = novels;
					page.close();
          ph.exit();
          return novels;
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

  // return search_results;
}

module.exports = novel;
