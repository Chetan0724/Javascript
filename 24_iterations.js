// forof loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}


const greetings = "Hello world!"

for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}


// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);

for (const key of map) {
    console.log(key);
}

for (const [key, value] of map) {
    console.log(key, ':-', value);
}


const myObject = {
    'game1': 'NFS', // game1
    'game2': 'Spiderman' // game2
}

/*

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
}

TypeError: myObject is not iterable

*/


const myObjectTwo = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObjectTwo) {
    console.log(`${key} shortcut is for ${myObjectTwo[key]}`);
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}


const mapone = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in mapone) {
    console.log(key);
}


const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function (item) {
   console.log(item);
})

coding.forEach((val) => {
    console.log(val);
})

function printMe(item) {
    console.log(item);
}

coding.forEach(printMe)


coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )