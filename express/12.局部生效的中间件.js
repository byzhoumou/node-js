// 不使用 app.use（) 定义的中间件，叫做局部生效的中间件，示例代码如下:
// 导入express
const express = require("express");

// 创建web服务器
const app = express();

// 定义中间件函数
const mw = (req, res, next) => {
  console.log("调用了局部生效的中间件 Hollo");
  next();
};

// 创建路由   第二个参数使用中间件  这样的写法只当前调用的中间件的路由中使用 也就是局部使用个的中间件
app.get("/", mw, (req, res) => {
  res.send("Hollo");
});

app.get("/user", (req, res) => {
  res.send("Hollo user");
});

// 启动服务器
app.listen(80, () => {
  console.log("服务器启动成功");
});

// 可以在路由中，通过如下两种等价的方式，使用多个局部中间件:
// const mw2 = (req, res, next) => {
//   console.log("调用了局部生效的中间件 Hollo 222");
//   next();
// };
// app.get("/", mw, mw2, (req, res) => {
//   res.send("Hollo");
// });
// app.get("/", [mw, mw2], (req, res) => {
//   res.send("Hollo");
// });

// 找重点注意事项
// 1.一定要在路由之前注册中间件   (代码是按顺序执行的)

// 2.客户端发送过来的请求，可以连续调用多个中间件进行处理

// 3.执行完中间件的业务代码之后，不要忘记调用 next()函数

// 4.为了防止代码逻辑混乱，调用 next0函数后不要再写额外的代码

// 5.连续调用多个中间件时，多个中间件之间，共享req和res对象
