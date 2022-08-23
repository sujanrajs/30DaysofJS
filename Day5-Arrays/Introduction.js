// creating empty array
const arr = Array();
// or
// let arr = new Array()
console.log(arr); // []
console.log("-------------------------");

// the most recommended ways  to built array
const thiIsArray = [];
console.log(thiIsArray);

const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
const fruits = ["banana", "orange", "mango", "lemon"]; // array of strings, fruits
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables
const animalProducts = ["milk", "meat", "butter", "yoghurt"]; // array of strings, products
const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

// print arrays and its lengths
console.log("Array of numbers:", numbers);
console.log("Number of numbers array:", numbers.length);

console.log("Array of fruits:", fruits);
console.log("Number of fruits:", fruits.length);

// we can also create array using various data types
const newArray = [
  "Sujan",
  25,
  true,
  {
    country: "Finland",
    city: "Helsinki",
  },
  {
    skills: ["HTML", "CSS", "JS", "React", "Python"],
  },
];
console.log(newArray);

let js = "JavaScript";
const charsInJs = js.split(""); // this seperates each alphabet in an array
const charsInJs2 = js.split(" "); // this makes one word in an array
console.log(charsInJs);
console.log(charsInJs2);

let companyStr = "facebook, microsoft, google, apple, oracle, amazon";
console.log(companyStr);
const companyArr = companyStr.split(",");
console.log(companyArr);

let txt = "Iam studying #JS and #FullStack";

let removeChar = txt.replace(/[^a-zA-Z]/g, " ");
console.log(removeChar); // Removes characters

let removeSpace = removeChar.replace(/ +/g, " ");
console.log(removeSpace); // Removes spaces

const txtArr = removeSpace.split(" ");
console.log(txtArr);

// Accessing items

const fruit = ["Apple", "Banana", "Mango"];

let firstFruit = fruit[0];
console.log(firstFruit);

let lastFruitIndex = fruit.length - 1;
let lastFruit = fruit[lastFruitIndex];
console.log(lastFruit);

const nums = [0, 5, 2.5, 10, 100, 50];

console.log(nums.length);
console.log(nums);
console.log(nums[nums.length - 1]);

// Modifying Array Elements and it is mutable

nums[0] = 1; // changing above index-0 number-0 to 1
nums[3] = 15; // changing above index-3 number-10 to 15

console.log(nums);

// Array constructor

const emptyArray = Array();
console.log(emptyArray);

const fiveEmptyvalues = Array(5);
console.log(fiveEmptyvalues);

// fill
const sixXvalues = Array(6).fill("X");
console.log(sixXvalues);

const threevalues = Array(3).fill("Words");
console.log(threevalues);

// Concatenating array using concat

const firstArr = [1, 2, 3];
const secondArr = [4, 5, 6];
const thirdArr = firstArr.concat(secondArr);

console.log(thirdArr);

// array length

console.log(thirdArr.length);

// to find the index of array

console.log(thirdArr.indexOf(3));

// check if element exists in array (index of -1 means the element does not exists)

const fruitList = ["Apple", "Mango", "Banana", "Melon"];
console.log(fruitList);

let indexOfAvocado = fruitList.indexOf("avocado");

console.log(indexOfAvocado); // if the index is -1 then the element does not exists in the array

indexOfAvocado === -1
  ? console.log("Avocado does not exists")
  : console.log("Avocardo exists");

// getting last index of an element in array
// lastIndexOf: It gives the position of the last item in the array.
// If it exist, it returns the index else it returns -1.

const numList = [1, 2, 3, 4, 5, 3, 8, 9, 1, 5, 7, 3, 2, 2, 10];

console.log(numList.lastIndexOf(2));
console.log(numList.lastIndexOf(10));
console.log(numList.lastIndexOf(3));
console.log(numList.lastIndexOf(20));

// includes:To check if an item exist in an array.
// If it exist it returns the true else it returns false.

const webTech = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

console.log(webTech.includes("React")); // true
console.log(webTech.includes("C#")); // false

// check if the data type is array

console.log(Array.isArray(webTech)); // true

const number = 100;
console.log(Array.isArray(number)); // false

// converting array to string

console.log(webTech.toString());
console.log(numList.toString());

/* Joining array elements
join is used to join the elements of the array,
the argument we passed in the join method will be joined in the array and return as a string.
By default, it joins with a comma,
but we can pass different string parameter which can be joined between the items.
*/

const x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(x.join());

const nam = ["Sujan", "Raj", "Shrestha"];
console.log(nam.join());
console.log(nam.join(""));
console.log(nam.join(" "));
console.log(nam.join(", "));
console.log(nam.join("+"));

/* Slice array elements
Slice: To cut out a multiple items in range.
It takes two parameters:starting and ending position.
It doesn't include the ending position.
 */

console.log(numList.slice());
console.log(numList.slice(1, 4)); // [2,3,4]

/* Splice method in array
Splice: It takes three parameters:
Starting position, number of items to be removed and number of items to be added. */

// Array.splice(start, removeCount, newItem, newItem, newItem, ...)

const newnumList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//console.log(newnumList.splice()); // removes all the items, result []
//console.log(newnumList.splice(0, 1)); // removes all except index 0, result [0]
//console.log(newnumList.splice(0, 5)); // removes after 5 result [0,1,2,3,4]

let months = ["January", "February", "Monday", "Tuesday"];
let days = months.splice(2);
console.log(days); // ["Monday", "Tuesday"]

let months1 = ["January", "February", "Monday", "Tuesday"];
let days1 = months1.splice(2, 1);

console.log(days1); // ["Monday"]
console.log(months1); // ["January", "February", "Tuesday"]

console.log("----------------------");

let months3 = ["0January", "1February", "2Monday", "3Tuesday"];
let days3 = months3.splice(2, 2, "March", "April");

console.log(days3); // ["2Monday", "3Tuesday"]
console.log(months3); // ["0January", "1February", "2March", "3April"]

/* 
Adding item to an array using push
Push: adding item in the end. To add item to the end of an existing array we use the push method.
 */

const items = ["item0", "item1", "item2", "item3"];
items.push("newitem4"); // [ 'item0', 'item1', 'item2', 'item3', 'newitem4' ]
items.push(5, 6); // [ 'item0', 'item1', 'item2', 'item3', 'newitem4', 5, 6 ]

// pop: Removing item in the end
items.pop(); // [ 'item0', 'item1', 'item2', 'item3', 'newitem4', 5 ]
console.log(items);

// shift: Removing one array element from the beginning
items.shift(); // [ 'item1', 'item2', 'item3', 'newitem4', 5 ]
console.log(items);

// unshift: Adding array element in the beginning of the array
items.unshift("0newitem", "01newitem"); // [ '0newitem', '01newitem', 'item1', 'item2', 'item3', 'newitem4', 5 ]
console.log(items);

// reverse: reverse the order of an array.
items.reverse(); // [ 5, 'newitem4', 'item3', 'item2', 'item1', '01newitem', '0newitem' ]
console.log(items);

// sort: arrange array elements in ascending order.
const techItems = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

techItems.sort(); // asc: [ 'CSS', 'HTML', 'JavaScript', 'MongoDB', 'Node', 'React', 'Redux' ]
techItems.reverse(); // desc: [ 'Redux', 'React', 'Node', 'MongoDB', 'JavaScript', 'HTML', 'CSS' ]
console.log(techItems);

const numnum = [1, 4, 6, 9, 3, 4, 8, 10, 56, 100, 4, 1, 3];

// lowest to highest
numnum.sort(function (a, b) {
  return a - b;
});

// after sorting reversing can make it descending

// highest to lowest
numnum.sort(function (a, b) {
  return b - a;
});

// after sorting asceending lowest can be the lowest number and lastIndex can be the highest number

console.log(numnum);

// arrays of arrays
const firstNum = [0, 1, 2, 3];
const secondNum = [4, 5, 6, 7];
const total = [firstNum, secondNum]; // [ [ 0, 1, 2, 3 ], [ 4, 5, 6, 7 ] ]
console.log(total);
console.log(total[0]); // [ 0, 1, 2, 3 ]
console.log(total[0][2]); // 2

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = [frontEnd, backEnd]; // [ [ 'HTML', 'CSS', 'JS', 'React', 'Redux' ], [ 'Node', 'Express', 'MongoDB' ] ]
console.log(fullStack);
console.log(fullStack.length); // 2
console.log(fullStack[0]); // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]); // ["Node", "Express", "MongoDB"]
console.log(fullStack[1][2]); // MongoDB
