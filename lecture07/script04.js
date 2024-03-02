// Operators in JavaScript (continued)

// 4. Logical Operator && || !
// (And, Or, Not)

console.log(!true); // false
console.log(!false); // true
console.log("--------------------------");
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
console.log("--------------------------");
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
console.log("--------------------------");

// 5. Ternary Operator ? :
// (condition ? expr1 : expr2)
console.log(10 > 100 ? "Yes" : "No"); // No
console.log(10 < 100 ? "Yes" : "No"); // Yes
console.log("--------------------------");
let a = 20;
let b = 30;
c = a < b ? 555 : 999;
console.log(c); // 555
