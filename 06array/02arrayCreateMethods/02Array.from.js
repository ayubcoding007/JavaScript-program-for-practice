/*
Array.from() is a built-in JavaScript method used to create a new array from an array-like or iterable object. 
It converts objects like strings, NodeLists, or Sets into a real array. It can also apply a function to each 
element while creating the array. It always returns a new array without modifying the original data.

Syntax
. Array.from(object, mapFunction, thisValue)

. object → array-like or iterable (string, set, map, etc.)
. mapFunction (optional) → modifies each element
. thisValue (optional) → sets this inside map function
*/


// Convert String to Array
let str = "Hello";
let arr = Array.from(str);
console.log(arr); // ['H', 'e', 'l', 'l', 'o']


// Convert Set to Array
let mySet = new Set([1, 2, 3]);
let arr2 = Array.from(mySet);
console.log(arr2); // [1, 2, 3]


// Convert Map to Array
let myMap = new Map([
  ["a", 1],
  ["b", 2]
]);
let arr3 = Array.from(myMap);
console.log(arr3);


// Example using variable names clearly
let numbers = [10, 20, 30];
let result = Array.from(numbers, (element, index) => {
  return element + index;
});
console.log(result); // [10, 21, 32]
