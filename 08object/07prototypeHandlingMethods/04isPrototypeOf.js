/*
The isPrototypeOf() method checks whether an object exists in another object's prototype chain. It returns 
true if the specified object is a prototype of another object; otherwise, it returns false. This method is 
useful for verifying inheritance relationships between objects.

Syntax
. prototypeObj.isPrototypeOf(object);

Return Value
. true → if the object exists in the prototype chain.
. false → otherwise.
*/


// Basic Example
// Parent object
const animal = {
  eat() {
    console.log("Eating...");
  }
};
// Child object
const dog = Object.create(animal);
// Check prototype relationship
console.log(animal.isPrototypeOf(dog)); // true


// Using Object.setPrototypeOf()
// Parent object
const person = {
  country: "India"
};
// Child object
const student = {
  name: "Ayub"
};
// Set prototype
Object.setPrototypeOf(student, person);
// Check prototype
console.log(person.isPrototypeOf(student)); // true


// Employee Management System (Real-Life)
// Common employee methods
const employeeFeatures = {
  login() {
    console.log("Login Successful");
  }
};
// Employee object
const employee = {
  name: "Aman"
};
// Set prototype
Object.setPrototypeOf(employee, employeeFeatures);
// Check inheritance
console.log(employeeFeatures.isPrototypeOf(employee)); // true


// Banking Application
// Bank services
const bankServices = {
  transferMoney() {
    console.log("Money Transferred");
  }
};
// Customer object
const customer = {
  name: "Ayub"
};
// Set prototype
Object.setPrototypeOf(customer, bankServices);
// Verify prototype
console.log(bankServices.isPrototypeOf(customer)); // true