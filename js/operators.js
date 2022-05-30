// assign: =
// reAssign: +=, -=, *=
// compare: ==, ===, >==, <==

console.log(1 == "1"); // accept
console.log(1 === "1"); //
console.log(typeof 1 === typeof "1");

console.log(1 + 1); // 2

// concact
console.log(1 + "1"); // 11
console.log("2" + 10 + 11 + "1"); // 211 | 210111
console.log("2" - 10 + 11 - "2"); // 2

var fname = "anil";
var lname = "ravipudi";

console.log(fname + " " + lname + " is a film director..." + " werwer ");

console.log(`${fname} ${lname} is a film director... werwer `);

let num1 = 20;
// num1 = num1 + 20;
num1 += 20;
console.log(num1);

// && (and), || (or);

console.log(1 == 1 && 1 < 2);

// true && true = true;
// true && false = false;
// false && true = false;
// false && false = false;

// true || true = true;
// true || false = true;
// false || true = true;
// false || false = false;
