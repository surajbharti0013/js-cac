// We can define objects in two types constructor and literals.
// singleton - Singleton is a design pattern that tells us that we can create only one instance.
// We can create through -> Object.create <- It is called creating object via constructor.

// When we declare as a literal that time it doesnt create singleton.
// Whem we create via constructor then it creates singleton.

// We are creating object via literals

const mySym = Symbol("key1");

const jsUser = {
  //keys: value;
  name: "Suraj",
  "full name": "Suraj Bharti",
  [mySym]: "mykey1",
  age: 30,
  location: "Mumbai",
  email: "suraj@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

const jsUserTwo = {
  //keys: value;
  name: "Raj",
  age: 18,
  "full name": "Suraj Bharti",

  lastLoginDays: ["Monday", "Saturday"],
};

/* Two type to access value */

// console.log(jsUser.email); // Ok Option
// console.log(jsUser["email"]); //Better option

// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "suraj@chatgpt.com"; // to change value of some key.
// console.log(jsUser.email);

// Object.freeze(jsUser); // to lock values of object
jsUser.email = "suraj@microsoft.com";
// console.log(jsUser.email);

jsUser.greeting = function () {
  console.log("Hello js user");
};
jsUser.greetingTwo = function () {
  console.log(`Hello js user, ${this.age} `); // this is used when we want to take some data from current object
};
jsUserTwo.greetingTwo = function () {
  console.log(`Hello js user, ${this.age} `); // this is used when we want to take some data from current object
};

// console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
console.log(jsUserTwo.greetingTwo());
