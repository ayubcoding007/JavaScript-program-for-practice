/*
A constructor is a special function used to create and initialize objects. It acts as a blueprint for creating multiple 
objects with the same properties and methods. When called with the new keyword, JavaScript automatically creates a new 
object, links it to the constructor's prototype, and returns it.
*/
// Constructor Function Syntax
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const p1 = new Person("Sheikh", 20);
const p2 = new Person("Ayub", 22);
console.log(p1); // Person { name: 'Sheikh', age: 20 }
console.log(p2); // Person { name: 'Ayub', age: 22 }


// Example with Methods
function std(name) {
  this.name = name;
  this.greet = function () {
    console.log("Hello " + this.name);
  };
}
const s1 = new std("Sheikh");
s1.greet();


// Using Prototype with Constructor
// . Instead of creating a new method for every object:

function user(name) {
  this.name = name;
}
user.prototype.greet = function () {
  console.log("Hello " + this.name);
};
const u1 = new user("Fathima");
const u2 = new user("Sana");
u1.greet();
u2.greet();


/*
Constructor Property
. Every object created from a constructor has access to the constructor property through its prototype.
*/
function myFun() {}
const f = new myFun();
console.log(f.constructor); // [Function: myFun]
console.log(f.constructor === myFun); // true


// Relationship Between Constructor, Prototype, and __proto__
function Hello() {}
const H = new Hello();
console.log(H.__proto__ === Hello.prototype); // true
console.log(Hello.prototype.constructor === Hello); //true


// ES6 Class Constructor
// . Modern JavaScript uses classes:
class info {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const i1 = new info("saba", 25);
console.log(i1); // info { name: 'saba', age: 25 }