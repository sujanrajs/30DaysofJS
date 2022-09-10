// Hoisting is JavaScript's default behavior of moving declarations to the top.

/* 
JavaScript Declarations are Hoisted
In JavaScript, a variable can be declared after it has been used.

In other words; a variable can be used before it has been declared.

Example 1 gives the same result as Example 2:
*/

// Example 1
x = 5; // 5 is assigned to x
console.log(x);
var x;

// Example 2
var y; // x is decleared
y = 10; // 10 is assigned to x
console.log(y);

/* 
To understand this, you have to understand the term "hoisting".

Hoisting is JavaScript's default behavior of moving all declarations to the top of
the current scope (to the top of the current script or the current function).
*/

/* 
The let and const Keywords

Variables defined with let and const are hoisted to the top of the block, but not initialized.

Meaning: The block of code is aware of the variable,
but it cannot be used until it has been declared.

Using a let variable before it is declared will result in a ReferenceError.

The variable is in a "temporal dead zone" from the start of the block until it is declared:
*/

// carName = "Toyota";
// let carName;
// console.log(carName); // ReferenceError: Cannot access 'carName' before initialization

// Using a const variable before it is declared, is a syntax errror,
// so the code will simply not run.

// countryName = "Finland";
// const countryName; // SyntaxError: Missing initializer in const declaration
// console.log(countryName);

/* 
JavaScript Initializations are Not Hoisted
JavaScript only hoists declarations, not initializations.
*/
// Example 1
var a = 15; // Initialize a as 15
var b = 20; // Initialize b as 20

console.log(a); // 5
console.log(b); // 10

// Example 2
var i = 25; // Initialize i as 25

console.log(i); // 25
console.log(j); // Undefined

var j = 30; // Initialize j as 30

/* 
Does it make sense that y is undefined in the last example?

This is because only the declaration (var y), not the initialization (=30) is hoisted to the top.

Because of hoisting, y has been declared before it is used,
but because initializations are not hoisted, the value of y is undefined.
*/

// Example 3
var p = 35; // Initialize p as 35
var q; // Declear q

console.log(p); // 5
console.log(q); // undefined

q = 40; // Assign 40 to q

/* 
Declare Your Variables At the Top !

To avoid bugs, always declare all variables at the beginning of every scope.
Since this is how JavaScript interprets the code, it is always a good rule.
*/
