/*
The trim() method removes whitespace from both the beginning and the end of a string. It returns a new string and does not 
modify the original string. Spaces, tabs (\t), and newlines (\n) at the start and end are removed.

Syntax
. string.trim()

Parameters
. No parameters.

Return Value
. Returns a new string with leading and trailing whitespace removed.
*/

// Basic Example
let str = "   Hello World   ";
console.log(str.trim()); // Hello World

// Remove Extra Spaces
let name = "   Ayub   ";
console.log(name.trim()); // Ayub


// Spaces Inside String Are Not Removed
let str2 = "  Hello   World  ";
console.log(str2.trim()); // Hello   World
// Only starting and ending spaces are removed.


// With Tabs and New Lines
let nt = "\n\t Hello JavaScript \t\n";

console.log(nt.trim()); // Hello JavaScript


// Original String Remains Unchanged
let Or = "   Hello   ";
let newOr = str.trim();
console.log(Or); // "   Hello   "
console.log(newOr); //"Hello"


// Common Use: User Input Validation
let username = "   admin   ";
if (username.trim() === "admin") {
    console.log("Valid User"); // Valid User
}