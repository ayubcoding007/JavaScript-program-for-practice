/*
__defineGetter__() is a legacy JavaScript method used to define a getter function for an object property. A getter is 
automatically executed whenever the property is accessed. This method is deprecated and modern JavaScript recommends 
using Object.defineProperty() or getter syntax inside classes/objects instead.

Syntax
. obj.__defineGetter__(propertyName, getterFunction);

Parameters
. propertyName → Name of the property.
. getterFunction → Function that runs when the property is read.
*/


// Basic Example
const person = {
  firstName: "Sana",
  lastName: "Perveen"
};
person.__defineGetter__("fullName", function () {
  return this.firstName + " " + this.lastName;
});
console.log(person.fullName); // Sana Perveen


// Getter and Setter Together
const user = {};
user.__defineGetter__("name", function () {
  return this._name;
});
user.__defineSetter__("name", function (value) {
  this._name = value;
});
user.name = "Ayub";
console.log(user.name);