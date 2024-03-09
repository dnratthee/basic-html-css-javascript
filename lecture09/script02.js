// JavaScript Module (continued)
// Import Module and Use the Module

// - Import Module
const script01 = require("./script01");

console.log(script01.MAJOR); // Computer Engineering

let info = script01.info;
console.log(info.stdId); // 6519710000

script01.showInfo();
// Student ID: 6519710000
// Student Name: John Doe

let age = script01.calculateAge(info.stdBirthDate);
console.log(age);
