/*
Object.getPrototypeOf() is a static method that returns the prototype (parent object) of a 
specified object. It helps us understand the inheritance chain and how an object inherits 
properties and methods. This method is commonly used when working with prototypes and 
object-oriented programming in JavaScript.

Syntax
Object.getPrototypeOf(obj);

Return Value
. Returns the prototype object of the specified object.
*/


// Basic Example
let person = {
  name: "Rahul"
};
// Get prototype of object
console.log(Object.getPrototypeOf(person)); // [Object: null prototype] {}
// . Every normal object inherits from Object.prototype.
// . Therefore its prototype is Object.prototype.


// Verify with Object.prototype
// Create object
let person1 = {
  name: "Rahul"
};
// Compare prototype
console.log(
  Object.getPrototypeOf(person1) === Object.prototype
); // true


// Using Constructor Function
// Constructor function
function Student(name) {
  this.name = name;
}
// Create object
let s1 = new Student("Aman");
// Get prototype
console.log(Object.getPrototypeOf(s1)); // Student {}


// Compare with Constructor Prototype
// Constructor
function Student1(name) {
  this.name = name;
}
// Object
let s2 = new Student1("Aman");
// Compare
console.log(
  Object.getPrototypeOf(s2) === Student1.prototype
); // true


// Access Inherited Method
// Prototype object
let animalDog = {
  sound() {
    console.log("Animal Sound");
  }
};
// New object
let dog = Object.create(animalDog);
// Call inherited method
dog.sound(); // Animal Sound


// Object with Null Prototype
// Create object with null prototype
let obj = Object.create(null);
// Check prototype
console.log(Object.getPrototypeOf(obj)); // null
// . This object does not inherit from Object.prototype.


// Array Prototype
// Create array
let arr = [10, 20, 30];
// Get prototype
console.log(Object.getPrototypeOf(arr)); // Array.prototype


// Verify Array Prototype
// Array
let arr = [];
// Compare
console.log(
  Object.getPrototypeOf(arr) === Array.prototype
);// true


// Date Prototype
// Date object
let today = new Date();
// Check prototype
console.log(
  Object.getPrototypeOf(today) === Date.prototype
); // true


// Class Example
// Create class
class Employee {
  constructor(name) {
    this.name = name;
  }
}
// Object
let emp = new Employee("Ayub");
// Get prototype
console.log(Object.getPrototypeOf(emp)); // Employee {}


// Class Prototype Comparison
// Class
class Employee {
  constructor(name) {
    this.name = name;
  }
}
// Object
let emp1 = new Employee("Rahul");
// Compare
console.log(
  Object.getPrototypeOf(emp1) === Employee.prototype
); // true


// Prototype Chain
// Parent object
let animal = {
  eat() {
    console.log("Eating...");
  }
};
// Child object
let dog1 = Object.create(animal);
// Get prototype
console.log(Object.getPrototypeOf(dog1)); // animal object
// Get parent's prototype
console.log(
  Object.getPrototypeOf(Object.getPrototypeOf(dog1)) // Object.prototype
);


// Real-World Example
// Vehicle prototype
let vehicle = {
  start() {
    console.log("Vehicle Started");
  }
};
// Car object
let car = Object.create(vehicle);
// Check prototype
console.log(
  Object.getPrototypeOf(car) === vehicle
); // true
// Use inherited method
car.start(); // Vehicle Started


