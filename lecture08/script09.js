// Object in JavaScript
// An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method. In addition to objects that are predefined in the browser, you can define your own objects.

let a = { a: 10, b: 20, c: 30, d: 40, e: 50 };
console.log(a); // { a: 10, b: 20, c: 30, d: 40, e: 50 }

let b = new Object();
b.a = 10;
b.b = "twenty";
b.c = true;
b.d = 40;
b.e = "fifty";
b.f = [10, 20, 30, 40, 50];
b.g = function () {
  console.log("This is g");
};

console.log(b); // { a: 10, b: 'twenty', c: true, d: 40, e: 'fifty', f: [ 10, 20, 30, 40, 50 ], g: [Function (anonymous)] }
console.log(b.a); // 10
console.log(b.b); // twenty
console.log(b.f); // true
console.log(b.f[0]); // 10
console.log(b.f[2]); // 30
b.g(); // This is g

let c = {
  stdId: "6519710000",
  stdName: "John Doe",
  stdAddress: {
    homeNo: "19/1",
    street: "Petchkasem Road",
    subDistrict: "Nong Khang Phlu",
    district: "Nong Khaem",
    city: "Bangkok",
    country: "Thailand",
    zip: "10160",
  },
  stdPhone: ["123-456-7890", "234-567-8901", "345-678-9012"],
  stdMajor: "Computer Engineering",
};

console.log(c); // { stdId: '6519710000', stdName: 'John Doe', stdAddress: { homeNo: '19/1', street: 'Petchkasem Road', subDistrict: 'Nong Khang Phlu', district: 'Nong Khaem', city: 'Bangkok', country: 'Thailand', zip: '10160' }, stdPhone: [ '123-456-7890', '234-567-8901', '345-678-9012' ], stdMajor: 'Computer Engineering' }
console.log(c.stdId); // 6519710000
console.log(c.stdAddress); // { homeNo: '19/1', street: 'Petchkasem Road', subDistrict: 'Nong Khang Phlu', district: 'Nong Khaem', city: 'Bangkok', country: 'Thailand', zip: '10160' }
console.log(c.stdAddress.city); // Bangkok
console.log(c.stdPhone); // [ '123-456-7890', '234-567-8901', '345-678-9012' ]
