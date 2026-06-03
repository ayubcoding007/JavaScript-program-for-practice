/*
The charAt() method returns the character at a specified index (position) in a string. Indexing starts from 0, 
meaning the first character is at index 0. If the index is out of range, it returns an empty string (""). 
The original string is not modified.

Syntax
string.charAt(index)

Parameters
. index → Position of the character to retrieve.

Return Value
. Returns the character at the specified index.
. Returns "" if the index does not exist.
*/


let str = "JavaScript";
console.log(str.charAt(0)); // J
console.log(str.charAt(4)); // S


// Access First Character
let str1 = "Hello";
console.log(str1.charAt(0));


// Access Last Character
let str2 = "Hello";
console.log(str2.charAt(str2.length - 1));


// Index Out of Range
let str3 = "Hello";

console.log(str3.charAt(10)); // ""


// Using a Variable
let str4 = "JavaScript";
let index = 2;
console.log(str4.charAt(index));