const express = require("express");

const app = express();
// 在这里，调用 express.static()方法，快速的对外提供静态资源
// 这个括号里的路径是指定一个文件为静态资源目录
// 这里的的路径不会出现在访问路径中
app.use(express.static("/user"));
// 重点： 挂载访问前缀
// app.use('/user'，express.static("user"));
// http://localhost/user/css/style.css

app.listen(80, "127.0.0.1", () => {
  console.log("服务器启动成功，访问地址：http://127.0.0.1");
});
// express 提供了一个非常好用的函数，叫做 express.static0，通过它，我们可以非常方便地创建一个静态资源服务器例如，通过如下代码就可以将 public 目录下的图片、CSS 文件、JavaScript 文件对外开放访问了:
// 注意:Express 在指定的静态目录中查找文件，并对外提供资源的访问路径因此，存放静态文件的目录名不会出现在 URL 中。

// 这个静态资源指的是放css js html 的地方

// 现在，你就可以访问 public 目录中的所有文件了
// http://localhost/images/bg.jpg
// http://localhost/css/style.css
// http://localhost/js/login.js

// 托管多个静态资源目录的话 多次调用express.static("/user")
