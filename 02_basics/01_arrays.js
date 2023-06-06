/* array The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name. JavaScript arrays are resizable and can contain a mix of different data types.  */

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["shaktiman", "naagraj"];

// console.log(myArr); //Returns full list under myArr
// console.log(myArr[3]); //Returns what is on index[3]

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr2[1]); //Returns what is on index[1]. Remember we can define arrays in brackets but its recommended to use square brackets method.

// Array methods
// myArr.push(6); // Add value in last.
// myArr.pop(); // Remove value from last.

// myArr.unshift(9); // Adds value in starting place/index.
// myArr.unshift(); // Removes value in starting place/index.

// console.log(myArr.includes(7)); // Checks whether given value is there in array list or not. Gives value true/false. Datatype is boolean.

// console.log(myArr.indexOf(2)); // Tells on what index that number is, and if we ask any number which is not present then it will return -1
//console.log(myArr);

// const newArr = myArr.join(); // Converts arrays list to string value seprated by comma (,)
// console.log(myArr);
// console.log(newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2);
