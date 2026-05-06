/*
Return Statement

A return statement is used inside a function to stop the execution of the function 
and send a value back to the place where the function was called.
After return executes, the function ends immediately.

In simple words
"Return sends a result back and stops the function."

Syntax

return value;

*/

function add(a, b) {
   return a + b;
}

let result = add(5, 3);
console.log(result);