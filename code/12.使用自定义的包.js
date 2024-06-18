// 导入自定义的包    这里的不写" /index.js是应为包里的package 文件中有这个路径"main": "index.js",,
const itheima = require("./create-package");

// 使用格式化时间的功能
const dtStr = itheima.dateFormat(new Date());
console.log(dtStr);
