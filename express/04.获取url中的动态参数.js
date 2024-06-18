const express = require("express");

const app = express();

// 注意这里的id是一个动态的参数
// 这里的的id名称可以随意起
app.get("/user/:id", (req, res) => {
  // req.params是动态匹配到的url 参数，默认也是空对象
  console.log(req.params);
  res.send(req.params);
});

app.listen(80, "127.0.0.1", () => {
  console.log("服务器启动成功，访问地址：http://127.0.0.1");
});

// 浏览器请求这个地址
// http://127.0.0.1/user/100

//  重点：通过 req.params 对象，可以访问到 URL中，通过:匹配到的动态参数:

// 重点：这里的参数可以多个动态参数
// app.get("/user/:id/:name", (req, res) => {
//   console.log(req.params);
//   res.send(req.params);
// });
