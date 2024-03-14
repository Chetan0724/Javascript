const name = "chetan"
const repoCount = 8

console.log(name + repoCount + " Value"); // Not recom

console.log("Hello my name is " + name + " and my repo count is " + repoCount);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // recom

const gameName = new String('chetan-yadav-indore')
console.log(typeof gameName)
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

// const newString = gameName.substring(-8, 18) --> (0, 18)
const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 18)
console.log(anotherString);

const newStringOne = "    chetan    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://chetan.com/chetan%20yadav"

console.log(url.replace('%20', '-'))

console.log(url.includes('chetan'))

console.log(gameName.split('-'));