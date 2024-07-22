const arrOne = ["jetha", "babita", "iyer"]

for (const elementArrOne of arrOne) {
    console.log(elementArrOne)
}

const arrayOfObj = [
    {
        studentName: "Chetan",
        age: 23
    },
    {
        studentName: "Rahul",
        age: 19
    },
    {
        studentName: "Sanjay",
        age: 21
    }
]

for (const elmentOfArray of arrayOfObj) {
    console.log(elmentOfArray)
    console.log(elmentOfArray.age)
    console.log(elmentOfArray.studentName)
}

// ***

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(typeof map); // Object


// ***

/*

const myObj = {
    'game1': "nfs",
    'game2': 'spideman'
}

for (const elements of myObj) {
    console.log(elements)
}

TypeError: myObj is not iterable

*/

// ***

const myObj1 = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: "swift by apple"
}


console.log(myObj1.js)

for (const newElement in myObj1) {
    // console.log(myObj1.newElement); // This will not work
    console.log(myObj1[newElement]);
}