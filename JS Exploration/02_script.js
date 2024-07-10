"use strict";

// myLaptop = "hp"
// *myLaptop is not defined*

// console.log(myLaptop);
// *myLaptop is not defined*

// myName = "chetan"
// *Cannot access 'myName' before initialization*

// console.log(myName);
// *Cannot access 'myName' before initialization*

let myNum = 10
let youNum = 20
let myName = "chetan"
console.log(myNum, youNum, myName);
console.log(myNum + youNum + myName)

const numberOfStudents = [0, 1, 2, 3, 4, 5]
console.log(numberOfStudents[10]);

const a = new Number("123");
const c = new Number(123)
console.log(a == c)
console.log(a === c)

let isLoggedInOne = " "
let booleanIsLoggedInOne = Boolean(isLoggedInOne)
console.log(booleanIsLoggedInOne); // true

let isLoggedInTwo = ""
let booleanIsLoggedInTwo = Number(isLoggedInTwo)
console.log(booleanIsLoggedInTwo); // 0

let isLoggedInThree = " "
let booleanIsLoggedInThree = Number(isLoggedInThree)
console.log(booleanIsLoggedInThree); // 0

console.log(undefined == null)
console.log(NaN == NaN)
console.log(undefined == undefined)
console.log(null == null)

let myDate = Date()
console.log(myDate);
// console.log(myDate.toDateString());
// *myDate.toDateString is not a function*

let myCreatedDateTwo = Date(2023, 0, 23)
console.log(myCreatedDateTwo);
// console.log(myCreatedDateTwo.toDateString());
// *myCreatedDateTwo.toDateString is not a function*