/* If we declare any variable via let and const Glabally then in sope we cant access that value but if we declare some value in var that can be accessed globally and in block also.*/

/* We define any value using let, const it accessed only globally but if value declared in var it can be accessed any where*/
let a = 110
const b = 120
var c = 130

if (true){
    let a = 10
const b = 20
var c = 30
// console.log('let_Inner :', a);
// console.log('const_Inner :', b);
// console.log('var_Inner :', c);
}

// console.log('let_OUTER :', a);
// console.log('const_OUTER :', b);
// console.log('var_OUTER :', c);

//----------------------------------------------------------------

function one(){
    const username = "suraj";

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // This line will show error because website is define inside scope{}
    // two() If we commented this line then function one can't be executed properly.
}

// one()

if (true) {
    const username = "suraj"
    if (username === "suraj") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

//--------------------------Interesting--------------------------------

function addone(num) {
    return num + 1
}

addone(5)

const addTwo = function(num){
    return num + 2
}

addTwo(5)