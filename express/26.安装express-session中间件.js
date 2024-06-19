// 1.安装 express-session 中间件
// 在 Express 项目中，只需要安装 express-session 中间件，即可在项目中使用 Session 认证:
// 1 npm install express-session

// 2.配置 express-session 中间件
// express-session 中间件安装成功后，需要通过 app.use( 来注册 session 中间件，示例代码如下:
// 1.导入 session 中间件
const session = require("express-session");
//2.配置全局 Session 中间件
app.use(
  session({
    secret: "keyboard cat", //secret 属性的值可以为任意字符串
    resave: false, // 固定写法
    saveUninitialized: true, //固定写法
  })
);

// 3.向 session 中存数据
// 当 express-session 中间件配置成功后，即可通过 req.session 来访问和使用 session 对象，从而存储用户的关键信息:

// 解析post 提交过来的表单数据
app.use(express.urlencoded({ extended: false }));

// 登录的 API 接口
app.post("/api/login", (req, res) => {
  // 判断用户提交的登录信息是否真确
  if (req.body.username !== "admin" || req.body.password !== "000000") {
    return res.send({ status: 1, msg: "登录失败" });
  }
  //   将登录成功后的用户信息，保存到session中
  // 注意：只有成功配置了 express-session 这个中间件之后，才能够通过 req 点出来session 这个属性
  req.session.user = req.body; //存储用户的信息
  req.session.islogin = true; //存储用户的登录状态
  res.send({ status: 0, msg: "登录成功" });
});

// 4.从 session 中取数据
// 可以直接从 req.session 对象上获取之前存储的数据，示例代码如下:

// 获取用户姓名的接口
app.get("/api/username", (req, res) => {
  // 判断用户是否登录
  if (!req.session.islogin) {
    return res.send({ status: 1, msg: "fail" });
  }
  res.send({ status: 0, msg: "success", username: req.session.user.username });
});

// 5.清空 session
// 调用 req.session.destroy()函数，即可清空服务器保存的 session 信息。
// 退出登录
app.post("/app/logout", (req, res) => {
  // 清空session 信息
  req.session.destroy();
  res.send({ status: 0, msg: "退出成功" });
});
