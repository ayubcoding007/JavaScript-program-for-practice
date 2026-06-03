/*
__proto__ is a property that points to an object's prototype. It allows an object to inherit properties and methods from 
another object through JavaScript's prototype chain. Although widely supported, __proto__ is considered legacy; modern 
code should use Object.getPrototypeOf() and Object.setPrototypeOf() instead.
*/


// What is a Prototype?
// . Every JavaScript object has an internal link to another object called its prototype.
const person = {
  greet() {
    console.log("Hello");
  }
};
const user = {
  name: "Ayub"
};
user.__proto__ = person; 
user.greet(); // Hello
// Here, user doesn't have a greet() method, so JavaScript looks in its prototype (person).


// Prototype Chain Example
const grandParent = {
  country: "India"
};
const parent = {
  city: "Hyderabad"
};
const child = {
  name: "Ayub"
};
parent.__proto__ = grandParent;
child.__proto__ = parent;
console.log(child.name);     // Ayub
console.log(child.city);     // Hyderabad
console.log(child.country);  // India