/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2018-09-20 18:31:33
 * @Last Modified by: qiuz
 * @Last Modified time: 2018-09-22 22:04:30
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
      book.catalog = contents;
      // saveToDB('books', book);
      return book;
		});

}

module.exports = getBookCatalog;
