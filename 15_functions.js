function sayMyName() {}

// sayMyName --> Function Ka Reference
// sayMyName() --> Function Ka Execution

// Parameters and Arguments


function addTwoNumbersOne(number1, number2) {
   console.log(number1 + number2);
}

addTwoNumbersOne() // NaN
addTwoNumbersOne(3, 4) // 7
addTwoNumbersOne(3, "4") // 34
addTwoNumbersOne(3, "a") // 3a
addTwoNumbersOne(3, null) // 3
const resultOne = addTwoNumbersOne(3, 5) // 8
console.log("Result:", resultOne); // Result: undefined

console.log(addTwoNumbersOne(3, 5));


function addTwoNumbers(number1, number2) {
    let result = number1 + number2
    console.log(number1 + number2);
    console.log("hey");
    return result
    console.log("bye");
}

addTwoNumbers()
addTwoNumbers(3, "4")
addTwoNumbers(3, "a")
addTwoNumbers(3, null)
addTwoNumbers(3, 4)
const result = addTwoNumbers(3, 5)
console.log("Result:", result);


function addTwoNumbersTwo(number1, number2) {
    return number1 + number2
}

const resultTwo = addTwoNumbersTwo(3, 5)
console.log("Result:", resultTwo);


// function loginUserMessage(username = "sam") {
function loginUserMessage(username) {
    if (username === undefined) {  // if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

loginUserMessage()
loginUserMessage("rahul")
console.log(loginUserMessage("chetan"))
console.log(loginUserMessage(""))
console.log(loginUserMessage())