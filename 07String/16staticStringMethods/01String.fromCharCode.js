/*
String.fromCharCode() is a static method of the String object that creates a string from one or more UTF-16 character codes. It converts numeric character codes into their corresponding characters. It is commonly used when working with ASCII and Unicode character values.

Syntax
. String.fromCharCode(num1)
or
. String.fromCharCode(num1, num2, ..., numN)

Parameters
. num1, num2, ... numN → UTF-16 character codes (integers).

Return Value
. Returns a new string created from the specified character codes.
*/


// Basic Example
console.log(String.fromCharCode(65)); // A
// Because ASCII/UTF-16 code 65 = A.


// Multiple Character Codes
console.log(String.fromCharCode(72, 101, 108, 108, 111)); // Hello


// Lowercase Letters
console.log(String.fromCharCode(97)); // a
console.log(String.fromCharCode(122)); // z