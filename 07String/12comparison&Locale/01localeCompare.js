/*
The localeCompare() method compares two strings according to the language and locale rules. It returns a number indicating 
whether the reference string comes before, after, or is equal to another string. It is commonly used for sorting strings 
alphabetically in a locale-aware manner.

Syntax
. string.localeCompare(compareString)

Parameters
. compareString: The string to compare with the original string.

Return Value
Return Value	        Meaning
. Negative number	    . Reference string comes before compareString
. Positive number	    . Reference string comes after compareString
. 0	                    . Both strings are equal
*/


// Basic Example
let result = "apple".localeCompare("banana");
console.log(result); // -1
// Because "apple" comes before "banana" alphabetically


// Equal Strings
let result1 = "hello".localeCompare("hello");
console.log(result1); // 0


// Greater String
let result3 = "zebra".localeCompare("apple");
console.log(result3); // 1


// Sorting an Array
let fruits = ["banana", "apple", "orange"];
fruits.sort((a, b) => a.localeCompare(b));
console.log(fruits); // ["apple", "banana", "orange"]


// Case-Insensitive Comparison
let result4 = "APPLE".localeCompare("apple", undefined, {
    sensitivity: "base"
});
console.log(result4); // 0


/*
Common Options
Option	                    Description
. sensitivity: "base"	    . Ignore case and accents
. sensitivity: "accent"	    . Consider accents
. numeric: true	            . Compare numbers correctly
. caseFirst: "upper"	    . Uppercase first
*/

/*
Interview Points
. localeCompare() compares strings based on locale rules.
. Returns negative, positive, or 0.
. Commonly used with sort() for alphabetical sorting.
. Supports language-specific sorting and comparison options.
. numeric: true helps sort numeric strings correctly.
*/