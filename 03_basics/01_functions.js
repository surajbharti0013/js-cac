// function are package of code which can be execute when we call it.
function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("J");
}

// sayMyName()
// when we are creating function that time number1 and 2 are called as parameters and at time of calling function number1 and 2 are called arguments.

/* we store output of console in result but it will print 8 and undefined because we didnot told result should be returned */
// function addTwoNumbers(number1, number2){
//     console.log(number1 + Number(number2));
// }

// const result = addTwoNumbers(3 , 5)
// console.log(result)

// Here, in below function calculation of two numbers are stored in variable result and is returned. So when we console.log result it will show stored value in it.
// function addTwoNumbers(number1, number2){
//     let result = number1 + number2;
//     return result
// }

// const result = addTwoNumbers(10 , 5)
// console.log(result)

// Here in below function output of function is stored in variable result 

function addTwoNumbers(number1, number2){

    return number1 + number2;
}

const result = addTwoNumbers(10 , 5)
console.log(result)