/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2018-09-21 16:08:57
 * @Last Modified by: qiuz
 * @Last Modified time: 2018-09-24 10:05:48
 */
var USER_AGENTS = require('./user-agents')
    , LEN = USER_AGENTS.length
    , random = require('./util').random
    , system = require('system') //get args
    , args = system.args
    , port = 8081;

if (args.length === 2 ) {
    port = Number(args[1]);
}

var webserver = require('webserver');

webserver.create().listen(port, { keepAlive: true }, function(request, response) {
  try {
    var bodyParams = JSON.parse(JSON.parse(request.post));
      url= bodyParams.url;
      // 创建page
      var webPage = require('webpage');
      var page = webPage.create();
      page.settings.userAgent = USER_AGENTS[random(0, LEN)];
      page.settings.resourceTimeout = 10000;//timeout is 10s
      // 页面错误捕捉
      page.onError = function(msg, trace) {
          console.log("[Warning]This is page.onError", msg);
          // console.error(msgStack.join('\n'));
      };
      // phantomjs错误捕捉
      phantom.onError = function(msg, trace) {
          console.log("[Warning]This is phantom.onError");
          var msgStack = ['PHANTOM ERROR: ' + msg];
          if (trace && trace.length) {
            msgStack.push('TRACE:');
            trace.forEach(function(t) {
              msgStack.push(' -> ' + (t.file || t.sourceURL) + ': ' + t.line + (t.function ? ' (in function ' + t.function +')' : ''));
            });
          }
          console.error(msgStack.join('\n'));
          phantom.exit(1);
      };
      // 打开网页，获取源码
      page.open(url, function (status) {
          console.log('Target_url is ' + url);  //输出待检测的网站url
          var body = '';
          if(status === 'success') {
              body= page.content;
          }
          response.status=200;
          response.write(body);  //返回获取到的网页源码
          page.close();
          response.close();
      });
  } catch(e) {
    console.log('[Error]'+e.message+'happen'+e.lineNumber+'line');
  }
});
