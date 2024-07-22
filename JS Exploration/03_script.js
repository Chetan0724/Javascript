const mySymOne = Symbol("key1")
const mySymTwo = Symbol("key2")

const JsUser = {
    name: "Chetan",
    "full name": "Chetan Yadav",
    email: "ydvchetan01@gmail.com",
    [mySymOne]: "mykey1",
    mySymTwo: "mykey2"
}

console.log(typeof JsUser[mySymOne]);
console.log(typeof JsUser.mySymTwo);
console.log(JsUser.mySymTwo)
console.log(JsUser[mySymOne])
console.log(typeof mySymOne)
console.log(typeof mySymTwo)
console.log(JsUser)


function addThreeNumbers(num1, num2, num3) {
    return num1 + num2 + num3
}
console.log(addThreeNumbers(5, 4, 3))
console.log(typeof addThreeNumbers())
console.log(typeof addThreeNumbers)

let numb = 8
console.log(numb >= 0 ? "Positive" : "Negative")
console.log(!5 == 5)
console.log(!(5 == 5))

// *Reason?**
myName()
function myName() {
    console.log('chetan')
}