const express = require("express");
const app = express();

// 导入路模块
const router = require("./09.路由模块router");

// 注册路由模块
app.use(router);
// 注意 app.use()函数的作用，就是来注册全局中间件

// 添加统一的访问前缀
// app.use('/api', router);

// 启动服务器
app.listen(80, () => {
  console.log("启动成功");
});
