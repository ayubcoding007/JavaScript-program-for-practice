/*
Object.setPrototypeOf() is a static JavaScript method used to change the 
prototype (parent object) of an existing object. It allows one object to 
inherit properties and methods from another object. This method is useful 
for prototype-based inheritance, but it should be used carefully because 
changing prototypes can affect performance.

Syntax
Object.setPrototypeOf(obj, prototype);
*/


// Basic Example
// Create object
let person = {
  name: "Ayub"
};
// Prototype object
let parent = {
  country: "India"
};
// Set prototype
Object.setPrototypeOf(person, parent);
// Access inherited property
console.log(person.country); // // India


// Verify Prototype
// Create objects
let person1 = {};
let parent1 = {};
// Set prototype
Object.setPrototypeOf(person1, parent1);
// Check prototype
console.log(Object.getPrototypeOf(person1) === parent1); // true


// Inheriting Methods
// Parent object
let animal = {
  sound() {
    console.log("Animal Sound");
  }
};
// Child object
let dog = {
  name: "Tommy"
};
// Set prototype
Object.setPrototypeOf(dog, animal);
// Call inherited method
dog.sound(); // Animal Sound


// Access Parent Properties
// Parent object
let employee = {
  company: "ABC Ltd"
};
// Child object
let worker = {
  name: "Aman"
};
// Set prototype
Object.setPrototypeOf(worker, employee);
console.log(worker.company); // ABC Ltd


// Multiple Inherited Properties
// Parent object
let vehicle = {
  wheels: 4,
  fuel: "Petrol"
};
// Child object
let car = {
  brand: "Toyota"
};
// Set prototype
Object.setPrototypeOf(car, vehicle);
console.log(car.wheels); // 4
console.log(car.fuel); // Petrol
