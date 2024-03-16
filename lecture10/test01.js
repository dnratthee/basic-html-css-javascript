// JavaScript Module [User-defined Module]
// - Export Module (CommonJS)

let data = "Hello !!!";
const PI = 3.1416;

function showData() {
  console.log(data);
}

function calculateArea(radius) {
  return PI * radius * radius;
}
module.exports = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};

module.exports.data = data;
module.exports.showData = showData;
module.exports.PI = PI;
module.exports.calculateArea = calculateArea;
