/*
findLastIndex() is a JavaScript array method used to return the index of the last element that satisfies a 
given condition. It searches the array from right to left (end to start). It returns the index of the last 
matching element, and if no match is found, it returns -1. It does not modify the original array. 
(Introduced in ES2022)

Syntax
. array.findLastIndex(callback(element, index, array))

Parameters
. element → current element
. index (optional) → index of element
. array (optional) → original array
*/


// Basic usage
let arr = [10, 20, 30, 40, 50, 30];
let result = arr.findLastIndex(x => x === 30);
console.log(result); // 5 (Last 30 is at index 5)


// No match found
let arr2 = [1, 2, 3];
let result2 = arr2.findLastIndex(x => x > 10);
console.log(result2); // -1


// Using objects (important)
let users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Rahul" },
  { id: 2, name: "Neha" }
];
let index = users.findLastIndex(user => user.id === 2); 
console.log(index); // 2


/*
Important Points
. Searches from right → left
. Returns index of last match
. Returns -1 if not found
. Does NOT modify original array
. Works with numbers, strings, objects
. ES2022 feature
*/

/*
findIndex() vs findLastIndex()
Feature	            findIndex()	            findLastIndex()
Direction	        Left → Right	        Right → Left
Return	            First index	            Last index
No match	        -1	                    -1
*/