/*
shift() is a built-in JavaScript array method used to remove the first element from an array. 
It modifies the original array by shifting all remaining elements to the left. It returns the 
removed first element. It is commonly used when you need to delete data from the beginning of 
an array.

Syntax
array.shift()
*/


// Example 1: Remove first element
let fruits = ["Apple", "Banana", "Mango"];
fruits.shift();
console.log(fruits); // ["Banana", "Mango"]


// Example 2: Return value of shift()
let arr = [10, 20, 30];
let removed = arr.shift();
console.log(arr); // [20, 30]
console.log(removed); // 10  10 is the removed element


/*
Important Points
. Removes first element only
. Changes original array
. Returns removed element
. If array is empty → returns undefined
. All remaining elements shift left
. Opposite of unshift()
*/