// Function Decleration

//declaring a function without a parameter
function functionName() {
  // code goes here
}
functionName(); // calling function by its name and with parentheses

// Function without a parameter and return

function square() {
  let num = 2;
  let sq = num * num;
  console.log(sq);
}
square(); //4

console.log("--------------");

function addTwoNum() {
  let a = 10;
  let b = 20;
  let addition = a + b;
  console.log(addition);
}
addTwoNum(); // 30

console.log("--------------");

function printFullName() {
  let firstName = "Sujan Raj";
  let lastName = "Shrestha";
  let fullName = `${firstName} ${lastName}`;
  console.log(fullName);
}

printFullName(); // Sujan Raj Shrestha

console.log("--------------");

// Function returning value. Function can also return values,
// If a function does not return values the value of the function is undefined.
// It return value to a function instead of printing it

function printFullName1() {
  let firstName = "Sujan Raj";
  let lastName = "Shrestha";
  let fullName = `${firstName} ${lastName}`;
  return fullName;
}
console.log(printFullName1()); // Sujan Raj Shrestha

console.log("--------------");

function addTwoNumm() {
  let a = 10;
  let b = 20;
  let addition = a + b;
  return addition;
}
console.log(addTwoNumm()); // 30

console.log("--------------");

// Function with a parameter. In a function we can pass different data types
// (number, string, boolean, object, function) as a parameter.

/* function functionName(parm1) {
  //code goes her
}
functionName(parm1); // during calling or invoking one argument needed */

function areaOfCircle(r) {
  let area = Math.PI * r * r;
  return area;
}
console.log(areaOfCircle(2));
console.log(areaOfCircle(10));

console.log("--------------");

// Function with two parameters
/* 
function functionName(parm1, parm2) {
  //code goes her
}
*/

function summ(a, b) {
  let sum = a + b;
  return sum;
}
console.log(summ(2, 5)); // 7
console.log(summ(10, 100)); // 110

console.log("--------------");

function fullNam(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(fullNam("Sujan", "Shrestha")); // Sujan Shrestha

console.log("--------------");

// Function with many parameters
/* 
function functionName(parm1, parm2, parm3,...){
  //code goes here
}
functionName(parm1,parm2,parm3,...) // during calling or invoking three arguments needed
 */

// this function takes array as a parameter and sum up the numbers in the array
function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
const nums = [1, 2, 3, 4, 5];
console.log(arrSum(nums));

console.log("--------------");

// Arrow function

const newAreaOfCircle = (rd) => {
  let area = Math.PI * rd * rd;
  return area;
};
console.log(newAreaOfCircle(10));

console.log("--------------");

const addition = (a, b) => a + b;
console.log(addition(10, 20));
console.log(addition(200, 300));

console.log("--------------");

// Function with unlimited number of parameters
/* 
Sometimes we do not know how many arguments the user going to pass.
Therefore, we should know how to write a function which can take unlimited number of arguments.
The way we do it has a significant difference between a function declaration(regular function)
and arrow function.

A function declaration provides a function scoped arguments array like object.
Any thing we passed as argument in the function can be
accessed from arguments object inside the functions.
 */

function sumAllNums() {
  console.log(arguments);
}
sumAllNums(1, 2, 3, 4);
// [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }

console.log("--------------");

function sumNums() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sumNums(1, 2, 3, 4)); // 10
console.log(sumNums(10, 20, 13, 40, 10)); // 93
console.log(sumNums(15, 20, 30, 25, 10, 33, 40)); // 173

console.log("--------------");

// Unlimited number of parameters in arrow function
/* 
Arrow function does not have the function scoped arguments object.
To implement a function which takes unlimited number of arguments in an
arrow function we use spread operator followed by any parameter name.
Any thing we passed as argument in the function can be accessed as array in the arrow function.
*/

const newsumAllNums = (...args) => {
  // console.log(arguments), arguments object not found in arrow function
  // instead we use a parameter followed by spread operator (...)
  console.log(args);
};

newsumAllNums(1, 2, 3, 4);
// [1, 2, 3, 4]

console.log("--------------");

// function declaration

const allNumSum = (...args) => {
  let sum = 0;
  for (const element of args) {
    sum += element;
  }
  return sum;
};

console.log(allNumSum(1, 2, 3, 4)); // 10
console.log(allNumSum(10, 20, 13, 40, 10)); // 93
console.log(allNumSum(15, 20, 30, 25, 10, 33, 40)); // 173

console.log("--------------");

// Anonymous Function - without name

const anonymousFun = function () {
  console.log(
    "I am an anonymous function and my value is stored in anonymousFun"
  );
};
console.log(anonymousFun());

/* 
 If the function is only used once, or a limited number of times,
 an anonymous function may be syntactically lighter than using a named function
*/

console.log("------- Hello World -- appears after 3 seconds -------");

setTimeout(function () {
  console.log("This appears after 3 seconds - Hello World");
}, 3000);

console.log("--------------");

/* 
Expression Function
Expression functions are anonymous functions.
After we create a function without a name and we assign it to a variable.
To return a value from the function we should call the variable.
*/

const sq = function (n) {
  return n * n;
};
console.log(sq(2));

console.log("--------------");

/* 
Self Invoking Functions
Self invoking functions are anonymous functions which do not need to be called to return a value.
*/

(function (n) {
  console.log(n * n);
})(2); // 4
// instead of just printing if we want to return and store the data, we do as shown below

let squaredNum = (function (n) {
  return n * n;
})(10);

console.log(squaredNum);

console.log("--------------");

/* 
Arrow Function
Arrow function is an alternative to write a function,
however function declaration and arrow function have some minor differences.
Arrow function uses arrow instead of the keyword function to declare a function.
*/

function sqre(n) {
  return n * n;
}

console.log(sqre(2)); // 4

const sqr = (n) => {
  return n * n;
};

console.log(sqr(2)); // 4

console.log("--------------");

// if we have only one line in the code block, it can be written as follows, explicit return
const sqq = (n) => n * n; // -> 4

console.log("--------------");

const changeToUpperCase = (aray) => {
  const newArr = [];
  for (const element of aray) {
    newArr.push(element.toUpperCase());
  }
  return newArr;
};

const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
console.log(changeToUpperCase(countries));

// ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

console.log("--------------");

/* 
Function with default parameters

Sometimes we pass default values to parameters,
when we invoke the function if we do not pass an argument the default value will be used.
Both function declaration and arrow function can have a default value or values.

function functionName(param = value) {
  //codes
}

// Calling function
functionName()
functionName(arg)

*/

function greeting(name = "John") {
  let message = `${name}, Welcome to JS practice`;
  return message;
}
console.log(greeting());
console.log(greeting("Sujan"));
console.log(greeting("Raj"));

console.log("--------------");

function nams(fName = "Sujan", lName = "Shrestha") {
  let fullName = `${fName} ${lName}`;
  return fullName;
}

console.log(nams());
console.log(nams((fName = "NewSujan"), (lName = "NewShrestha")));

console.log("--------------");

function calculateAge(birthYear, currentYear = 2022) {
  let age = currentYear - birthYear;
  return age;
}
console.log("Age:", calculateAge(1992));

console.log("--------------");

const newGreeting = (name = "John") => {
  let message = `${name}, Welcome to JS practice`;
  return message;
};

console.log(newGreeting());

console.log("--------------");

const calculateNewAge = (birthYear, currentYear) => currentYear - birthYear;
console.log("Age:", calculateAge(1992, 2022));

console.log("--------------");

