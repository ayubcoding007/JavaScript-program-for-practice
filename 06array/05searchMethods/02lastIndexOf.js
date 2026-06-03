/*
lastIndexOf() is a built-in JavaScript array method used to find the last occurrence (position) of a specified 
element in an array. It searches the array from right to left (end to start). It returns the index of the last 
matching element. If the element is not found, it returns -1.

Syntax
array.lastIndexOf(element, startIndex)

Parameters:
. element → value to search
. startIndex (optional) → where to start searching backward
*/


// Basic usage
let arr = [10, 20, 30, 20];
console.log(arr.lastIndexOf(20)); // 3


// Element not found
let arr2 = [1, 2, 3];
console.log(arr2.lastIndexOf(50)); // -1


// Multiple duplicates
let arr3 = [5, 10, 5, 10, 5];
console.log(arr3.lastIndexOf(5)); // 4  It returns the last matching index


// Using start index (reverse search limit)
let arr4 = [10, 20, 30, 20, 10];
console.log(arr4.lastIndexOf(20, 2)); // 1
// Starts searching backward from index 2


/*
Important Points
. Searches from right to left
. Returns last matching index
. Returns -1 if not found
. Works like indexOf() but reverse direction
. Case-sensitive for strings
*/


/*
Difference indexOf() vs lastIndexOf()
Feature	        indexOf()	        lastIndexOf()
. Direction	    . Left → Right	    . Right → Left
. Result	    . First match	    . Last match
. Return	    . index / -1	    . index / -1
*/