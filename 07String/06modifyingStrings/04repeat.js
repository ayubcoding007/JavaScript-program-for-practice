/*
The repeat() method creates and returns a new string by repeating the original string a specified number of times. 
It does not modify the original string. The repetition count must be a non-negative number. This method is useful 
for generating patterns and formatted output.

Syntax
. string.repeat(count)

Parameters
. count → Number of times the string should be repeated.

Return Value
. Returns a new string containing the repeated copies.
*/


// Basic Example
let str = "Hi ";
console.log(str.repeat(3)); // Hi Hi Hi


// Repeat a Character
let star = "*";
console.log(star.repeat(5)); // *****


// Repeat a Word
let word = "Java ";
console.log(word.repeat(4)); // Java Java Java Java


// Repeat Zero Times
let Zero = "Hello";
console.log(Zero.repeat(0)); // "" (Empty String)


// Create a Line Separator
console.log("-".repeat(20)); // --------------------


// Original String Remains Unchanged
let Or = "JS";
let newOr = str.repeat(3);
console.log(Or); // JS
console.log(newOr); // JSJSJS


// Invalid Count
let abc = "Hello";
// let xyz = abc.repeat(-1)// Error RangeError
// console.log(xyz);  // // Error RangeError


/*
Important Points
. Returns a new repeated string.
. Does not modify the original string.
. Count must be 0 or greater.
. repeat(0) returns an empty string.
. Negative counts cause a RangeError.
*/