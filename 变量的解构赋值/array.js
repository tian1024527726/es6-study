`1、数组的结构赋值`;

// let [a, b, c] = [1, 2, 3];
// console.log(a, b, c);
// let [a, ...b] = [1, 2, 3, 4];
// console.log(a, b)

`如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见 Iterator），那么将会报错。`;
// yntaxError: Identifier 'foo' has already been declared
// let [foo] = 1; 
// let [foo] = false; 
// let [foo] = NaN;
// let [foo] = undefined;
// let [foo] = null;
// let [foo] = {};

`Set 结构，也可以使用数组的解构赋值`;
// let [a] = new Set([1, 2]);
// console.log(a);

`实上，只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。`;
// function* fibs() {
//   let a = 0;
//   let b = 1;
//   while (true) {
//     yield a;
//     [a, b] = [b, a + b];
//   }
// }

// let [first, second, third, fourth, fifth, sixth] = fibs();
// console.log(sixth);

`默认值--判断一个位置是否有值,只有当一个数组成员严格等于undefined，默认值才会生效,null不严格等于undefined,所以不生效`;
// let [x = 1] = [undefined];
// console.log(x) // 1
// let [x = 1] = [null];
// console.log(x) // 1

`默认值可以引用解构赋值的其他变量，但该变量必须已经声明`;
// let [x = y, y = 1] = []; // ReferenceError: y is not defined

