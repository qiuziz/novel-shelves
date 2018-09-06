/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2018-09-06 13:48:51
 * @Last Modified by: qiuz
 * @Last Modified time: 2018-09-06 15:27:45
 */
const http = require('http'),
    cheerio = require("cheerio"),
		phantom = require('phantom'),
		USER_AGENTS = require('./userAgents'),
    LEN = USER_AGENTS.length - 1,
    process = require('child_process');

const imagesArray = [], urls = [];

// 产生m 到 n 之间的随机数
function random(m, n) {
	const i = n - m;
	return Math.floor(Math.random() * i + m);
}

const pageUrl = 'https://sou.xanbhx.com/search?siteid=qula&q=%E5%A5%B6%E7%88%B8%E7%9A%84%E6%96%87%E8%89%BA%E4%BA%BA%E7%94%9F';



function killPlantomJs() {
  //直接调用命令
  process.exec('ps -ef|grep phantomjs|grep -v grep|cut -c 9-15|xargs kill -9', (error, stdout, stderr) => {
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
}

function novel(url) {

	phantom.create().then(function(ph) {

		ph.createPage().then(function(page) {
			page.property('userAgent', USER_AGENTS[random(0, LEN)]);
      page.property('resourceTimeout', 10000); // 10 seconds
      page.on('onResourceTimeout', function(e) {
        console.log(e.errorCode);   // it'll probably be 408
        console.log(e.errorString); // it'll probably be 'Network timeout on resource'
        console.log(e.url);         // the url whose request timed out
        ph.exit(1);
      });
			page.open(url).then(function(status) {
				if (status !== 'success') {
          page.close();
					ph.exit();
          novel(url);
					return;
				}
				page.property('content').then(function(content) {
          const
            $ = cheerio.load(content)
            , results = $('.search-list > ul > li');
          let novels = [];
          results.each((index, item) => {
            if (index > 0) {
              const spans = $(item).find('span');
              novels.push({name: spans.eq(1).text().trim(), author: spans.eq(3).text(), updateTime: spans.eq(5).text(), state: spans.eq(6).text()});
            }
          })
          console.log(novels);
					page.close();
					ph.exit();
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
novel(pageUrl);
module.exports = novel;
