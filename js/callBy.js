// Call By Value;
var abc = 10;
var def = abc;
abc = def;
def = 20;

console.log("abc", abc);

console.log("def", def);

// Objects:
// Call By Reference...
var person = { name: "xyz" };

var person1 = person;
person1.name = "abcd";
console.log("person", person);
console.log("person1", person1);
