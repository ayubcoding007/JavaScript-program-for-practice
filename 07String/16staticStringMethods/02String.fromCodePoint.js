/*
String.fromCodePoint() is a static method that creates a string from one or more Unicode code points. 
Unlike String.fromCharCode(), it supports the entire Unicode range, including emojis and special symbols. 
It converts numeric Unicode values into their corresponding characters and returns the resulting string.

Syntax
. String.fromCodePoint(num1)
or
. String.fromCodePoint(num1, num2, ..., numN)

Parameters
. num1, num2, ... numN → Valid Unicode code points (0 to 0x10FFFF).

Return Value
. Returns a string created from the specified Unicode code points.
*/


// Basic Example
console.log(String.fromCodePoint(65)); // A

// Multiple Code Points
console.log(String.fromCodePoint(72, 101, 108, 108, 111)); //Hello

// Emoji Example
console.log(String.fromCodePoint(128522)); // 😊


/*
Difference Between fromCharCode() and fromCodePoint()
Feature	                fromCharCode()	                fromCodePoint()
Input	                UTF-16 code units	            Unicode code points
Emoji Support	        Limited	                        Full support
Unicode Range	        Basic	                        Entire Unicode range
Modern Usage	        Less preferred	                Recommended
*/

/*
Interview Points
. String.fromCodePoint() is a static method of String.
. Converts Unicode code points into characters.
. Supports emojis and all Unicode characters.
. Reverse method is codePointAt().
. More powerful and modern than String.fromCharCode().
. Throws RangeError for invalid code points.
*/