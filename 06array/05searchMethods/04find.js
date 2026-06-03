/*
find() is a built-in JavaScript array method used to return the first element that satisfies a given condition. 
It executes a callback function on each element until it finds a match. If a matching element is found, it 
returns that element; otherwise it returns undefined. It does not change the original array.

Syntax
. array.find(callback(element, index, array))

Parameters:
. element → current element
. index (optional) → index of element
. array (optional) → original array
*/


// Basic usage
let arr = [10, 20, 30, 40];
let result = arr.find(x => x > 25); // 30  (First element greater than 25 is 30)
console.log(result);


// No match found
let arr2 = [1, 2, 3];
let result2 = arr2.find(x => x > 10);
console.log(result2); // undefined


// Using objects (very important)
let users = [
  { id: 1, name: "Sana" },
  { id: 2, name: "Fathima" },
  { id: 3, name: "ali" }
];
let res = users.find(user => user.id === 2);
console.log(res); // { id: 2, name: "Fathima" }


/*
Difference find() vs filter()
Feature	        find()	            filter()
Return	        single element	    array
Matches	        first only	        all matches
Output	        value / undefined	new array
*/