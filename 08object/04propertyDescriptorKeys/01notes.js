/*
A property descriptor in JavaScript is an object that describes the behavior of an object's property rather than just its value. 
Descriptor keys define whether a property can be written, enumerated, configured, or accessed through getter/setter functions. 
These descriptors are used with methods like Object.defineProperty() and Object.getOwnPropertyDescriptor() to control property 
behavior.

Property Descriptor Keys in Detail

There are two types of property descriptors:
. Data Descriptor
. Accessor Descriptor
*/


// 1. Data Descriptor Keys
// . A data descriptor stores an actual value.

// a) value
// . Specifies the value associated with the property.
const obj = {};
Object.defineProperty(obj, "name", {
  value: "Ayub"
});
console.log(obj.name); // Ayub


// b) writable
// . Determines whether the property's value can be changed.
// . true → value can be modified
// . false → value cannot be modified
const obj2 = {};
Object.defineProperty(obj2, "age", {
  value: 22,
  writable: false
});
obj2.age = 25;
console.log(obj2.age); // 22


// c) enumerable
// . Controls whether the property appears during enumeration.
// . true → appears in loops and Object.keys()
// . false → hidden from enumeration
const obj3 = {};
Object.defineProperty(obj3, "id", {
  value: 101,
  enumerable: false
});
console.log(Object.keys(obj3)); // []


// d) configurable
// . Controls whether the property descriptor can be changed or deleted.
// . true → descriptor can be modified/deleted
// . false → cannot be deleted or reconfigured
const obj4 = {};
Object.defineProperty(obj4, "role", {
  value: "Admin",
  configurable: false
});
delete obj4.role;
console.log(obj4.role); // Admin



// 2. Accessor Descriptor Keys
// . Accessor descriptors don't store values directly. They use functions.


// a) get
// . A function that runs when the property is read.
const person = {
  firstName: "Sheikh",
  lastName: "Ayub"
};
Object.defineProperty(person, "fullName", {
  get() {
    return `${this.firstName} ${this.lastName}`;
  }
});
console.log(person.fullName); // Sheikh Ayub


// b) set
// . A function that runs when the property is assigned a value.
const person1 = {};
Object.defineProperty(person1, "name", {
  set(value) {
    this._name = value.toUpperCase();
  }
});
person1.name = "ayub";
console.log(person1._name); // AYUB
