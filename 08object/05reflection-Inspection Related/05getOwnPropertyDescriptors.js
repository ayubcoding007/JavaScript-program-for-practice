/*
Object.getOwnPropertyDescriptors() is a built-in JavaScript method that returns all own property descriptors of an object. 
It provides detailed information about every property, including value, writable, enumerable, configurable, get, and set. 
It was introduced in ES2017 (ES8) and is useful for cloning objects while preserving property attributes.

Syntax
. Object.getOwnPropertyDescriptors(obj)

Parameters
. obj → The object whose property descriptors are to be retrieved.

Return Value
. Returns an object containing all own property descriptors.
. Each key is a property name, and its value is the descriptor object.
*/


// Basic Example
const user = {
  name: "Sheikh",
  age: 22
};
console.log(Object.getOwnPropertyDescriptors(user)); 
/*
{
  name: {
    value: "Sheikh",
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: {
    value: 22,
    writable: true,
    enumerable: true,
    configurable: true
  }
}
*/


// Difference from Object.getOwnPropertyDescriptor()
// Single Property
const obj = { name: "Ayub" };
console.log(Object.getOwnPropertyDescriptor(obj, "name")); // { value: "Ayub", writable: true, enumerable: true, configurable: true}


// Example with Getters
const person = {
  firstName: "Sheikh",
  lastName: "Ayub",
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(
  Object.getOwnPropertyDescriptors(person)
);
/*
{
  firstName: {
    value: "Sheikh",
    writable: true,
    enumerable: true,
    configurable: true
  },

  lastName: {
    value: "Ayub",
    writable: true,
    enumerable: true,
    configurable: true
  },

  fullName: {
    get: [Function],
    set: undefined,
    enumerable: true,
    configurable: true
  }
}
*/