/*
The search() method searches a string for a specified pattern (string or regular expression) and returns the index of the first match. 
If no match is found, it returns -1. It is commonly used with Regular Expressions (RegEx). The original string remains unchanged.

Syntax
. string.search(searchValue)

Parameters
.searchValue → A string or Regular Expression (RegEx) to search for.

Return Value
. Returns the index of the first match.
. Returns -1 if no match is found.
*/


// Basic Example
let str = "Hello JavaScript";
console.log(str.search("Java")); // 6


// Search a Word
let sw = "I love JavaScript";
console.log(sw.search("love")); // 2

// Value Not Found
let notValue = "Hello";
console.log(notValue.search("x")); // -1


// Using Regular Expression
let rg = "JavaScript";
console.log(rg.search(/Script/)); //4


// Case-Insensitive Search
let ci = "Hello World";
console.log(ci.search(/world/i)); // 6
// i flag makes the search case-insensitive.


// Search for First Uppercase Letter
let fu = "hello World";
console.log(fu.search(/[A-Z]/)); //6


// Search for First Digit
let fd = "abc123xyz";
console.log(fd.search(/[0-9]/)); // 3