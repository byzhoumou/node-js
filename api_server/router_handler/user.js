// 抽离用户路由模块中的处理函数的文件、

// 导入数据库模块
const db = require("../db/index");

// 导入密码加密包 npm install bcryptjs
const bcrypt = require("bcryptjs");
//用这个包来生成 Token 字符串   npm i jsonewebtoken@8.5.1
const jwt = require("jsonwebtoken");
// 导入token 秘钥 全局的配置文件
const config = require("../config");
// 注册新用户的处理函数
exports.regUser = (req, res) => {
  //获取客户端提交到服务器的用户信息
  const userinfo = req.body;

  //   判断用户名或者密码是否为空
  // if (!userinfo.username || !userinfo.password)
  //   return res.send({ status: 1, message: "用户名或密码不合法!" });

  // 定义SQL语句,查询用户名是否被占用
  const sqlStr = "select * from ev_users where username=?";
  db.query(sqlStr, userinfo.username, (err, results) => {
    //执行SQL 语句成功
    if (err) {
      // return res.send({ status: 1, message: err.message }) 这里是使用app.js里面封装的res.cc中间件;
      return res.cc(err);
    }
    // 判断用户名是否被占用
    if (results.length > 0) {
      // return res.send({ status: 1, message: "用户名被占用，请更换其他用户名" });
      return res.cc("用户名被占用，请更换其他用户名");
    }
    //调用bcrypt.hashSync()对密码进行加密
    userinfo.password = bcrypt.hashSync(userinfo.password, 10);
    // 定义插入用户的SQL语句
    const sql = "insert into ev_users set ?";
    // 调用da.query 执行SQL语句， 插入新用户
    db.query(
      sql,
      { username: userinfo.username, password: userinfo.password },
      function (err, results) {
        // 执行SQL 语句失败
        // if (err) return res.send({ status: 1, message: err.message });
        if (err) return res.cc(err);
        //SQL 语句执行，但影响行数不1
        if (results.affectedRows !== 1) {
          // return res.send({ status: 1, message: "注册用户失败，请稍后再试" });
          return res.cc("注册用户失败，请稍后再试");
        }
        // 注册成功
        // res.send({ status: 0, message: "注册成功" });
        return res.cc("注册成功!", 0);
      }
    );
  });
};

// 登录登录的处理函数
exports.login = (req, res) => {
  // 接收表单数据
  const userinfo = req.body;

  // 定义SQL 查询语句
  const sql = "select * from ev_users where username=?";
  // 执行SQl 语句，根据用户名查询
  db.query(sql, userinfo.username, (err, results) => {
    // 执行SQl 语句失败
    if (err) return res.cc(err);
    // 执行SQl 语句成功 ，但是获取到的数据不等于 1
    if (results.length !== 1) return res.cc("登录失败!");

    //拿着用户输入的密码，和数据库中存储的密码进行对比 bcrypt.compareSync(用户提交的密码，数据库中的密码) 这个方法
    const compareResult = bcrypt.compareSync(
      userinfo.password,
      results[0].password
    );

    // 如果对比的结果等于 false，则证明用户输入的密码错误
    if (!compareResult) return res.cc("登录失败!");

    //T0D0:登录成功，生成Token 字符串
    const user = { ...results[0], password: "", user_pic: "" };

    // 对用户的信息进行加密，生成 Token 字符串
    const tokenStr = jwt.sign(user, config.jwtSecretKey, {
      expiresIn: config.expiresIn,
    });

    // 调用 res.send()将Token 响应给客户端
    res.send({
      status: 0,
      message: "登录成功!",
      token: "Bearer " + tokenStr, // "Bearer "这里必须有个一空格
    });
  });
};
