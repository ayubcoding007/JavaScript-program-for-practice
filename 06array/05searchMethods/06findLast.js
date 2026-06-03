/*
findLast() is a JavaScript array method used to return the last element that satisfies a given condition. 
It searches the array from right to left (end to start). It returns the last matching element if found; 
otherwise it returns undefined. It does not modify the original array. (Introduced in ES2022)

Syntax
. array.findLast(callback(element, index, array))

Parameters:
. element → current element
. index (optional) → index of element
. array (optional) → original array
*/


// Basic usage
let arr = [10, 20, 30, 40, 50];
let result = arr.findLast(x => x > 25);
console.log(result); // 50 (Last number greater than 25 is 50)


// match found
let arr2 = [1, 2, 3];
let result2 = arr2.findLast(x => x > 10);
console.log(result2); // undefined


// Using objects (important)
let users = [
  { id: 1, name: "sana" },
  { id: 2, name: "Fathima" },
  { id: 2, name: "Ali" }
];
let res = users.findLast(user => user.id === 2);
console.log(res); // { id: 2, name: "Ali" }


/*
find() vs findLast()
Feature	              find()	          findLast()
Direction	            Left → Right	    Right → Left
Return	              First match 	    Last match
No match	            undefined	        undefined
*/


/*
Important Points
. Searches from right → left
. Returns last matching element
. Returns undefined if no match
. Does NOT change original array
. Works with numbers, strings, objects
. ES2022 feature (modern JavaScript)
*/