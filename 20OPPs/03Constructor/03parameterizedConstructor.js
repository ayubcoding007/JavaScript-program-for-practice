/*
A parameterized constructor in JavaScript is a constructor function 
(or class constructor) that accepts parameters so you can initialize 
an object with specific values when creating it.

*/


class Person {
  constructor(name, age) {   // parameterized constructor
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person("Ayub", 22);
const person2 = new Person("Fathima", 19);

console.log(person1.name); l
console.log(person2.age); 