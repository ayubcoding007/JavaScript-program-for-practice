/*
In JavaScript, to check whether a given value is an Array or not, we use the built-in method Array.isArray(). 
It returns a boolean value: true if the value is an array, otherwise false. This method is the most reliable 
way to identify arrays because arrays are internally treated as objects. It was introduced in ES5 to solve 
the limitation of typeof.

Array.isArray() is used to check whether a value is an array or not. It returns true if the value 
is an array, otherwise false.

Syntax
Array.isArray(value)

Important Point
typeof [1, 2, 3]   // "object"
So typeof cannot correctly identify arrays.

*/


// Example 1: Array Check (True)
let arr = [10, 20, 30];
console.log(Array.isArray(arr)); // true


// Example 2: Not an Array (String)
let str = "Hello";
console.log(Array.isArray(str)); // false


// Example 3: Object Check
let obj = { name: "John" };
console.log(Array.isArray(obj)); // false


// Example 4: Number Check
let num = 100;
console.log(Array.isArray(num)); // false


// Real-Life Example
function checkData(data) {
  if (Array.isArray(data)) {
    console.log("This is an Array");
  } else {
    console.log("Not an Array");
  }
}
checkData([1, 2, 3]);  // Array
checkData("Hello");    // Not Array