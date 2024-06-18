// 这是包的入口文件
//定义格式化时间的函数
function dateFormat(dateStr) {
  const dt = new Date(dateStr);

  const y = padZero(dt.getFullYear());
  const m = padZero(dt.getMonth() + 1);
  const d = padZero(dt.getDate());

  const hh = padZero(dt.getHours());
  const mm = padZero(dt.getMinutes());
  const ss = padZero(dt.getSeconds());

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
}

// 定义一个补0函数
function padZero(n) {
  return n > 9 ? n : "0" + n;
}

// 导出函数
module.exports = { dateFormat };

// 把上面代码拆分到src文件夹里去
// 然后导入这个文件我们需要用展开运算符号再次导出供别的组件使用
// 应为index.js才是对位的入口文件
// module.exports = { ...dateFormat };
