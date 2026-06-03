/*
The concat() method is used to join two or more strings and returns a new combined string. It does not change the original strings. 
Multiple strings can be concatenated in a single call. It is an alternative to the + operator.

Syntax
. string.concat(str1, str2, ..., strN)

Parameters
. str1, str2, ... → Strings to be joined.

Return Value
. Returns a new concatenated string.
*/

// Basic Example
let str1 = "Hello";
let str2 = " World";
console.log(str1.concat(str2)); // Hello World


// Concatenate Multiple Strings
let str = "Java";
console.log(str.concat("Script", " Tutorial")); // JavaScript Tutorial


// Adding Spaces
let firstName = "Sheikh";
let lastName = "Ayub";
console.log(firstName.concat(" ", lastName)); // Sheikh Ayub


// Original String Remains Unchanged
let org = "Hello";
let dstr = org.concat(" World");
console.log(org); // Hello
console.log(dstr); // Hello World


/*
Difference: concat() vs + Operator
Method	        Example
. concat()	    . str1.concat(str2)
. + Operator	. str1 + str2
*/ 


/*
Important Points
. Joins two or more strings.
. Returns a new string.
. Does not modify the original strings.
. Can concatenate multiple strings at once.
. + operator and template literals are more commonly used today.
*/