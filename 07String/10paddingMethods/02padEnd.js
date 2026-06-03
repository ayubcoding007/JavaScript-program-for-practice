/*
The padEnd() method pads the end of a string with another string until it reaches a specified length. 
It returns a new string and does not modify the original string. This method is useful for formatting 
text, tables, IDs, and output alignment.

Syntax
. string.padEnd(targetLength, padString)

Parameters
. targetLength → The final length of the string.
. padString (optional) → The string used for padding. Default is a space (" ").

Return Value
. Returns a new padded string.
*/

// Basic Example
let str = "5";
console.log(str.padEnd(3, "0")); // 500

// Pad with Zeros
let num = "25";
console.log(num.padEnd(5, "0")); // 25000


// Pad with Characters
let str1 = "JS";
console.log(str1.padEnd(6, "*")); // JS****


// Pad with Multiple Characters
let multi = "Hello";
console.log(multi.padEnd(10, "ab")); // Helloababa


/*
Important Points
. Adds characters at the end of a string.
. Returns a new string.
. Does not modify the original string.
. Useful for text formatting and alignment.
. If the string is already longer than the target length, no padding is added.
*/