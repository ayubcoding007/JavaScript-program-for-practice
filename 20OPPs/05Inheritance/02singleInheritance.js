/*
Single Inheritance is a type of inheritance in which one child class inherits
properties and methods from one parent class.

. Single inheritance occurs when a subclass inherits from only one superclass.
. One parent → One child

Diagram

Parent
  ↓
Child

*/

class Animal {
  eat() {
    console.log("Animal is eating");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog is barking");
  }
}

const d1 = new Dog();

d1.eat();   // inherited from Animal
d1.bark();  // own method