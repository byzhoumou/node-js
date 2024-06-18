// 导入express
const express = require("express");
// 创建web服务器
const app = express();

// 配置解析URL-encoded格式数据的中间件
app.use(express.urlencoded({ extended: true }));
// 一定要在路由之前，配置cors这个中间件，从而解决接口跨域的问题
const cors = require("cors");
// 全局挂载
app.use(cors());

// 导入路由模块
const router = require("./19.apiRouter");

// 把路由模块注册到app上
app.use("/api", router);

// 启动服务器
app.listen(80, () => {
  console.log("服务器启动成功");
});
