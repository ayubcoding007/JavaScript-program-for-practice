/*
push() is a built-in JavaScript array method used to add one or more elements at the end of an array. 
It modifies the original array directly. After adding elements, it returns the new length of the array. 
It is one of the most commonly used methods for inserting data into arrays.

Syntax
array.push(element1, element2, ...)
*/


// Example 1: Add single element
let fruits = ["Apple", "Banana"];
fruits.push("Mango");
console.log(fruits); // ["Apple", "Banana", "Mango"]

// Example 2: Add multiple elements
let numbers = [1, 2];
numbers.push(3, 4, 5);
console.log(numbers); // [1, 2, 3, 4, 5]

/*
Important Points
. Modifies original array (changes it)
. Adds elements at the end
. Returns new array length
. Can add multiple values at once
*/