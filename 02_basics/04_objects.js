// const tinderUser = new Object(); // Like this we can declare object, its singleton object

const tinderUser = {}; //its non singleton object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname1: {
    userfullname: {
      firstname: "suraj",
      lastname: "bharti",
    },
  },
  fullname2: {
    userfullname: {
      firstname: "raj",
      lastname: "bharti",
    },
  },
};

// console.log(regularUser.fullname1.userfullname.firstname); // We can go inside any object by using dot(.) in front of its name.

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj4 = { 5: "e", 6: "f" };

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2, obj4);

const obj3 = { ...obj1, ...obj2, ...obj4 }; //like spread method in array, this is same as above but here we dont have to remember about curly paranthses ({})
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "s@gmail.com",
  },
  {
    id: 2,
    email: "b@gmail.com",
  },
];

// console.log(users[0].email);

// console.log(Object.keys(tinderUser)); // If i want all to take all keys from tinderUser object
// console.log(Object.keys(tinderUser).length); // to calculate keys length.
// console.log(Object.entries(tinderUser)); // to see values and keys

// console.log(tinderUser.hasOwnProperty("isLoggedIn")); // to check given value is there is defined object and the value comes is in boolean format

//****************************Object part 3************************************ */

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "suraj"
}

// console.log(course.courseInstructor);

const {courseInstructor: instructor} = course

console.log(instructor);