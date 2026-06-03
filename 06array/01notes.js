/*
An Array is a special JavaScript object used to store multiple values in a single variable. Elements are stored in an 
ordered list and accessed using their index (starting from 0). Arrays can hold different data types such as numbers, 
strings, objects, and even other arrays.
*/

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Apple

// Creating an Array
/*
Arrays can be created using array literals [] or the Array() constructor. 
Array literals are the most common and recommended method.
*/
let arr1 = [1, 2, 3];
let arr2 = new Array(1, 2, 3);

// Accessing Elements
// Elements are accessed using their index number. The first element has index 0.
let colors = ["Red", "Blue", "Green"];
console.log(colors[1]); // Blue

// Array Length
// The length property returns the total number of elements in an array.
let arrLen = [1, 2, 3, 4];
console.log(arrLen.length);