/*
findIndex() is a built-in JavaScript array method used to return the index of the first element that satisfies a given condition. 
It runs a callback function on each element until it finds a match. If a match is found, it returns the index; otherwise it 
returns -1. It does not modify the original array.

Syntax
. array.findIndex(callback(element, index, array))

Parameters:
. element → current element
. index (optional) → index of element
. array (optional) → original arra
*/


// Basic usage
let arr = [10, 20, 30, 40];
let result = arr.findIndex(x => x > 25);
console.log(result); // 2
// First element > 25 is 30, which is at index 2


// No match found
let arr2 = [1, 2, 3];
let result2 = arr2.findIndex(x => x > 10);
console.log(result2); // -1


// Using objects (important)
let users = [
  { id: 1, name: "sana" },
  { id: 2, name: "fathima" },
  { id: 3, name: "Ayub" }
];
let index = users.findIndex(user => user.id === 2);
console.log(index); // 1 (Object with id = 2 is at index 1)

/*
Important Points
. Returns index of first match
. Returns -1 if not found
. Does NOT modify original array
. Works with numbers, strings, objects
. Stops after first match (efficient)
*/

