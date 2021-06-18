// 0. Create function that will accept (10, 20) params and return their sum. Main goal - use all possible variants to declare functions
function sum(a, b) {
  return a + b;
}

const sum2 = (a, b) => a + b;

const sum3 = function (a, b) {
  return a + b;
};

const sum4 = function summm(a, b) {
  return a + b;
};

// 1. Create self-invoked anonymous function, that will return if the day after tomorrow is odd, or even.
// HINT: function accepts one argument: new Date();
// output example 15.06.2021, 11:19:22 is odd date

(() => {
  console.log(new Date(Date.now() + 2 * 1000 * 60 * 60 * 24).getDate() % 2 ? "odd" : "even");
})();

// 2. Rewrite this function to ES6/ES2015
class Intern {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.homework = {
      status: "Resolved",
      rating: "100%",
    };
  }

  getHomework() {
    return `${this.name} resolved homework with status ${this.homework.status}`;
  }
}

// const Intern = (name, age) => {
//   this.name = name;
//   this.age = age;
//   this.homework = {
//     status: "Resolved",
//     rating: "100%",
//   };
// };
//
// Intern.prototype.getHomework = () => {
//   return `${this.name} resolved homework with status ${this.homework.status}`;
// };
//
const intern = new Intern("Sergey", 18);

console.log(intern.getHomework());

// 3. Write multiply function. Two arguments - random numbers. But sometimes, we don't have second argument, and result is = random number * 12
// HINT: Read about default parameters in functions.

function multiply(a, b = 12) {
  return a * b;
}

console.log(multiply(Math.random() * 100, Math.random() * 100));
console.log(multiply(Math.random() * 100));

/**
 * example output
 * (19, 29) => 551
 * (23) => 276
 */

/**
 * 4. Write function, that modify first argument to example output with delay 2 seconds
 *
 * example:
 * yourFuncName({ a: 1, b: 2}, (data) => { console.log(data) }); output: { a: 2, b: 3 }
 * HINT: read about callbacks
 */

function modify(options, callback) {
  setTimeout(() => { callback(options); }, 2000);
}

modify({ a: 1, b: 2 }, (data) => {
  const keys = Object.keys(data);

  keys.forEach((item) => {
    data[item] += 1;
  });
  console.log(data);
});

/**
 * 5. Imagine, that we have 2 requests to database, first is getUsers() that return data in 1 second,
 * and second is createUser() that resolves in 2 seconds.
 * Your goal, is to modify createUser() with callback, and return 3 users
 */

const users = [
  {
    name: "Daniel",
    age: 22,
  },
  {
    name: "Michael",
    age: 32,
  },
];

function getUsers() {
  setTimeout(() => {
    users.forEach((user) => {
      console.log("user:", user);
    });
  }, 1000);
}

function createUser(user, callback) {
  setTimeout(() => {
    users.push(user);

    callback();
  }, 2000);
}

getUsers();
createUser({ name: "Vitalii", age: 24 }, () => { getUsers(); });
