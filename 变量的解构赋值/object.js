`对象的结构赋值`;

`对象的属性没有次序，变量必须与属性同名，才能取到正确的值。`;
// let { foo, bar } = { foo: 'zj', baz: 'xj' };
// console.log(foo, bar);

`解构用于嵌套结构的对象`;
// const node = {
//   loc: {
//     start: {
//       line: 1,
//       column: 5
//     }
//   }
// };

// let { loc, loc: { start }, loc: { start: { line }} } = node;

// console.log(line); // 1
// console.log(loc); // { start: { line: 1, column: 5 }}
// console.log(start); // { line: 1, column: 5 }

`对象的解构指定默认值`;
// let {x: y = 3} = {x: 5};
// var {x: y = 3} = {};
// console.log(y)


` JavaScript 引擎会将{x}理解成一个代码块，从而发生语法错误。
只有不将大括号写在行首，避免 JavaScript 将其解释为代码块，才能解决这个问题。`;
// 错误的写法
// let x;
// { x } = { x: 1 }; // SyntaxError: Unexpected token =
// console.log(x); 
// 正确的写法
// let x;
// ({ x } = { x: 1 });
// console.log(x); 

`由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构。`;
// let arr = [1, 2, 3];
// let {0 : first, [arr.length - 1] : last} = arr;
// console.log(first) // 1
// console.log(last) // 3