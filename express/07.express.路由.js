//  3.Express 中的路由
// 在 Express 中，路由指的是客户端的请求与服务器处理函数之间的映射关系
// ,Express 中的路由分3部分组成，分别是请求的类型、请求的 URL 地址、处理函数，格式如下:
// 路由 由3各部分组成 请求的类型  请求的路径 和处理函数
// app.请求类型（get）('请求路径',处理函数)

// 路由使用示例
// 导入路由
const express = require("express");
// 创建web 服务器，命名为app
const app = express();

// 挂载路由 到app上
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/", (req, res) => {
  res.send("Hello world");
});

// 启动服务器
app.listen(80, () => {
  console.log("启动成功");
});
