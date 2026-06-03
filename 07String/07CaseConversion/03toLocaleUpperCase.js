/*
The toLocaleUpperCase() method converts a string to uppercase according to locale-specific language rules. It returns a new string and 
does not modify the original string. This method is useful for languages where uppercase conversion depends on regional settings.

Syntax
. string.toLocaleUpperCase()
or
. string.toLocaleUpperCase(locale)

Parameters
. locale (optional) → Language locale (e.g., "en-US", "tr").

Return Value
. Returns a new uppercase string based on locale rules.
*/


// Basic Example
let str = "javascript";
console.log(str.toLocaleUpperCase()); // JAVASCRIPT


// Convert a Sentence
let cs = "hello world";
console.log(cs.toLocaleUpperCase()); // HELLO WORLD


// Original String Remains Unchanged
let notValue = "JavaScript";
let upperStr = str.toLocaleUpperCase();
console.log(notValue); // JavaScript
console.log(upperStr); // JAVASCRIPT


/*
Difference: toUpperCase() vs toLocaleUpperCase()
Method	                        Locale Aware
. toUpperCase()	                . No
. toL   ocaleUpperCase()	    . Yes
*/

/*
Important Points
. Converts text to uppercase.
. Returns a new string.
. Does not modify the original string.
. Supports locale-specific language rules.
. Useful for internationalized applications.
*/


// Multiple Locale Options
let turk = "istanbul";
console.log(turk.toLocaleUpperCase(["tr", "en-US"])); //İSTANBUL
// JavaScript uses the first supported locale from the array.