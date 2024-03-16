// JavaScript Module [User-defined Module : ECMAScript Module]] (continued)
// - Import Module (ES6 Module)

import test from "./test01.js";
test(); // Hello !!!

import { add, subtract } from "./test01.js";

console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2

// - Import Module as Alias
import * as test01 from "./test01.js";

test01.doLoop(); // asynchronous function
// 0
// 1
// 2

console.log(test01.add(5, 3)); // 8
console.log(test01.subtract(5, 3)); // 2
