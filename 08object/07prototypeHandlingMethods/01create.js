/*
Object.create() in JavaScript is used to create a new object using an existing 
object as a prototype.

It helps in
. Inheritance
. Reusing properties and methods
. Prototype-based programming

Syntax
Object.create(prototypeObject)

Or with properties:
Object.create(prototypeObject, propertiesObject)

*/

// Basic Object.create()
const person = {
    greet() {
        console.log("Hello");
    }
};
const user = Object.create(person);
user.name = "ayub";
console.log(user.name);
user.greet();
person.greet()


// Inheritance
const animal = {
    sound() {
        console.log("Animal makes sound");
    }
};
const dog = Object.create(animal);
dog.bark = function() {
    console.log("Dog barks");
};
dog.sound();
dog.bark();


// Using Properties Object
const student = Object.create({}, {
    name: {
        value: "ayub",
        writable: true
    },
    age: {
        value: 22
    }
});
console.log(student.name);
console.log(student.age);