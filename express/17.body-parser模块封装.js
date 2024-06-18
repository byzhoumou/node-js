const qs = require("querystring");

// 封装模块
const bodyParser = (req, res, next) => {
  // 定义中间件的业务逻辑
  //1. 定义一个str字符串，专门存储客户端发送过来的请求体数据
  let str = "";
  //   2.监听req 的Data事件  on()方法
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
    // console.log(body);
  });
};

// 导出函数给16使用
module.exports = bodyParser;
