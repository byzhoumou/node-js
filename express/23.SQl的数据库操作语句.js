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

// 重点（where） 操作数据库这的字段命令重点查看  删除操作不加就是删库跑路
