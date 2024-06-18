// 导入fs模块
const fs = require("fs");

// fs.readFile("./files/1.text", "utf8", function (err, data) {
//   // 判断是否读到数据
//   if (err) {
//     // 打印失败
//     return console.log("读取失败打印", err);
//     // 打印成功
//   }
//   console.log("读取成功打印", data);
// });

// 出现路径拼接错误问题是因为提供了./ 或者../开头的路径
// 如果要解决这个问题 可以直接提供完整的文件存放路径
// 这里的斜线要补齐
// 这个方法不好用 不好维护
// fs.readFile(
//   "D:\\node.js基础\\code\\files\\1.text",
//   "utf8",
//   function (err, data) {
//     // 判断是否读到数据
//     if (err) {
//       // 打印失败
//       return console.log("读取失败打印", err);
//       // 打印成功
//     }
//     console.log("读取成功打印", data);
//   }
// );

// 完美解决方案
// ——dirname 表示当前文件所处的目录 就是表示当前文件夹前面的所有目录路径

fs.readFile(__dirname + "files/1.text", "utf8", function (err, data) {
  // 判断是否读到数据
  if (err) {
    // 打印失败
    return console.log("读取失败打印", err);
    // 打印成功
  }
  console.log("读取成功打印", data);
});
