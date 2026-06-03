/*
The toLowerCase() method converts all uppercase letters in a string to lowercase letters and returns a new string. 
It does not modify the original string. Numbers, spaces, and special characters remain unchanged.

Syntax
. string.toLowerCase()

Parameters
. No parameters.

Return Value
. Returns a new string in lowercase.
*/


// Basic Example
let str = "JAVASCRIPT";
console.log(str.toLowerCase()); // javascript


// Convert a Sentence
let str2 = "HELLO WORLD";
console.log(str2.toLowerCase()); // hello world


// Numbers and Symbols Remain Unchanged
let mix = "JS123@#";
console.log(mix.toLowerCase()); // js123@#


// Original String Remains Unchanged
let Or = "JavaScript";
let lowerOr = Or.toLowerCase();
console.log(Or); // JavaScript
console.log(lowerOr); // javascript


// User Input Example
let name = "AYUB";
console.log(name.toLowerCase()); // ayub


// Case-Insensitive Comparison
let case1 = "HELLO";
let case2 = "hello";
console.log(case1.toLowerCase() === case2.toLowerCase()); // true


/*
Difference: toUpperCase() vs toLowerCase()
Method	            Result
. toUpperCase()	    . Converts to uppercase
. toLowerCase()	    . Converts to lowercase
*/


/*
Important Points
. Converts all letters to lowercase.
. Returns a new string.
. Does not modify the original string.
. Numbers and special characters are unaffected.
. Commonly used for case-insensitive comparisons and user input normalization.
*/