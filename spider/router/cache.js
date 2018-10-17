/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2018-09-07 15:14:58
 * @Last Modified by: qiuz
 * @Last Modified time: 2018-10-17 14:33:42
 */

const
  fs = require('fs'),
  request = require("../utils/request-promise"),
  handleToMongoDB = require('../utils/handleToMongoDB');


async function cache(id) {
  const chapterList = await handleToMongoDB.find(id.toString(), {});
  let data = {};
  chapterList.forEach(chapter => {
    data[chapter.id] = chapter;
  });
  return fs.writeFile(`./dist/novel-shelves/assets/${id}.json`, JSON.stringify(data), function(err){
    if(err) {
      console.log(err);
      return false;
    }
    else {
      console.log('写文件操作成功');
      return true;
    }
  })
}

module.exports = cache;
