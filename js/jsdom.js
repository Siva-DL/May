//  Selectors: id, class, elementName

const demoId = document.getElementById("demoId");
// const demoClass = document.getElementsByClassName("demoClass");
const byTag = document.getElementsByTagName("a");

demoId.className = "bg-primary text-white";
demoId.id = "test";
byTag.href = "#123";
console.log(byTag[0]);

demoId.innerText = "<h1>changed Text...</h1>";

demoId.innerHTML = "<p>changed Text...</p>";

var arr = [1, 2, 3];

let txt = "";
for (var i in arr) {
  txt += `<h3>${arr[i]}</h3>`;
}
demoId.innerHTML = txt;
console.log(txt);
