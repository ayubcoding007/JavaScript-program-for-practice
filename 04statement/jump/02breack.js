/*
Break Statement

A break statement is a jump statement used to terminate a loop or switch statement 
immediately when a specified condition is met.
It stops the execution of the loop and transfers control to the next statement after the loop.

In simple words

"Break is used to stop a loop immediately."

Syntax

break;

*/

for(let i = 1; i <= 5; i++) {
   if(i == 3) {
      break;
   }
   console.log(i);
}