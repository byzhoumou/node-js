// 导入http模块
const http = require("http");

// 创建web 服务器实例
const server = http.createServer();

// 为服务器实例绑定request事件，监听客户端请求
server.on("request", function (req, res) {
  console.log("服务器响应成功");
});

// 启动服务器 listen（） 端口默认80端口可以随意更改
server.listen(80, function () {
  console.log("server running at http:/127.0.0.1");
});
