/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2018-09-07 19:17:57
 * @Last Modified by: qiuz
 * @Last Modified time: 2018-09-07 23:39:24
 */

const connect = require('./db.js');

function saveToMongoDB(collectionName, data) {

	connect((err, db) => {
		//连接到表
    const collection = db.collection(collectionName);
		//插入数据库
      collection.insert(data, function(err, result) {
        if(err)
        {
            console.log('Error:'+ err);
            db.close();
            return;
        }
        db.close();
      });
	})
}

module.exports = saveToMongoDB;
