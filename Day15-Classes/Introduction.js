/* 
Classes
JavaScript is an object oriented programming language.
Everything in JavScript is an object, with its properties and methods.
We create class to create an object.
A Class is like an object constructor, or a "blueprint" for creating objects.
We instantiate a class to create an object.
The class defines attributes and the behavior of the object,
while the object, on the other hand, represents the class.

Once we create a class we can create object from it whenever we want.
Creating an object from a class is called class instantiation.

In the object section, we saw how to create an object literal.
Object literal is a singleton. If we want to get a similar object , we have to write it.
However, class allows to create many objects.
This helps to reduce amount of code and repetition of code.

Defining a classes

To define a class in JavaScript we need the keyword class ,
the name of a class in CamelCase and block code(two curly brackets).

class ClassName {
    //  code goes here
}

*/

class Person {
  // code goes here
}
// We have created an Person class but it does not have any thing inside.

/* 
Class Instantiation:

Instantiation class means creating an object from a class.
We need the keyword new and we call the name of the class after the word new.
*/
const person = new Person();
console.log(person); // Person{}
// we have created a person object. Since the class did not have any properties yet the object is also empty.

console.log("--------------");

// use the class constructor to pass different properties for the class.

/* 
Class Constructor:

The constructor is a builtin function which allows as to create a blueprint for our object.
The constructor function starts with a keyword constructor followed by a parenthesis.
Inside the parenthesis we pass the properties of the object as parameter.
We use the this keyword to attach the constructor parameters with the class.

The following Person class constructor has firstName and lastName property.
These properties are attached to the Person class using this keyword.
This refers to the class itself.
*/

class NewPerson {
  constructor(firstName, lastName) {
    //console.log(this); // NewPerson{}
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const newperson = new NewPerson();
console.log(newperson); // NewPerson {firstName: undefined, lastName: undefined}

console.log("--------------");

/* 
All the keys of the object are undefined.
When ever we instantiate we should pass the value of the properties.
Let us pass value at this time when we instantiate the class.
*/

const newperson1 = new NewPerson("Sujan", "Shrestha");
console.log(newperson1); // NewPerson {firstName: 'Sujan', lastName: 'Shrestha'}

/* As we have stated at the very beginning that once we create a class we can create
many object using the class. Now, let us create many person objects using the Person class.
 */

const newperson2 = new NewPerson("Raj", "Shrestha");
console.log(newperson2); // NewPerson {firstName: 'Raj', lastName: 'Shrestha'}
const newperson3 = new NewPerson("Mikko", "Pradhan");
const newperson4 = new NewPerson("Puja", "PShrestha");
console.log(newperson3); // NewPerson {firstName: 'Mikko', lastName: 'Pradhan'}
console.log(newperson4); // NewPerson {firstName: 'Puja', lastName: 'PShrestha'}

console.log("--------------");

/* 
Using the class Person we created three persons object.
As you can see our class did not many properties let us add more properties to the class.
Class name can be user
*/

class User {
  constructor(firstName, lastName, city, country) {
    console.log(this); // User {}
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.country = country;
  }
}

const user = new User("Sujan Raj", "Shrestha", "Helsinki", "Finland");
console.log(user); // User {firstName: 'Sujan Raj', lastName: 'Shrestha', city: 'Helsinki', country: 'Finland'}

console.log("-----vvalues with constructors below---------");

/* 
Default values with constructor
The constructor function properties may have a default value like other regular functions.
*/

class NewUser {
  constructor(
    firstName = "Sujan Raj",
    lastName = "Shrestha",
    city = "Helsinki",
    country = "Kathmandu"
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.country = country;
  }
}

const newuser = new NewUser();
console.log(newuser);
// Prints default values
// NewUser {firstName: 'Sujan Raj', lastName: 'Shrestha', city: 'Helsinki', country: 'Kathmandu'}

const newuser1 = new NewUser(
  "newSujan",
  "newShrestha",
  "newHelsinki",
  "newFinland"
);
console.log(newuser1);
// This will overrides default values
// NewUser {firstName: 'newSujan', lastName: 'newShrestha', city: 'newHelsinki', country: 'newFinland'}

console.log("------class methods below--------");

/* 
Class methods:

The constructor inside a class is a builtin function which allow us to create a blueprint for the object.
In a class we can create class methods. Methods are JavaScript functions inside the class.
Let us create some class methods.
*/

class Student {
  constructor(firstName, lastName, city, country) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.country = country;
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
  getCountry() {
    return this.country;
  }
}

const student1 = new Student("Sujan", "Shrestha", "Helsinki", "Finland");
console.log(student1); // Student {firstName: 'Sujan', lastName: 'Shrestha', city: 'Helsinki', country: 'Finland'}
console.log(student1.getFullName()); // Sujan Shrestha
console.log(student1.getCountry()); // Finland

console.log("-----properties with initial value---------");

/* 
Properties with initial value
When we create a class for some properties we may have an initial value.
For instance if you are playing a game, you starting score will be zero.
So, we may have a starting score or score which is zero.
In other way, we may have an initial skill and we will acquire some skill after some time.
*/

class NewStudent {
  constructor(firstName, lastName, city, country) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.score = 0;
    this.city = city;
    this.country = country;
    this.skills = [];
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
}

const newstudent1 = new NewStudent("Sujan", "Shrestha", "Helsinki", "Finland");
console.log(newstudent1);
// NewStudent {firstName: 'Sujan', lastName: 'Shrestha', score: 0, city: 'Helsinki', country: 'Finland', skills:[]}
console.log(newstudent1.score); // 0
console.log(newstudent1.skills); // []
const newstudent2 = new NewStudent("Raj", "Pradhan", 10, "Oslo", "Norway", [
  "HTML",
  "CSS",
]);
console.log(newstudent2);
// NewStudent {firstName: 'Raj', lastName: 'Pradhan', score: 0, city: 10, country: 'Oslo', skills:[]}

console.log("-----getter below---------");

/* 
getter
The get method allow us to access value from the object.
We write a get method using keyword get followed by a function.
Instead of accessing properties directly from the object we use getter to get the value. 
*/

class NewStudent1 {
  constructor(firstName, lastName, city, country) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.score = 0;
    this.city = city;
    this.country = country;
    this.skills = [];
  }
  get getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
  get getScore() {
    return this.score;
  }
  get getSkills() {
    return this.skills;
  }
}

const newstudent3 = new NewStudent1("Sujan", "Shrestha", "Helsinki", "Finland");
console.log(newstudent3);
console.log(newstudent3.score); // 0
console.log(newstudent3.getFullName); // Sujan Shrestha
console.log(newstudent3.getScore); // 0 -- We do not need parenthesis to call a getter method
console.log(newstudent3.getSkills); // []
// console.log(newstudent3.getSkills()); // undefined Uncaught TypeError: newstudent3.getSkills is not a function

console.log("-------setter method below-------");

/* 
setter
The setter method allow us to modify the value of certain properties.
We write a setter method using keyword set followed by a function. See the example bellow.
*/

class NewStudent2 {
  constructor(firstName, lastName, city, country) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.score = 0;
    this.city = city;
    this.country = country;
    this.skills = [];
  }
  get getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
  get getScore() {
    return this.score;
  }
  get getSkills() {
    return this.skills;
  }
  set setScore(score) {
    this.score += score;
  }
  set setSkills(skill) {
    this.skills.push(skill);
  }

  // this is made for regular method
  getPersonInfo() {
    let fullName = this.getFullName;
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(", ") +
        ` and ${this.skills[this.skills.length - 1]}`;
    let formattedSkills = skills ? `He knows ${skills}` : "";

    let info = `${fullName} lives in ${this.city}, ${this.country}. ${formattedSkills}`;
    return info;
  }
}

const newstudent4 = new NewStudent2("fName", "lName", "H-City", "F-Country");
console.log(newstudent4);

newstudent4.setScore = 1;
newstudent4.setSkills = "HTML";

console.log(newstudent4);
/* 
{
    "firstName": "fName",
    "lastName": "lName",
    "score": "1",
    "city": "H-City",
    "country": "F-Country",
    "skills": ["HTML"]
}
*/

newstudent4.setScore = 1;
newstudent4.setSkills = "CSS";
newstudent4.setSkills = "JS";

console.log(newstudent4);

/* {
  "firstName": "fName",
  "lastName": "lName",
  "score": "2",
  "city": "H-City",
  "country": "F-Country",
  "skills": [ "HTML", "CSS", "JS"]
} */

//newstudent4.setScore = "ab"; //the score shows 2ab because setScore is given += arithmetic operatore for numbers

console.log("--------------");

/* 
Do not be puzzled by the difference between regular method and a getter.
Let us add regular method called getPersonInfo in the NewStudent4 class.
*/

console.log(newstudent4.getPersonInfo());

console.log("------Static Method Below--------");

/* 
Static method

The static keyword defines a static method for a class.
Static methods are not called on instances of the class.
Instead, they are called on the class itself.
These are often utility functions, such as functions to create or clone objects.
An example of static method is Date.now(). The now method is called directly from the class.
*/

class NewStudent3 {
  constructor(firstName, lastName, city, country) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.score = 0;
    this.city = city;
    this.country = country;
    this.skills = [];
  }
  get getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
  get getScore() {
    return this.score;
  }
  get getSkills() {
    return this.skills;
  }
  set setScore(score) {
    this.score += score;
  }
  set setSkills(skill) {
    this.skills.push(skill);
  }

  // this is made for regular method
  getPersonInfo() {
    let fullName = this.getFullName;
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(", ") +
        ` and ${this.skills[this.skills.length - 1]}`;
    let formattedSkills = skills ? `He knows ${skills}` : "";

    let info = `${fullName} lives in ${this.city}, ${this.country}. ${formattedSkills}`;
    return info;
  }
  static favSkills() {
    const skills = ["HTML", "CSS", "JS"];
    const index = Math.floor(Math.random() * skills.length);
    return skills[index];
  }
  static showDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    let dateMonthYear = date + "." + month + "." + year;
    let time = hours + ":" + minutes;
    let fullTime = dateMonthYear + " " + time;
    return fullTime;
  }
}

console.log(NewStudent3.favSkills()); // CSS
console.log(NewStudent3.showDateTime()); // Shows Current date and time

// The static methods are methods which can be used as utility functions.

console.log("------Inheritance Below--------");

/* 
Inheritance:

Using inheritance we can access all the properties and the methods of the parent class.
This reduces repetition of code.
We have a Person parent class and we will create children from it.
Our children class could be student, teach etc.

// syntax
class ChildClassName extends {
 // code goes here
}
*/

class ParentStudent {
  constructor(firstName, lastName, city, country) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.country = country;
  }
  fullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
}

// Let us create a Student child class from APerson parent class.

class ChildStudent extends ParentStudent {
  /*   copyParent() {
    console.log("I am child of a ParentPerson class");
  } */
  get getCityAndCountry() {
    return this.city + this.country;
  }
}
const childstudent = new ChildStudent(
  "ChildFIrstName",
  "ChildLastName",
  "ChildCity",
  "ChildCountry"
);
console.log(childstudent); // ChildStudent {firstName: 'ChildFIrstName', lastName: 'ChildLastName', city: 'ChildCity', country: 'ChildCountry'}
console.log(childstudent.fullName()); // ChildFIrstName ChildLastName
console.log(childstudent.getCityAndCountry); // ChildCityChildCountry

console.log("------Overriding Methods--------");

/* 
Overriding methods

We manage to access all the methods in the Parent Class and we used it in the Student child class.
We can customize the parent methods, we can add additional properties to a child class.
If we want to customize, the methods and if we want to add extra properties,
we need to use the constructor function the child class too.

Inside the constructor function we call the super() function to access all the properties from the parent class.
The parent class didn't have gender but now let us give gender property for the child class.
If the same method name used in the child class, the parent method will be overridden.
*/

class NewChildStudent extends ParentStudent {
  constructor(firstName, lastName, city, country, gender, skills) {
    super(firstName, lastName, city, country, gender, skills);
    this.gender = gender;
    this.skills = [];
  }
  set setSkills(skill) {
    return this.skills.push(skill);
  }

  get getSkills() {
    return this.skills;
  }

  get fullName() {
    return `${this.firstName} and ${this.lastName}`;
  }
}

const newchildstudent = new NewChildStudent(
  "NewChildFirstName",
  "NewChildLastName",
  "NewChildCity",
  "NewChildCountry",
  "NewChildGender"
);

console.log(newchildstudent);

newchildstudent.setSkills = "HTML";
newchildstudent.setSkills = "CSS";
newchildstudent.setSkills = "JS";

console.log(newchildstudent.getSkills); // ['HTML', 'CSS', 'JS']
console.log(newchildstudent.fullName); // NewChildFirstName and NewChildLastName

console.log("------Checking Parent Class--------");

const parentstudent = new ParentStudent(
  "FinalFirstName",
  "FinalLastName",
  "FinalCity",
  "FinalCountry"
);
console.log(parentstudent);
// ParentStudent {firstName: 'FinalFirstName', lastName: 'FinalLastName', city: 'FinalCity', country: 'FinalCountry'}
// Parent componeent is in default conditions
