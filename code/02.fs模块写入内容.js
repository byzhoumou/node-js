// 导入fs模块
const fs = require("fs");

//  这个方法你重复写入的话新内容会覆盖旧的内容
// 读取文件 调用fs.writeFile（）方法写入文件
// 参数1需要指定一个文件的路劲的字符串，表示文件的存放路径   重点他会创建文件但是不会创建目录
// 参数2 表示要写入的内容
// 参数3读取文件的编码格式 一般是 utf8   这里默认utf8 可以不用写·可以省略
// 参数4回调函数拿到读取失败和成功的结果
fs.writeFile("./files/2.text", "这里是写入的数据", function (err, data) {
  // 判断是否读到数据
  if (err) {
    // 打印失败
    return console.log("写入失败打印", err.message);
    // 打印成功
  }
  console.log("文件写入成功打印");
});
