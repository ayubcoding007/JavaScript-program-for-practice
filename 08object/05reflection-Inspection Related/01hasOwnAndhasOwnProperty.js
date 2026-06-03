/*
Object.hasOwn() is a modern JavaScript method used to check whether an object contains a property directly on itself, 
not inherited through its prototype chain. It returns true if the property exists as the object's own property and 
false otherwise. Introduced in ES2022, it is generally preferred over hasOwnProperty() because it works even when 
an object doesn't inherit from Object.prototype.

Syntax
. Object.hasOwn(object, propertyName)

Parameters
. object → The object to check.
. propertyName → The property name to look for.

Return Value
. true → Property exists directly on the object.
. false → Property does not exist or is inherited.
*/


// Basic Example
const user = {
  name: "Ayub",
  age: 22
};
console.log(Object.hasOwn(user, "name")); // true
console.log(Object.hasOwn(user, "email")); // false


/*
hasOwnProperty() is a method of Object.prototype that checks whether a property exists directly on an object and not 
through the prototype chain. It returns true if the object owns the property, otherwise false. It is commonly used 
to distinguish an object's own properties from inherited ones.

Syntax
object.hasOwnProperty(propertyName)

Parameters
. propertyName – The name of the property to check.

Return Value
. true → Property exists directly on the object.
. false → Property does not exist or is inherited.
*/


// Basic Example
const person = {
  name: "Ayub",
  age: 22
};
console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("city")); // false


// Own Property vs Inherited Property
const parent2 = {
  country: "India"
};
const child2 = Object.create(parent2);
child.name = "Ayub";
console.log(child2.hasOwnProperty("name"));    // true
console.log(child2.hasOwnProperty("country")); // false


// Why Use Object.hasOwn()?
// Consider inheritance:
const parent = {
  country: "India"
};
const child = Object.create(parent);
child.name = "Ayub";
console.log(child.country); // India
console.log(Object.hasOwn(child, "name"));    // true
console.log(Object.hasOwn(child, "country")); // false


// Object.hasOwn() vs hasOwnProperty()
// Traditional Method
const obj = { a: 1 };

console.log(obj.hasOwnProperty("a"));
// Modern Method
console.log(Object.hasOwn(obj, "a"));


/*
Comparison
Feature	                                Object.hasOwn()	            hasOwnProperty()
. ES Version	                        . ES2022	                . Old
Static Method	                        . Yes	                    . No
. Works with null prototype objects	    . Yes	                    . No
Recommended	                            . Yes	                    . Legacy
*/


// Problem with hasOwnProperty()
// Objects can override it
const obj1 = {
  hasOwnProperty: () => false,
  name: "John"
};
console.log(obj1.hasOwnProperty("name")); // false
console.log(Object.hasOwn(obj1, "name")); // true


// Null Prototype Objects
const obj2 = Object.create(null);
obj.name = "Ayub";
console.log(Object.hasOwn(obj2, "name")); // true
// Using hasOwnProperty() here causes an error
obj.hasOwnProperty("name"); // Error
// because the object has no prototype.


// Using with Dynamic Property Names
const product = {
  id: 101,
  name: "Laptop"
};
const key = "name";
console.log(Object.hasOwn(product, key)); // true


// Practical Example: API Data Validation
const response = {
  name: "Ayub",
  age: 22
};
if (Object.hasOwn(response, "name")) {
  console.log("Name exists"); // Name exists
}


/*
Object.hasOwn() is a JavaScript method that checks whether an object contains a specified property as its own property. 
It returns true if the property exists directly on the object and false if it does not or is inherited from the prototype 
chain. It is the modern and safer alternative to hasOwnProperty().
. Object.hasOwn(obj, "property");
. Used to reliably verify property ownership in JavaScript objects.
*/