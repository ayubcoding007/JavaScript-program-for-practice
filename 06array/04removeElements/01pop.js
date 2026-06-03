/*
pop() is a built-in JavaScript array method used to remove the last element from an array. 
It modifies the original array directly. It returns the removed element. It is commonly 
used when you want to delete data from the end of an array.

Syntax
array.pop()
*/

// Example 1: Remove last element
let fruits = ["Apple", "Banana", "Mango"];
fruits.pop();
console.log(fruits); // ["Apple", "Banana"]


// Example 2: Return value of pop()
let arr = [10, 20, 30];
let removed = arr.pop();
console.log(arr); // [10, 20]
console.log(removed); // 30  30 is the removed element


/*
Important Points
. Removes last element only
. Changes original array
. Returns removed element
. If array is empty → returns undefined
. Opposite of push()
*/