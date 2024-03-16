// JavaScript Module [User-defined Module : ECMAScript Module]
// - Export Module

export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

export async function doLoop() {
  for (let i = 0; i < 3; i++) {
    console.log(i);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

export function sayHello() {
  console.log("Hello !!!");
}

export default sayHello;
