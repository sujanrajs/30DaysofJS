// Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
let statement1 = `'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`;
console.log(statement1);

// Using console.log() print out the following quote by Mother Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
let statement2 = `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`;
console.log(statement2);

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let a = "10";
let b = 10;
console.log(typeof a == typeof b);
let c = parseInt(a);
console.log(typeof c == typeof b);

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let d = "9.8";
let e = 10;
console.log(parseFloat(d));
let f = Math.round(d);
console.log(f);

// Check if 'on' is found in both python and jargon
let g = "python";
let h = "jargon";
console.log(g.match("on"));

// I hope this course is not full of jargon. Check if jargon is in the sentence.
let i = "I hope this course is not full of jargon";
console.log(i.match("jargon"));

// Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random() * 101));

// Generate a random number between 50 and 100 inclusively.
console.log(Math.floor(Math.random() * 51) + 50);

// Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random() * 256));

// Access the 'JavaScript' string characters using a random number.
let j = Math.floor(Math.random() * 10);
let k = "JavaScript";
console.log(k.charAt(j));

// Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
console.log("1\t1\t1\t1\n2\t1\t2\t4\n3\t1\t3\t9");

// Use substr to slice out the phrase because because because from the following sentence:
//'You cannot end a sentence with because because because is a conjunction'
let l =
  "You cannot end a sentence with because because because is a conjunction";
console.log("first index of because is: ", l.indexOf("because"));
console.log("last index of because is: ", l.lastIndexOf("because"));
console.log(l.replace(/because/g, ""));
