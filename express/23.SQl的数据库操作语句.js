// 1.语法
// 查询
// SELECT 语句用于从表中查询数据。执行的结果被存储在一个结果表中(称为结果集)。语法格式如下:
// 这是注释
// 2-- 从 FROM 指定的【表中】，查询出【所有的】数据。 *表示【所有列】
// 3 SELECT * FROM 表名称
// 5-- 从 FROM 指定的【表中】，查询出指定 列名称(字段) 的数据。
// 6 SELECT 列名称 FROM 表名称

// 使用 *号查询users表中的所有数据
// select * from users

// --从users 表中把 username 和 password 对应的数据查询出来
// select username,password from users

// 2.新增
// INSERT INTO 语句用于向数据表中插入新的数据行，
// 语法格式如下:
// 1--语法解读:向指定的表中，插入如下几列数据，列的值通过 values--指定2--
// 注意: 列和值要--对应，多个列和多个值之间，使用英文的逗号分隔
// 3 INSERT INTo table_name(列1，列2,...)VALUES(值1，值2,....)
// 这是插入语法： INSERT INTo urs(username,password) values ('tony stark','098123')

// 3.修改
// Update 语句用于修改表中的数据。语法格式如下:
// 1--语法解读:
// 2--1.用 UPDATE 指定要更新哪个表中的数据
// 3--2.用 SET 指定列对应的新值
// 4--3.用 WHERE 指定更新的条件
// 5 UPDATE 表名称 SET 列名称 = 新值 WHERE 列名称 = 某值

// 下面WHERE更新条件得加不加的话会把所有的密码更新为8888
// UPDATE users SET password='888888'WHERE id=4

// 把 users 表中 id 为2的用户密码和用户状态，分别更新为 admin123 和1。示例如下:  这是更新一行的多个列
// UPDATE users SET password='admin123', status=1 WHERE id=2;

// 删除
// DELETE 语句用于删除表中的行。语法格式如下:
// 1-- 语法解读:
// 2-- 从指定的表中，根据 WHERE 条件，删除对应的数据行
// 3 DELETE FROM 表名称 WHERE 列名称 = 值
// 删除 users 表中，id为4的用户
// delete from users where id=4

// ------------------------------------------
// 重点（where） 操作数据库这的字段命令重点查看  删除操作不加就是删库跑路
// 1 SQL 的 WHERE 子句
// WHERE 子句用于限定选择的标准。在 SELECT、UPDATE、DELETE 语句中，皆可使用 WHERE 子句来限定选择的标准,
// 下面这些是条件：限定条件 如果不加WHERE 就是操作整个表
// 1--查询语句中的 WHERE 条件
// 2 SELECT 列名称 FROM 表名称 WHERE 列 运算符 值
// 3--更新语句中的 WHERE 条件
// 4 UPDATE 表名称 SET 列=新值 WHERE 列 运算符 值
// 5-- 删除语句中的 WHERE 条件
// 6 DELETE FROM 表名称 WHERE 列 运算符 值

// 2.可在 WHERE 子句中使用的运算符
// 下面的运算符可在 WHERE 子句中使用，用来限定选择的标准:
//  =      等于
//  <>    不等于  也可以使用 ！=
//  >       大于
//  <       小于
//  >=        大于等于
//  <=       小于等于
//  BETWEEN   在某个范围内
//  LIKE      搜索某种模式

// WHERE 子句的使用示例；
//  查询 users表 状态（status）等于1 的用户
// select * from users where status=1

// 1 .SQL 的 AND 和 OR 运算符
// 1.语法
// AND 和 OR 可在 WHERE 子语句中把两个或多个条件结合起来,
// AND 表示必须同时满足多个条件，相当于 JavaScript 中的 && 运算符，例如 if(a!== 10 &&a!== 20)
// OR 表示只要满足任意一个条件即可，相当于 JavaScript 中的‖运算符，例如 if(a!== 10‖a!== 20)
// 2.AND 运算符示例:
// 使用 AND 来显示所有 status 为 0，并且 id 小于 3的用户:
// // SELECT *FROM users WHERE status=0 AND id<3
// 3.OR 运算符示例:
// 使用 OR 来显示所有 status为1，或者 username 为 zs 的用户:
// // SELECT *FROM users WHERE status=1 OR username='zs'

// ___________________________________________________________
// 1. SQL 的 ORDER BY 子句
// 1.语法
// ORDER BY 语句用于根据指定的列对结果集进行排序。
// ORDER BY 语句默认按照升序对记录进行排序。
// 如果您希望按照降序对记录进行排序，可以使用 DESC 关键字
// 默认是升序

// 2.ORDER BY 子句-升序排序 ASC是升序关键字可以省略
// 对 users 表中的数据，按照 status 字段进行升序排序，示例如下:
// select * from users order by status

// 3.ORDER BY 子句-降序排序
// 对 users 表中的数据，按照 id 字段进行降序排序，示例如下:
// select * from users order by id desc

// 4.ORDER BY 子句-多重排序
// 对 users 表中的数据，先按照 status 字段进行降序排序，再按照 username 的字母顺序，进行升序排序，示例如下:
// select *from users order by status desc, username asc
// _________________________________________________________

// 1. SQL 的 COUNT(*)函数
// 1.语法
// COUNT(*)函数用于返回查询结果的总数据条数，语法格式如下:
// 1 SELECT COUNT(*)FROM 表名称
// 使用 count(*)来统计 users 表中，状态为 0 用户的总数量
// select count(*)from users where status=0

// .2.使用 AS 为列设置别名  默认别名是COUNT(*) 用as 起别名为total
// 如果希望给查询出来的列名称设置别名，可以使用 AS 关键字，示例如下:
// select count(*)as total from users where status=0
