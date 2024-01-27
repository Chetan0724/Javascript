//  The global scope in the console and Node.js is different

// Block Scope and Global Scope

let a = 10
const b = 20
var c = 30

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30


if (true) {
    let apple = 10
    const ball = 20
    var car = 30
}

// console.log(apple); error --> apple is not defined
// console.log(ball); error --> ball is not defined

console.log(car); // 30


var chennai = 300

if (true) {
    var chennai = 30
    // chennai = 30
}

console.log(chennai); // 30


let amit = 300

if (true) {
    let amit = 10
    console.log(amit); // 10
}

console.log(amit); // 300


let ant = 18

if (true) {
    console.log(ant); // 18
}

console.log(ant); // 18