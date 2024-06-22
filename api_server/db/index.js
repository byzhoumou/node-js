// 这里是链接数据库的

// 导入mysql 模块
const mysql = require("mysql");
// 创建数据库连接对象
const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "267608",
  database: "my_db_01",
});

// 向外共享db数据库连接对象
module.exports = db;
