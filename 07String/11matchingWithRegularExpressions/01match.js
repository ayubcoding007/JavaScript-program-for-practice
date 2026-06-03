/*
The match() method is used to search a string for a match against a regular expression (RegExp) and returns the matching result. 
If no match is found, it returns null. It is commonly used for pattern searching, validation, and extracting text from strings.

Syntax
. string.match(regexp)

Parameters
. regexp: A regular expression object or a string to search for.

Return Value
. Returns an array containing the matched results.
. Returns null if no match is found.
*/


// Basic Example
let str = "Hello World";
let result = str.match("World");
console.log(result); // [ 'World', index: 6, input: 'Hello World', groups: undefined ]


// Using Regular Expression
let str1 = "JavaScript is fun";
let result1 = str1.match(/fun/);
console.log(result1); // [ 'fun', index: 14, input: 'JavaScript is fun', groups: undefined ]


// Global (g) Flag
// Returns all matches instead of only the first match.
let str2 = "cat bat rat cat";
let result2 = str2.match(/cat/g);
console.log(result2); // [ 'cat', 'cat' ]


// Case-Insensitive (i) Flag
// Ignores uppercase and lowercase differences.
let str3 = "JavaScript javascript JAVASCRIPT";
let result3 = str3.match(/javascript/gi);
console.log(result3); // [ 'JavaScript', 'javascript', 'JAVASCRIPT' ]


/*
Common RegExp Patterns Used with match()
Pattern	    Meaning
. /\d/	    . Any digit (0-9)
. /\d+/	    . One or more digits
. /\w+/	    . One or more word characters
. /[a-z]+/i	. Letters only
. /\s/	    . Whitespace
. /^abc/	. Starts with "abc"
. /xyz$/	. Ends with "xyz"
. /./	    . Any single character
*/

/*
Interview Points
. match() searches a string using a regular expression.
. Returns an array of matches or null.
. Without the g flag, only the first match is returned with extra details (index, input).
. With the g flag, all matches are returned as an array.
. Commonly used for validation, extraction, and text processing.
*/