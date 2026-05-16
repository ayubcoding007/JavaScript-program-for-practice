/*
The apply() method is used to call a function with a specified this value. 
It allows you to invoke a function while passing arguments as an array. This 
is useful when the number of arguments is unknown or already stored in an array. 
apply() helps in function borrowing and controlling the execution context of a 
function.

Syntax

functionName.apply(thisArg, [argsArray]);
*/

// Example

function greet(city, country) {
  console.log("Hello " + this.name + " from " + city + ", " + country);
}

const person = {
  name: "Ayub"
};

greet.apply(person, ["Hyderabad", "India"]);

// Output
// Hello Ayub from Hyderabad, India


