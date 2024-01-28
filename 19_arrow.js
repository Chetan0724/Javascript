// this keyword and Arrow Function

const user = {
    username: "chetan",
    price: 999,
    
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);


// The global object in a browser environment is the window object


function chai() {
    let username = "chetan"
    console.log(this);
    console.log(this.username);
}

chai()



const chaione = function () {
    let username = "chetan"
    console.log(this.username);
}

chaione()


const chaitwo =  () => {
    let username = "chetan"
    console.log(this.username);
    console.log(this);
}

chaitwo()


const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3, 4));


const addTwo1 = (num1, num2) =>  num1 + num2
console.log(addTwo1(3, 4));


const addTwo2 = (num1, num2) =>  (num1 + num2)
console.log(addTwo2(3, 4));


const addTwo3 = (num1, num2) => ({username: "chetan"})
console.log(addTwo3(3, 4));


const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(function () {})
// myArray.forEach(function () => {})
// myArray.forEach(function () => ())