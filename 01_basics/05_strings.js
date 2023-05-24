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
console.log(newStringOne.trim()); // This function(trim()) removes the extra space around character from start and from end not between to character. It has more value as trimStart() and trimEnd().

const url = "https//suraj.com/suraj%20bharti";

console.log(url);
console.log(url.replace('%20','-')); // This function replace text/string from mention string in bracket you have to just mention (we have to replace what -to what).

console.log(url.includes('suraj')); // This function checks give text/string is present in string or not by giving value true and false

const newSplitText = "hello suraj kumar bharti ";
const newSplittedText = newSplitText.split(' ');
console.log(newSplittedText[1]);// split function:- We gives sentence and mentions seprator will be and get the word which is on mentioned index.