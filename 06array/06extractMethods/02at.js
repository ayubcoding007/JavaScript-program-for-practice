/*
at() is a JavaScript array method used to access elements using positive or negative index values. 
Positive index starts from the beginning (0,1,2...), while negative index starts from the 
end (-1, -2, -3...). It returns the element at the given position. It does not change 
the original array. (Introduced in ES2022)

Syntax
. array.at(index)
*/


// Positive index
let arr = [10, 20, 30, 40];
console.log(arr.at(1)); // 20


// Negative index (important feature)
let arr2 = [10, 20, 30, 40];
console.log(arr2.at(-1)); // 40


// More negative indexing
let arr3 = [10, 20, 30, 40];
console.log(arr3.at(-2)); // 30


// Comparison with normal indexing
let arr4 = [10, 20, 30];
console.log(arr4[arr.length - 1]); // old method
console.log(arr4.at(-1));          // modern method


/*
Important Points
. Works like array indexing but more powerful
. Supports negative indexing
. Does NOT modify array
. Returns undefined if index is out of range
. ES2022 feature
*/

/*
Difference: at() vs normal indexing
Feature	            arr[index]	        at()
Negative index	    Not allowed	        Allowed
Readability	        Medium	            High
Modern use	        Old style	        Recommended
*/


