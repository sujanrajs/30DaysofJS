const users = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 198,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

/* 
When the sort() function compares two values, it sends the values to the compare function,
and sorts the values according to the returned (negative, zero, positive) value.

If the result is negative a is sorted before b.
If the result is positive b is sorted before a.
*/

// sort by mass
const byMass = users.sort((a, b) => {
  return a.mass - b.mass;
});
console.log("BY MASS:", byMass); // increment

const byMassAgain = users.sort((a, b) => {
  return b.mass - a.mass;
});
console.log("BY MASS:", byMassAgain); // decrement

// sort by height
const byHeight = users.sort((a, b) => {
  return a.height - b.height;
});
console.log("BY HEIGHT:", byHeight);

// sort by name
const byName = users.sort((a, b) => {
  if (a.name < b.name) return -1;
  return 1; // flipping return numbers -1 to 1 for ascending/descending order
});
console.log("BY NAME:", byName);

// sort by gender
const byGender = users.sort((a, b) => {
  if (a.gender === "female") return -1;
  return 1;
});
console.log("BY GENDER:", byGender);
