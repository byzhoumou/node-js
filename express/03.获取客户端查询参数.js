const express = require("express");

const app = express();

app.get("/", (req, res) => {
  // 通过 req.query 可以获取到客户端发送过来的 查询参数
  // 注意一般情况下，req.query是一个空对象
  res.send(req.query);
  console.log(req.query);
});

app.listen(80, "127.0.0.1", () => {
  console.log("服务器启动成功，访问地址：http://127.0.0.1");
});

// 浏览器请求这个地址
// http://127.0.0.1/?name=zs&age=20
