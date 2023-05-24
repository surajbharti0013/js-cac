const name = "suraj";
const repoCount = 50;
console.log(name + repoCount + " Value");
console.log(`Hello my name is ${name}, and my repo count is ${repoCount}`);

const gameName = new String('suraj-sb');
console.log(gameName[0]);// This tells on 0 index what text is it.
console.log(gameName.__proto__);// This tells us is it object etc.
console.log(gameName.length);// This tells us length of text/string.
console.log(gameName.toUpperCase());// Convert full text/string to upper case.
console.log(gameName.charAt(2));// This tells on what index what text/character is it.
console.log(gameName.indexOf('s'));// This tells on what text/character is on what index.
//console.log(gameName.substring(6,0));// Here in bracket we define we want text from - to(Means from char 0 to 3 etc, it is different form slice() because:- The substring() method swaps its two arguments if indexStart is greater than indexEnd, meaning that a string is still returned. )
//console.log(gameName.slice(3,0));// Here in bracket we define we want text from - to(Means from char 0 to 3 etc. here we can give negative value.

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "     suraj      ";
console.log(newStringOne);
console.log(newStringOne.trim()); // This function(trim()) removes the extra space around character from start and from end not between to character/