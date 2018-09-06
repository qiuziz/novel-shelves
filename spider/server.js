/*
 * @Author: qiuz
 * @Date: 2018-09-06 10:09:50
 * */

const express = require('express'),
		novel = require('./novel.js');

const app = express();

const port = process.env.PORT || 4000;


novel();

// app.use('/jandan/images', require('./utils/jandan-api.js'));

http.createServer(app).listen(port);
