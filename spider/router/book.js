/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2018-09-07 15:14:58
 * @Last Modified by: qiuz
 * @Last Modified time: 2018-10-15 10:57:44
 */

const request = require("../utils/request-promise");

function getBook(data) {
  return request(data.url).then($ => {
      const
        dls = $('#list > dl')
        , cover = $('#fmimg')
        , intro = $('#intro')
        , name = $('#info > h1');

      data.name = name.text();

      data.intro = intro.html();
      data.cover = 'https://www.qu.la' + $('img', cover).attr('src');

      return data;
		})

}

module.exports = getBook;
