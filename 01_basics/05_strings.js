const name = "suraj";
const number = 1234;
const repoCount = 50;

// console.log(name + repoCount + " Value");
// console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("surajsb");
const str2 = 'world';

// console.log(gameName[0]);  // tells on 0th index character is
// console.log(gameName.__proto__);// This tells us is it object etc.
// console.log(gameName.length); // tells total length of string includes zeros
// console.log(gameName.toUpperCase()); // converts string to uppercase character
// console.log(gameName.anchor("https://www.google.com")); // puts anchor tags to given text
// console.log(gameName.at()); // tells the starting character is on what index. (if we specifies positive number then it checks from left and if negative then from right side)
// console.log(gameName.big()); // increase the font size of string/text.
// console.log(gameName.bold()); // converts text to bold text.
// console.log(gameName.blink()); // converts text to blink text.
// console.log(gameName.charAt(2)); // can ask specific text is on what index/number. 
// console.log(gameName.charCodeAt(2)); // specify uni-code of given index/number. 
// console.log(gameName.codePointAt()); // returns non negative integer 
// console.log(gameName.concat(" " + str2)); // it is used to join two string.
// console.log(gameName.indexOf('r')); // can ask by specifying character is on what index/position

//console.log(gameName.substring(6,0));// Here in bracket we define we want text from - to(Means from char 0 to 3 etc, it is different form slice() because:- The substring() method swaps its two arguments if indexStart is greater than indexEnd, meaning that a string is still returned. )
//console.log(gameName.slice(3,0));// Here in bracket we define we want text from - to(Means from char 0 to 3 etc. here we can give negative value.

// const newString = gameName.substring(0,4);
// console.log(newString);

// const anotherString = gameName.slice(-8,4);
// console.log(anotherString);

// const newStringOne = "     suraj      ";
// console.log(newStringOne);
// console.log(newStringOne.trim()); // This function(trim()) removes the extra space around character from start and from end not between to character. It has more value as trimStart() and trimEnd().

// const url = "https//suraj.com/suraj%20bharti";

// console.log(url);
// console.log(url.replace('%20','-')); // This function replace text/string from mention string in bracket you have to just mention (we have to replace what -to what).

// console.log(url.includes('suraj')); // This function checks give text/string is present in string or not by giving value true and false

const newSplitText = "hello suraj kumar bharti ";
const newSplittedText = newSplitText.split(' ');
console.log(newSplittedText[1]);// split function:- We gives sentence and mentions seprator will be and get the word which is on mentioned index.