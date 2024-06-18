// 导入fs模块
const fs = require("fs");

// 读取文件 调用fs.readFile（）方法读取文件
// 参数1读取文件的存放路径
// 参数2读取文件的编码格式 一般是 utf8
// 参数3回调函数拿到读取失败和成功的结果
fs.readFile("./files/1.text", "utf8", function (err, data) {
  // 判断是否读到数据
  if (err) {
    // 打印失败
    return console.log("读取失败打印", err);
    // 打印成功
  }
  console.log("读取成功打印", data);
});
