// 3.Express 中间件的调用流程
// 当一个请求到达 Express 的服务器之后，可以连续调用多个中间件，从而对这次请求进行预处理

const express = require("express");
const app = express();

//常量 mw 所指向的，就是一个中间件函数
const mw = function (req, res, next) {
  console.log("这是一个最简单的中间件函数");
  //注意:在当前中间件的业务处理完毕后，必须调用 next()函数
  //表示把流转关系转交给下一个中间件或路由
  next();
};

app.listen(80, () => {
  console.log("启动成功");
});

// 客户端发起的任何请求，到达服务器之后，都会触发的中间件，叫做全局生效的中间件。
// 通过调用 app.use(中间件函数)，即可定义一个全局生效的中间件，示例代码如下:

// 将mw注册为全局生效的中间件
app.use(mw);

// 简化写法
app.use(function (req, res, next) {
  console.log("这是一个最简单的中间件函数");
  next();
});

// 多个中间件之间，共享同一份 req 和 res。基于这样的特性，我们可以在上游的中间件中，统一为 req 或 res 对象添加自定义的属性或方法，供下游的中间件或路由进行使用。
