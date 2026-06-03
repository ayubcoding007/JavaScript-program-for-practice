/*
The padStart() method pads the beginning of a string with another string until it reaches a specified length. 
It returns a new string and does not modify the original string. This method is commonly used for formatting 
numbers, IDs, and dates.

Syntax
. string.padStart(targetLength, padString)

Parameters
. targetLength → The final length of the string.
. padString (optional) → The string used for padding. Default is a space (" ").

Return Value
. Returns a new padded string.
*/


// Basic Example
let str = "5";
console.log(str.padStart(3, "0")); // 005


// Pad with Zeros
let num = "25";
console.log(num.padStart(5, "0")) // 00025


// Pad with Characters
let str1 = "JS";
console.log(str1.padStart(6, "*")); // ****JS


// Pad with Multiple Characters
let str2 = "Hello";
console.log(str2.padStart(10, "ab")); // ababaHello


// No Padding Needed
let noPadding = "JavaScript";
console.log(noPadding.padStart(5, "*")); // JavaScript
// Explanation: The string is already longer than the target length.


// Original String Remains Unchanged
let num1 = "7";
let newnum1 = num1.padStart(3, "0");
console.log(num1); // 7
console.log(newnum1); // 007


/*
Difference: padStart() vs padEnd()
Method	        Adds Padding
. padStart()	. Beginning of string
. padEnd()	    . End of string
*/

/*
Important Points
. Adds characters at the beginning of a string.
. Returns a new string.
. Does not modify the original string.
. Useful for formatting numbers and IDs.
. If the string is already longer than the target length, no padding is added.
*/