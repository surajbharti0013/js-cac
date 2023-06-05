// Dates
// In JS if month is specified in array then it starts from zero. If month is string then it will starts from 01.
let myDate = new Date();
//console.log(typeof myDate); // If checked type of myDate is Object.

// console.log(myDate);
// console.log(myDate.toString()); // The toString() method returns a date object as a string. Current day,date and time in gmt+05:30  in 24 hours format
// console.log(myDate.toDateString()); // The myDate.toDateString() method returns a date object as a string. Current day,date.
// console.log(myDate.toISOString()); // toISOString() returns a date as string, using the ISO standard:
// console.log(myDate.toJSON()); // toJSON() returns a date as a string, using JSON date formatting:
// console.log(myDate.toLocaleDateString()); // toLocaleDateString() returns the date (not the time) of a date, as a string, using locale conventions:
// console.log(myDate.toLocaleString()); // toLocaleString() returns a date as a string, using locale settings:
// console.log(myDate.toLocaleTimeString()); // toLocaleTimeString() returns the time portion of a date, as a string, using locale conventions:
// console.log(myDate.toTimeString()); // returns current time in (IST)
// console.log(myDate.toUTCString()); // returns current day, date and time in gmt
// console.log(myDate.getTimezoneOffset()); // The getTimezoneOffset() method returns the difference between UTC and the local time in minutes.

//let myCreatedDate = new Date(2023, 0, 23); // Output is Mon Jan 23 2023
// console.log(myCreatedDate.toString());
// let myCreatedDate = new Date(2023, 0, 23, 7, 3); //Output is Mon Jan 23 2023. Time will be show on what we have putted. Doesn't depend on current time. (07:03:00 GMT+05:30)
// console.log(myCreatedDate);

// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-14"); // It will return date as we defined yyyy-mm-dd
// let myCreatedDate = new Date("01-14-2023"); // It will return date as we defined mm-dd-yyyy
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now(); // Date.now() will return current seconds but in milli seconds digit
// console.log(myTimeStamp);

let newDate = new Date();
// console.log(newDate); // Returns current date month and year but in now readable format.
// console.log(newDate.getMonth()); // Return current month but months starts from zero.
// console.log(newDate.getFullYear()); // Return current year.

newDate.toLocaleDateString("default", {
  weekday: "long",
});
