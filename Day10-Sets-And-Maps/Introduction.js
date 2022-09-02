/* 
SET

Set is a collection of elements. Set can only contains unique elements.
Let us see how to create a set in the section below.
*/

// Creating an empty set

const emptySet = new Set();
console.log(emptySet); // Set(0){}

console.log("--------------");

// Creating set from array

const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];

const setOfLang = new Set(languages);
console.log(setOfLang); // Set(4) {"English", "Finnish", "French", "Spanish"}

// Set is an iterable object and we can iterate through each elements.

for (const language of setOfLang) {
  console.log(language);
}
/* 
  English
  Finnish
  French
  Spanish
 */

console.log("--------------");

// Adding an element to a set

const companies = new Set(); // creating an empty set
console.log(companies.size); // 0

companies.add("Google");
companies.add("Facebook");
companies.add("Amazon");

console.log(companies.size); // 3
console.log(companies); // Set(5) {"Google", "Facebook", "Amazon"}

const languages1 = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];

const langSet = new Set(languages1);
console.log(langSet); // Set(4) {"English", "Finnish", "French", "Spanish"}

const counts = [];
const count = {};

for (const l of langSet) {
  const filteredLang = languages1.filter((lng) => lng === l);
  console.log(filteredLang); // ["English", "English", "English"]
  counts.push({ lang: l, count: filteredLang.length });
}
console.log(counts);

/* 
[
  { lang: 'English', count: 3 },
  { lang: 'Finnish', count: 1 },
  { lang: 'French', count: 2 },
  { lang: 'Spanish', count: 1 },
]
*/

// Other use case of set. For instance to count unique item in an array.

const numbers = [5, 3, 2, 5, 5, 9, 4, 5];
const setOfNumbers = new Set(numbers);

console.log(setOfNumbers); // Set(5) {5, 3, 2, 9, 4}

/* 
Union of sets
To find a union to two sets can be achieved using spread operator.
Lets find the union of set A and set B (A U B)
*/

let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
let c = [...a, ...b];

let A = new Set(a);
let B = new Set(b);
let C = new Set(c);

console.log(C); // Set(6) {1, 2, 3, 4, 5,6}

/* 
Intersection of sets
To find an intersection of two sets can be achieved using filter.
Lets find the intersection of set A and set B (A ∩ B)
*/

let intersection = a.filter((num) => B.has(num));
console.log(intersection); // [3, 4, 5]
let InterSet = new Set(intersection);
console.log(InterSet); // Set(3) {3, 4, 5}

/* 
Difference of sets

To find an the difference between two sets can be achieved using filter.
Lets find the different of set A and set B (A \ B)
*/

let X = new Set(a);
let Y = new Set(b);

let z = a.filter((num) => !B.has(num));
console.log(z); // [1, 2]
let Z = new Set(z);
console.log(Z); // Set(2) {1, 2}

console.log("--------------");

/* 
Map
*/
// Creating an empty map
const emptyMap = new Map();
console.log(emptyMap); // Map(0) {}

// Creating map from array
countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", ""],
  ["Unknown"],
];
const countriesMap = new Map(countries);
console.log(countriesMap); // Map(4) {'Finland' => 'Helsinki', 'Sweden' => 'Stockholm', 'Norway' => '', 'Unknown' => undefined}
console.log(countriesMap.size); // 4

// Adding values to map
countriesMap.set("USA", "Washington DC");
countriesMap.set("Estonia", "Tallinn");
console.log(countriesMap);

// Getting value from Map
console.log(countriesMap.get("Finland")); // Helsinki

// Checking key in Map
// Check if a key exists in a map using has method. It returns true or false.
console.log(countriesMap.has("Finland")); // true
console.log(countriesMap.has("Helsinki")); // false

// Getting all values from map using loop
for (const country of countriesMap) {
  console.log(country);
}
/*
(2) ['Finland', 'Helsinki']
(2) ['Sweden', 'Stockholm']
(2) ['Norway', '']
(2) ['Unknown', undefined]
(2) ['USA', 'Washington DC']
(2) ['Estonia', 'Tallinn'] */

for (const [country, city] of countriesMap) {
  console.log(country, city);
}
/* 
Finland Helsinki
Sweden Stockholm
Norway 
Unknown undefined
USA Washington DC
Estonia Tallinn */


