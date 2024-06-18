// 多个中间件之间，共享同一份 req 和 res。基于这样的特性，我们可以在上游的中间件中，
// 统一为 req 或 res 对象添加自定义的属性或方法，供下游的中间件或路由进行使用。

const express = require("express");
//1 导入express

const app = express();

app.use(function (req, res, next) {
  // 获取到请求到达服务器的时间
  const time = Date.now();
  //   为req对象，挂载自定义的属性，从而把时间共享给后面的所有路由
  req.startTime = time;
  next();
});

app.get("/", (req, res) => {
  // 使用挂载再中间件上的时间对象
  res.send("这是get请求" + req.startTime);
});

app.post("/user", (req, res) => {
  res.send("这是post请求" + req.startTime);
});

app.listen(80, () => {
  console.log("启动成功");
});

// 多个中间件的示例   就是可以重复
// app.use(function (req, res, next) {
//   console.log("第一个中间件");
//   next();
// });
// app.use(function (req, res, next) {
//   console.log("第二个中间件");
//   next();
// });
