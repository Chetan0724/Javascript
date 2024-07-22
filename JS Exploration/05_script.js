function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}

addTwoNumbers()
console.log(undefined + undefined)

// ***

addTwoNumbersOne();

function addTwoNumbersOne(number1, number2) {
    console.log(number1 + number2);
}

addTwoNumbersOne();

function addTwoNumbersOne(number1 = 0, number2 = 0) {
    console.log(number1 + number2);
}

addTwoNumbersOne();
addTwoNumbersOne(3, 4);

// ***

let a = 3
let b = "a"
console.log(typeof (a + b));

// ***

let apple = null
let ball = 3
console.log(apple + ball)
// Type coercion: null --> 0

// ***

let num = 5
let numInBool = Boolean(num)
console.log(typeof numInBool);
console.log(numInBool);

console.log(5);
console.log(!5);

// ***

console.log(typeof NaN);
console.log(typeof undefined);
console.log(typeof Boolean);
console.log(typeof null);

// ***

let myNum = 100
console.log(++myNum);
myNum = 100
console.log(myNum++);
console.log(myNum);

// ***

// const elementOne;
// SyntaxError: Missing initializer in const declaration
let elementTwo;

// ***

// "use strict";

for (let i = 0; i <= 10; i++) {
    element = i;
    console.log(element);
}

console.log(element);


// ***

for (let i = 0; i <= 3; i++) {
    console.log(i)
    for (let i = 0; i <= 3; i++) {
        console.log(i);
    }
}


// ***

const greetings = "Hello world"

for (item in greetings) {
    console.log(greetings[item])
}