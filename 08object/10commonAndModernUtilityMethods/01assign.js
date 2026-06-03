/*
Object.assign() in JavaScript is used to
. Copy properties from one object to another
. Merge multiple objects
. Create a clone (copy) of an object

Syntax
Object.assign(target, source)

Or multiple sources:

Object.assign(target, source1, source2)

*/

// Copy Object
const person = {
    name: "ayub",
    age: 22
};
const copy = Object.assign({}, person);
console.log(copy);

// Merge Objects
const obj1 = {
    a: 1
};
const obj2 = {
    b: 2
};
const obj3 = {
    c: 3
};
const result = Object.assign({}, obj1, obj2, obj3);
console.log(result);


// Overwriting Properties
// . If same key exists, later value overwrites earlier value.

const user1 = {
    name: "khan",
    age: 20
};
const user2 = {
    age: 30
};
const result = Object.assign({}, user1, user2);
console.log(result);


// Directly Modify Target
const target = {
    a: 1
};
const source = {
    b: 2
};
Object.assign(target, source);
console.log(target);


// Important Point
// . Object.assign() makes a shallow copy.
// . Nested objects are still linked.
const obj1 = {
    address: {
        city: "Hyderabad"
    }
};
const obj2 = Object.assign({}, obj1);
obj2.address.city = "Delhi";
console.log(obj1.address.city);