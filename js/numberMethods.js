// 12

const abc = "10.123";

console.log(typeof +abc);
console.log(parseInt(abc));
console.log(parseFloat(abc));
console.log(parseFloat(abc).toFixed(2));
console.log(typeof parseFloat(abc).toFixed(2));

// Rounded Number:

const price = 9.99;

console.log(Math.round(price)); // 9
console.log(Math.ceil(price)); // 10
console.log(Math.floor(price)); // 9

// Ramdom:

console.log(Math.ceil(Math.random() * 10) + ".jpg"); // 0 - 1
