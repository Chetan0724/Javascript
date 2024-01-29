/*

switch (key) {
    case value:
        
        break;

    default:
        break;
}

*/

const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("default case match");
        break;
}


const monthOne = "march"

switch (monthOne) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("Feb");
        break;
    case "march":
        console.log("March");
        break;
    case "april":
        console.log("April");
        break;
    default:
        console.log("default case match");
        break;
}


const userEmail = "c@chetan.ai"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


const userEmailOne = ""

if (userEmailOne) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


const userEmailTwo = []

if (userEmailTwo) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


// falsy Values --> false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values --> "0", 'false', " ", [], {}, function(){}


if (userEmailTwo.length === 0) {
    console.log("Array is empty");
}


const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// false == 0 --> true
// false == '' --> true
// 0 == '' --> true


// Nullish Coalescing Operator (??): null undefined

let val1;

val1 = 5 ?? 10 
console.log(val1); // 5

val1 = null ?? 10
console.log(val1); // 10

val1 = undefined ?? 15
console.log(val1); // 15

val1 = null ?? 10 ?? 20
console.log(val1); // 10


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")