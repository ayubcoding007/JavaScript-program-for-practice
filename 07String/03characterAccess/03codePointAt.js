/*
The codePointAt() method returns the Unicode code point value of the character at a specified index in a string. 
It supports characters outside the Basic Multilingual Plane (BMP), such as emojis and special 
symbols. Indexing starts from 0. If the index is invalid, it returns undefined.

Syntax
string.codePointAt(index)

Parameters
. index → Position of the character.

Return Value
. Returns the Unicode code point number.
. Returns undefined if the index is out of range.
*/


// Basic Example
let str = "Hello";
console.log(str.codePointAt(0)); //72
console.log(str.codePointAt(1)); //101


// Single Character Example
let str1 = "A";
console.log(str1.codePointAt(0)); // 65


// Emoji Example
let emoji = "😀";
console.log(emoji.codePointAt(0)); // 128512


// Difference Between charCodeAt() and codePointAt()
let emoji1 = "😀";
console.log(emoji1.charCodeAt(0)); // 55357
console.log(emoji1.codePointAt(0)); // 128512
// . charCodeAt() returns only the first UTF-16 code unit.
// . codePointAt() returns the full Unicode code point.


// Invalid Index
let sub = "Hello";
console.log(sub.codePointAt(10)); // undefined


// Loop Through Characters
let loo = "ABC";
for(let i = 0; i < loo.length; i++) {
    console.log(loo.codePointAt(i));
}
/*
65
66
67
*/