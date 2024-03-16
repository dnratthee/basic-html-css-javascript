// JavaScript Module (continued)
// Import Module and Use the Module

// - Import Module
const test01 = require("./test01");

console.log(test01.MAJOR); // Computer Engineering

let info = test01.info;
console.log(info.stdId); // 6519710000

test01.showInfo();
// Student ID: 6519710000
// Student Name: John Doe

let age = test01.calculateAge(info.stdBirthDate);
console.log(age);
