/*
The toUpperCase() method converts all lowercase letters in a string to uppercase letters and returns a new string. 
It does not modify the original string. Non-alphabetic characters such as numbers and symbols remain unchanged.

Syntax
. string.toUpperCase()

Parameters
. No parameters.

Return Value
. Returns a new string in uppercas
*/


// Basic Example
let str = "javascript";
console.log(str.toUpperCase()); // JAVASCRIPT


// Convert a Sentence
let str1 = "Hello World";
console.log(str1.toUpperCase()); // HELLO WORLD


// Numbers and Symbols Remain Unchanged
let mix = "js123@#";
console.log(mix.toUpperCase()); // JS123@#


// Original String Remains Unchanged
let lor = "JavaScript";
let upperStr = lor.toUpperCase();
console.log(str); // JavaScript
console.log(upperStr); // JAVASCRIPT


// User Input Example
let name = "ayub";
console.log(name.toUpperCase()); // AYUB


// Comparison Example
let value1 = "hello";
let value2 = "HELLO";
console.log(value1.toUpperCase() === value2); // true

/*
Difference: toUpperCase() vs toLowerCase()
Method	         Result
. toUpperCase()	 . Converts to uppercase
. toLowerCase()	 . Converts to lowercase
*/