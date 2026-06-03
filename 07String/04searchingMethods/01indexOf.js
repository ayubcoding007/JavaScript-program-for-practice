/*
The indexOf() method searches a string for a specified value and returns the index of its first occurrence. 
The search is case-sensitive. If the value is not found, it returns -1. The original string remains unchanged.

Syntax
string.indexOf(searchValue, startIndex)

Parameters
. searchValue → The text to search for.
. startIndex (optional) → Position from where the search starts.

Return Value
. Returns the index of the first match.
. Returns -1 if no match is found.
*/


// Find a Word
let str = "I love JavaScript";
console.log(str.indexOf("JavaScript")); // 7


// Value Not Found
let notValue = "Hello";
console.log(notValue.indexOf("x")); // -1


// Using Start Index
let fs = "banana";
console.log(fs.indexOf("a", 2)); // 3
// Explanation: Search starts from index 2.


// Case-Sensitive Search
let cases = "Hello";
console.log(cases.indexOf("h")); // -1
console.log(cases.indexOf("H")); // 0


// Find First Occurrence
let Fo = "banana";
console.log(Fo.indexOf("a")); // 1