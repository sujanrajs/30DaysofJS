/* 
JSON stands for JavaScript Object Notation.
The JSON syntax is derived from JavaScript object notation syntax,
but the JSON format is text or string only.
JSON is a light weight data format for storing and transporting.
JSON is mostly used when data is sent from a server to a client.
JSON is an easier-to-use alternative to XML.
*/

// Example below data is written in data.json file

/* {
  "users": [
    {
      "firstName": "Sujan",
      "lastName": "Shrestha",
      "gender": "Male",
      "phone": "123",
      "email": "sujan@example.com"
    },
    {
      "firstName": "Raj",
      "lastName": "Pradhan",
      "gender": "Male",
      "phone": "456",
      "email": "raj@example.com"
    },
    {
      "firstName": "Janina",
      "lastName": "Pradhan",
      "gender": "Female",
      "phone": 789,
      "email": "janina@example.com"
    }
  ]
} */

/* 
The above JSON example is not much different from a normal object.
Then, what is the difference ?
The difference is the key of a JSON object should be with double quotes or it should be a string.
JavaScript Object and JSON are very similar that we can change JSON to Object and Object to JSON.

Let us see the above example in more detail, it starts with a curly bracket.
Inside the curly bracket, there is "users" key which has a value array.
Inside the array we have different objects and each objects has keys, each keys has to have double quotes.
For instance, we use "firstName" instead of just firstName,
however in object we use keys without double quotes.
This is the major difference between an object and a JSON.
*/

/* 
Converting JSON to JavaScript Object

Mostly we fetch JSON data from HTTP response or from a file,
but we can store the JSON as a string and we can change to Object for sake of demonstration.
In JavaScript the keyword JSON has parse() and stringify() methods.
When we want to change the JSON to an object we parse the JSON using JSON.parse().
When we want to change the object to JSON we use JSON.stringify().
*/

/* 
JSON.parse(json[, reviver])
// json or text , the data
// reviver is an optional callback function
/* JSON.parse(json, (key, value) => {
}
*/

console.log("-------JSON to Object-------");

const usersText = `{
  "users": [
    {
      "firstName": "Sujan",
      "lastName": "Shrestha",
      "gender": "Male",
      "phone": 123,
      "email": "sujan@example.com"
    },
    {
      "firstName": "Raj",
      "lastName": "Pradhan",
      "gender": "Male",
      "phone": 456,
      "email": "raj@example.com"
    },
    {
      "firstName": "Janina",
      "lastName": "Pradhan",
      "gender": "Female",
      "phone": 789,
      "email": "janina@example.com"
    }
  ]
  }`;

console.log(usersText);
const usersObj = JSON.parse(usersText, undefined, 4);
console.log(usersObj);
const usersObj1 = JSON.parse(usersText);
console.log(usersObj1);

console.log("--------------");

/* 
Using a reviver function with JSON.parse()

To use the reviver function as a formatter,
we put the keys we want to format first name and last name value.

Let us say, we are interested to format the firstName and lastName of the JSON data .
*/

const usersObj2 = JSON.parse(usersText, (key, value) => {
  let newValue =
    typeof value == "string" && key != "email" ? value.toUpperCase() : value;
  return newValue;
});
console.log(usersObj2);

console.log("------Object to JSON--------");

/* 
Converting Object to JSON

When we want to change the object to JSON we use JSON.stringify().
The stringify method takes one required parameter and two optional parameters.
The replacer is used as filter and the space is an indentations.
If we do not want to filter out any of the keys from the object we can just pass undefined.

text means JSON- because json is a string form of an object.

JSON.stringify(obj, replacer, space)
// json or text , the data
// reviver is an optional callback function
*/

const users = {
  Sujan: {
    email: "sujan@example.com",
    skills: ["HTML", "CSS", "JavaScript"],
    isLoggedIn: false,
    points: 30,
  },
  Raj: {
    email: "raj@example.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    isLoggedIn: false,
    points: 50,
  },
  Shrestha: {
    email: "shrestha@example.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    isLoggedIn: true,
    points: 50,
  },
};

const toJson = JSON.stringify(users, undefined, 4);
console.log(toJson);

console.log("-------Using a Filter Array with JSON.stringify------");

/* 
Using a Filter Array with JSON.stringify

Now, lets use the replacer as a filter.
The user object has long list of keys but we are interested only in few of them.
We put the keys we want to keep in array as show in the example and use it the place of the replacer.
*/

const newUser = {
  userone: {
    firstName: "Sujan",
    lastName: "Shrestha",
    country: "Finland",
    city: "Helsinki",
    email: "sujan@example.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Python"],
    isLoggedIn: false,
    points: 30,
  },
  usertwo: {
    firstName: "Raj",
    lastName: "Pradhan",
    country: "Sweden",
    city: "Stockholm",
    email: "raj@example.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Python", "React", "Node"],
    isLoggedIn: true,
    points: 0,
  },
};

const txt = JSON.stringify(
  newUser.userone,
  ["firstName", "lastName", "city", "points"],
  4
);
console.log(txt);

console.log("-----obj to json------------");

const newTxt = JSON.stringify(newUser, undefined, 2);
console.log(newTxt);