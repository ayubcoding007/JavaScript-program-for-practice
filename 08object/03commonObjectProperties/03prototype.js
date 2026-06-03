/*
A prototype is an object associated with functions and classes that allows objects to inherit properties and methods. 
When an object is created using a constructor function or class, it automatically gets access to the constructor's prototype. 
This enables inheritance and method sharing without duplicating code.

Why Prototype is Needed?
. Without prototypes, every object gets its own copy of methods.
function Person(name) {
  this.name = name;
  this.greet = function () {
    console.log("Hello " + this.name);
  };
}
. If you create 1000 objects, 1000 copies of greet() are created.
*/


function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  console.log("Hello " + this.name);
};
const p1 = new Person("Sheikh");
const p2 = new Person("Ayub");
p1.greet();
p2.greet();


// Prototype Chain
// . When a property is not found on an object, JavaScript searches its prototype.
function user(name) {
  this.name = name;
}
user.prototype.country = "India";
const u1 = new user("sana");
console.log(u1.country);


// Adding Properties to Prototype
function Car(model) {
  this.model = model;
}
Car.prototype.wheels = 4;
const car1 = new Car("BMW");
console.log(car1.wheels);


/*
Prototype vs __proto__
Prototype	                            __proto__
. Property of a function/class	        . Property of an object
. Used to define shared methods	        . Points to actual prototype
. Exists on constructors	            . Exists on instances
*/