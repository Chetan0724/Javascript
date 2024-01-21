const score = 100
const scoreValue = 100.3
console.log(typeof score);
console.log(typeof scoreValue);

const isLoggedIn = false
console.log(typeof isLoggedIn);

const outsideTemp = null
console.log(typeof outsideTemp);

let userEmail = undefined
// let userEmail;
console.log(typeof userEmail);

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);
console.log(typeof anotherId);

const bigNumber = 354848858814848484188n
console.log(typeof bigNumber);

const heros = ["shaktiman", "naagraj", "doga"];
console.log(typeof heros);

let myObj = {
    name: "chetan",
    age: 22,
}
console.log(typeof myObj);

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof myFunction);


// *****Memory*****

let myYoutubename = "chetandotcom"
let anothername = myYoutubename
anothername = "developerdotcom"
console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "chetan@google.com"
console.log(userOne.email);
console.log(userTwo.email);