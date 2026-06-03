/*
unshift() is a built-in JavaScript array method used to add one or more elements at the beginning of an array. 
It modifies the original array directly by shifting existing elements to the right. It returns the new length 
of the array after adding elements. It is the opposite of push().

Syntax
array.unshift(element1, element2, ...)
*/

// Example 1: Add single element
let fruits = ["Banana", "Mango"];
fruits.unshift("Apple");
console.log(fruits); // ["Apple", "Banana", "Mango"]


// Example 2: Add multiple elements
let numbers = [3, 4];
numbers.unshift(1, 2);
console.log(numbers); // [1, 2, 3, 4]

/*
Important Points
. Adds elements at the beginning
. Changes original array
. Returns new length
. Shifts existing elements to the right
. Opposite of push()
*/