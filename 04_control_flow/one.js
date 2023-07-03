// if
const isUserloggedIn = true
const temperature = 41

// ==,<, >, <=, >=, !=, ===

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

/* Scope error*/
// const score = 200
// if ( score>100 ) {
//   const power = "fly"
//   console.log(`User power: ${power}`)
// }
// console.log(`User power: ${power}`)

/* Single line (explicit scope)*/

// const balance = 1000
// if ( balance > 500 ) console.log("test1")
// if ( balance > 500 ) console.log("test1"), console.log("test2")

/*Nesting if elseif*/

// const balance = 1000

// if (balance < 500) {
//   console.log("less than 500")
// } else if (balance < 750) {
//   console.log("less than 750")
// } else if (balance < 900) {
//   console.log("less than 900")
// } else {
//   console.log("less than 1200")
// }

/*elseif using && and ||*/

// const userloggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if (userloggedIn && debitCard && 2=="2") {
//   console.log("Allow to buy course");  
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//   console.log("User logged in")
// }