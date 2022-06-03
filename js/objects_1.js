const person = {};

person.userName = "x";
person.age = 30;

delete person.age;
console.log(person);

const person1 = {
  _name: "xyz",
  age: 12,
  fullName() {
    console.log(this._name, this.age);
  },
};
console.log(person1);
console.log(Object.keys(person1));

if (Object.keys(person1).includes("age")) {
  delete person1.age;
  console.log(person1);
}
person1.fullName();
