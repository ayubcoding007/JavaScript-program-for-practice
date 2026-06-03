/*
__defineSetter__() is a legacy (deprecated) JavaScript method used to define a setter function for an object property. 
A setter automatically executes whenever a value is assigned to that property. Modern JavaScript recommends using 
Object.defineProperty() or setter syntax (set) instead.

Syntax
. obj.__defineSetter__(propertyName, setterFunction);

Parameters
. propertyName → Property name.
. setterFunction → Function that runs when a value is assigned.
*/


// Basic Example
const person = {};
person.__defineSetter__("name", function(value) {
  this._name = value;
});
person.name = "Ayub";
console.log(person._name); // Ayub


// Setter for Validation
const user = {};
user.__defineSetter__("age", function(value) {
  if (value < 0) {
    console.log("Age cannot be negative");
    return;
  }
  this._age = value;
});
user.age = 25;
console.log(user._age);
user.age = -5;