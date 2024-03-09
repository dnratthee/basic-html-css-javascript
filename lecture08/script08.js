// Array in JavaScript
// An array is a special variable that can hold more than one value at a time. It is a collection of variables that are stored in a single variable. It is a special type of object that is used to store multiple values in a single variable.

let a = [10, 20, 30, 40, 50];
console.log(a); // [10, 20, 30, 40, 50]
console.log(a.length); // 5
console.log(a[0]); // 10
console.log(a[2]); // 30
console.log(a[0] + a[2]); // 40

let b = new Array(10);
console.log(b); // [ <10 empty items> ]
console.log(b.length); // 10
console.log(b[0]); // undefined

let c = new Array("one", "two", "three", "four", "five");
for (let i = 0; i < c.length; i++) {
  console.log(c[i]);
}
// one
// two
// three
// four
// five

c.forEach((element) => console.log(element));
// one
// two
// three
// four
// five

let d = new Array(10, 20, 30, 40, 50);
console.log(d); // [10, 20, 30, 40, 50]
console.log(d.length); // 5
console.log(d[0]); // 10
console.log(d[2]); // 30
console.log(d[0] + d[2]); // 40

let e = new Array(10, "twenty", true, 40, "fifty");
console.log(e); // [10, "twenty", true, 40, "fifty"]
console.log(e.length); // 5
console.log(e[0]); // 10
console.log(e[2]); // true
