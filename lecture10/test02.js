// JavaScript Module [User-defined Module] (continued)
// - Import Module (CommonJS)

const test01 = require("./test01");
const { PI, calculateArea } = require("./test01");

console.log(test01.data); // Hello !!!
test01.showData(); // Hello !!!

console.log(PI); // 3.1416

let radius = 5;
let area = calculateArea(radius);
console.log(area); // 78.54

console.log(test01.add(5, 3)); // 8
console.log(test01.subtract(5, 3)); // 2
