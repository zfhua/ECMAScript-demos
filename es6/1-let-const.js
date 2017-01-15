
// let const
// 声明变量
// 所在的代码块内有效;

// let
console.log('let: ---');
let ss = 'hello';
while(true){
  let ss = 'hi, gg';
  console.log(ss);
  break;
}
console.log(ss);
// note:
// ES5  var 只有 全局作用域 和 函数作用域 ,没有块级作用域;
// es6  let 增加 块级作用域 ,用它所声明的变量,只在let命令所在的代码块内有效;


// const
// 声明常量
// 一旦声明，常量的值就不能改变;

// const
console.log('cosnt: ---');
const PI = Math.PI;
PI = 23; //Module build failed: SyntaxError: /es6/app.js: "PI" is read-only
