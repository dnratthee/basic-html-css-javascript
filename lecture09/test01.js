// JavaScript Module
// JavaScript Module is a collection of JavaScript objects, functions, and variables. It is a way to encapsulate the code and protect the code from the global scope.

const MAJOR = "Computer Engineering";

let info = {
  stdId: "6519710000",
  stdName: "John Doe",
  stdBirthDate: "2000-01-01",
};

function showInfo() {
  console.log(`Student ID: ${info.stdId}`);
  console.log(`Student Name: ${info.stdName}`);
}

let calculateAge = function (birthDate) {
  let today = new Date();
  let birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  let m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
};

module.exports = { MAJOR, info, showInfo, calculateAge };
