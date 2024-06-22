// 导入express
const express = require("express");

// 创建web服务器实例对象
const app = express();
// 导入定义验证规则的包
const joi = require("joi");
// 导入cors中间件  这个用来跨域的   安装包npm install cors@2.8.5
const cors = require("cors");
// 将cors注册为全局中间件
app.use(cors());
// 配置解析表单数据的中间件
// 1.通过如下的代码，配置解析 application/x-wmw-form-urlencoded 格式的表单数据的中间件:
app.use(express.urlencoded({ extended: false }));
// 配置解析 JSON 格式的请求体数据
app.use(express.json());

//封装res.cc中间件 用于解决重复调用res.seng（）的问题
app.use((req, res, next) => {
  // status 默认值为1 ，表示失败的情况
  // err 的值，可能是一个错误对象，也可能是一个错误的描述字符串
  res.cc = function (err, status = 1) {
    res.send({
      status,
      // 响应消息，如果 err 是 Error 对象，则使用 err.message，否则直接使用 err
      message: err instanceof Error ? err.message : err,
    });
  };
  next();
});

// 一定要在路由之前配置解析 token 的中间件
// 导入解析token的中间件  npm i express-jwt@.5.3.3
const expressJWT = require("express-jwt");
// 导入token 秘钥 全局的配置文件
const config = require("./config");
//使用.unless({path:[/^\/api\//]})指定哪些接口不需要进行 Token 的身份认证
app.use(
  expressJWT({
    secret: config.jwtSecretKey, // 配置密钥，用于验证 JWT 的签名
  }).unless({ path: [/^\/api\//] }) // 配置例外路径，这里的正则表达式表示以 /api/ 开头的路径将被排除在 JWT 验证之外
);

// 导入并注册路由模块
const userRouter = require("./router/user");
app.use("/api", userRouter);

// 定义错误级别的中间件
app.use((err, req, res, next) => {
  //数据验证失败
  if (err instanceof joi.ValidationError) return res.cc(err);
  //身份认证失败后的错误
  if (err.name === "UnauthorizedError") return res.cc("身份验证失败");
  //未知错误
  res.cc(err);
});

// 启动服务器
app.listen(3007, () => {
  console.log("服务器启动成功 http://127.0.0.1:3007");
});
