/*
The trimLeft() method removes whitespace from the left side (beginning) of a string. It returns a new string and does not modify the 
original string. trimLeft() is an alias of trimStart(), meaning both methods work the same way.

Syntax
. string.trimLeft()

Return Value
. Returns a new string with leading whitespace removed.
*/

// Example
let str = "   Hello World";
console.log(str.trimLeft());


/*
The trimRight() method removes whitespace from the right side (end) of a string. It returns a new string and does not modify 
the original string. trimRight() is an alias of trimEnd(), meaning both methods perform the same operation.

Syntax
. string.trimRight()

Return Value
. Returns a new string with trailing whitespace removed.
*/

// Example
let str1 = "Hello World   ";
console.log(str1.trimRight()); // Hello World


/*
Difference Between Related Methods
Method	                            Removes Spaces From
. trim()	                        . Start and End
. trimStart() / trimLeft()	        . Start Only
. trimEnd() / trimRight()	        . End Only
*/

/*
Important Points
. trimLeft() and trimStart() are identical.
. trimRight() and trimEnd() are identical.
. Both return a new string.
. Original string remains unchanged.
. Used to remove unwanted spaces from user input.
*/