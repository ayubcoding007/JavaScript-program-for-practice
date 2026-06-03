/*
Object.freeze() is a built-in JavaScript method used to make an object completely immutable (unchangeable).

After freezing an object
. You cannot add new properties
. You cannot delete properties
. You cannot modify existing properties

It provides the highest level of object security in JavaScript.

Syntax
Object.freeze(object)

*/

// Basic Example
const student = {
    name: "Sheikh Ayub",
    age: 22
};
Object.freeze(student);
student.age = 25;
console.log(student.age); // 22 Value does not change because object is frozen.


// Adding New Property
const user = {
    name: "Ahmed"
};
Object.freeze(user);
user.city = "Hyderabad";
console.log(user); // { name: 'Ahmed' } Cannot add new property.


// Deleting Property
const person = {
    name: "Rahman",
    age: 24
};
Object.freeze(person);
delete person.age;
console.log(person); // { name: 'Rahman', age: 24 } Cannot delete property.


// Checking if Object is Frozen
// Syntax
// Object.isFrozen(object)

// Example
const obj = {
    id: 101
};
Object.freeze(obj);
console.log(Object.isFrozen(obj)); // true


// Important Note: Shallow Freeze
/*
Object.freeze() only freezes the top-level properties.
Nested objects can still change.
Example:
*/

const std = {
    name: "Sheikh Ayub",
    address: {
        city: "Hyderabad"
    }
};
Object.freeze(std);
std.address.city = "Delhi";
console.log(std.address.city); // Delhi Because nested object is not frozen.


// Freeze Nested Object
const std2 = {
    name: "Sheikh Ayub",
    address: {
        city: "Hyderabad"
    }
};
Object.freeze(std2);
Object.freeze(std2.address);
std2.address.city = "Delhi";
console.log(std2.address.city); // Hyderabad


/*
Difference Between freeze(), seal(), and preventExtensions()
Method	                    Add	    Delete	   Modify
. preventExtensions()	    NO      Yes        Yes
. seal()	                No      No         Yes
. freeze()	                No      No         No
*/