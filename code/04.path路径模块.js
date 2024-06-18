// 导入模块 用来处理路径
const path = require("path");

// 使用path.join()方法，可以吧多个路径片段拼接为完整的路劲字符串
// 示例、  ../ 会=抵消前面的路径
const pathStr = path.join("/a", "/b/c", "../", "./d", "e");
console.log(pathStr); // 输出/a/b/d/e

// 用+号不怎么好用这个方法  path.join(__dirname, "./files/1.text");
const ppathStr2 = path.join(__dirname, "./files/1.text");
console.log(ppathStr2); // 输出当前文件所处目录D:\node.js基础\code\files\1.text
