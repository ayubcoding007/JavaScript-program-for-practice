/*
Nested If Statement

A nested if statement means placing one if statement inside another if statement.
It is used when one condition needs to be checked first, and then another condition 
is checked inside it.

In simple words
"An if statement inside another if statement is called nested if."

Syntax

if (condition1) {
   if (condition2) {
      // code executes if both conditions are true
   }
}

*/

let age = 20;
let hasID = true;

if (age >= 18) {
   if (hasID == true) {
      console.log("You can enter");
   }
}