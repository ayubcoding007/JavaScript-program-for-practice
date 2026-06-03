/*
The at() method returns the character at a specified index in a string. It works like bracket notation (str[index]) but also 
supports negative indexes, allowing access from the end of the string. It does not modify the original string. If the index 
is out of range, it returns undefined.

Syntax
string.at(index)

Parameters
. index → Position of the character.
. Positive index starts from the beginning (0).
. Negative index starts from the end (-1).

Return Value
. Returns the character at the specified index.
. Returns undefined for invalid indexes.
*/


// Basic Example
let str = "JavaScript";
console.log(str.at(0)); // J
console.log(str.at(4)); // S


// Using Negative Index
let str1 = "Hello";
console.log(str1.at(-1)); // o
console.log(str1.at(-2)); // l


// First Character
let Fs = "Hello";
console.log(Fs.at(0)); // H


// Last Character
let Ls = "Hello";
console.log(Ls.at(-1)); // o


// nvalid Index
let inl = "Hello";
console.log(inl.at(10));  // undefined


/*
Difference: charAt() vs at()
Method	        Negative Index Support	        Invalid Index
. charAt()	    . No	                        . "" (empty string)
. at()	        . Yes	                        . undefined
*/





