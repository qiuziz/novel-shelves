/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2018-09-07 19:17:57
 * @Last Modified by: qiuz
 * @Last Modified time: 2018-09-27 11:43:19
 */

const connect = require('../db.js');

const handleToMongoDB = {
  insert: (collectionName, data) => connect((err, db) => {
  		//连接到表
      const collection = db.collection(collectionName);
  		//插入数据库
      collection.insertOne(data, function(err, result) {
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }
      });
    }),
  update: (collectionName, query, data) => connect((err, db) => {
    //连接到表
    const collection = db.collection(collectionName);
    //插入数据库
    collection.updateOne(query, {
        $set: data,
        $currentDate: { lastModified: true }
      }, function(err, result) {
      if(err)
      {
          console.log('Error:'+ err);
          return;
      }
    });
  }),
  find: (collectionName, query) => new Promise((resolve, reject) => {
    connect((err, db) => {
      const collection = db.collection(collectionName);
      return collection.findOne(query,  {fields: {_id: 0, url: 0}}, function(err, result) {
        if(err)
        {
            console.log('Error:'+ err);
            reject(err);
        }
        resolve(result);
      });
    })
  }),
}

module.exports = handleToMongoDB;
