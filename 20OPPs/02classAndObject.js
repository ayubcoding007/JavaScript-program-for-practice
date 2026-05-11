// Class
/*
A class is like a blueprint or template used to create objects. It defines 
what properties and methods an object will have.
*/

class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  start() {
    console.log("Car started");
  }
}

// Object (Instance)
/*
An object is a real instance created from a class. It holds actual values.
*/

const car1 = new Car("Toyota", "Red");

// Using the Object

console.log(car1.brand);  // Toyota
console.log(car1.color);  // Red
car1.start();             // Car started