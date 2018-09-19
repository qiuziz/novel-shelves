/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2018-09-06 13:52:20
 * @Last Modified by: qiuz
 * @Last Modified time: 2018-09-19 21:22:35
 */

const express = require("express"),
		router = express(),
    connect = require("./db.js")
    search = require('./search-novel.js'),
    getBook = require('./book'),
    getChapter = require('./chapter'),
    basePrefix = '/api';


 router.get(`${basePrefix}/search/:name`, async (req, res) => {
  const name = req.params.name;
  if (!name) {
    res.send([]);
    return;
  }
  if (global.search_results && global.search_results.name === name) {
    res.send(global.search_results.results);
    return;
  } else {
    const list = await search(name);
    if (list) {
      res.send(list);
    }
  }
})

router.get(`${basePrefix}/book/:id`, async (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id)
    if (!id) {
      res.send({});
      return;
    }
    if (global.search_results) {
      if (global.book && global.book.id === id) {
        res.send(global.book.book);
        return;
      }
      const book = await getBook({
        ...global.search_results.results.filter(book => book.id === id)[0],
        ...global.search_results.urls.filter(book => book.id === id)[0]
      });
      global.book = {
        id: id,
        book: book
      };
      res.send(book);
      return;
    } else {
      global.book = '';
      res.send({});
    }

  // connect((err, db) => {
	// 	//连接到表 jandan
	// 	const collection = db.collection('jandan');
  //   //查询数据库
  //   const query = lastPageId ? {_id : { '$lt' :  lastPageId} } : {};
	// 	collection.find(query).limit(10).sort({_id: -1}).toArray(function(err,doc){
	// 		if (err) {
	// 			console.log(err);
	// 		  db.close();
  //       res.status(502).send('fetch error')
	// 			return;
  //     }
  //     db.close();
  //     lastPageId = doc[doc.length - 1] && doc[doc.length - 1]._id;
	// 		res.send(doc);
  //   })
	// })
})
router.get(`${basePrefix}/catalog/:id`, async (req, res) => {
    const id = parseInt(req.params.id);
    if (!id) {
      res.send([]);
      return;
    }
    if (global.book && global.book.id === id) {
      res.send(global.book.book.contents);
      return;
    } else {
      res.send([]);
    }
});

router.get(`${basePrefix}/chapter/:bookId/:chapterId`, async (req, res) => {
  const bookId = parseInt(req.params.bookId), chapterId = parseInt(req.params.chapterId);
  if (!bookId || !chapterId) {
    res.send({});
    return;
  }
  if (global.book && global.book.id === bookId) {
    if (global.chapter && global.chapter.id === chapterId) {
      res.send(global.chapter);
      return;
    }
    const chapter = global.book.book.contents.filter(item => item.id === chapterId);
    console.log(chapter);
    const doc = await getChapter(chapter[0]);
    global.chapter = doc;
    res.send(doc);
    return;
  } else {
    res.send({});
  }
})

module.exports = router;
