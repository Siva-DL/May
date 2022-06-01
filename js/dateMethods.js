const date = new Date();

const days = ["Sun", "Mon", "Tue", "Wed"];

console.log(date);
console.log(date.getDate());
console.log(days[date.getDay()]);
console.log(date.getMonth() + 1);
console.log(date.getFullYear());

console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
