// Immediately Invoked Function Expressions (IIFE)
// IIFE is used because to clear pollution caused by global variable. IIFE functions are functions which are invoked immediately.

// function chai(){
//   console.log(`DB CONNECTED`);
// }
// chai()

// Both way to write IIFE is correct

// (function chai(){
//   console.log(`DB CONNECTED`);
// })
// ();

// ************ IIFE using arrow function
// ( () => {
// Also known as named IIFE
//   console.log(`DB CONNECTED`);
// } )()

// ************ IIFE using arrow function with variable
( (name) => {
    // Also known as named without name IIFE
    console.log(`DB CONNECTED ${name}`);
  } )('suraj')