/*
__lookupGetter__() is a legacy (deprecated) JavaScript method that returns the getter function associated with a property. 
It does not execute the getter; it simply retrieves the getter function itself. Modern JavaScript prefers 
Object.getOwnPropertyDescriptor() for inspecting getters and setters.

Syntax
. obj.__lookupGetter__(propertyName)

Parameters
. propertyName → The property whose getter you want to retrieve.

Return Value
. Returns the getter function if one exists.
. Returns undefined if no getter is defined.
*/


// Basic Example
const person = {
  firstName: "Sheikh",
  lastName: "Ayub",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};
const getterFn = person.__lookupGetter__("fullName");
console.log(getterFn); // [Function: get fullName]
// . Notice that it returns the function itself, not "Rahul Sharma".


// Executing the Returned Getter
const myFun = {
  firstName: "Fathima",
  get name() {
    return this.firstName;
  }
};
const getter = myFun.__lookupGetter__("name");
console.log(getter.call(myFun));