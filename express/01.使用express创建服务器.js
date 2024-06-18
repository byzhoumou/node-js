// 导入express
const express = require("express");

// 创建web服务器
const app = express();

// 启动服务器
app.listen(80, () => {
  console.log("服务器启动成功");
});
