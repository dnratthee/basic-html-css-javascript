// Callback Function in JavaScript
// Callback function is a function that is passed as an argument to another function. It is used to perform a task after the completion of another task. It is also known as a higher-order function. It is used to handle asynchronous operations in JavaScript.

// - Normal Function
function funcA() {
  console.log("This is funcA");
}

// - Callback Function
function funcB(callback) {
  console.log("This is funcB");
  callback();
}

funcB(funcA);
// This is funcB
// This is funcA
