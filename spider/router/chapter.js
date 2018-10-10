/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2018-09-07 17:18:55
 * @Last Modified by: qiuz
 * @Last Modified time: 2018-10-08 09:44:34
 */


const request = require("../utils/request-promise");

function getBookContents(chapter) {
  if (!chapter) return {};
  let result = {};

	return request(chapter.url).then($ => {
    let chapterContent = $('#content');
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
    return result;
	})

}

module.exports = getBookContents;
