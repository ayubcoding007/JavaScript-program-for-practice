/*
The toLocaleLowerCase() method converts a string to lowercase according to locale-specific language rules. It returns a new 
string and does not modify the original string. This method is useful for languages where lowercase conversion depends on 
regional settings.

Syntax
. string.toLocaleLowerCase()
or
. string.toLocaleLowerCase(locale)

Parameters
. locale (optional) → Language code such as "en-US", "tr", "fr", etc.

Return Value
. Returns a new lowercase string based on locale rules.
*/


// Basic Example
let str = "HELLO";
console.log(str.toLocaleLowerCase()); // hello


// Example with Locale Option
let str1 = "JAVASCRIPT";
console.log(str1.toLocaleLowerCase("en-US")); // javascript


// Turkish Locale Example
let turk = "İSTANBUL";
console.log(turk.toLocaleLowerCase("tr")); // istanbul


/*
Important Points
. Converts text to lowercase.
. Returns a new string.
. Does not modify the original string.
. Supports locale-specific language rules.
. Useful for international and multilingual applications.
*/