/*
While Loop 

A while loop is a looping statement in JavaScript that repeatedly executes a 
block of code as long as the given condition is true.
The condition is checked before executing the code. If the condition is false 
at the beginning, the loop will not run even once.

In simple words
"Check condition first, then execute code repeatedly while condition is true."

Syntax

while(condition) {
   // code to execute
}

*/

let i = 1;

while(i <= 5) {
   console.log(i);
   i++;
}