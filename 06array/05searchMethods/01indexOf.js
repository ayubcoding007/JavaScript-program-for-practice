/*
indexOf() is a built-in JavaScript array method used to find the index (position) of a specific element in an array. 
It returns the index of the first matching element. If the element is not found, it returns -1. 
Indexing in JavaScript starts from 0.

Syntax
array.indexOf(element, startIndex)

Parameters
. element → value to search
. startIndex (optional) → where to start searching
*/


// Basic usage
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.indexOf("Banana")); // 1

// Element not found
let arr = [10, 20, 30];
console.log(arr.indexOf(50)); // -1


// Duplicate values (first match only)
let arr2 = [10, 20, 10, 30];
console.log(arr2.indexOf(10)); // 0
// . It returns only the first occurrence


// Using start index
let arr3 = [10, 20, 30, 20];
console.log(arr3.indexOf(20, 2)); // 3 Starts searching from index 2

/*
Important Points
. Returns index of element
. Returns -1 if not found
. Finds only first match
. Search is case-sensitive (for strings)
. Supports optional start index
*/