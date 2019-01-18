`解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。`;
// let {toString: a} = 123;
// a === Number.prototype.toString // true
// console.log(a); 

// let {toString: s} = true;
// s === Boolean.prototype.toString // true
// console.log(s); 

`解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。
由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。`;
// TypeError: Cannot destructure property `prop` of 'undefined' or 'null'.
// let { prop: x } = undefined; // TypeError
// let { prop: y } = null; // TypeError
