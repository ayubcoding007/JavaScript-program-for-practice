/*
Object.seal() is a built-in JavaScript method used to seal an object.
After sealing an object
. You cannot add new properties
. You cannot delete existing properties
. But you can modify existing property values

It provides partial protection to objects.

Syntax
Object.seal(object)

*/

// Example

const user = {
    name: "Ayub",
    age: 25
}
Object.seal(user);
user.age = 30;          // Allowed
user.city = "Delhi";    // Not allowed
delete user.name;       // Not allowed
console.log(user);

/*
Difference Between seal(), freeze(), and preventExtensions()
Feature	                        preventExtensions	seal	freeze
. Add properties	            No                  No      No
. Delete properties	            Yes                 No      No
. Modify values	                Yes                 Yes     No
. Reconfigure properties	    Yes                 No      No


hat is “Reconfigure Properties” in JavaScript?
These descriptors control:
. value
. writable
. enumerable
. configurable
*/


/*
Object.isSealed() — Detailed Explanation
Object.isSealed() is used to check whether an object is sealed or not.

It returns:
. true → if object is sealed
. false → if object is not sealed

Object.isSealed() checks whether:
. new properties cannot be added
. existing properties cannot be deleted
. properties are non-configurable

Syntax
Object.isSealed(obj)

*/

// Example
const user = {
    name: "Rahul"
};
Object.seal(user);
console.log(Object.isSealed(user)); // true


// Adding Property After Seal
const car = {
    brand: "Toyota"
};
Object.seal(car);
car.model = "Camry";
console.log(car);
console.log(Object.isSealed(car)); //{ brand: "Toyota" } true

