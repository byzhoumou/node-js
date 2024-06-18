// 导入express
const express = require("express");

// 创建web服务器
const app = express();

// 监听请求get请求
app.get("/user", (req, res) => {
  //通过res.send()方法，可以吧处理好的内容，发送给客户  格式JSON对象
  res.send({ string: "你好" });
});

// 监听请求post请求
// app.post("请求url", (req, res) => {});

// 启动服务器
app.listen(80, "127.0.0.1", () => {
  console.log("服务器启动成功，访问地址：http://127.0.0.1:3000/user");
});
