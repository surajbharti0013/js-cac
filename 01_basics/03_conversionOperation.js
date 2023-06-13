let score = "33abc";
// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// example is of output we get when we convert following thing to Number.
// "33" => 33
// "33abc" => NaN(Not a number but type of NaN is number)
// true => 1; false => 0;

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn);

// example is of output we get when we convert following thing to boolean.
// 1 => true; 0 => false;
// "" => false;
// "suraj" => true;

let someNumber = 33;
let stringNumber = String(someNumber);

// console.log(stringNumber);
// console.log(typeof stringNumber);

// ******************************** Operations ***************************

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+2); // 2 plus 2
// console.log(2-2); // 2 minus 2
// console.log(2*2); // 2 multiply by 2
// console.log(2**3); // 2 raise to the power 3
// console.log(2/3); // 2 divide 2 (Quotent )
// console.log(2%3); // 2 modulus 2 (Remainder)

let str1 = "hello";
let str2 = " suraj";
let str3 = str1+ str2;

// console.log(str3);
// console.log(str1 +" " + str2);

// Note :- If starting value is string then all values are treated as string and if starting value is number and then 3rd value is string then 1st value is calculated and then after string all value are printed as string.

// console.log("1" + 2); // One value was string so o/p was 12
// console.log(1 + "2"); // One value was string so o/p was 12
// console.log(1 + 2 + "2"); // Here js added first and second value and printed third value as it is.
// console.log(1 + "2" + 2); // Here js printed first, second and third value as it is.
// console.log("1" + 2 + 2); // Here js printed first, second and third value as it is.
// console.log( 3 + 4 * 5 % 3); // code is write but its recommended not to write complex calculation. 

// console.log(+true); // Output is 1
//console.log(true+); // Statement is incorrect
//console.log(""+); // Output is 0

let num1, num2, num3;
num1 = num2 = num3 = 2+2;
// console.table([num1, num2, num3]); // code is write but its recommended not to write complex calculation. 

//Prefix vs PostFix increment means in prefix value gets incremented then printed and in PostFix value get printed then incremented.
let gameCounter = 100;
++gameCounter;
// console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion