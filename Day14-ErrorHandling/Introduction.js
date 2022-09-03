/* 
Error Handling
JavaScript is a loosely-typed language.
Some times you will get a runtime error when you try to access an undefined variable or
call undefined function etc.

JavaScript similar to python or Java provides an error-handling mechanism
to catch runtime errors using try-catch-finally block.

try {
  // code that may throw an error
} catch (err) {
  // code to be executed if an error occurs
} finally {
  // code to be executed regardless of an error occurs or not
}

try: wrap suspicious code that may throw an error in try block.
The try statement allows us to define a block of code to be tested for errors while it is being executed.

catch: write code to do something in catch block when an error occurs.
The catch block can have parameters that will give you error information.
Catch block is used to log an error or display specific messages to the user.

finally: finally block will always be executed regardless of the occurrence of an error.
The finally block can be used to complete the remaining task or reset variables that
might have changed before error occurred in try block.
*/

try {
  let lastName = "Shrestha";
  let fullName = `${firstname} ${lastName}`;
} catch (error) {
  console.log(error);
} // ReferenceError: firstname is not defined at filename.js:39:18

try {
  let lastName = "Shrestha";
  let fullName = `${firstname} ${lastName}`;
} catch (err) {
  console.log(err, "Error Happened");
} finally {
  console.log("In any case this will be executed");
}
// ReferenceError: firstname is not defined at filename.js:39:18 'Error Happened'
// In any case this will be executed

/* 
The catch block take a parameter. It is common to pass e, err or error as a parameter to the catch block.
This parameter is an object and it has name and message keys. Lets use the name and message.
*/

try {
  let lastName = "Shrestha";
  let fullName = `${firstname} ${lastName}`;
} catch (err) {
  console.log("Error name: ", err.name);
  console.log("Error message: ", err.message);
} finally {
  console.log("In any case this will be executed");
}
/* 
Error name:  ReferenceError
Error message: firstname is not defined
In any case this will be executed
*/

/* 
throw:

the throw statement allows us to create a custom error.
We can through a string, number, boolean or an object. Use the throw statement to throw an exception.
When you throw an exception, expression specifies the value of the exception.
Each of the following throws an exception:

throw 'Error2' // generates an exception with a string value
throw 42 // generates an exception with the value 42
throw true // generates an exception with the value true
throw new Error('Required') // generates an error object with the message of Required

*/

console.log("--------------");

const throwErrorExample = () => {
  let message;
  // uncomment below for testing
  //let x = prompt("Enter a number: ");
  try {
    if (x == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw "too high";
  } catch (err) {
    console.log(err);
  }
};
throwErrorExample();

/* 
Error Types

ReferenceError: 

An illegal reference has occurred.
A ReferenceError is thrown if we use a variable that has not been declared.
*/

// uncomment below for testing
// let firstNam = "Sujan";
// let fulName = firstNam + lastNam;

// Uncaught ReferenceError: lastName is not defined

console.log("--------------");

// SyntaxError: A syntax error has occurred

//let square = 2 x 2;
//console.log(square);

// Uncaught SyntaxError: Unexpected identifier

console.log("--------------");

// TypeError: A type error has occurred
let xx = 10;
console.log("In lower case:", xx.toLowerCase());
// Uncaught TypeError: xx.toLowerCase is not a function
