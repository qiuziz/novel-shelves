/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2018-09-06 13:52:20
 * @Last Modified by: qiuz
 * @Last Modified time: 2018-09-06 13:52:20
 */

const express = require("express"),
		router = express(),
		connect = require("./db.js");


router.get("/", (req, res) => {
	const page = req.query.page || 0;
  connect((err, db) => {
		//连接到表 jandan
		const collection = db.collection('jandan');
    //查询数据库
    const query = lastPageId ? {_id : { '$lt' :  lastPageId} } : {};
		collection.find(query).limit(10).sort({_id: -1}).toArray(function(err,doc){
			if (err) {
				console.log(err);
			  db.close();
        res.status(502).send('fetch error')
				return;
      }
      db.close();
      lastPageId = doc[doc.length - 1] && doc[doc.length - 1]._id;
			res.send(doc);
    })
	})
})

module.exports = router
