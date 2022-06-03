// demo();
// const demo = function () {
//   console.log(123);
// };

// Global and Local Scope:

const G_demo = 10; // global

console.log(G_demo); // 10

function demofn() {
  const L_demo = 123;
  var def = 20; // local
  console.log(L_demo, def);

  function person() {
    console.log("nested fn", L_demo);
  }
  person();
}

demofn(); // 10
console.log(G_demo);

const abc = 10;
if (true) {
  const abc = 20;
}
