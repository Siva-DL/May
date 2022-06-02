// if, else-if, switch, ternary

console.log(1 === "1");
const email = "dev@test.com";
//  &&, ||

if (email.includes("test") || email.indexOf("test") === 0) {
  console.log("True test block");
} else if (email.includes("dev")) {
  console.log("True Dev block");
} else {
  console.log("False block");
}

// const DevEmail = "dev@dev.com";

// if (DevEmail.includes("dev")) {
//   console.log("True Dev block");
// } else {
//   console.log("False block");
// }

// Switch:

const randomNum = Math.ceil(Math.random() * 6);
console.log(randomNum);
// const guessAnum = prompt("Guess a num b/w 1 - 6");
// console.log(guessAnum);

switch (10) {
  case "1":
    console.log("1 is your guessed number...!");
    break;
  case "2":
    console.log("2 is your guessed number...!");
    break;
  case "3":
    3;
    console.log("3 is your guessed number...!");
    break;
  case "4":
    console.log("4 is your guessed number...!");
    break;
  case "5":
    console.log("5 is your guessed number...!");
    break;
  case "6":
    console.log("6 is your guessed number...!");
    break;
  default:
    console.log("your guessed number...! is not matching");
}

// Ternary:

// true ? true block : false block;

// email.includes("test")
//   ? console.log("Dev and test are there..!")
//   : console.log("test is not there...!");

const isFalse = email.toUpperCase().includes("DEV")
  ? console.log("Dev and test are there..!")
  : console.log("No Dev is not there..!!");

const isTrue = email.toUpperCase().includes("DEV")
  ? email.includes("test")
    ? console.log("Dev and test are there..!")
    : console.log("test is not there...!")
  : console.log("No Dev is not there..!!");

// if (true) {
//   if (true) {
//   }
// }

console.log(email);
