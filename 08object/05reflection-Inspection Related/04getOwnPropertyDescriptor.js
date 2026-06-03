/*
Object.getOwnPropertyDescriptor() is a built-in JavaScript method that returns the property descriptor 
of a specific property on an object. A property descriptor contains metadata about the property, such 
as its value, whether it is writable, enumerable, and configurable. It only works on the object's own 
properties, not inherited ones.

Syntax
. Object.getOwnPropertyDescriptor(obj, property)

Parameters
. obj → The object containing the property.
. property → The name (or Symbol) of the property.

Return Value
. Returns a property descriptor object.
. Returns undefined if the property does not exist.
*/


// Basic Example
const user = {
  name: "Ayub"
};
console.log(Object.getOwnPropertyDescriptor(user, "name")); // { value: "Ayub", writable: true, enumerable: true, configurable: true}



// value
// . The actual value of the property.
const obj = { age: 22 };
console.log(
  Object.getOwnPropertyDescriptor(obj, "age").value // 25
);


// writable
// . Determines whether the property's value can be changed.
const obj2 = {};
Object.defineProperty(obj2, "id", {
  value: 101,
  writable: false
});
obj2.id = 200;
console.log(obj2.id); // 101


// enumerable
// . Determines whether the property appears in loops and Object.keys().
const obj3 = {};
Object.defineProperty(obj3, "secret", {
  value: "hidden",
  enumerable: false
});
console.log(Object.keys(obj3));  // []


// configurable
// . Determines whether the property can be deleted or reconfigured.
const obj4 = {};
Object.defineProperty(obj4, "Ayub", {
  value: "John",
  configurable: false
});
delete obj.name;
console.log(obj4.name); // Ayub


// Accessor Descriptor Example
// . Properties can also have getters and setters.
const person = {
  firstName: "Sheikh",
  lastName: "Ayub",
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(Object.getOwnPropertyDescriptor(person, "fullName")); 
// { get: [Function], set: undefined, enumerable: true, configurable: true}

