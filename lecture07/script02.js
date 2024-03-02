// Variables in JavaScript
// var: function scope, can be reassigned
// let: block scope, can be reassigned
// const: block scope, cannot be reassigned

var a = 10;
let b = 20;
const c = 30;
a = 100;
b = 200;
// c = 300; // TypeError: Assignment to constant variable.
{
  var d = 40;
  let e = 50;
  const f = 60;
  {
    var g = 70;
    let h = 80;
    const i = 90;
    console.log(a, b, c, d, e, f, g, h, i);
  }
  console.log(a, b, c, d, e, f, g);
}
console.log(a, b, c, d, g);
