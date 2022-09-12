/* 
Scope
Variable is the fundamental part in programming.
We declare variable to store different data types.
To declare a variable we use the key word var, let and const.
A variable can be declared at different scope. In this section, we will see the scope variables,
scope of variables when we use var or let.

Variables scopes can be:
Global
Local

Variable can be declared globally or locally scope.
We will see both global and local scope.
Anything declared without let, var or const is scoped at global level.
*/

// declaring a variable without let or const make it available in window object and this found anywhere
a = "JavaScript";
// this is a global scope variable and found in the window object
b = 10;
function letsLearnScope() {
  console.log(a, b);
  if (true) {
    console.log(a, b);
  }
}
console.log(a, b); // accessible

console.log("--------------");

/* 
Global scope

A globally declared variable can be accessed every where in the same file.
But the term global is relative.
It can be global to the file or it can be global relative to some block of codes.
*/

let i = "React";
let j = 16;

function learnScope() {
  console.log("1", i, j); // React 10 is accessible
  if (true) {
    let i = "ok";
    let j = 10;
    console.log("2", i, j); // ok 10
  }
  console.log("3", i, j);
}
learnScope();
console.log("4", i, j);

console.log("--------------");

/* 
Local scope
A variable declared as local can be accessed only in certain block code.

Block Scope
Function Scope
*/

// Global Scope
let x = "Global Scope";
let y = "Global Accessible";

// Function Scope
function funcScope() {
  console.log(x, y); // Global Scope Global Accessible

  let value = false;
  // Block Scope
  if (true) {
    // we can access from the function and outside the function but
    // variables declared inside the if will not be accessed outside the if block
    let x = "block scope";
    let y = 10;
    value = !value;
    console.log(a, b, value); // block scope 10 true
  }
  // we can not access x,y inside if because it is block scope, is only inside the if block
  console.log(x, y, value); // Global Scope Global Accessible True
}
funcScope();
console.log(x, y);

console.log("--------------");

// In ES6 and above there is let and const

// let is block scoped { this is block }

let greeting = "say Hi";
let times = 4;

if (times > 3) {
  let hello = "say Hello instead";
  console.log(hello); // "say Hello instead"
}
// console.log(hello); This is undefined

// let can be updated but not re-declared.
console.log("--------------");

let greet = "Hi";
greet = "say Hello instead ";
console.log(greet); // say Hello instead

console.log("--------------");

/* let greeting = "say Hi";
let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared */

let gret = "say Hi";
if (true) {
  let gret = "say Hello instead";
  console.log(gret); // say Hello instead
}
console.log(gret); // say Hi

console.log("--------------");

/* 
Const

Variables declared with the const maintain constant values.
const declarations share some similarities with let declarations.

const declarations are block scoped
Like let declarations, const declarations can only be accessed within the block they were declared.
*/

// const cannot be updated or re-declared

/*
const greeting = "say Hi";
greeting = "say Hello instead";// error: Assignment to constant variable.
*/

/*
const greeting = "say Hi";
const greeting = "say Hello instead";// error: Identifier 'greeting' has already been declared
*/

const newGreet = {
  message: "say Hi",
  times: 4,
};

/*
We cannot do this !!

newGreet{
  words: 'Hello'
  number: 'five'
} 
*/

// we can do this
newGreet.message = "say Hello instead";

console.log("--------------");

/* Object
Everything can be an object and objects do have properties and properties have values,
so an object is a key value pair. The order of the key is not reserved, or there is no order.
To create an object literal, we use two curly brackets.
 */

// An empty object

const newObject = {};

// Object with values

const person = {
  firstName: "Sujan",
  lastName: "Shrestha",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isStudent: true,
};

console.log(person);

console.log("--------------");

// Getting values from an object

const newPerson = {
  firstName: "Sujan",
  lastName: "Shrestha",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  isStudent: true,
  phone: "123456789",
};

// accessing the values

console.log(newPerson.firstName);
console.log(newPerson.lastName);
console.log(newPerson.age);
console.log(newPerson.location); // undefined

// value can be accessed using square bracket and key name

console.log(newPerson["firstName"]);
console.log(newPerson["lastName"]);
console.log(newPerson["age"]);
//console.log(newPerson["location"]); //undefined

/* 
Creating object methods

Now, the newPerson object has fullName properties.
The fullName is function inside the newPperson object and we call it an object method.
The this key word refers to the object itself.
We can use the word this to access the values of different properties of the object.

We can not use an arrow function as object method because the word this refers to
the window inside an arrow function instead of the object itself.
*/

console.log(newPerson.fullName());

console.log("--------------");

/* 
Setting new key for an object

An object is a mutable data structure and we can modify the content of an object after it gets created.
*/

newPerson.course = "Computer Science";
newPerson.title = "Student";
newPerson.skills.push("JS"); // this pushes inside skills array
//newPerson.skills = "CSS3"; // this replaces skills arryay with new skills key pair
newPerson.isStudent = "False"; // this changes true to false

console.log(newPerson);

console.log("--------------");

newPerson.getInfo = function () {
  /*   let skillsWithoutLastSkills = this.skills
    .splice(0, this.skills.length - 1)
    .join(", ");
  let lastSkill = this.skills.splice(this.skills.length - 1)[0];

  let skills = `${skillsWithoutLastSkills}, and ${lastSkill}`;
  let fullName = this.fullName(); */
  let statement = `${this.fullName()} is a ${this.title}.\nHe lives in ${
    this.country
  }.\nHe studies ${this.skills}.`;
  return statement;
};

console.log(newPerson);
console.log(newPerson.getInfo());

console.log("--------------");

// Object Methods
// Object.assign: To copy an object without modifying the original object

const person2 = {
  firstName: "Sujan",
  lastName: "Shrestha",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  isStudent: true,
  phone: "123456789",
  getPersonInfo: function () {
    return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`;
  },
  address: {
    street: "Street 1A",
    pobox: 0022,
    city: "Helsinki",
  },
};

const copyperson2 = Object.assign({}, person2);
console.log(copyperson2);
console.log("---getPersonInfo---");
console.log(copyperson2.getPersonInfo());

console.log("--------------");

// Getting object keys using Object.keys()

const keys = Object.keys(copyperson2);
console.log(keys); //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']

console.log("--------------");

const add = Object.keys(copyperson2.address);
console.log(add); //['street', 'pobox', 'city']

console.log("--------------");

// Object.values:To get values of an object as an array

const value = Object.values(copyperson2);
console.log(value);

console.log("--------------");

// Object.entries:To get the keys and values in an array

const entries = Object.entries(copyperson2);
console.log(entries);

console.log("--------------");

// hasOwnProperty: To check if a specific key or property exist in an object

console.log(copyperson2.hasOwnProperty("name")); // false
console.log(copyperson2.hasOwnProperty("address")); // true

// Any JavaScript object can be converted to an array using Object.values():

console.log("------Object.vavlues--------");

const Per = {
  name: "John",
  age: 30,
  city: "New York",
};

const objval = Object.values(Per);
console.log(objval);
