/*
Object.keys() returns an array containing all enumerable property names (keys) of an object.
Object.keys() is used to get all the keys (property names) of an object.

Syntax
Object.keys(obj)

*/

// Example
const user = {
    name: "Rahul",
    age: 25,
    city: "Delhi"
};

console.log(Object.keys(user)); // ["name", "age", "city"]


// Loop Through Keys
const student = {
    id: 101,
    name: "Amit",
    marks: 90
};
const keys = Object.keys(student);
for(let key of keys) {
    console.log(key);
}
/*
id
name
marks
*/



/*
Object.values() returns an array containing all enumerable property values of an object.
Object.values() is used to get all the values of an object.

Syntax
Object.values(obj)
*/


// Example
const user = {
    name: "Rahul",
    age: 25,
    city: "Delhi"
};
console.log(Object.values(user)); // ["Rahul", 25, "Delhi"]