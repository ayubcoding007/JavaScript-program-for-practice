/*
Object.getOwnPropertySymbols() is a built-in JavaScript method that returns an array of 
all Symbol properties that belong directly to an object. It only returns the object's 
own Symbol keys, not inherited ones. This is useful because Symbol properties are not 
returned by methods like Object.keys() or for...in.

Syntax
Object.getOwnPropertySymbols(obj)

Parameters
. obj → The object whose Symbol properties you want to retrieve.

Return Value
. Returns an array containing the object's own Symbol keys.
*/


// Why is it Needed? || Normally
const sym = Symbol("id");
const user = {
  name: "Sheikh",
  [sym]: 101
};

console.log(Object.keys(user)); // ["name"]
// The Symbol property is hidden from Object.keys().


// To access Symbol keys
// console.log(Object.getOwnPropertySymbols(user)); // [ Symbol(id) ]


// Basic Example
const id = Symbol("id");
const age = Symbol("age");
const person = {
  name: "Alice",
  [id]: 1001,
  [age]: 25
};
console.log(Object.getOwnPropertySymbols(person)); // [ Symbol(id), Symbol(age) ]


// Accessing Values Using Returned Symbols
const id1 = Symbol("id");
const user1 = {
  name: "John",
  [id1]: 123
};
const symbols = Object.getOwnPropertySymbols(user);
console.log(user1[symbols[0]]); // 123


// Own Properties Only
const sym1 = Symbol("parent");
const parent = {
  [sym1]: "Parent Value"
};
const child = Object.create(parent);
console.log(Object.getOwnPropertySymbols(child)); // []


/*
Comparing with Other Methods
Method	                            Returns String Keys	            Returns Symbol Keys
. Object.keys()	                    . Yes	                        . No
. for...in	                        . Yes	                        . No
. Object.getOwnPropertyNames()	    . Yes	                        . No
. Object.getOwnPropertySymbols()	. No	                        . Yes
. Reflect.ownKeys()	                . Yes	                        . Yes
*/


// Real-World Use Case
// . Libraries often use Symbols to create private-like properties.

const SECRET = Symbol("secret");
const account = {
  name: "Ayub",
  [SECRET]: "Password123"
};
console.log(Object.getOwnPropertySymbols(account)); // [ Symbol(secret) ]
// This allows developers to inspect Symbol-based properties when needed.