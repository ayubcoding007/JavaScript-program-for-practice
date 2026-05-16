/*
The call() method is used to invoke a function with a specified this value. 
It allows you to call a function immediately and pass arguments one by one. 
This method is useful for function borrowing and controlling which object a 
function uses as its context. call() helps reuse the same function with 
different objects.

Syntax

functionName.call(thisArg, arg1, arg2, ...)
. thisArg → value to use as this inside the function
. arg1, arg2... → function arguments
*/

// Example

function greet(city) {
  console.log("Hello " + this.name + " from " + city);
}
const person = {
  name: "Ayub"
};
// greet.call(person, "Delhi");

// Output:
// Hello Ayub from Delhi




// Full Program

const student1 = {
  name: "Ali"
};

const student2 = {
  name: "Sara"
};

function showName() {
  console.log(this.name);
}

showName.call(student1); 
showName.call(student2); 
