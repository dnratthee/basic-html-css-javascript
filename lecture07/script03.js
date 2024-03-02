// Operators in JavaScript
// 1. Arithmetic Operator + - * / % ++ -- **
// (Addition, Subtraction, Multiplication, Division, Modulus, Increment, Decrement, Exponentiation)
let num1 = 10;
num1++;
console.log(num1); // 11
++num1;
console.log(num1); // 12
num1--;
console.log(num1); // 11
--num1;
console.log(num1); // 10
console.log("--------------------------");

let num2 = 5;
console.log(++num2); // 6
console.log(num2++); // 6
console.log(num2); // 7
console.log("--------------------------");

// 2. Assignment Operator = += -= *= /= %=  **=  //=
// (Assignment, Addition Assignment, Subtraction Assignment, Multiplication Assignment, Division Assignment, Modulus Assignment, Exponentiation Assignment, Floor Division Assignment)
let value = 20;
value += 1;
console.log(value); // 21
let value2 = 100;
value2 *= value; // 100 * 21
value2 += 7 * 3; // 100 * 21 + 7 * 3
console.log(value2); // 2121
console.log("--------------------------");

// 3. Comparison Operator == === != !== > < >= <=
// (Equal, Strict Equal, Not Equal, Strict Not Equal, Greater Than, Less Than, Greater Than or Equal, Less Than or Equal)
console.log(10 == 30); // false
console.log(10 == "10"); // true
console.log(10 === "10"); // false
console.log(10 != 10); // false
console.log(10 != "10"); // false
console.log(10 !== "10"); // true
console.log(10 != 20); // true
console.log(10 !== 20); // true
console.log("--------------------------");
