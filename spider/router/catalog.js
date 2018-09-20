/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2018-09-20 18:31:33
 * @Last Modified by: qiuz
 * @Last Modified time: 2018-09-20 21:00:13
 */

const http = require('http'),
    cheerio = require("cheerio"),
		phantom = require('phantom'),
		USER_AGENTS = require('../user-agents'),
    LEN = USER_AGENTS.length - 1,
    saveToDB = require('./save'),
    random = require('../util').random,
    process = require('child_process');


function getBookCatalog(bookId) {
  let book = bookId === BOOK.id
    ? BOOK
    : {
        ...SEARCH_RESULTS.results.filter(book => book.id === bookId)[0],
        ...SEARCH_RESULTS.urls.filter(book => book.id === bookId)[0]
      };
  if (!book) {
    return [];
  }
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
			return page.open(book.url).then(function(status) {
				if (status !== 'success') {
          page.close();
					ph.exit();
					return;
				}
				return page.property('content').then(function(content) {
          const
            $ = cheerio.load(content)
            , dls = $('#list > dl');

          let contents = [];

          let dtCount = 0;
          dls.children().each((index, child) => {
            if (child.tagName === 'dt') {
              dtCount++;
            } else if (dtCount >= 2){
              let dt = $(child)
                , url = $('a', dt).attr('href')
                , id = book.id * 10;
              contents.push({
                id: id + index,
                bookId: book.id,
                prev: index > 0 ? id + index - 1 : null,
                next: id + index + 1,
                chapter: dt.text().trim(),
                url: 'https://www.qu.la' + url
              });
            }
          })
          book.contents = contents;
          // saveToDB('books', book);
					page.close();
          ph.exit();
          return book;
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

module.exports = getBookCatalog;
