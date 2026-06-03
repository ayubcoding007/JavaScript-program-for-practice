/*
Object.fromEntries() is a static JavaScript method that converts an iterable of key-value pairs into an object.
. It is the reverse operation of Object.entries().
. Each entry should contain exactly two elements: [key, value].
. It was introduced in ES2019 (ES10).

Syntax
Object.fromEntries(iterable)
*/


// Basic Example
const entries = [
  ["name", "Ayub"],
  ["age", 25]
];
const obj = Object.fromEntries(entries);
console.log(obj); // { name: "Ayub", age: 25 }


// How It Works
/*
Input:
[
  ["name", "John"],
  ["age", 25]
]

Conversion:
{
  name: "John",
  age: 25
}

Every inner array
[key, value]

becomes
key: value

inside the object.
*/


// Using with Map
const map = new Map([
  ["id", 101],
  ["course", "JavaScript"]
]);
const obj = Object.fromEntries(map);
console.log(obj); // { id: 101, course: "JavaScript" }


// Reverse of Object.entries()
// Object → Entries
const user = {
  name: "Alice",
  age: 22
};
const entries = Object.entries(user);
console.log(entries); // [ ["name", "Alice"], ["age", 22] ]


// Transforming Objects
// . A common use case is modifying keys or values.
const user1 = {
  name: "john",
  city: "hyderabad"
};

const result = Object.fromEntries(
  Object.entries(user1).map(([key, value]) => [
    key,
    value.toUpperCase()
  ])
);
console.log(result); // { name: "JOHN", city: "HYDERABAD" }


// Filtering Properties
const data = {
  name: "John",
  age: 25,
  city: "Delhi"
};
const filtered = Object.fromEntries(
  Object.entries(data).filter(([key]) => key !== "age")
);
console.log(filtered); // { name: "John", city: "Delhi" }