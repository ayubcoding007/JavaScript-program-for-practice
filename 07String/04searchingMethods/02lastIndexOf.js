/*
The lastIndexOf() method searches a string for a specified value and returns the index of its last occurrence. 
The search is performed from right to left, but the returned index is based on the normal left-to-right indexing. 
If the value is not found, it returns -1. The original string remains unchanged.

Syntax
string.lastIndexOf(searchValue, startIndex)

Parameters
. searchValue → The text to search for.
. startIndex (optional) → Position from where the search starts backward.

Return Value
. Returns the index of the last occurrence.
. Returns -1 if the value is not found.
*/

// Basic Example
let str = "banana";
console.log(str.lastIndexOf("a")); // 5


// Find Last Occurrence of a Word
let flo = "I love JavaScript. JavaScript is awesome.";
console.log(flo.lastIndexOf("JavaScript")); // 19


// Value Not Found
let notValue = "Hello";
console.log(notValue.lastIndexOf("x")); // -1


// Using Start Index
let usi = "banana";
console.log(usi.lastIndexOf("a", 4)); // 3


// Case-Sensitive Search
let cases = "Hello";
console.log(cases.lastIndexOf("h")); // -1
console.log(cases.lastIndexOf("H")); // 0


/*
Difference: indexOf() vs lastIndexOf()
Method	            Returns
. indexOf()	        . First occurrence
. lastIndexOf()	    . Last occurrence
*/