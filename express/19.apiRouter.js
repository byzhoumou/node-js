// 创建路由模块

//1 导入express
const express = require("express");

// 2创建路由对象
const router = express.Router();

// 这里挂载对应的路由
// get方法
router.get("/get", (req, res) => {
  // 通过 req.query 获取客户端通过查询字符串，发送到服务器的数据
  const query = req.query;

  // 调用 res.send()方法，向客户端响应处理的结果
  res.send({
    status: 0, //0 表示处理成功，1表示处理失败
    msg: "GET 请求成功", // 状态的描述
    data: query, // 需要响应给客户端的数据
  });
});

// post方法
// 注意:如果要获取 URL-encoded 格式的请求体数据，必须配置中间件 app.use(express.urlencoded(lextended: false )
// 这个URL-encoded配置在18文件  应为这个中间件要配置在路由模式之前   参考14文件
router.post("/post", (req, res) => {
  //1.获取客户端通过请求体，发送到服务器的URL-encoded 数据
  const body = req.body;

  // 调用 res.send()方法，向客户端响应处理的结果
  res.send({
    status: 0, //0 表示处理成功，1表示处理失败
    msg: "GET 请求成功", // 状态的描述
    data: body, // 需要响应给客户端的数据
  });
});

// 4向外导出路由对象
module.exports = router;
