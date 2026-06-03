/*
The charCodeAt() method returns the Unicode (UTF-16) code of the character at a specified index in a string. Indexing starts from 0. 
If the index is invalid, it returns NaN. The original string remains unchanged.

Syntax
string.charCodeAt(index)

Parameters
. index → Position of the character whose Unicode value is needed.

Return Value
. Returns the Unicode (UTF-16) code of the character.
. Returns NaN if the index is out of range.
*/


// Basic Example
let str = "Hello";
console.log(str.charCodeAt(0)); // 72
console.log(str.charCodeAt(1)); // 101


// Find Unicode of a Character
let str2 = "A";
console.log(str2.charCodeAt(0)); // 65


// Lowercase and Uppercase
console.log("A".charCodeAt(0)); // 65
console.log("a".charCodeAt(0)); // 97


// Last Character Code
let sub = "JavaScript";
console.log(sub.charCodeAt(sub.length - 1));


// Invalid Index
let max = "Hello";
console.log(max.charCodeAt(10)); // NaN


// Loop Through All Characters
let loo = "ABC";
for(let i = 0; i < loo.length; i++) {
    console.log(loo.charCodeAt(i));
}
/*
65
66
67
*/