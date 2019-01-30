`用途`;

`1、交换变量的值`;
// let x = 1;
// let y = 2;
// console.log(x,y); // 1, 2
// [x, y] = [y, x];
// console.log(x,y); // 2, 1

`2、从函数返回多个值`;
`函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回。有了解构赋值，取出这些值就非常方便。`;
// 返回一个数组
// function example1() {
//   return [1, 2, 3];
// }
// let [a, b, c] = example1();
// console.log(a, b, c); // 1, 2, 3
// 返回一个对象
// function example2() {
//   return {
//     foo: 1,
//     bar: 2
//   };
// }
// let { foo, bar } = example2();
// console.log(foo, bar);

`3、函数参数的定义`; 
// 参数是一组有次序的值
// function f([x, y, z]) {  }
// f([1, 2, 3]);
// 参数是一组无次序的值
// function f({x, y, z}) {  }
// f({z: 3, y: 2, x: 1});

`4、提取 JSON 数据`;
// let jsonData = {
//   id: 42,
//   status: "OK",
//   data: [867, 5309]
// };

// let { id, status, data: number } = jsonData;
// console.log(id, status, number);

`5、遍历 Map 结构--任何部署了 Iterator 接口的对象，都可以用for...of循环遍历。`;
// const map = new Map();
// map.set('first', 'hello');
// map.set('second', 'world');

// for (let [key, value] of map) {
//   console.log(key + " is " + value);
// }

`6、输入模块的指定方法`;
// const { Component, PureComponent } = require("react");
