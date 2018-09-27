/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2018-09-20 18:31:33
 * @Last Modified by: qiuz
 * @Last Modified time: 2018-09-27 15:55:28
 */

const request = require("../utils/request-promise");

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
	return request(book.url).then($ => {
      const dls = $('#list > dl');

      let contents = [];

      let dtCount = 0, main = false, step = 1; prev = null;
      dls.children().each((index, child) => {
        if (child.tagName === 'dt') {
          let dt = $(child);
          if (dt.text().indexOf('最新章节') <= -1) {
            main = true;
          }
        } else if (main){
          if (dls.children()[index + 1] && dls.children()[index + 1].name === 'dt') {
            step = 2;
          }
          let dt = $(child)
            , url = $('a', dt).attr('href')
            , id = book.id * 10
            , chapterId = id + index
            , next = chapterId + step;

          step = 1;
          contents.push({
            id: chapterId,
            bookId: book.id,
            prev: prev ? prev : null,
            next: next,
            chapter: dt.text().trim(),
            url: 'https://www.qu.la' + url
          });
          prev = chapterId;
        }
      })
      book.catalog = contents;
      // saveToDB('books', book);
      return book;
		});

}

module.exports = getBookCatalog;
