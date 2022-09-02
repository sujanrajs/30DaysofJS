// Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable.

// Destructuring Arrays

const num = [1, 2, 3];
let [numone, numTwo, numThree] = num;
console.log(numone, numTwo, numThree); // 1 2 3

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
const [frontEnd, backEnd] = fullStack;
const FrontEnd = frontEnd;
const BackEnd = backEnd;
console.log("FE:", FrontEnd);
console.log("BE:", BackEnd);

/* 
We can not assign variable to all the elements in the array.
We can destructure few of the first and we can get the remaining as array using spread operator(...)
*/

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, ...rest] = nums;
console.log(num1, num2); // 1 2
console.log(rest); // [3, 4, 5, 6, 7, 8, 9, 10]
console.log(nums); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log("--------------");

// Destructuring during iteration

const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
];

for (const [country, city] of countries) {
  console.log(country, city);
}
/* 
Finland Helsinki
Sweden Stockholm
*/

const fullStack2 = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

for (const [first, second] of fullStack2) {
  console.log(first, second);
}
/* 
HTML CSS
Node Express
*/

/* 
Destructuring Object
When we destructure the name of the variable we use to destructure should
be exactly the same as the key or property of the object. See the example below.
*/

const rectangle = {
  width: 10,
  height: 20,
  area: 200,
};
let { width, height, area, perimeter } = rectangle;
console.log(width, height, area, perimeter);

// Renaming during destructturing
let { width: w, height: h, area: a, perimeter: p } = rectangle;
console.log(w, h, a, p);

/* 
If the key is not found in the object the variable will be assigned to undefined.
Sometimes the key might not be in the object, in that case we can give a default value during declaration.
*/
const square = {
  wid: 10,
  ht: 20,
  ar: 200,
};
//let { wid, ht, ar, pmtr = 60 } = square;
//console.log(wid, ht, ar, pmtr); // 10 20 200 60

//Let us modify the object:width to 30 and perimeter to 80
let { wid = 30, ht, ar, pmtr = 60 } = square;
console.log(wid, ht, ar, pmtr); // 10 20 200 60

/* 
Destructuring keys as a function parameters.
Let us create a function which takes a rectangle object and it returns a perimeter of a rectangle.
*/
// Object parameter without destructuring

const rect = {
  width: 20,
  height: 10,
};

const calculatePerimeter = (rectangle) => {
  return 2 * (rectangle.width + rectangle.height);
};
console.log(calculatePerimeter(rect)); // 60

console.log("--------------");

const person = {
  firstName: "Sujan",
  lastName: "Shrestha",
  age: 250,
  country: "Finland",
  job: "Student",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  languages: ["English", "Suomi(Finnish)"],
};

// Let us create a function which give information about the person object without destructuring

const getInfo = (pobj) => {
  const skills = pobj.skills;
  const formattedSkills = skills.slice(0, -1).join(", ");
  const languages = pobj.languages;
  const formattedLanguages = languages.slice(0, -1).join(", ");

  return `${formattedSkills} and ${formattedLanguages} and ${pobj.job}`;
};

console.log(getInfo(person));
console.log(person.country);

// Object parameter with destructuring
const calcPerimeter = ({ width, height }) => {
  return 2 * (width + height);
};
console.log(calcPerimeter(rect)); // 60

// Let us create a function which give information about the person object with destructuring

const getInfo2 = ({
  firstName,
  lastName,
  age,
  country,
  job,
  skills,
  languages,
}) => {
  const formattedSkills = skills.slice(0, -1).join(", ");
  const formattedLanguages = languages.slice(0, -1).join(", ");

  return `${formattedSkills} and ${formattedLanguages} and ${pobj.job}`;
};

console.log(getInfo(person));

console.log("--------------");

//Destructuring object during iteration
const toDo = [
  {
    task: "task1",
    time: "6am",
    completed: true,
  },
  {
    task: "task2",
    time: "7am",
    completed: true,
  },
  {
    task: "task3",
    time: "9am",
    completed: false,
  },
];

for (const { task, time, completed } of toDo) {
  console.log(task, time, completed);
}

console.log("--------------");

// Spread or Rest Operator
// When we destructure an array we use the spread operator(...) to get the rest elements as array.
// In addition to that we use spread operator to spread array elements to another array.

const numms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [numms1, numms2, numms3, ...restt] = numms;

console.log(numms1, numms2, numms3); // 1 2 3
console.log(restt); // [4 5 6 7 8 9 10]

const countries2 = [
  "Germany",
  "France",
  "Belgium",
  "Finland",
  "Sweden",
  "Norway",
  "Denmark",
  "Iceland",
];

let [gem, fra, , ...nordicCountries] = countries2;

console.log(gem); // Germany
console.log(fra); // France // Belgium is left empty
console.log(nordicCountries); // ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']

console.log("--------------");

// Spread operator to copy array
const evens = [0, 2, 4, 6, 8, 10];
const evenNumbers = [...evens];
console.log(evenNumbers); // same as evens

const odds = [1, 3, 5, 7, 9];
const oddNumbers = [...odds];
console.log(oddNumbers); // same as odds

const wholeNumbers = [...evens, ...odds];
console.log(wholeNumbers); // all together in an array

const frontEnd3 = ["HTML", "CSS", "JS", "React"];
const backEnd3 = ["Node", "Express", "MongoDB"];
const fullStack3 = [...frontEnd, ...backEnd];

console.log(fullStack3);

console.log("--------------");

/* Spread operator to copy object
We can copy an object using a spread operator */

const user = {
  name: "Sujan",
  title: "Student",
  country: "Finland",
  city: "Helsinki",
};

const copiedUser = { ...user };
console.log(copiedUser);

// Modifying or changing the object while copying
const newCopiedUser = { ...user, title: "Developer" };
console.log(newCopiedUser);

console.log("--------------");

//Spread operator with arrow function
/* 
Whenever we like to write an arrow function which takes unlimited number of arguments
we use a spread operator. If we use a spread operator as a parameter,
the argument passed when we invoke a function will change to an array. */

const sumAllNums = (...args) => {
  console.log(args);
};

sumAllNums(1, 2, 3, 4, 5); // [1,2,3,4,5]

const sumAllNumms = (...args) => {
  let sum = 0;
  for (const num of args) {
    sum += num;
  }
  return sum;
};

console.log(sumAllNumms(1, 2, 3, 4, 5)); // 15
console.log(sumAllNumms(1, 2, 3, 4, 5, 1000, 3, 4, 65, 312, 23, 567785));
