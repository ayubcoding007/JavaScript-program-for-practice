/*
The bind() method is used to create a new function with a specified this value. 
Unlike call() and apply(), it does not execute the function immediately, but 
returns a new function that can be called later. It is useful when you want to 
permanently set the value of this for a function. bind() is commonly used in event 
handling and callbacks.

Syntax
functionName.bind(thisArg, arg1, arg2, ...);
*/

// Example

function greet(city) {
  console.log("Hello " + this.name + " from " + city);
}

const person = {
  name: "Ayub"
};

const newFunc = greet.bind(person, "Hyderabad");
newFunc();

