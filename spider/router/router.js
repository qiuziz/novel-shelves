/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2018-09-06 13:52:20
 * @Last Modified by: qiuz
 * @Last Modified time: 2018-10-15 11:16:43
 */

const express = require("express"),
		router = express(),
    handleToMongoDB = require('../utils/handleToMongoDB'),
    search = require('./search-novel.js'),
    getBook = require('./book'),
    getChapter = require('./chapter'),
    getAllchapter = require('./getAllchapter'),
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
    const findBook = await handleToMongoDB.findOne('book', {id});
    if (findBook) {
      book_detail = BOOK = findBook;
    } else {
      book_detail = BOOK = await getBook(
        SEARCH_RESULTS.results.length > 0 && SEARCH_RESULTS.urls.length > 0
        ? {
            ...SEARCH_RESULTS.results.filter(book => book.id === id)[0],
            ...SEARCH_RESULTS.urls.filter(book => book.id === id)[0]
          }
        : {id: id, url: 'https://www.qu.la/book/' + id}
        );
      handleToMongoDB.insert('book', book_detail);
    }
  }
  NEXT_START = 0;
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
    if (BOOK.id === id && BOOK.catalog && BOOK.catalog.length > 0) {
        catalog = BOOK.catalog;
        res.send(catalog);
        return;
    }
    const findBook = await handleToMongoDB.findOneNode('book', {id});
    BOOK = findBook;
    if (!BOOK) {
      BOOK = await getBook({id: id, url: 'https://www.qu.la/book/' + id});
    }
    if (!(BOOK.catalog && BOOK.catalog.length > 0)) {
      BOOK = await getBookCatalog(id);
      handleToMongoDB.update('book', {id: BOOK.id}, {catalog: BOOK.catalog});
    }
    catalog = BOOK.catalog;
    NEXT_START = 0;
    res.send(catalog);
});

// 将小说加入书架
router.get(`${basePrefix}/addShelves/:id`, async (req, res) => {
    const id = parseInt(req.params.id);
    let result = {status: 1, msg: '操作失败'};
    if (isNaN(id)) {
      res.send(result);
      return;
    }
    if (BOOK.id === id && BOOK.catalog && BOOK.catalog.length > 0) {
        BOOK.isAdd = 1;
        handleToMongoDB.update('book', {id: BOOK.id}, BOOK);
        res.send(BOOK);
        getAllchapter(BOOK.id);
        return;
    }
    const findBook = await handleToMongoDB.findOne('book', {id});
    BOOK = findBook;
    if (!BOOK) {
      BOOK = await getBook({id: id, url: 'https://www.qu.la/book/' + id});
    }
    if (!(BOOK.catalog && BOOK.catalog.length > 0)) {
      BOOK = await getBookCatalog(id);
      BOOK.isAdd = 1;
      handleToMongoDB.update('book', {id: BOOK.id}, BOOK);
    }
    res.send(BOOK);
    getAllchapter(BOOK.id);
});

// 查询书架
router.get(`${basePrefix}/getShelvesBook`, async (req, res) => {
    let result = [];

    result = await handleToMongoDB.find('book', {isAdd: 1});

    res.send(result);
});

// 根据小说id和章节id获取章节内容
router.get(`${basePrefix}/chapter/:bookId/:chapterId`, async (req, res) => {
  const bookId = parseInt(req.params.bookId), chapterId = parseInt(req.params.chapterId);
  let chapter = {};
  if (isNaN(bookId) || isNaN(chapterId)) {
    res.send(chapter);
    return;
  }
  if (BOOK.id === bookId && CHAPTER.id === chapterId) {
    chapter = CHAPTER;
    res.send(chapter);
    return;
  }
  if (!BOOK.id) {
    const book = await handleToMongoDB.findOne('book', {id: bookId});
    if (book) {
      BOOK = book;
    } else {
      BOOK = await getBookCatalog(bookId);
    }
  }
  const findChapter = await handleToMongoDB.findOne(bookId.toString(), {id: chapterId});
  if (findChapter) {
    if (findChapter.content) {
      chapter = CHAPTER = findChapter;
    } else {
      const data = BOOK.catalog.filter(item => item.id === chapterId)[0];
      chapter = CHAPTER = await getChapter(data);
      handleToMongoDB.update(bookId.toString(), {_id: chapter.id}, {content: chapter.content});
    }
  } else {
    const data = BOOK.catalog.filter(item => item.id === chapterId)[0];
    chapter = CHAPTER = await getChapter(data);
    chapter && handleToMongoDB.insert(bookId.toString(), {...chapter, _id:chapter.id});
  }
  res.send(chapter);
  getLastFive(chapter);
})

async function getLastFive(chapter) {
  if (NEXT_START > 0 && NEXT_START >= chapter.next) return;
  NEXT_START = chapter.next + 4;
  for (let i = chapter.next; i <= NEXT_START; i++) {
    const nextChapter = BOOK.catalog.filter(item => item.id === i)[0];
    const findChapter = await handleToMongoDB.findOne(BOOK.id.toString(), {id: chapter.id});
    if (findChapter) {
      return;
    }
    let result = await getChapter(nextChapter);
    handleToMongoDB.insert(result.bookId.toString(), {...result, _id:result.id});
  }
}

module.exports = router;
