// 1.了解 Session 认证的局限性
// Session 认证机制需要配合 Cookie 才能实现。由于 Cookie 默认不支持跨域访问，所以，当涉及到前端跨域请求后端接口的时候，需要做很多额外的配置，才能实现跨域 Session 认证。
// 注意:
// 当前端请求后端接口不存在跨域问题的时候，推荐使用 Session 身份认证机制。

// 2.什么是 JWT
// JWT(英文全称:JSON Web Token)是目前最流行的跨域认证解决方案，

// 总结:用户的信息通过 Token 字符串的形式，保存在客户端浏览器中。服务器通过还原 Token 字符串的形式来认证用户的身份。

// JWT 通常由三部分组成，分别是Header(头部)、Payload(有效荷载)、Signature(签名)三者之间使用英文的“.”分隔，格式如下:
// 1 Header.Payload.Signature

// 6.JWT 的三个部分各自代表的含义
// JWT的三个组成部分，从前到后分别是 Header、Payload、Signature。其中:
// Payload 部分才是真正的用户信息，它是用户信息经过加密之后生成的字符串。
// Header 和 Signature 是安全性相关的部分，只是为了保证 Token 的安全性。

// 7.JWT 的使用方式
// 客户端收到服务器返回的JWT 之后，通常会将它储存在 localStorage 或 sessionStorage 中。
// 此后，客户端每次与服务器通信，都要带上这个T的字符串，从而进行身份认证。推荐的做法是把JWT 放在 HTTP请求头的 Authorization 字段中，格式如下:
// 1 Authorization:Bearer <token>

// 1.安装 JWT 相关的包
// 运行如下命令，安装如下两个JT 相关的包:
// 1 npm install jsonwebtoken express-jwt
// 其中:
// jsonwebtoken 用于生成JWT 字符串
// express-jwt 用于将JWT 字符串解析还原成 JSON 对象

// __________________________________________________________

// 3.定义 secret 密钥
// 为了保证 JT 字符串的安全性，防止 JWT 字符串在网络传输过程中被别人破解，我们需要专门定义一个用于加密和解密的 secret 密钥:
//  当生成 JT 字符串的时候，需要使用 secret 密钥对用户的信息进行加密，最终得到加密好的JWT 字符串
// 当把 J\T 字符串解析还原成 JSON 对象的时候，需要使用 secret 密钥进行解密
1; // 3.secret 密钥的本质:就是一个字符串
// 2 const secretKey = 'itheima No1 ^_^'

// __________________________________________________________________________________

// 导入express
const express = require("express");

// 创建web服务器
const app = express();
// 安装并导入JWT 相关的两个包，分别是  jsonwebtoken express-jwt
const jwt = require("jsonwebtoken");
const expressJWT = require("express-jwt");

// 定义 secret密钥，建议将密钥命名为 secretKey
const secretKey = "itheima No1 ^_^";

// 4.在登录成功后生成 JWT 字符串
// 在登录成功之后，调用 jwt.sign()方法生成 JWT 字符串。并通过 token 属性发送给客户端
// 参数1:用户的信息对象
// 参数2:加密的秘钥
// 参数3:配置对象，可以配置当前 token 的有效期
const token = jwt.sign({ username: userinfo.username }.secretKey, {
  expiresIn: "30s",
});

// 5.将 JWT 字符串还原为 JSON 对象
// 客户端每次在访问那些有权限接口的时候，都需要主动通过请求头中的 Authorization 字段，将 Token 字符串发送到服务器进行身份认证。
// 此时，服务器可以通过 express-jwt 这个中间件，自动将客户端发送过来的 Token 解析还原成 JSON 对象:
//使用 app.use()来注册中间件
//expressJWT({ secret:secretKey })就是用来解析 Token 的中间件
//.unless({ path:[/^\/api\//]})用来指定哪些接口不需要访阋权限
// /注意:只要配黄成功了expres.iwt 这个中间件，就可以把解析出来的用户信息，挂载到req.user 属性上
app.use(expressJwT({ secret: secretKey }).unless({ path: [/^\/api\//] }));

// 7.捕获解析 JWT 失败后产生的错误
// 当使用 express-jwt 解析 Token 字符串时，如果客户端发送过来的 Token 字符串过期或不合法，会产生一个解析失败的错误，影响项目的正常运行。我们可以通过 Express 的错误中间件，捕获这个错误并进行相关的处理，示例代码如下:
app.use((err, req, res, next) => {
  // token 解析失败导致的错误
  if (err.name === "UnauthorizedError") {
    return res.send({ status: 401, message: "无效的token" });
    //其它原因导致的错误
    res.send({ status: 500, message: "未知错误" });
  }
});
