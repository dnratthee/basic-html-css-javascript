// Functions with Default Parameters in JavaScript
// Functions with default parameters are a new feature in ECMAScript 6 (ES6).
// Default parameters allow formal parameters to be initialized with default values if no value or undefined is passed. Default parameters are used to initialize the parameters with default values.

function funcA(x, y, z = 10) {
  console.log(`Sum of ${x}, ${y} and ${z} is ${x + y + z}`);
}
funcA(10, 20); // Sum of 10, 20 and 10 is 40
funcA(10, 20, 30); // Sum of 10, 20 and 30 is 60

let a = function (y = 20, z = 10) {
  console.log(`Sum of ${y} and ${z} is ${y + z}`);
};
a(); // Sum of 20 and 10 is 30
a(30); // Sum of 30 and 10 is 40
a(30, 40); // Sum of 30 and 40 is 70

let b = (x = 555) => {
  return x;
};
console.log(b()); // 555
console.log(b(100)); // 100
