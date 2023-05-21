const accountID= 144553;
let accountEmail = "suraj@google.com";
var accontPassword = "12345";
accountCity = "Mumbai";
let accountState;

// accountID = 2; 
// not allowed

accountEmail = "sb@sb.com";
accontPassword = "21212121";
accountCity = "Thane";

console.log(accountID);

/* Prefer not to use var because of issue in block scope and functional scope*/

console.table([accountID, accountEmail, accontPassword, accountCity, accountState]);