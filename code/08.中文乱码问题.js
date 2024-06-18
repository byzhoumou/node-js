// 导入http模块
const http = require("http");

// 创建web 服务器实例
const server = http.createServer();

server.on("request", (req, res) => {
  //  定义一个字符串，包含中文的内容
  const str = `您的请求 URL 地址是${req.url} ,请求的${req.method}`;

  // 调用res.setHeader()方法，设置Content-type 响应头，解决中文乱码的问题
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  //  调用end()方法把响应内容发送给客户端
  res.end(str);
});

server.listen(80, () => {
  console.log("http:/127.0.0.1");
});
