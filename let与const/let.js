`1、let 命令`;

`a只在块级作用域有效`;
// {
//   let a = 10;
//   var b = 1;
// }
// console.log(a); // ReferenceError: a is not defined
// console.log(b);

`i只在for循环体内有效，在循环体外引用就会报错`;
// for(let i = 1; i < 10; i++){
//   //...  
// }
// console.log(i); // ReferenceError: i is not defined

`var申明的i在全局返回有效`;
// var a = [];
// for (var i = 0; i < 10; i++) {
//   a[i] = function () {
//     console.log(i);
//   };
// }
// a[6](); //  10

`变量i是let声明的，当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量，
  所以最后输出的是6。你可能会问，如果每一轮循环的变量i都是重新声明的，那它怎么知道上一轮循环的值，
  从而计算出本轮循环的值？这是因为 JavaScript 引擎内部会记住上一轮循环的值，
  初始化本轮的变量i时，就在上一轮循环的基础上进行计算。`;
// var a = [];
// for (let i = 0; i < 10; i++) {
//   a[i] = function () {
//     console.log(i);
//   };
// }
// a[6](); // 6

`for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，
而循环体内部是一个单独的子作用域。`;
// for (let i = 0; i < 3; i++) {
//   let i = 'abc';
//   console.log(i);
// }

`只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。`;
// var tmp = 123;
// if (true) {
//   tmp = 'abc'; // ReferenceError: tmp is not defined
//   let tmp;
// }

`“暂时性死区”也意味着typeof不再是一个百分之百安全的操作。`;
// console.log(typeof x); // ReferenceError: x is not defined
// let x;

// // 不报错
// var x = x;
// // 报错
// let x = x; // ReferenceError: x is not defined

`2、块级作用域`;

`变量提升，导致内层的tmp变量覆盖了外层的tmp变量。`;
// var tmp = new Date();
// function f() {
//   console.log(tmp);
//   if (false) {
//     var tmp = 'hello world';
//   }
// }
// f(); // undefined

`i泄露为全局变量`;
// var s = 'hello';
// for (var i = 0; i < s.length; i++) {
//   console.log(s[i]);
// }
// console.log(i); // 5

`避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。`;

function f() { console.log('I am outside!'); }
(function () {
  if (false) {
    // 重复声明一次函数f
    function f() { console.log('I am inside!'); }
  }
  f();
}());

// // 浏览器的 ES6 环境 实际
// function f() { console.log('I am outside!'); }
// (function () {
//   var f = undefined;
//   if (false) {
//     function f() { console.log('I am inside!'); }
//   }
//   f();
// }());
// Uncaught TypeError: f is not a function