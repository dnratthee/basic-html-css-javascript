// Functions with Rest and Spread Parameters in JavaScript
// Rest and Spread parameters are a new feature in ECMAScript 6 (ES6).
// Rest parameters allow a function to accept an indefinite number of arguments as an array. Rest parameters are used to collect all the remaining arguments passed to a function. Rest parameters are used to create functions that accept any number of arguments.

// Rest parameters
function funcA(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

console.log(funcA(10, 20, 30)); // 60
console.log(funcA(10, 20, 30, 40)); // 100
console.log(funcA(10, 20, 30, 40, 50)); // 150

// Spread parameters
// Spread parameters allow an array to be expanded into individual elements. Spread parameters are used to expand an array into individual elements. Spread parameters are used to create functions that accept any number of arguments.
function funcB(a, b, ...args) {
  console.log(`a = ${a}, b = ${b}, [${args}]`);
}
funcB(10, 20, 30, 40, 50, 60, 70); // a = 10, b = 20, [30,40,50,60,70]
