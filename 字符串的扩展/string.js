`1、字符的Unicode表示法`;
`JavaScript 允许采用"\u0000"表示一个字符，其中0000表示字符的Unicode码点`;
`只限在\u0000~\uFFFF之间的字符`;

// console.log("\u9999"); // 香
// console.log("\uD842\uDFB7"); // 𠮷

// console.log("\u20BB7"); // ₻7
`上面代码表示，如果直接在\\u后面跟上超过0xFFFF的数值（比如\u20BB7），
JavaScript 会理解成\\u20BB+7。由于\\u20BB是一个不可打印字符，所以只会显示一个空格，后面跟着一个7。`;

`ES6 对这一点做出了改进，只要将码点放入大括号，就能正确解读该字符。`;
// console.log("\u{20BB7}") // 𠮷
// console.log("\u{41}\u{42}\u{43}") // ABC

// let hello = 123;
// console.log(hell\u{6F}) // 123

console.log('\z'); // z
console.log('\172'); 
console.log('\x7A'); 
console.log('\u007A'); 
console.log('\u{7A}'); 

`2、codePointAt 方法`;

