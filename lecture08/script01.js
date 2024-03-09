// Functions in JavaScript
// Functions are a set of statements that perform a task or calculate a value.
// Functions are reusable, and they can be called multiple times.
// Functions can take parameters and return values.
// Functions are first-class objects, i.e., they can be passed around and used as arguments, just like any other object (string, number, array, etc.).

// - Function with no argument and no return value
function funcA() {
  console.log("Hello, World!");
}
funcA(); // Hello, World!

// - Function with argument and no return value
function funcB(num1, num2) {
  console.log(`Sum of ${num1} and ${num2} is ${num1 + num2}`);
}
funcB(10, 20); // Sum of 10 and 20 is 30

// - Function with no argument and return value
function funcC() {
  return "Hello, World!";
}
console.log(funcC()); // Hello, World!

// - Function with argument and return value
function funcD(num1, num2, num3) {
  return num1 + num2 + num3;
}
let data = funcD(10, 20, 30);
console.log(data); // 60
