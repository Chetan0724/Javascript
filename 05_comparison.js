console.log(2 > 1); // true
console.log(2 >= 1); // true
console.log(2 < 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true

console.log("2" > 1); // true
console.log("02" > 1); // true

// In both cases, the strings are implicitly converted to numbers during the comparison, and the result is true because 2 is indeed greater than 1.

// Avoid this type of comparison; write clean code.
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
// The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That's why null >= 0 is true and null > 0 is false.
console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

console.log("2" == 2); // true
console.log("2" === 2); // false

// Using the same data types for comparison is generally a good practice.