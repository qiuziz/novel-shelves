/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2018-09-06 13:52:20
 * @Last Modified by: qiuz
 * @Last Modified time: 2018-09-22 22:13:30
 */

const express = require("express"),
		router = express(),
    handleToMongoDB = require('../utils/handleToMongoDB'),
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
  let book_detail = {};
  if (isNaN(id)) {
    res.send(book_detail);
    return;
  } else if (BOOK.id === id) {
    book_detail = BOOK;
  } else {
    const findBook = await handleToMongoDB.find('book', {id});
    if (findBook) {
      book_detail = BOOK = findBook;
      console.log(111);
    } else {
      book_detail = BOOK = await getBook({
        ...SEARCH_RESULTS.results.filter(book => book.id === id)[0],
        ...SEARCH_RESULTS.urls.filter(book => book.id === id)[0]
      });
      handleToMongoDB.insert('book', book_detail);
    }
  }
  res.send(book_detail);
})

// 根据小说id获取目录
router.get(`${basePrefix}/catalog/:id`, async (req, res) => {
    const id = parseInt(req.params.id);
    let catalog = [];
    if (isNaN(id)) {
      res.send(catalog);
      return;
    }
    if (BOOK.id === id && BOOK.catalog) {
        catalog = BOOK.catalog;
        res.send(catalog);
        return;
    }
    const findBook = await handleToMongoDB.find('book', {id});
    if (findBook.catalog && findBook.catalog.length > 0) {
      BOOK = findBook;
      console.log(222);
    } else {
      BOOK = await getBookCatalog(id);
      handleToMongoDB.update('book', {id: BOOK.id}, {catalog: BOOK.catalog});
    }
    catalog = BOOK.catalog;
    res.send(catalog);
});

// 根据小说id和章节id获取章节内容
router.get(`${basePrefix}/chapter/:bookId/:chapterId`, async (req, res) => {
  const bookId = parseInt(req.params.bookId), chapterId = parseInt(req.params.chapterId);
  let chapter = {};
  if (isNaN(bookId) || isNaN(chapterId)) {
    res.send(chapter);
    return;
  }
  if (BOOK.id === bookId) {
    if (CHAPTER.id === chapterId) {
      chapter = CHAPTER;
    } else {
      const findChapter = await handleToMongoDB.find(bookId.toString(), {chapterId});
      if (findChapter) {
        chapter = CHAPTER = findChapter;
        console.log(333);
      } else {
        const data = BOOK.catalog.filter(item => item.id === chapterId)[0];
        chapter = CHAPTER = await getChapter(data);
        handleToMongoDB.insert(bookId.toString(), {...chapter, _id:chapter.id});
      }
    }
  }
  res.send(chapter);
})

module.exports = router;
