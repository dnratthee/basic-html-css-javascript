// Arrow Functions in JavaScript
// Arrow functions are a new way to write anonymous function expressions in JavaScript. Arrow functions are more concise and easier to read. Arrow functions do not have their own this, arguments, super, or new.target. Arrow functions are always anonymous. Arrow functions are not hoisted. Arrow functions cannot be used as constructors and will throw an error when used with new.

let aa = () => {
  console.log("Hello, World!");
};
aa(); // Hello, World!

let bb = (x, y) => {
  console.log(`Sum of ${x} and ${y} is ${x + y}`);
};
bb(10, 20); // Sum of 10 and 20 is 30

let cc = () => "Hello, SAU!";
console.log(cc()); // Hello, SAU!

let dd = (x, y, z) => console.log(`Sum of ${x}, ${y} and ${z} is ${x + y + z}`);
dd(10, 20, 30); // Sum of 10, 20 and 30 is 60
