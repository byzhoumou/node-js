// 这是路由模块  （这个文件跟08文件一同使用）

//1 导入express
const express = require("express");

// 2创建路由对象
const router = express.Router();

// 3挂载具体的路由

router.get("/user/list", (req, res) => {
  res.send("这是get请求");
});

router.post("/user/add", (req, res) => {
  res.send("这是post请求");
});

// 4向外导出路由对象
module.exports = router;
