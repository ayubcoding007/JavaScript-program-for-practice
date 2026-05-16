/*
The new keyword is used to create a new object from a constructor function or class. 
It allocates memory for the object and sets up the this keyword to refer to that new 
object. It also links the object to the constructor’s prototype, allowing access to 
methods and properties. new is commonly used in object-oriented programming in 
JavaScript.

Syntax
const objectName = new ConstructorName();

JavaScript does these steps
. Creates a new empty object {}
. Sets this to point to that object
. Links object to constructor prototype
. Executes constructor function
. Returns the new object
*/

// Example using Constructor Function

function Student(name, age) {
  this.name = name;
  this.age = age;
}

const s1 = new Student("Ayub", 20);

// console.log(s1.name);
// console.log(s1.age);


// Example with Method

function Car(brand, model) {
  this.brand = brand;
  this.model = model;

  this.showDetails = function() {
    console.log(this.brand + " " + this.model);
  };
}

const car1 = new Car("Toyota", "Fortuner");
// car1.showDetails();


// Example with Class

class Person {
  constructor(name) {
    this.name = name;
  }
}

const p1 = new Person("Ali");
// console.log(p1.name);


// Create Array using new

const arr = new Array(10, 20, 30);
// console.log(arr);


// Create Object using new

const obj = new Object();
obj.name = "Ayub";
obj.age = 20;
// console.log(obj);


// Create Function using new

const sum = new Function("a", "b", "return a + b");
// console.log(sum(5, 3));