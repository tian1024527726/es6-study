'use strict';
`1、const 命令`;

`const声明一个只读的常量。一旦声明，常量的值就不能改变。`;
// const PI = 3.1415; 
// console.log(PI) // 3.1415
// PI = 3; // TypeError: Assignment to constant variable.

`const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。`;
// const foo; // SyntaxError: Missing initializer in const declaration

`const声明的常量，也与let一样不可重复声明。`;
// var message = "Hello!";
// let age = 25;
// 以下两行都会报错
// const message = "Goodbye!"; // SyntaxError: Identifier 'message' has already been declared
// const age = 30; // SyntaxError: Identifier 'age' has already been declared

`const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。
对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。
但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，
const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，
就完全不能控制了。因此，将一个对象声明为常量必须非常小心。`;
// const arr = [1,2];
// arr[0] = 3;
// console.log(arr);
// arr = [1,5]; // TypeError: Assignment to constant variable.

`如果真的想将对象冻结，应该使用Object.freeze方法`;
// const foo = Object.freeze({});
// // 常规模式时，下面一行不起作用；
// // 严格模式时，该行会报错
// foo.prop = 123; // TypeError: Cannot add property prop, object is not extensible

`将对象本身冻结，对象的属性也应该冻结。下面是一个将对象彻底冻结的函数。`;
//通过递归函数处理
// let constantize = (obj) => {
//   Object.freeze(obj);
//   Object.keys(obj).forEach((key, i) => {
//     if (typeof obj[key] === 'object') {
//       constantize(obj[key]);
//     }
//   });
// };
// const obj = {a:{b:1}};
// constantize(obj);
// obj.a.b = 2; // TypeError: Cannot assign to read only property 'b' of object '#<Object>'


`ES6 声明变量的六种方法`;
// var fn = function () { };
// function fn() { };
// let fn = function () { };
// const fn = function () { };
// import fn from 'fn';
// class fn { };

`顶层对象属性---->顶层对象，在浏览器环境指的是window对象，在 Node 指的是global对象。`;
`
1、浏览器里面，顶层对象是window，但 Node 和 Web Worker 没有window。
2、浏览器和 Web Worker 里面，self也指向顶层对象，但是 Node 没有self。
3、Node 里面，顶层对象是global，但其他环境都不支持。`;

`顶层对象的属性与全局变量挂钩，被认为是 JavaScript 语言最大的设计败笔之一。`;
`这样的设计带来了几个很大的问题:
  1、首先是没法在编译时就报出变量未声明的错误，只有运行时才能知道（因为全局变量可能是顶层对象的属性创造的，而属性的创造是动态的）
  2、程序员很容易不知不觉地就创建了全局变量（比如打字出错）
  3、顶层对象的属性是到处可以读写的，这非常不利于模块化编程
  4、window对象有实体含义，指的是浏览器的窗口对象，顶层对象是一个有实体含义的对象，也是不合适的
`;

// var a = 1;
// console.log(global.a); // undefined;
// let b = 2;
// console.log(global.b); // undefined;
// 严格模式会报错
// c = 1;
// console.log(global.c); // ReferenceError: c is not defined 

`垫片库system.global模拟了这个提案，可以在所有环境拿到global。`;

// // CommonJS 的写法
// require('system.global/shim')();
// // ES6 模块的写法
// import shim from 'system.global/shim'; shim();




