/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2018-09-06 13:52:20
 * @Last Modified by: qiuz
 * @Last Modified time: 2018-09-17 14:47:05
 */

const express = require("express"),
		router = express(),
    connect = require("./db.js")
    search = require('./search-novel.js'),
    getBook = require('./book');


 router.get("/search", async (req, res) => {
  const name = req.query.name;
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

router.get("/book/:id", async (req, res) => {
    const id = req.params.id;
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
router.get("/catalog/:id", async (req, res) => {
    const id = req.params.id;
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
})

module.exports = router;
