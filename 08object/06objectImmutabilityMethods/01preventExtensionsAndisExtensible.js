/*
Object.preventExtensions() is used to stop adding new properties to an object.
. Existing properties can still be modified
. Existing properties can still be deleted

Syntax
Object.preventExtensions(obj)

Object.preventExtensions() prevents new properties from being added to an object.

*/

// Add Example
const user = {
    name: "Sheikh"
};
Object.preventExtensions(user);
user.age = 25; // Not allowed
console.log(user); //{ name: "Rahul" } New property was not added.


/*
What Operations Are Allowed?
After using Object.preventExtensions():

Operation	                    Allowed?
. Add new property	            No
. Modify existing property	    Yes
. Delete existing property	    Yes
*/


// Modify Existing Property
const obj = {
    city: "Delhi"
};
Object.preventExtensions(obj);
obj.city = "Mumbai";
console.log(obj); // { city: "Mumbai" } Existing properties can change.


// Delete Property
const obj2 = {
    age: 25
};
Object.preventExtensions(obj);
delete obj2.age;
console.log(obj2); // Output {} Deletion is allowed.



// Check Extensible Status

/*
Syntax
Object.isExtensible(obj)
*/

const car = {
    brand: "Toyota"
};
console.log(Object.isExtensible(car)); // true
Object.preventExtensions(car);
console.log(Object.isExtensible(car)); // false


// Full Program Example

const student = {
    name: "Ayub",
    age: 20
};
console.log("Before preventExtensions:");
console.log(Object.isExtensible(student)); //true
// Prevent extensions
Object.preventExtensions(student);
console.log("After preventExtensions:");
console.log(Object.isExtensible(student)); //false
// Modify existing property
student.age = 22;
// Add new property
student.city = "Hyderabad";
// Delete property
delete student.name;
console.log(student);   { age: 22 }