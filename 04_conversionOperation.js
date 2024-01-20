/*
let scoreOne = 33
console.log(typeof scoreOne); // number
console.log(typeof(scoreOne)); // number


let scoreTwo = "33"
console.log(typeof scoreTwo); // string
let valueInNumber = Number(scoreTwo)
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // 33


let scoreThree = "33abc"
console.log(typeof scoreThree); // string
let valueInNumberOne = Number(scoreThree)
console.log(typeof valueInNumberOne); // number
console.log(valueInNumberOne); // NaN


let scoreFour = null
console.log(typeof scoreFour); // object
let valueInNumberTwo = Number(scoreFour)
console.log(typeof valueInNumberTwo); // number
console.log(valueInNumberTwo); // 0


let scoreFive = undefined
console.log(typeof scoreFive); // undefined
let valueInNumberThree = Number(scoreFive)
console.log(typeof valueInNumberThree); // number
console.log(valueInNumberThree); // NaN


let scoreSix = true
console.log(typeof scoreSix); // boolean
let valueInNumberFour = Number(scoreSix)
console.log(typeof valueInNumberFour); // number
console.log(valueInNumberFour); // 1


let scoreSeven = "Chetan"
console.log(typeof scoreSeven); // string
let valueInNumberFive = Number(scoreSeven)
console.log(typeof valueInNumberFive); // number
console.log(valueInNumberFive); // NaN


let isLoggedIn = 1
console.log(typeof isLoggedIn); // number
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn); // boolean
console.log(booleanIsLoggedIn); // true


let isLoggedInOne = ""
let booleanIsLoggedInOne = Boolean(isLoggedInOne)
console.log(booleanIsLoggedInOne); // false


let isLoggedInTwo = "chetan"
let booleanIsLoggedInTwo = Boolean(isLoggedInTwo)
console.log(booleanIsLoggedInTwo); // true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber); // 33
console.log(typeof stringNumber); // string
*/

// *****Operations*****

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "hello"
let str2 = " chetan"

let str3 = str1 + str2
console.log(str3)

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

// console.log( 3 + 4 * 5 % 3); not recom
console.log( (3 + 4) * 5 % 3);


// Your code should be clean, simple, readable, and not confusing.


console.log(true); // true
console.log(+true); // 1 --> not recom
// console.log(true+); error
console.log(+""); // 0 --> not recom

let num1, num2, num3
// num1 = num2 = num3 = 2 + 2 --> not recom

let gamecounter = 100
gamecounter++;
console.log(gamecounter);
++gamecounter;
console.log(gamecounter);