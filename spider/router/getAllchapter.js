/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2018-09-07 15:14:58
 * @Last Modified by: qiuz
 * @Last Modified time: 2018-10-16 16:17:35
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
  const chapter = await handleToMongoDB.findOneNode(data.bookId.toString(), {id: data.id});
  if (chapter) {
    callback(null, data.title);
    return;
  }
  let result = await getChapter(data);
  result && handleToMongoDB.insert(data.bookId.toString(), {...result, _id: result.id});
  callback(null, data.title);
}

module.exports = getAllchapter;
