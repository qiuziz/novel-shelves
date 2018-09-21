/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2018-09-06 13:52:20
 * @Last Modified by: qiuz
 * @Last Modified time: 2018-09-21 18:27:03
 */

const express = require("express"),
		router = express(),
    connect = require("../db.js")
    search = require('./search-novel.js'),
    getBook = require('./book'),
    getChapter = require('./chapter'),
    getBookCatalog = require('./catalog');

// 路由前缀
const basePrefix = '/api';

// 根据名称搜索小说
router.get(`${basePrefix}/search/:name`, async (req, res, next) => {
  const name = req.params.name;
  if (name === 'undefined') {
    res.send([]);
    return;
  }
  if (SEARCH_RESULTS.name === name) {
    res.send(SEARCH_RESULTS.results);
    return;
  } else {
    const list = await search(name);
    res.send(list);
    return;
  }
})

// 根据小说id获取书籍详情
router.get(`${basePrefix}/book/:id`, async (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.send({});
    return;
  } else if (BOOK.id === id) {
    res.send(BOOK);
    return;
  } else {
    console.log(SEARCH_RESULTS);
    BOOK = await getBook({
      ...SEARCH_RESULTS.results.filter(book => book.id === id)[0],
      ...SEARCH_RESULTS.urls.filter(book => book.id === id)[0]
    });
    console.log(BOOK)
    res.send(BOOK);
    return;
  }
})

// 根据小说id获取目录
router.get(`${basePrefix}/catalog/:id`, async (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      res.send([]);
      return;
    } else if (BOOK.id === id) {
      if (BOOK.contents) {
        res.send(BOOK.contents);
        return;
      }
      BOOK = await getBookCatalog(id);
      res.send(BOOK.contents);
      return;
    } else {
      res.send([]);
    }
});

// 根据小说id和章节id获取章节内容
router.get(`${basePrefix}/chapter/:bookId/:chapterId`, async (req, res) => {
  const bookId = parseInt(req.params.bookId), chapterId = parseInt(req.params.chapterId);
  if (isNaN(bookId) || isNaN(chapterId)) {
    res.send({});
    return;
  }
  if (BOOK.id === bookId) {
    if (CHAPTER.id === chapterId) {
      res.send(CHAPTER);
      return;
    }
    const chapter = BOOK.contents.filter(item => item.id === chapterId)[0];
    if (!chapter) {
      res.send({});
      return;
    }
    CHAPTER = await getChapter(chapter);
    res.send(CHAPTER);
    return;
  } else {
    res.send({});
  }
})

module.exports = router;
