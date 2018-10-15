/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2018-09-07 15:14:58
 * @Last Modified by: qiuz
 * @Last Modified time: 2018-10-15 10:57:01
 */

const
  request = require("../utils/request-promise"),
  getChapter = require('./chapter'),
  handleToMongoDB = require('../utils/handleToMongoDB'),
  getBook = require('./book'),
  async = require("async"),
  sleep = require('sleep'),
  getBookCatalog = require('./catalog');

let book;
async function getAllchapter(id) {
  book = book ? book : await handleToMongoDB.findOneNode('book', {id});
  BOOK = book;
  if (!book.catalog || book.catalog.length <= 0) {
    book = await getBookCatalog(id);
  }
  const fiveChapter = book.catalog.splice(0, 5);
  async.mapSeries(fiveChapter, function(chapter, callback) {
    getFiveChapter(chapter, callback);
  }, function(err, result) {
    if (err) return console.log(err);
    if (fiveChapter.length > 0) {
      sleep.sleep(60);
      getAllchapter(id);
    }
  });
}

async function getFiveChapter(data, callback) {
  let result = await getChapter(data);
  result && handleToMongoDB.insert(BOOK.id.toString(), {...result, _id: result.id});
  callback(null, data.title);
}

module.exports = getAllchapter;
