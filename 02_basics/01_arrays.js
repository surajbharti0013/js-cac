/* array:- The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name. JavaScript arrays are resizable and can contain a mix of different data types.  */

const myArr = [0, 1, 2, 3, 4, 5]; // Things inside array list are elements.
const myHeros = ["shaktiman", "naagraj"];

// console.log(myArr); //Returns full list under myArr
// console.log(myHeros[1]); //Returns what is on index[1]

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

const myn1 = myArr.slice(1, 3); // slice() show only selected/defined part. Starts with first and dont include third. But keep old array list as it is.
console.log("slice ", myn1);

console.log("B ", myArr);
const myn2 = myArr.splice(1, 3); // splice() don't show selected/defined part and changes old array list by substracting defined part/index
//console.log("C ", myArr);
console.log("splice ", myn2);
console.log("C ", myArr);
