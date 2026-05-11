/*
Runtime polymorphism is achieved by method overriding, where a child class 
provides its own version of a parent class method.
*/

class Animal {
  sound() {
    console.log("Animal makes sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Dog barks");
  }
}

let obj = new Dog();
obj.sound();