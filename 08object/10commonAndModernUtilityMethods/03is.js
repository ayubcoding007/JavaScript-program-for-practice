/*
Object.is() is used to compare whether two values are exactly the same.
Object.is() determines whether two values are the same value.

It is similar to: === (strict equality)

Syntax
Object.is(value1, value2)
*/

// Basic Example
console.log(Object.is(10, 10)); // true

// Example — Different Values
console.log(Object.is(10, 20)); // false

// Comparing Strings
console.log(Object.is("Java", "Java")); // true
console.log(Object.is("Java", "JS")); // false


/*
Comparing Objects
. Objects are compared by reference.
*/
const a = { name: "Ayub" };
const b = { name: "Ayub" };
console.log(Object.is(a, b)); // false - both objects are different references in memory.


// Same Object Reference
const a = { name: "Ayub" };
const b = a;
console.log(Object.is(a, b)); // true


/*
Comparison Table
Comparison	        ===	        Object.is()
. 10,10	            . true	    . true
. "a","a"	        . true	    . true
. NaN,NaN	        . false	    . true
. +0,-0	            . true	    . false
*/