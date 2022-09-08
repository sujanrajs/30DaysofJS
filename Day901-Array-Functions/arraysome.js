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

// Is there atleast one male user ?
const oneMale = users.some((onemale) => {
  return onemale.gender === "male";
});
console.log("at least one male:", oneMale); // true

// Is there atleast one user with blue eyes ?
const blueEyes = users.some((blueeyes) => {
  return blueeyes.eye_color === "blue";
});
console.log("at least one blue eye:", blueEyes); // true

// Is there atlease one user taller than 200 ?
const tallerThan = users.some((tallerthan) => {
  return tallerthan.height > 200;
});
console.log("at least one user taller than 200:", tallerThan); // false

// Is there atleast one user that has mass less than 50 ?
const massLess = users.some((massless) => massless.mass < 50); // implicit return is used
console.log("at least one user less than 50:", massLess); // true
