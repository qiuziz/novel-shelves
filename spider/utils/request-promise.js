/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2018-09-21 18:08:15
 * @Last Modified by: qiuz
 * @Last Modified time: 2018-09-21 18:34:07
 */

const rp = require("request-promise"),
  cheerio = require("cheerio");

function request(url, options = {}) {
  return rp({
      uri: 'http://localhost:8081',
      method: "POST",
      json: true,
      headers: {
          "content-type": "application/json",
      },
      body: JSON.stringify({url}),
      transform: function (body) {
        return cheerio.load(body);
      },
      ...options
    });
}

module.exports = request;
