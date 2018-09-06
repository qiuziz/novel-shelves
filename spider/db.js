/*
 * @Author: qiuz
 * @Date: 2018-09-06 13:23:13
 * */

const MongoClient = require('mongodb').MongoClient,
DB_CONN_STR = 'mongodb://localhost:27017/photo';

function connect(callback) {
  MongoClient.connect(DB_CONN_STR, function(err, db) {
      if (!err) callback(err, db);
  });
}

module.exports = connect;
