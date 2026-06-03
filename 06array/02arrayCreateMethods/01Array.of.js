/*
Array.of() is a built-in JavaScript method used to create a new array from the arguments passed to it. 
Unlike Array(), it always creates an array with the exact elements provided, even if there is only one number.

It helps avoid confusion where new Array(5) creates an empty array of length 5 instead of [5].

Syntax
Array.of(element1, element2, element3, ...)
*/

// Example
let arr1 = Array.of(5);
console.log(arr1); // [5]

let arr2 = Array.of(1, 2, 3);
console.log(arr2); // [1, 2, 3]

// Single Element Case
let arr3 = Array.of(5);
console.log(arr3); // [5]
// . Even a single number becomes an element, not a length.


// Multiple Data Types Support
// Array.of() can store any type of values:
let arr4 = Array.of(1, "hello", true, null, {name: "A"});
console.log(arr4); // [ 1, 'hello', true, null, { name: 'A' } ]

/*
Comparison Table
Feature	            Array()	                        Array.of()
Single number	    creates empty array	            creates array with number
Multiple values	    works normally	                works normally
Behavior	        confusing	                    predictable
Recommended	        not always	                    yes
*/

// Array constructor
let a = new Array(5);
console.log(a); // [empty × 5]
// Creates an empty array with length 5