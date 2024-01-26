// Object destructuring

const course = {
    coursename: "Js in Hindi",
    price: "999",
    courseInstructor: "hitesh"
}

console.log(course.courseInstructor);

const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);


// Application Programming Interfaces (APIs)
// JavaScript Object Notation (JSON)

/*

{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}

[
    {},
    {},
    {}
]

*/