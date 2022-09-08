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

// Does every users have blue eyes
const everyBlue = users.every((everyblue) => {
  return everyblue.eye_color === "blue";
});
console.log("IF ALL USERS HAVE BLUE EYES:", everyBlue);

// Does every users have mass greater then 40
const massFourty = users.every((everyfourty) => {
  return everyfourty.mass > 40;
});
console.log("IF ALL THE USERS HAVE MASS GREATER THAN 40:", massFourty);

// Does every users are shorter then 200
const everyShort = users.every((everyshort) => {
  return everyshort.height < 200;
});
console.log("IF ALL THE USERS HEIGHT LESS THAN 200", everyShort);

// Are every users male
const everyMale = users.every((everymale) => {
  return everymale.gender === "Male";
});

console.log("IF ALL THE USERS ARE MALE:", everyMale);

// PS: One line return arrow function can remove return and curly braces in the above solutions !!
