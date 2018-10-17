/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2018-09-07 15:14:58
 * @Last Modified by: qiuz
 * @Last Modified time: 2018-10-17 13:34:37
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
      return false;
      console.log(err);
    }
    else {
      return true;
      console.log('写文件操作成功');
    }
  })
}

module.exports = cache;
