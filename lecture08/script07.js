// Functions with get and set in JavaScript
// Functions with get and set are a new feature in ECMAScript 5 (ES5).
// get and set are used to define computed properties.
// get is used to get the value of a property.
// set is used to set the value of a property.

let obj = {
  log: ["a", "b", "c"],
  get latest() {
    return this.log[this.log.length - 1];
  },
  set add(x) {
    this.log.push(x);
  },
};

console.log(obj.log); // [ 'a', 'b', 'c' ]
console.log(obj.latest); // c

obj.add = "d";
console.log(obj.latest); // d

console.log(obj.log); // [ 'a', 'b', 'c', 'd' ]
