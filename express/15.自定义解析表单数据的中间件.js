// 导入express
const express = require("express");

// .使用querystring模块解析请求体数据
// 节点内置了一个查询字符串模块，专门用来处理查询字符串。通过这个模块提供的parse()函数
// 可以轻松把查询字符串，解析成对象的格式。示例代码如下:
1; //导入 Node.js 内置 querystring 的模块
const qs = require("querystring");

// 创建web服务器
const app = express();

// 这世界性表单数的中间件
app.use((req, res, next) => {
  // 定义中间件的业务逻辑
  //1. 定义一个str字符串，专门存储客户端发送过来的请求体数据
  let str = "";
  //   2.监听req 的Data事件  on()方法
  // 这里的额chunk参数是通用的命名  防止请求体过大 一部分一部分的请求数据 数据块（chunk）
  req.on("data", (chunk) => {
    str += chunk;
  });
  //   3.监听req 的end事件
  req.on("end", (chunk) => {
    // 在str 存放的是完整的请求提数据
    console.log(str);
    //将解析出来的请求体对象，挂载为req.body 属性
    //最后，一定要调用 next()函数，执行后续的业务逻辑
    // 调用qs.parse()方法，把查询字符串解析为对象
    const body = qs.parse(str);
    req.body = body;
    next();
    console.log(body);
  });
});

app.post("/user", (req, res) => {
  res.send(req.body);
});

// 启动服务器
app.listen(80, () => {
  console.log("服务器启动成功");
});
