/*
For...of Loop

A for...of loop is used to iterate over iterable objects such as arrays, strings, 
maps, and sets in JavaScript.
It accesses the values directly one by one.

In simple words
"For...of loop is used to access array or string values one by one."

Syntax

for(variable of iterable) {
   // code to execute
}

*/

let fruits = ["Apple", "Banana", "Mango"];

for(let value of fruits) {
   console.log(value);
}