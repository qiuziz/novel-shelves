/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2018-09-07 19:17:57
 * @Last Modified by: qiuz
 * @Last Modified time: 2018-09-22 21:52:32
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
      //连接到表
      const collection = db.collection(collectionName);
      //插入数据库
      return collection.findOne(query,  {_id: 0}, function(err, result) {
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
