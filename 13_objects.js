const tinderUserOne = new Object() // Singleton Object
console.log(tinderUserOne);

const tinderUserTwo = {} // Non-Singleton Object
console.log(tinderUserTwo);

tinderUserOne.id = "123abc"
tinderUserOne.name = "Sammy"
tinderUserOne.isLoggedIn = false
console.log(tinderUserOne);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Chetan",
            lastname: "Yadav"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {obj1, obj2}
console.log(obj3);

// const obj4 = Object.assign(obj1, obj2)
const obj4 = Object.assign({}, obj1, obj2) // recom
console.log(obj4);

const obj5 = {...obj1, ...obj2}
console.log(obj5);


const users = [
    {
        id: 1,
        email: "c@gmail.com"
    },
    {
        id: 2,
        email: "y@gmail.com"
    }
]

console.log(users[1].email);


console.log(tinderUserOne);
console.log(Object.keys(tinderUserOne));
console.log(Object.values(tinderUserOne));
console.log(Object.entries(tinderUserOne));
console.log(tinderUserOne.hasOwnProperty('isLoggedIn'));