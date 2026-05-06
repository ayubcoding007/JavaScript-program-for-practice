/*
Variable in JavaScript

A variable in JavaScript is a named container used to store data values in a program. 
It allows programmers to save information in memory and use, update, or manipulate it 
whenever needed during program execution. Variables make programs dynamic by handling 
changing values such as names, numbers, or user inputs.
*/


// Types of Variables

/*
1.var
var is the old method of declaring variables in JavaScript. It is function-scoped, 
which means it can be accessed inside the function where it is declared. A var 
variable can be redeclared and updated.
*/
var age = 20;
age = 25;
console.log(age);


/*
2.let
let is the modern way to declare variables. It is block-scoped, meaning it works only 
inside the block {} where it is declared. A let variable can be updated but cannot be 
redeclared in the same scope.
*/
let name = "John";
name = "David";
console.log(name);


/*
console.log(name);

3.const
const is used to declare constant variables whose values cannot be changed after declaration. 
It is also block-scoped and must be initialized at the time of declaration.
*/
const pi = 3.14;
console.log(pi);

/*
Program Example
*/
let studentName = "Rahul";
let marks = 85;
const school = "ABC School";

console.log(studentName);
console.log(marks);
console.log(school);