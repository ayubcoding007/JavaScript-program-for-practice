/*
The endsWith() method checks whether a string ends with a specified value and returns true or false. It is case-sensitive and 
does not modify the original string. This method is useful for checking file extensions, URL endings, and string suffixes.

Syntax
string.endsWith(searchString, length)

Parameters
. searchString → The text to search for at the end of the string.
. length (optional) → Treats the string as if it were this length before checking.

Return Value
. Returns true if the string ends with the specified value.
. Returns false otherwise.
*/


// Basic Example
let str = "JavaScript";
console.log(str.endsWith("Script")); // true


// Value Not Found
let notValue = "JavaScript";
console.log(notValue.endsWith("Java")); // false


// Case-Sensitive Search
let css = "Hello";
console.log(css.endsWith("hello")); // false
console.log(css.endsWith("Hello")); //true


// Using Length Parameter
let ulp = "Hello JavaScript";
console.log(ulp.endsWith("Hello", 5)); // true
// The string is treated as "Hello" (first 5 characters), then checked.