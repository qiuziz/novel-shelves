/*
 * @Author: qiuziz
 * @Date: 2017-08-15 10:12:02
 * */

const API_HOST = '';
const SERVICE_NAME = '/api';

export const Resource: Object = {
  search: `${SERVICE_NAME}/search/:name`,
  getBook: `${SERVICE_NAME}/book/:id`,
  getBookCatalog: `${SERVICE_NAME}/catalog/:id`,
  getChapter: `${SERVICE_NAME}/chapter/:bookId/:chapterId`

};

