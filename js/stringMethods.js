// Locate:

const email = "      test@test.com    ";

console.log(email.length); // 13
console.log(email.indexOf("test", 6)); //4 ( > -1) { block of code }
console.log(email.lastIndexOf("test", 4)); // 5
console.log(email.search("test")); // 5

console.log(email.includes("test")); // true

console.log(email);
console.log(email.trim());
console.log(email.trim().toUpperCase());
console.log(email.trim().toLowerCase());

// slice
console.log(email.indexOf("test") + "test".length);
const slicedStr = email.slice(
  email.indexOf("test"),
  email.indexOf("test") + "test".length
);

console.log(slicedStr);
