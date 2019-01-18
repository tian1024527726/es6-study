`数的参数也可以使用解构赋值。`;
// function add([x, y]) {
//   return x + y;
// }
// console.log(add([1, 2]));
// console.log([[1, 2], [3, 4]].map(([a, b]) => a + b));

`函数参数的解构也可以使用默认值。`;

// 默认值为{ x: 0, y = 0 };
// function move({ x = 0, y = 0 } = {}) {
//   return [x, y];
// }
// console.log(move({ x: 3, y: 8 })); // [3, 8]
// console.log(move({ x: 3 })); // [3, 0]
// console.log(move({})); // [0, 0]
// console.log(move()); // [0, 0]

// 默认值为{ x: undefined, y = undefined };
// function move({ x, y } = { x: 0, y: 0 }) {
//   return [x, y];
// }
// console.log(move({ x: 3, y: 8 })); // [3, 8]
// console.log(move({ x: 3 })); // [3, undefined]
// console.log(move({})); // [undefined, undefined]
// console.log(move()); // [0, 0]

`undefined就会触发函数参数的默认值`;
// console.log([1, undefined, 3].map((x = 'yes') => x));