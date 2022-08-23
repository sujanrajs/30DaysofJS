// Write a script that prompt the user to enter base and height of the triangle and
// calculate an area of a triangle (area = 0.5 x b x h).
// Enter base: 20
// Enter height: 10
// The area of the triangle is 100

/* let base = prompt("Enter base", "");
let height = prompt("Enter height", "");
let area = 0.5 * base * height;
console.log(area);
alert("area of triangle is: " + area); */

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and
// calculate the perimeter of triangle (perimeter = a + b + c)
// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12

/* let sideA = parseInt(prompt("Enter side A", ""));
let sideB = parseInt(prompt("Enter side B", ""));
let sideC = parseInt(prompt("Enter side C", ""));
let perimeter = sideA + sideB + sideC;
alert("Perimeter of triangle is " + perimeter); */

// Get length and width using prompt and calculate an area of
// rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
/* let l = parseInt(prompt("Enter length", ""));
let w = parseInt(prompt("Enter width", ""));
let perimeter = 2 * (l + w);
let area = l * w;
alert(
  `Area of rectangle is ${area} and Perimeter of rectangle is ${perimeter}`
); */

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and
// circumference of a circle(c = 2 x pi x r) where pi = 3.14.
/* let r = parseInt(prompt("Enter radius", ""));
let circumference = 2 * Math.PI * r;
alert(`Circumference of circle is ${circumference}`); */

// Calculate the slope, x-intercept and y-intercept of y = 2x -2
// Slope is m = (y2-y1)/(x2-x1).
// Find the slope between point (2, 2) and point(6,10)
let x1 = 2,
  y1 = 2,
  x2 = 6,
  y2 = 10;

let m = (y2 - y1) / (x2 - x1);
console.log(m);

// Compare the slope of above two questions.

// ------------------------- need review -------------------------------------

// Calculate the value of y (y = x2 + 6x + 9).
// Try to use different x values and figure out at what x value y is 0.

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120

/* let hr = parseInt(prompt("Please enter hours", ""));
let perhr = parseInt(prompt("Rate per hour", ""));
let weeklyPay = hr * perhr;
alert(`Your weekly earning is ${weeklyPay}`); */

// If the length of your name is greater than 7 say, your name is long else say your name is short.
/* let yourName = prompt("Please enter your name", "");
let compare = yourName.length > 7 ? "Your name is long" : "Your name is short";
console.log(compare);
alert(compare); */

// Compare your first name length and your family name length and you should get this output.
let fName = "Sujan";
let lName = "Shrestha";
let compare =
  fName.length > lName.length
    ? `First name is longer than last name ${lName}`
    : `Last name is longer than first name ${fName}`;
console.log(compare);

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250;
let yourAge = 25;

let difference =
  myAge > yourAge
    ? `I am ${myAge - yourAge} years older than you`
    : `I am ${yourAge - myAge} years younger than you`;
console.log(difference);

// Using prompt get the year the user was born and if the user is 18 or above allow the user to
//drive if not tell the user to wait a certain amount of years.
/* let age = parseInt(prompt("Type your age", ""));
let decision =
  age >= 18 ? `You can drive` : `You need to wait ${18 - age} years to drive`;
console.log(decision);
alert(decision); */

/* let dob = parseInt(prompt("Type your dob", ""));
let personAge = new Date().getFullYear() - dob;
let decision =
  personAge >= 18
    ? `You can drive`
    : `You need to wait ${18 - personAge} years to drive`;
console.log(decision); */

// Write a script that prompt the user to enter number of years.
//Calculate the number of seconds a person can live. Assume some one lives just hundred years
// Enter number of years you live: 100
// You lived 3153600000 seconds.

// Create a human readable time format using the Date time object
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm

let td = new Date();
console.log(
  `${td.getFullYear()}-${td.getMonth()}-${td.getDate()}, ${td.getHours()}:${td.getMinutes()}
${td.toLocaleString()}`
);

// Create a human readable time format using the Date time object.
// The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05
