const arr = [];

// arr[0] = "1";
// arr[1] = "2";
// arr[3] = "3";
// ------->
arr.push("1");
arr.push("2");
arr.push("3");

// <---------
arr.unshift("0");
arr.unshift("-1");
arr.unshift("-2");

console.log(arr);
arr.pop();
arr.shift();

// delete arr[1];

// Delete Array values
arr.splice(3, 1);

const sliced = arr.slice(0, 1);

console.log(sliced);
console.log(arr);

console.log(arr.join("#").split("#"));
const arr1 = ["a", "b", "c"];
console.log(arr1.concat(arr));
