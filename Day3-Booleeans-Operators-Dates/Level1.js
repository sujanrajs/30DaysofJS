// Declare firstName, lastName, country, city, age, isMarried, year variable and
// assign value to it and use the typeof operator to check different data types.
let firstName = "Sujan Raj";
let lastName = "Shrestha";
let country = "Finland";
let city = "Helsinki",
  age = "100",
  isMarried = "true",
  year = "2022";

// Check if type of '10' is equal to 10
console.log(typeof "10" == 10);

// Check if parseInt('9.8') is equal to 10
console.log(parseInt("9.8") == 10);

// Boolean value is either true or false.
// Write three JavaScript statement which provide truthy value.
console.log(1);
console.log(2 > 1);
console.log("this is string");

// Write three JavaScript statement which provide falsy value.
console.log(0);
console.log(NaN);
console.log(2 > 1);
console.log("");

// Figure out the result of the following comparison expression first without using console.log().
//After you decide the result confirm it using console.log()
console.log(4 > 3); //true
console.log(4 >= 3); //true
console.log(4 < 3); //false
console.log(4 <= 3); //false
console.log(4 == 4); //true
console.log(4 === 4); //true
console.log(4 != 4); //false
console.log(4 !== 4); //false
console.log(4 != "4"); //false
console.log(4 == "4"); //true
console.log(4 === "4"); //false

// Find the length of python and jargon and make a falsy comparison statement.
console.log(
  "Find the length of python and jargon and make a falsy comparison statement"
);
let a = "python";
let b = "jargon";
console.log(a.length != b.length);

// Figure out the result of the following expressions first without using console.log().
// After you decide the result confirm it by using console.log()
console.log("-----------------------------------");

console.log(4 > 3 && 10 < 12); //true
console.log(4 > 3 && 10 > 12); //false
console.log(4 > 3 || 10 < 12); //true
console.log(4 > 3 || 10 > 12); //true
console.log(10 > 12 || 4 > 3); //true
console.log(!(4 > 3)); //false
console.log(!(4 < 3)); //true
console.log(!false); //true
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); //true
console.log(!(4 === "4")); //true

// There is no 'on' in both dragon and python
console.log("There is no on in both dragon and python");
let c = "deagon";
let d = "python";
console.log(c.match("on") === d.match("on"));

// Use the Date object to do the following activities
// What is the year today?
console.log(new Date().getFullYear());

// What is the month today as a number?
console.log(new Date().getMonth());

// What is the date today?
console.log(new Date().getDate());

// What is the day today as a number?
console.log(new Date().getDay());

// What is the hours now?
console.log(new Date().getHours());

// What is the minutes now?
console.log(new Date().getMinutes());

// needs review ------------------------------------------------------------
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
let start = new Date(1970).getFullYear();
console.log(start);
let end = new Date().getFullYear();
console.log(end);
let diff = end - start;
console.log(diff);
