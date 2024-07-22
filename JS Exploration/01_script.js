let userOne = {
    collegeId: 1054,
    collegeBranch: "CSE"
}

let userTwo = userOne

userTwo = {
    collegeId: 1060,
    collegeBranch: "FT"
}

console.log(userOne);
console.log(userTwo);

// ***

let userOneNew = {
    collegeId: 1054,
    collegeBranch: "CSE"
}

let userTwoNew = userOneNew

userTwoNew.collegeId = 1055
userTwoNew.collegeBranch = "AIML"

console.log(userTwoNew);
console.log(userOneNew);