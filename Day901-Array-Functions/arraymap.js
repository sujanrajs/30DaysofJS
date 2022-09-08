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

// get array of all names
const getNames = users.map((getname) => {
  return getname.name;
});
console.log(getNames);

// get array of all heights
const getHeights = users.map((getheight) => getheight.height);
console.log(getHeights);

// get array of objects with just name and height properties
// returning object needs a wrap with parenthesis and key names
const nameAndHeights = users.map((nameheight) => ({
  name: nameheight.name,
  height: nameheight.height,
}));
console.log(nameAndHeights);

// get array of all first names
const getFirstNames = users.map((firstnames) => {
  const split = firstnames.name.split(" "); // This splits the names given by space in array
  const takefirstindex = split[0]; // this takes the first index that is [0]
  return takefirstindex; // returns the first index that is [0]
  // above steps are for understanding and can be done as below
  // firstnames.name.split(' ')[0];
});
console.log(getFirstNames);
