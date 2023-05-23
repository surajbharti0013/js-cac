// Javascript is Dynamically typed language because we dont have to specify variables datatype (int, string, boolean etc).

// Datatypes are categorized in 2 types, How data is kept in memory and how it is accessed Primitive and Non-Primitive(referrence type).

// Primitive 7 types:- string(text in single or double quotes), number (1, 2, 3...), boolean(true or false), null(empty not zero), undefined(we have defined variable but not yet decided what to keep in it), Symbol, BigInt(Maninly all values are covered in number but some values are long in decimal character that why we use BigInt to store that value.)

const name = "Suraj";//String
//console.log(typeof name); // typeof string

const yourNumber = 123456; //Number
//console.log(typeof yourNumber); // typeof number

const isBoolean = true; //boolean(true or false)
//console.log(typeof isBoolean); // typeof boolean

const outsideTemp = null;//(null temp not zero)
//console.log(typeof outsideTemp); // typeof object

const userEmail = undefined;//(have created the variable but not defined it yet)
//console.log(typeof userEmail); // typeof undefined

const Id = Symbol('123');
const anotherId = Symbol('123');
//console.log(typeof anotherId); // typeof symbol

//console.log(Id === anotherId);

const bigNumber = 345678945612332581n;
//console.log(typeof bigNumber); // typeof BigInt

// Non-Premitive type(Reference type):- Array, Objects and Functions

const heros = ["shaktiman", "naagraj", "doga"]; //Array
//console.log(typeof heros); // typeof object

let myObject = {
    //Thing in curly braces are objects they are usually in key: value paires
    name:"suraj",
    age:22,
} // eg. for objects

//console.log(typeof myObject); // typeof object

const myFunction = function() {
    console.log("Hello World");
}

//console.log(typeof myFunction); // typeof function

// +++++++++++++++++++++++++ Stack and Heap Memory +++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) and Heap(Non-Primitive) Memory
// Stack(Primitive) - Whenever, we keep any value in stack then we change value the reference data changes.
// Heap(Non-Primitive) - Whenever, we keep any value in heap then we change value the original data changes.
let myName = "surajbharti";

let anotherName = myName;
anotherName = "raj";

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne;

userTwo.email = "hitesh@google.com";

console.log(userOne.email);
console.log(userTwo.email);