/*
Do While Loop

A do while loop is a looping statement in JavaScript that executes a block of code 
first and then checks the condition.
If the condition is true, the loop continues repeating. If false, the loop stops.
The important difference is: do while loop runs at least one time, even if the 
condition is false.

In simple words
"Execute code first, then check condition."

Syntax

do {
   // code to execute
} while(condition);

*/

let i = 1;

do {
   console.log(i);
   i++;
} while(i <= 5);