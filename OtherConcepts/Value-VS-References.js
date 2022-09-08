// Value

let a = 10; // a = 10
let b = "Hi"; // c = hi
let c = a; // c = 10
c = c + 1; // c = 11

console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`c = ${c}`);

// References
let x = [1, 2]; // [1,2] memory location 0x01
let y = x; // [1,2] same memory location 0x01

console.log(`x = ${x}`); // [1,2]
console.log(`y = ${y}`); // [1,2]
// x an y both have same memory location that is referenced
console.log(x == y, x === y); // true, true

y.push(3);
console.log(`x = ${x}`); // [1,2,3]
console.log(`y = ${y}`); // [1,2,3]
console.log(x == y, x === y); // true, true

y = [1, 2]; // memory location 0x02
console.log(`y = ${y}`); // [1,2]
// even if the values or array are same but memory location are different in x and y
console.log(x == y, x === y); // false, false

let i = [1, 2];
console.log(i); // 1,2

add(i, 3);
console.log(i); // 1,2,3

function add(array, element) {
  // (0x01, 3)
  array.push(element);
}

// Primitive values are passed by values
// Array Object Classes are passed by references
