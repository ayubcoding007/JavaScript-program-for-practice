/*
includes() is a built-in JavaScript array method used to check whether an array contains a specific element or not. 
It returns a boolean value: true if the element is found, otherwise false. It searches from left to right. 
It is a simple and modern alternative to indexOf() for checking existence.

Syntax
. array.includes(element, startIndex)

Parameters:
. element → value to search
. startIndex (optional) → where to start searching
*/


// Element exists
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.includes("Banana")); // true


// Element not exists
let arr = [10, 20, 30];
console.log(arr.includes(50)); // false


// Using start index
let arr2 = [10, 20, 30, 20];
console.log(arr2.includes(20, 2)); // true  (Starts searching from index 2)


// Case-sensitive (strings)
let arr3 = ["Apple", "Banana"];
console.log(arr3.includes("apple")); // false   (Because "Apple" ≠ "apple")


/*
Important Points
. Returns true / false
. Checks element existence only
. Searches left to right
. Case-sensitive for strings
. Modern replacement of indexOf() !== -1
*/

/*
includes() vs indexOf()
Feature	            includes()	            indexOf()
Return type	        true / false	        index / -1
Readability	        Easy	                Less clear
Use case	        check existence	        find position
*/