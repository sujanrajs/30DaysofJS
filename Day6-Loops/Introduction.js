// For loop structure
/* 
for(initialization; condition; expression){
    // code goes here
  } */

for (let i = 0; i <= 5; i++) {
  console.log(i);
}
// 0,1,2,3,4,5

for (let i = 0; i <= 5; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}
/* 
0 * 0 = 0
1 * 1 = 1
2 * 2 = 4
3 * 3 = 9
4 * 4 = 16
5 * 5 = 25 */

// converting array to upper case
const countries = ["Finland", "Sweden", "Denmark", "Norway"];
const newCountries = [];
for (let i = 0; i < countries.length; i++) {
  newCountries.push(countries[i].toUpperCase());
}
console.log(newCountries);
// [ 'FINLAND', 'SWEDEN', 'DENMARK', 'NORWAY' ]

// adding array of numbers
const numbers = [10, 20, 30, 40, 50, 60];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i]; // this can also be writtten as sum+=numbers[i]
}
console.log(sum);

// creating new array based on existing array
const num = [1, 2, 3, 4, 5];
const newNum = [];
for (let i = 0; i < num.length; i++) {
  newNum.push(numbers[i] ** 2);
}
console.log(newNum); // [1, 4, 9, 16, 25]

// while loop
let i = 0;
const iArr = [];
while (i <= 5) {
  iArr.push(i);
  i++;
}
console.log(iArr); // [ 0, 1, 2, 3, 4, 5 ]

// do while loop
let j = 0;
do {
  console.log(j);
  j++;
} while (j <= 5); // 0 1 2 3 4 5

console.log("--------------");

// for of loop -- We use for of loop for arrays.
// It is very hand way to iterate through an array
//if we are not interested in the index of each element in the array.
/* 
for (const element of arr){
  logic here
}
*/

const nums = [1, 2, 3, 4, 5];
for (const numm of nums) {
  console.log(numm);
} // 1 2 3 4 5

console.log("--------------");

for (const numm of nums) {
  console.log(numm * 2);
} // 2 4 6 8 10

console.log("--------------");

// adding all the numbers in the array
numm1 = [1, 2, 3, 4, 5];
let summ = 0;
for (const numm of numm1) {
  summ = summ + numm;
}
console.log(summ); // 15

console.log("--------------");

const webTechss = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

for (const tech of webTechss) {
  console.log(tech.toUpperCase());
} // HTML CSS JAVASCRIPT REACT NODE MONGODB

console.log("--------------");

for (const tech of webTechss) {
  console.log(tech[0]); // get only the first letter of each element,  H C J R N M
}

console.log("--------------");

const newArr = [];
for (const country of countries) {
  newArr.push(country.toUpperCase());
}

console.log(newArr); // ["FINLAND", "SWEDEN", "DENMARK", "NORWAY"]

console.log("--------------");

// Break

for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    // breaks at 3
    break;
  }
  console.log(i);
} // 0 1 2

console.log("--------------");

// Continue

for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    // skips at that point
    continue;
  }
  console.log(i);
} // 0 1 2 4 5
