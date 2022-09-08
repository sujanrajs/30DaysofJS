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

// mass greater than 100
const usersMass = users.filter((usrmass) => {
  return usrmass.mass > 100;
});
console.log("---mass greater than 100---");
console.log(usersMass);

// height less than 200
const getHeight = users.filter((usrht) => {
  return usrht.height < 200;
});
console.log("---height less than 200---");
console.log(getHeight);

// get all males
const getMale = users.filter((male) => {
  return male.gender === "male";
});
console.log("---get all males---");
console.log(getMale);

// get all females
const getFemale = users.filter((female) => {
  return female.gender === "female";
});
console.log("---get all females---");
console.log(getFemale);
