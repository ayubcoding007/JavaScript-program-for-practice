/*
If Else Statement 

An if else statement is a decision-making statement in JavaScript that checks a 
condition and executes one block of code if the condition is true, and another 
block of code if the condition is false.

In simple words
"If condition is true, run one code; otherwise run another code." 

Syntax

if (condition) {
   // code executes if condition is true
} else {
   // code executes if condition is false
}

*/

let age = 16;

if (age >= 18) {
   console.log("You are eligible to vote");
} else {
   console.log("You are not eligible to vote");
}