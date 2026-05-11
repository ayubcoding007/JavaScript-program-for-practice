/*
Hierarchical Inheritance is a type of inheritance where multiple child 
classes inherit from one parent class.

Hierarchical inheritance occurs when more than one subclass inherits 
from the same superclass.

Diagram

    Animal
   /      \
 Dog      Cat
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

class Cat extends Animal {
  meow() {
    console.log("Cat is meowing");
  }
}

const d1 = new Dog();
const c1 = new Cat();

d1.eat();   // inherited from Animal
d1.bark();

c1.eat();   // inherited from Animal
c1.meow();