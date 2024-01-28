// Hoisting

function one() {
    const username = "chetan"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website) error --> website is not defined

    two()
}

one()


if (true) {
    const username = "chetan"
    if (username === "chetan") {
        const websiteone = " youtube"
        console.log(username + websiteone);
    }
    // console.log(websiteone); error --> websiteone is not defined
}

// console.log(username); error --> username is not defined


// Interesting Concept

console.log(addone(5));

function addone(num) {
    return num + 1
}

console.log(addone(5));


// addTwo(5) error --> Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num + 2
}

console.log(addTwo(5));