/*
Object.getOwnPropertyNames() is a JavaScript method that returns an array containing 
all own property names of an object. It includes both enumerable and non-enumerable 
properties. It does not include properties inherited from the prototype chain. 
The returned array contains property names as strings.

Syntax
Object.getOwnPropertyNames(obj)

Parameter
. obj → The object whose own property names are to be retrieved.

Return Value
. An array of strings representing all own property names.
*/


// Basic Example
const person = {
  name: "Ayub",
  age: 22
};
console.log(Object.getOwnPropertyNames(person)); // ["name", "age"]


// Non-Enumerable Properties
// . Unlike Object.keys(), this method also returns non-enumerable properties.
const obj = {};
Object.defineProperty(obj, "hidden", {
  value: "secret",
  enumerable: false
});
console.log(Object.getOwnPropertyNames(obj)); // ["hidden"]


// Difference Between Object.keys() and Object.getOwnPropertyNames()
const obj1 = {};
Object.defineProperty(obj1, "hidden", {
  value: 100,
  enumerable: false
});
obj.name = "JavaScript";
console.log(Object.keys(obj1)); // ["name"]
console.log(Object.getOwnPropertyNames(obj1)); // ["hidden", "name"]


/*
Method	                            Enumerable Properties	    Non-Enumerable Properties
. Object.keys()	                    . Yes	                    . No
. Object.getOwnPropertyNames()	    . Yes                       . Yes
*/


// Arrays Example
const arr = ["A", "B", "C"];
console.log(Object.getOwnPropertyNames(arr)); // ["0", "1", "2", "length"]
// Notice that the length property is also returned.


// Inherited Properties Are Not Included
const parent = {
  country: "India"
};
const child = Object.create(parent);
child.name = "Rahul";
console.log(Object.getOwnPropertyNames(child)); // ["name"]
// country is inherited, so it is not included.