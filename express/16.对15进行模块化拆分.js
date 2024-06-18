// 导入express
const express = require("express");

// 创建web服务器
const app = express();

// 导入17封装的中间件模块    路径导入
const customBodyParser = require("./17.body-parser模块封装");

// 将自定义的中间件注册为可用的中间件
app.use(customBodyParser);

app.post("/user", (req, res) => {
  res.send(req.body);
});

// 启动服务器
app.listen(80, () => {
  console.log("服务器启动成功");
});
