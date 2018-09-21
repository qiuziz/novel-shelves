/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2018-09-06 13:48:51
 * @Last Modified by: qiuz
 * @Last Modified time: 2018-09-21 18:28:59
 */
const request = require("../utils/request-promise");

const pageUrl = 'https://sou.xanbhx.com/search?siteid=qula&q=';

function novel(name) {
  const url = pageUrl + encodeURI(name);

  return request(url).then($ => {
      const results = $('.search-list > ul > li');
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
      return novels;
		})
}

module.exports = novel;
