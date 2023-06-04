const score = 400; // Here js automatically decide value should be number
// console.log(score);
// console.log(typeof score);

const balance = new Number(100); // Explicitly tells js to take input value a number
// console.log(balance);
// console.log(typeof balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1)); // Rounds the number to closest whole number like (4.1 => 4, 4.9 => 5)

const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(4)); // It give output as 4 decimal place number. Output will be 123.9, because it prints 3 digit as it is but after decimal it automatically round off the number and converted to .89 to .9

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN')); // converts to local (Indian) number format.

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.9)); // Rounds the number to closest whole number like (4.1 => 4, 4.6 => 5)
// console.log(Math.ceil(4.2)); // We will git value 5 because ceil function( is like cealing, up value )
// console.log(Math.floor(4.9)); // We will git value 4 because floor function( is like cealing, down value )
// console.log(Math.min(4, 3, 6, 8)); // Minimum number in give bracket
// console.log(Math.max(4, 3, 6, 8)); // Maximum number in give bracket

// console.log(Math.random()); // always gives random number between 0 and 1. 
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20; 
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);
console.log(Math.round(Math.random()) + 3);