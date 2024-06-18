// 在每个.js自定义模块中都有一个模块对象，它里面存储了和当前模块有关的信:

// 在自定义模块中，可以使用 module.exports 对象，将模块内的成员共享出去，供外界使用。
// 使用module.exports 导出内容
module.exports.username = "张三";

//向 module.exports 导出 sayHello 方法
module.exports.sayHello = function () {
  console.log("Hello");
};

// 这里有三个导出但是这里只会指向下面的全新的对象
// 让module.exports ，指向一个全新的对象
module.exports = {
  nickname: "小黑",
  sayHi() {
    console.log("Hi!");
  },
};

//导出的简化 就是vue3里面的exports
// exports === module.exports   true
