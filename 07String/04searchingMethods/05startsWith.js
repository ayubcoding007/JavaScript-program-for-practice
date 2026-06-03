/*
The startsWith() method checks whether a string begins with a specified value and returns true or false. 
It is case-sensitive and does not change the original string. This method is useful for validating 
prefixes, URLs, file names, and user input.

Syntax
string.startsWith(searchString, position)

Parameters
. searchString → The text to search for at the beginning.
. position (optional) → Position from where to start checking.

Return Value
. Returns true if the string starts with the specified value.
. Returns false otherwise.
*/


// Basic Example
let str = "JavaScript";
console.log(str.startsWith("Java")); // true


// Value Not Found
let notValue = "JavaScript";
console.log(notValue.startsWith("Script")); //false


// Case-Sensitive Search
let css = "Hello";
console.log(css.startsWith("hello")); // false
console.log(css.startsWith("Hello")); // true


// Using Position Parameter
let upp = "Hello JavaScript";
console.log(upp.startsWith("Java", 6)); // true
// Explanation: Checking starts from index 6.