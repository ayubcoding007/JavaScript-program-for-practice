/*
__lookupSetter__() is a legacy (deprecated) JavaScript method that returns the setter function associated with a property. 
It does not execute the setter; it only returns a reference to the setter function. In modern JavaScript, 
Object.getOwnPropertyDescriptor() is the recommended way to inspect setters.

Syntax
. obj.__lookupSetter__(propertyName)

Parameters
. propertyName → The property whose setter you want to retrieve.

Return Value
. Returns the setter function if it exists.
. Returns undefined if no setter is defined.
*/ 


// Basic Example
const person = {
  _name: "",
  set name(value) {
    this._name = value.toUpperCase();
  }
};
const setterFn = person.__lookupSetter__("name");
console.log(setterFn); // [Function: set name]
// . Notice that it returns the setter function itself, not the value.


// Executing the Returned Setter
const myFun = {
  _name: "",
  set name(value) {
    this._name = value.toUpperCase();
  }
};
const setter = myFun.__lookupSetter__("name");
setter.call(myFun, "Fathima");
console.log(myFun._name);