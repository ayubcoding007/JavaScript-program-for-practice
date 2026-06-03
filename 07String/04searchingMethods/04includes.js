/*
The includes() method checks whether a string contains a specified value and returns true or false. It is case-sensitive and does 
not modify the original string. This method is commonly used to check if a substring exists within a string.

Syntax
. string.includes(searchValue, startIndex)

Parameters
. searchValue → The text to search for.
. startIndex (optional) → Position from where the search begins.

Return Value
. Returns true if the value is found.
. Returns false if the value is not found.
*/


// Basic Example
let js = "JavaScript";

console.log(js.includes("Script")); //true


// Value Not Found
let phy = "JavaScript";

console.log(phy.includes("Python")); // false


// Using Start Index
let usi = "Hello World";
console.log(usi.includes("World", 6)); // true


// Case-Sensitive Search
let css = "Hello";
console.log(css.includes("hello")); // false
console.log(css.includes("Hello")); //true


// Check a Single Character
let sc = "JavaScript";
console.log(sc.includes("J")); // true