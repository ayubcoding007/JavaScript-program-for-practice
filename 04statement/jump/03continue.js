/*
Continue Statement

A continue statement is a jump statement used inside loops to skip the current 
iteration and move directly to the next iteration of the loop.
It does not stop the loop completely; it only skips one turn.

In simple words
"Continue skips the current iteration and goes to the next iteration."

Syntax

continue;
*/

for(let i = 1; i <= 5; i++) {
   if(i == 3) {
      continue;
   }
   console.log(i);
}