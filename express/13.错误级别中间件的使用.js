// 3.错误级别的中间件
// 错误级别中间件的作用:专门用来捕获整个项目中发生的异常错误，从而防止项目异常崩溃的问题。
// 格式:错误级别中间件的 function 处理函数中，必须有4个形参，形参顺序从前到后，分别是(er,req,res,next)。

// 注意：错误级别的中间件必须注册在所有路由之后

// 导入express
const express = require("express");

// 创建web服务器
const app = express();

// 1.定义路由
app.get("/", (req, res) => {
  //1.1 人为的制造错误
  throw new Error("服务器内部发生了错误!");
  res.send("Home page.");
});

// 2.定义错误级别的中间件，捕获整个项目的异常错误，从而防止程序的崩溃
app.use(function (err, req, res, next) {
  console.log("发生了错误" + err.message);
  res.send("Error:" + err.message);
});

// 启动服务器
app.listen(80, () => {
  console.log("服务器启动成功");
});
