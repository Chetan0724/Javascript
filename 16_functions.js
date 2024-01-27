function calculateCartPriceOne(...num1) {
    return num1
}

console.log(calculateCartPriceOne(100, 200, 500, 1000));


function calculateCartPriceTwo(val1, val2, ...num1) {
    return num1
}

console.log(calculateCartPriceTwo(50, 154, 358, 555));


const user = {
    username: "chetan",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

handleObject({
    username: "sam",
    price: 399
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));