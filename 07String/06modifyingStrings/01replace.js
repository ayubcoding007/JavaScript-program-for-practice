/*
The replace() method replaces the first occurrence of a specified value in a string with another value and returns a new string. 
It can work with both strings and Regular Expressions (RegEx). The original string is not modified.

Syntax
. string.replace(searchValue, newValue)

Parameters
. searchValue → The value or pattern to find.
. newValue → The replacement value.

Return Value
. Returns a new string with the replaced value.
*/


// Basic Example
let str = "Hello World";
console.log(str.replace("World", "JavaScript")); //Hello JavaScript


// Replace First Occurrence Only
let fruits = "apple apple apple";
console.log(fruits.replace("apple", "mango")); // mango apple apple


// Case-Sensitive Replace
let csr = "Hello";
console.log(csr.replace("hello", "Hi")); // Hello
// . (No replacement because the search is case-sensitive.)


// Using Regular Expression
let js = "JavaScript";
console.log(js.replace(/Script/, "Program")); // JavaProgram


// Case-Insensitive Replace
let hw = "HELLO World";
console.log(hw.replace(/hello/i, "Hi")); // Hi World


/*
Important Points
. Returns a new string.
. Does not modify the original string.
. Replaces only the first occurrence by default.
. Supports Regular Expressions.
. Use the g flag or replaceAll() to replace all matches.
*/