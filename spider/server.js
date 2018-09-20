/*
 * @Author: qiuz
 * @Date: 2018-09-06 10:09:50
 * */

 require('./global');

const express = require('express'),
    http = require('http');

const app = express();

const port = process.env.PORT || 4000;

app.use(require('./router/router'));

http.createServer(app).listen(port);
