const users = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

// Get total mass of all users
const totalMass = users.reduce((acc, cur) => {
  return acc + cur.mass;
}, 0);
console.log("TOTAL MASS:", totalMass);

// Get total height of all users
const totalHeight = users.reduce((acc, cur) => {
  return acc + cur.height;
}, 0);
console.log("TOTAL HEIGHT:", totalHeight);

// Get total number of users by eye color
const byEyeColor = users.reduce((acc, cur) => {
  if (acc[cur.eye_color]) {
    acc[cur.eye_color] = acc[cur.eye_color] + 1;
  } else {
    acc[cur.eye_color] = 1;
  }
  return acc;
}, {});
console.log("BY EYE COLOR", byEyeColor);

// Get total number of users in all the users name
const totalName = users.reduce((acc, cur) => {
  return acc + cur.name.length;
}, 0);
console.log("TOTAL NAME LENGTH:", totalName);
