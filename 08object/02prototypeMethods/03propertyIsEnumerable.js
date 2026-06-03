/*
propertyIsEnumerable() is a built-in method of Object.prototype that checks whether a specific property is enumerable 
and belongs directly to the object (not inherited). It returns true if the property can appear in loops like for...in 
and methods like Object.keys(), otherwise it returns false.

Syntax
. obj.propertyIsEnumerable(propertyName)

Parameters
. propertyName → Name of the property to check.
Return Value
. true → Property is enumerable and own property.
. false → Property is non-enumerable or inherited.
*/


// Basic Example
const person = {
  name: "Ayub"
};
console.log(person.propertyIsEnumerable("name")); // true


// Non-Enumerable Property Example
const obj = {};
Object.defineProperty(obj, "id", {
  value: 101,
  enumerable: false
});
console.log(obj.propertyIsEnumerable("id")); // false


// Compare with Object.keys()
const obj1 = {};
Object.defineProperty(obj, "hidden", {
  value: "secret",
  enumerable: false
});
obj1.name = "sana";
console.log(Object.keys(obj1)); // ["name"]
console.log(obj1.propertyIsEnumerable("name"));   // true
console.log(obj1.propertyIsEnumerable("hidden")); // false


// Inherited Property Example
const parent = {
  country: "India"
};
const child = Object.create(parent);
child.name = "Sheikh";
console.log(child.propertyIsEnumerable("name")); // true 
console.log(child.propertyIsEnumerable("country")); // false
// . name is an own enumerable property.
// . country is inherited, so it returns false.