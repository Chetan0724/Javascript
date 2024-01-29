// <, >, <=, >=, ==, !=, ===, !==


/*

if (condition) {

}

*/


/*

if (condition) {

} else {
    
}

*/


const isUserLoggedIn = true

if (isUserLoggedIn) {
    console.log("Yes");
}


const temperature = 41

if (temperature < 50) {
    console.log("less than 50");
} else {
console.log("temperature is greater than 50");
}

console.log("temperature is 41");


const score = 200

if (score > 100) {
    const power = "fly"
    console.log(`user power: ${power}`);
}

// console.log(`user power: ${power}`); error --> power is not defined


const balanceOne = 1000
if (balanceOne > 500) console.log("test"),console.log("test2"); // --> not recom (readability)


const balance = 1000

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}


const isUserLoggedInOne = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserLoggedInOne && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}