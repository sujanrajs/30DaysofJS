/* 
Promise
We human give or receive a promise to do some activity at some point in time.
If we keep the promise we make others happy but if we do not keep the promise, it may lead discontentment.
Promise in JavaScript has something in common with the above examples.

A Promise is a way to handle asynchronous operations in JavaScript. 
t allows handlers with an asynchronous action's eventual success value or failure reason.
This lets asynchronous methods return values like synchronous methods: instead of immediately
returning the final value, the asynchronous method returns a promise to supply the value at
some point in the future.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation completed successfully.
rejected: meaning that the operation failed.

A pending promise can either be fulfilled with a value, or rejected with a reason (error).
When either of these options happens, the associated handlers queued up by a promise's then method are called.
(If the promise has already been fulfilled or rejected when a corresponding handler is attached,
    the handler will be called, so there is no race condition between an
    asynchronous operation completing and its handlers being attached.)

As the Promise.prototype.then() and Promise.prototype.catch() methods return promises, they can be chained.
*/

/* 
Callbacks
To understand promise very well let us understand callback first.
Let's see the following callbacks. From the following code blocks you will notice,
the difference between callback and promises.

call back Let us see a callback function which can take two parameters.
The first parameter is err and the second is result. If the err parameter is false,
there will not be error other wise it will return an error.
In this case the err has a value and it will return the err block.
*/

const doSomething = (callback) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    callback("it did not go well:", skills);
  }, 1000);
};

const callback = (err, result) => {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
};

doSomething(callback);

// after 1 second it will print
// It did not go well

// In this case the err is false and it will return the else block which is the result.

const doSomething2 = (callback) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    callback(false, skills);
  }, 1000);
};

doSomething2((err, result) => {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
});

// after 2 seconds it will print the skills
// ["HTML", "CSS", "JS"]

console.log("---------------");

/* 
Promise constructor

We can create a promise using the Promise constructor.
We can create a new promise using the key word new followed by the word Promise
and followed by a parenthesis. Inside the parenthesis, it takes a callback function.

The promise callback function has two parameters
swhich are the resolve and reject functions.

const promise = new Promise((resolve, reject) => {
  resolve('success')
  reject('failure')
})
*/

console.log("-------Promise Resolve---------");

const doPromise = new Promise((resolve, reject) => {
  const skills = ["HTML", "CSS", "JS"];
  if (skills.length > 0) {
    resolve(skills);
  } else {
    reject("Something wrong has happened");
  }
});

doPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));

// The above promise has been settled with resolve. Let us another example when the promise is settled with reject.

console.log("-------Promise Reject---------");

const doPromise2 = new Promise((resolve, reject) => {
  const skills = ["HTML", "CSS", "JS"];
  if (skills.includes("Node")) {
    resolve("fullstack developer");
  } else {
    reject("Something wrong has happened");
  }
});

doPromise2
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.error(error));
// Introduction.js:130 Something wrong has happened

// Next example

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 4000);
  });
}

async function asyncCall() {
  console.log("calling for few seconds");
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();

/* 
Fetch API

The Fetch API provides an interface for fetching resources (including across the network).
It will seem familiar to anyone who has used XMLHttpRequest,
but the new API provides a more powerful and flexible feature set.

In this challenge we will use fetch to request url and APIS.
In addition to that let us see demonstrate use case of promises in accessing network resources
using the fetch API.
*/

const url = "https://jsonplaceholder.typicode.com/users"; // users api
fetch(url)
  .then((response) => response.json()) // accessing the API data as JSON
  .then((data) => {
    // getting the data
    console.log("fetch API Data", data);
  })
  .catch((error) => console.error(error)); // handling error if something wrong happens

console.log("-------Async Await---------");

/* 
Async and Await

Async and await is an elegant way to handle promises. It is easy to understand and it clean to write.
*/

const square = async function (n) {
  return n * n;
};

console.log(square(2)); // Promise {<fulfilled>: 4}

// The word async in front of a function means that function will return a promise.
// The above square function instead of a value it returns a promise.

// How do we access the value from the promise? To access the value from the promise,
// we will use the keyword await.

// a promise
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise resolved");
  }, 4000);
});

// async function
async function asyncFunc() {
  // wait until the promise resolves
  let result = await promise;

  console.log(result);
  console.log("hello");
}

// calling the async function
asyncFunc();

// Promise resolved
// hello

// Async and await go together, one can not exist without the other.

// Let us fetch API data using both promise method and async and await method.

// PROMISE

const newUrl = `https://jsonplaceholder.typicode.com/posts`;
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log("post API using Promise", data);
  })
  .catch((error) => console.log(error));

// Async Await

const fetchData = async () => {
  try {
    const response = await fetch(newUrl);
    const posts = await response.json();
    console.log("post API using async await", posts);
  } catch (err) {
    console.log(err);
  }
};

fetchData();
