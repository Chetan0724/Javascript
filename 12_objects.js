// Object.create --> Singleton

// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Chetan",
    "full name": "Chetan Yadav",
    [mySym]: "mykey1",
    age: 22,
    location: "Indore",
    email: "ydvchetan01@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "chetanips01@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "chetanindore01@gmail.com"
console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS user");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());