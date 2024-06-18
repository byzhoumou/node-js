// 导入模块 用来处理路径
const path = require("path");
// 使用path.basename()方法，可以从一个文件路径中，获取到文件的名称部分
const fpath = "a/b/c/index.html";
var fullName = path.basename(fpath);
console.log(fullName); // 输出index.html

// 这个方法接收第二个参数 会把接收到的扩展名删除
var nameWithputExt = path.basename(fpath, ".html");
console.log(nameWithputExt); // 输出index

// 获取路径中的文件扩展名;
// 方法 path.extname()
// 示例;
const fpath2 = "a/b/c/index.html";
var fext = path.extname(fpath2);
console.log(fext); // 输出.html
