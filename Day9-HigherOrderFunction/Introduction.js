/* 
Higher Order Function
Higher order functions are functions which take other function as a parameter or return a function as a value.
The function passed as a parameter is called callback.
*/

/* 
Callback
A callback is a function which can be passed as parameter to other function.
*/

// a callback function, the name of the function could be any name
const callback = (n) => {
  return n ** 2;
};

console.log(callback(2));

// function that takes other function as a callback
function cube(callback, n) {
  return callback(n) * n;
}

console.log(cube(callback, 3));

console.log("--------------");

/* 
Returning function
Higher order functions return function as a value​
*/

const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatever = (t) => {
      return n + m + t;
    };
    return doWhatever;
  };
  return doSomething;
};

console.log(higherOrder(2)(3)(10));

console.log("--------------");

// Let us see were we use call back functions. For instance the forEach method uses call back.

const numbers = [1, 2, 3, 4, 5];
const sumArray = (arr) => {
  let sum = 0;
  const callback = function (element) {
    sum += element;
  };
  arr.forEach(callback);
  return sum;
};
console.log(sumArray(numbers));

// The above example can be simplified as follows:

const nums = [1, 2, 3, 4, 5];
const sumArr = (arr) => {
  let summ = 0;
  arr.forEach(function (element) {
    summ += element;
  });
  return summ;
};
console.log(sumArr(nums));

console.log("--------------");

/* 
Setting time
In JavaScript we can execute some activities in a certain interval of time or we can schedule(wait)
for some time to execute some activities.

setInterval
setTimeout
Setting Interval using a setInterval function
In JavaScript, we use setInterval higher order function to do some activity continuously
with in some interval of time. The setInterval global method take a
callback function and a duration as a parameter.
The duration is in milliseconds and the callback will be always called in that interval of time.
*/

/* // syntax
function callback() {
  // code goes here
}
setInterval(callback, duration) */

function sayHello() {
  console.log("Hello");
}
// setInterval(sayHello, 1000); // this prints the hello every seconds

/* 
Setting a time using a setTimeout

In JavaScript, we use setTimeout higher order function to execute some action at some time in the future.
The setTimeout global method take a callback function and a duration as a parameter.
The duration is in milliseconds and the callback wait for that amount of time.

// syntax
function callback() {
  // code goes here
}
setTimeout(callback, duration) // duration in milliseconds
*/

function sayHello() {
  console.log("Hello");
}
setTimeout(sayHello, 2000); // it prints hello after it waits for 2 seconds.

console.log("--------------");

/* 
Functional Programming

Instead of writing regular loop, latest version of JavaScript introduced lots of
built in methods which can help us to solve complicated problems. All builtin methods take callback function.
In this section, we will see forEach, map, filter, reduce, find, every, some, and sort.
*/

/* 
forEach
forEach: Iterate an array elements. We use forEach only with arrays.
It takes a callback function with elements, index parameter and array itself.
The index and the array optional.

arr.forEach(function (element, index, arr) {
  console.log(index, element, arr)
})
// The above code can be written using arrow function
arr.forEach((element, index, arr) => {
  console.log(index, element, arr)
})
// The above code can be written using arrow function and explicit return
arr.forEach((element, index, arr) => console.log(index, element, arr))
*/

let sum1 = 0;
const numbs = [1, 2, 3, 4, 5];
numbs.forEach((num) => console.log(num));
console.log(sum1); // 1 2 3 4 5

numbs.forEach((num) => (sum1 += num));
console.log(sum1); // 15

const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
countries.forEach((element) => console.log(element.toUpperCase()));

console.log("--------------");

/* 
map

map: Iterate an array elements and modify the array elements.
It takes a callback function with elements, index , array parameter and return a new array.

const modifiedArray = arr.map(function (element, index, arr) {
  return element
})

Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/

const num1 = [1, 2, 3, 4, 5];
const copynum1 = num1.map((num) => num);
const num1Sq = num1.map((num) => num * num);
console.log(copynum1);
console.log(num1Sq);

console.log("--------------");

const names = ["Mikko", "Johnas", "Elena"];
const namesUpperCase = names.map((naam) => naam.toUpperCase());
console.log(namesUpperCase);

console.log("--------------");

const namesFirstTwoletters = names.map((naam) => naam.slice(0, 2));
console.log(namesFirstTwoletters);

console.log("--------------");

/* 
filter
Filter: Filter out items which full fill filtering conditions and return a new array.
*/

country = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];

const contContainingLand = country.filter((count) => count.includes("LAND"));
console.log(contContainingLand);

const contEndsWithia = country.filter((count) => count.endsWith("IA"));
console.log(contEndsWithia);

const countWith5Letters = country.filter(
  (count5Letter) => count5Letter.length === 5
);
console.log(countWith5Letters);

console.log("--------------");

const scores = [
  { name: "Sujan", score: 95 },
  { name: "Raj", score: 80 },
  { name: "Shrestha", score: 85 },
];

const scoreMoreThan80 = scores.filter((scr) => scr.score > 80);
console.log(scoreMoreThan80);

console.log("--------------");

/* 
reduce
reduce: Reduce takes a callback function.
The call back function takes accumulator, current, and optional initial value as a parameter
and returns a single value. It is a good practice to define an initial value for the accumulator value.
If we do not specify this parameter, by default accumulator will get array first value.
If our array is an empty array, then Javascript will throw an error.

arr.reduce((acc, cur) => {
  // some operations goes here before returning a value
 return 
}, initialValue)

*/

const num2 = [1, 2, 3, 4, 5];
const sum2 = num2.reduce((acc, cur) => acc + cur, 0);
console.log(sum2);

console.log("--------------");

/* 
every
every: Check if all the elements are similar in one aspect. It returns boolean
*/

const name1 = ["Sujan", "Raj", "Shrestha"];
const areAllStr = names.every((name) => typeof name === "string");
console.log(areAllStr); // true

const bools = [true, true, true, true];
const areAllTrue = bools.every((b) => b === false); // Are all true?
console.log(areAllTrue); // false

console.log("--------------");

/* 
find
find: Return the first element which satisfies the condition
*/

const ages = [22, 24, 25, 20, 18, 14, 10, 50, 26];
const age = ages.find((ag) => ag < 20);
console.log(age); // 18

const result = name1.find((name) => name.length > 7);
console.log(result); // Shrestha

const score = scores.find((user) => user.score > 80);
console.log(score); // { name: "Sujan", score: 95 }

console.log("--------------");

/* 
findIndex
findIndex: Return the position of the first element which satisfies the condition
*/

const result1 = ages.findIndex((age) => age <= 20);
console.log(result1); // 3

const result2 = name1.findIndex((nam) => nam > name1.length > 7);
console.log(result2); // -1

console.log("--------------");

/* 
some
some: Check if some of the elements are similar in one aspect. It returns boolean
*/

const name2 = ["Sujan", "Raj", "Shrestha", 10, 20];
const bool = [true, true, true, false];

const areSomeTrue = bool.some((b) => b === true);
console.log(areSomeTrue); // true

const areSomeName = name2.some((num) => typeof num === "number");
console.log(areSomeName); // true

console.log("--------------");

/* 
sort
sort: The sort methods arranges the array elements either ascending or descending order.
By default, the sort() method sorts values as strings.This works well for string array items but not for numbers.
If number values are sorted as strings and it give us wrong result. Sort method modify the original array.
It is recommended to copy the original data before you start using sort method.
*/

const products = ["Milk", "Coffee", "Sugar", "Honey", "Apple", "Carrot"];
// console.log(products.sort()); // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted.. copy before sorting
// console.log(products);
const sortedProducts = [...products];
console.log(sortedProducts.sort()); // sorted copy
console.log(products); // original

console.log("--------------");

/* 
Sorting Numeric values
As you can see in the example below, -3 came first after sorted in ascending order.
Sort converts items to string , since '-3' and other numbers compared,
1 which the beginning of the string '-3' became the smallest.
To avoid this, we use a compare call back function inside the sort method,
which return a negative, zero or positive.
*/

const number1 = [9.81, 3.14, 100, 37, -3, 0, -5];
// Using sort method to sort number items provide a wrong result. see below
console.log(number1.sort()); //[-3, -5, 0, 100, 3.14, 37, 9.81]
number1.sort(function (a, b) {
  return a - b;
});

console.log(number1); // [-5, -3, 0, 3.14, 9.81, 37, 100]

number1.sort(function (a, b) {
  return b - a;
});
console.log(number1); //[100, 37, 9.81, 3.14, 0, -3, -5]

console.log("--------------");

/* 
Sorting Object Arrays
Whenever we sort objects in an array, we use the object key to compare. Let us see the example below.

objArr.sort(function (a, b) {
  if (a.key < b.key) return -1
  if (a.key > b.key) return 1
  return 0
})

// or

objArr.sort(function (a, b) {
  if (a['key'] < b['key']) return -1
  if (a['key'] > b['key']) return 1
  return 0
})

*/

const users = [
  { name: "Sujan", age: 150 },
  { name: "Raj", age: -50 },
  { name: "Mamata", age: 100 },
  { name: "Puja", age: 22 },
];

users.sort((a, b) => {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0;
});
console.log(users); // sorted ascending according to age
