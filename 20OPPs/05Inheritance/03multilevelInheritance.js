/*
Multilevel Inheritance is a type of inheritance where a class inherits from 
another class, and then another class inherits from that derived class.

Multilevel inheritance occurs when one class inherits from a derived class, 
forming a chain of inheritance.

. Grandparent → Parent → Child

Diagram:
A
↓
B
↓
C
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

class Puppy extends Dog {
  weep() {
    console.log("Puppy is weeping");
  }
}

const p1 = new Puppy();

p1.eat();   // from Animal
p1.bark();  // from Dog
p1.weep();  // from Puppy