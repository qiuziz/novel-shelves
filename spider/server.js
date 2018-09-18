/*
 * @Author: qiuz
 * @Date: 2018-09-06 10:09:50
 * */

const express = require('express'),
    http = require('http'),
		novel = require('./search-novel.js');

const app = express();

const port = process.env.PORT || 4000;


app.use('/api', require('./router.js'));

http.createServer(app).listen(port);
