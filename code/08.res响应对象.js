// 导入http模块
const http = require("http");

// 创建web 服务器实例
const server = http.createServer();

// req是请求对象，包含了与客户端的相关数据和属性
server.on("request", (req) => {
  // req.url 是客户端请求的url 地址
  const url = req.url;

  // req.method 是客户端的 method类型 gte 或者
  const method = req.method;

  console.log(`${url}+${method}`); // 操作浏览器拿到数据
});

server.listen(80, () => {
  console.log("http:/127.0.0.1");
});
