/*
For...in Loop 

A for...in loop is used to iterate over the properties (keys) of an object in JavaScript.
It executes a block of code once for each property in the object.

In simple words
"For...in loop is used to access object keys one by one."

Syntax
for(variable in object) {
   // code to execute
}

*/

let student = {
   name: "Rahul",
   age: 20,
   course: "BCA"
};

for(let key in student) {
   console.log(key + " : " + student[key]);
}