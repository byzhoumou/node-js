// 导入定义验证规则的包    npm install joi
const Joi = require("joi");

// 定义用户名和密码的验证规则
const username = Joi.string().alphanum().min(1).max(10).required();
const password = Joi.string()
  .pattern(/^[\S]{6,12}$/)
  .required();

//定义 1d，nickname，email 的验证规则
const id = Joi.number().integer().min(1).required();
const nickname = Joi.string().required();
const email = Joi.string().email().required();

// 定义验证注册和登录表单数据的规则对象
exports.reg_login_schema = {
  body: {
    username,
    password,
  },
};

//验证规则对象-更新用户基本信息
exports.update_userinfo_schema = {
  body: {
    id,
    nickname,
    email,
  },
};

//验证规则对象-重置密码
exports.update_password_schema = {
  body: {
    //使用 password 这个规则，验证 req.body.oldPwd 的值
    oldPwd: password,
    //使用 jo1.not(jo1.ref('oldPwd')).concat(password)规则，验证 req.body.newPwd 的值
    // 解读:
    //1.jo1.ref('oldPwd')表示 newPwd 的值必须和 oldPwd 的值保持一致
    //2.joi.not(joi.ref('oldPwd'))表示 newPwd 的值不能等于 oldPwd 的值
    //3..concat()用于合并 jon.not(jon.ref('oldPwd'))和 password 这两条验证规则
    newPwd: Joi.not(Joi.ref("oldPwd")).concat(password),
  },
};

// 这是 avatar 头像的验证规则
// dataUri()指的是如下格式的字符串数据:
//data:image/png;base64,VE9PTUFOWVNFQ1JFVFM=
const avatar = Joi.string().dataUri().required();
//验证规则对象-更新头像
exports.update_avatar_schema = {
  body: {
    avatar,
  },
};
