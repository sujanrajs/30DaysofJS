// if else and if elseif

let weather = "sunny";
if (weather === "rainy") {
  console.log("You need a rain coat.");
} else if (weather === "cloudy") {
  console.log("It might be cold, you need a jacket.");
} else if (weather === "sunny") {
  console.log("Go out freely.");
} else {
  console.log("No need for rain coat.");
}

// switch case

let w = "cloudy";
switch (weather) {
  case "rainy":
    console.log("Wear a rain coat");
    break;
  case "cloudy":
    console.log("It might be cold, you need light jacket");
    break;
  case "sunny":
    console.log("You can walk freely");
    break;
  default:
    console.log("No need for rain coat");
}

// Uncomment to run below's code
/* let num = prompt("Enter number");
switch (true) {
  case num > 0:
    console.log("Number is positive");
    break;
  case num == 0:
    console.log("Numbers is zero");
    break;
  case num < 0:
    console.log("Number is negative");
    break;
  default:
    console.log("Entered value was not a number");
} */

// ternary operators

let isRaining = true;
isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");

// Get user input using prompt(“Enter your age:”). If user is 18 or older ,
// give feedback:'You are old enough to drive'
// but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

/* let age = prompt("Please enter your age");
if (age >= 18) {
  alert(`You can drive`);
} else {
  alert(`You need to wait ${18 - age} years to drive`);
} */

// Compare the values of myAge and yourAge using if … else. Based on the comparison and
// log the result to console stating who is older (me or you).
// Use prompt(“Enter your age:”) to get the age as input.

/* let myAge = 25;
let yourAge = prompt("Enter your age");
if (myAge > yourAge) {
  alert(`Iam ${myAge - yourAge} years older than you`);
} else if (yourAge > myAge) {
  alert(`You are ${yourAge - myAge} years older than me`);
} else {
  alert(`We are of same age YaY!!`);
} */

// If a is greater than b return 'a is greater than b' else 'a is less than b'.
// Try to implement it in to ways: if else and terenary

let a = 25;
let b = 25;
if (a > b) {
  console.log(`A is greater than B`);
} else if (a < b) {
  console.log(`B is greater than A`);
} else {
  console.log(`Both are equal`);
}

console.log("---------Terenary Operator-----------");

a > b
  ? console.log(`A is greater than B`)
  : a < b
  ? console.log(`B is greater than A`)
  : console.log(`Both are equal`);

// Even numbers are divisible by 2 and the remainder is zero.
// How do you check, if a number is even or not using JavaScript?

let c = 12;
c % 2 == 0
  ? console.log(`The number is odd`)
  : console.log(`The number is even`);
