/*
Else If Statement 

An else if statement is used to check multiple conditions one by one in JavaScript.
If the first if condition is false, the program checks the else if condition. If that 
is also false, it moves to the next condition or else block.

In simple words
"Check multiple conditions and execute the matching block of code."

Syntax

if (condition1) {
   // code for condition1
} else if (condition2) {
   // code for condition2
} else {
   // code if all conditions are false
}

*/

let marks = 75;

if (marks >= 90) {
   console.log("Grade A");
} else if (marks >= 75) {
   console.log("Grade B");
} else {
   console.log("Grade C");
}