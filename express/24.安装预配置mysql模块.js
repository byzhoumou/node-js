// 1.安装 mysql 模块
// mysql模块是托管于 npm 上的第三方模块。它提供了在 Node.js 项目中连接和操作 MySQL 数据库的能力。想要在项目中使用它，需要先运行如下命令，将 mysql安装为项目的依赖包:
// 1 npm install mysql

// 2.配置 mysql 模块
// 在使用 mysql 模块操作 MySQL 数据库之前，必须先对 mysgl模块进行必要的配置，主要的配置步骤如下:
// 1.导入 mysql 模块
const mysql = require("mysql");
//2.建立与 MySQL 数据库的连接
const db = mysql.createPool({
  host: "127.0.0.1", //数据库的 IP 地址
  user: "root", //登录数据库的账号
  password: "267608", //登录数据库的密码
  database: "my_db_01", //指定要操作哪个数据库
});

// 3.测试 mysql 模块能否正常工作
// 调用 db.query 函数，指定要执行的 SQL语句，通过回调函数拿到执行的结果:
// 检测 mysql 模块能否正常工作
db.query("SELECT 1", (err, results) => {
  if (err) return console.log(err.message);
  //只要能打印出[ RowDataPacket{'1':1}]的结果，就证明数据库连接正常
  console.log(results);
});

// // 1.查询数据
// // 查询 users 表中所有的数据
// //查询 users 表中所有的用户数据
// const sqlStr = "SELECT * FROM users";
// db.query("SELECT * FROM users", (err, results) => {
//   //查询失败
//   if (err) return console.log(err.message);
//   //查询成功
//   //   注意：如果执行的是 SELECT 查询语句则执行的结果是数组
//   console.log(results);
// });

// ————————————————————————————————————————————————————————————————————————————————————————————
// // 2.插入数据
// // 向 users 表中新增数据，其中 username 为 Spider-Man，password 为 pcc321。示例代码如下:
// // 1.要插入到 users 表中的数据对象
// const user = { username: "Spider-Man", password: "pcc321" };
// //2.待执行的 SQL 语句，其中英文的?表示占位符
// const sqlStr2 = "insert into  users (username, password) VALUES (?,?)";
// //3、使用数组的形式，依次为?占位符指定具体的值
// db.query(sqlStr2, [user.username, user.password], (err, results) => {
//   if (err) return console.log(err.message); // 失败
//   // 注意:如果执行的是 insert into 插入语句，则 results 是一个对象
//   // 可以通过 affectedRows 属性，来判断是否插入数据成功
//   if (results.affectedRows === 1) {
//     console.log("插入数据成功"); // 成功
//   }
// });

// // 2.1.插入数据的便捷方式
// // 向表中新增数据时，如果数据对象的每个属性和数据表的字段一一对应，则可以通过如下方式快速插入数据:
// //  1.要插入到 users 表中的数据对象
// const user = { username: "Spider-Man2", password: "pcc4321" };
// //2.待执行的 SQL 语句，其中英文的?表示占位符   这里的set ? 意思是插入前面变量user对像里的全部数据
// const sqlStr3 = "insert into users set ?";
// //3.直接将数据对象当作占位符的值
// db.query(sqlStr3, user, (err, results) => {
//   if (err) return console.log(err.message); // 失败
//   if (results.affectedRows === 1) {
//     console.log("插入数据成功"); // 成功
//   }
// });
// -----------------------------------------------------
// // 4.更新数据
// // 可以通过如下方式，更新表中的数据:
// //1，要更新的数据对象
// const user = { id: 6, username: "aaa", password: "000" };
// // 2.要执行的 SQL 语句
// const sqlStr = "update users set username=?, password=? where id=?";
// //3.调用 db.query()执行 SQL 语句的同时，使用数组依次为占位符指定具体的值6
// db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
//   if (err) return console.log(err.message); // 失败
//   //注意:执行了 update 语句之后，执行的结果，也是一个对象，可以通过 affectedRows 判断是否更新成功
//   if (results.affectedRows === 1) {
//     console.log("更新数据成功!"); // 成功
//   }
// });

// // 4.更新数据的便捷方式
// // 可以通过如下方式，更新表中的数据:
// //1，要更新的数据对象
// const user = { id: 6, username: "aaa", password: "000" };
// // 2.要执行的 SQL 语句  如果用上面的方式更新方式需要写很多字段这里用？号代表user对象里的所有字段
// const sqlStr = "update users set ? where id=?";
// //3.调用 db.query()执行 SQL 语句的同时把user对象放里面指定id来更新数据
// db.query(sqlStr, [user, user.id], (err, results) => {
//   if (err) return console.log(err.message); // 失败
//   //注意:执行了 update 语句之后，执行的结果，也是一个对象，可以通过 affectedRows 判断是否更新成功
//   if (results.affectedRows === 1) {
//     console.log("更新数据成功!"); // 成功
//   }
// });
// --------------------------------------------------------------------------------

// // 1.删除数据
// // 在删除数据时，推荐根据 id 这样的唯一标识，来删除对应的数据。示例如下:
// // 1.要执行的 SQL 语句
// const sqlStr = "DELETE FROM users where id=?";
// //2.调用 db.query()执行 SQL 语创的同时，为占位符指定具体的值
// //注意:如果 SQL 语句中有多个占位符，则必须使用数组为每个占位符指定具体的值
// //  11如果 SQL 语句中只有一个占位符，则可以省略数组
// db.query(sqlStr, 5, (err, results) => {
//   if (err) return console.log(err.message); //失败
//   if (results.affectedRows === 1) {
//     console.log("删除数据成功!"); // 成功8
//   }
// });

// 7.标记删除   推荐使用  防止用户反悔要回复数据
// 使用 DELETE 语句，会把真正的把数据从表中删除掉。为了保险起见，推荐使用标记删除的形式，来模拟删除的动作。
// 所谓的标记删除，就是在表中设置类似于 status 这样的状态字段，来标记当前这条数据是否被删除。当用户执行了删
// 除的动作时，我们并没有执行 DELETE 语句把数据删除掉，而是执行了 UPDATE 语句，将这条数据对应的 status 字段标记为删除即可。
// const sqlStr = "update users set status=? where id=?";
// db.query(sqlStr, [1, 6], (err, results) => {
//   if (err) return console.log(err.message);
//   if (results.affectedRows === 1) {
//     console.log("标记删除成功");
//   }
// });
