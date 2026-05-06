/*
Switch Statement in JavaScript

A switch statement is a decision-making statement in JavaScript used to execute one block 
of code from multiple options based on the value of an expression.
It is useful when there are many conditions to check against one variable, 
instead of writing many if else statements.

In simple words
"Switch checks one value and matches it with different cases."

Syntax

switch(expression) {
   case value1:
      // code
      break;

   case value2:
      // code
      break;

   default:
      // code
}

*/

let day = 3;

switch(day) {
   case 1:
      console.log("Monday");
      break;

   case 2:
      console.log("Tuesday");
      break;

   case 3:
      console.log("Wednesday");
      break;

   default:
      console.log("Invalid day");
}