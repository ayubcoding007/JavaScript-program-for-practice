/*
Object.entries() is a built-in JavaScript method that converts an object into 
an array of key-value pairs.
Each property of the object becomes an array containing:

the property name (key)
the property value

It is useful for looping, transforming objects, and converting objects into arrays.

Syntax
Object.entries(object
*/

// Basic Example
const person = {
    name: "Ravi",
    age: 25,
    city: "Hyderabad"
};
const result = Object.entries(person);
console.log(result);
/*
Output
[
  ['name', 'Ravi'],
  ['age', 25],
  ['city', 'Hyderabad']
]
*/


/*
How Object.entries() Works
Object:
{
   name: "ayub",
   agesasjd: 25
}
Becomes
[
   ["name", "Ayub"],
   ["age", 25]
]
*/

// sing Loop with Object.entries() || Example: for...of
const student = {
    name: "Ayub",
    marks: 90,
    grade: "A"
};

for (const [key, value] of Object.entries(student)) {
    console.log(key, value);
}

// Convert Object to Map
const user = {
    name: "Ayub",
    age: 20
};

const map = new Map(Object.entries(user));

console.log(map);