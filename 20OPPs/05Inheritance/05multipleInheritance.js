/*
Multiple Inheritance is a type of inheritance where one child class 
inherits properties and methods from more than one parent class.

Multiple inheritance occurs when a subclass inherits from two or more 
superclasses.
. In JavaScript, a class can only use one extends
. Many parents → One child

Diagram:
A   B
 \ /
  C

*/

class A {
  showA() {
    console.log("This is class A");
  }
}

class B {
  showB() {
    console.log("This is class B");
  }
}

class C {}

// Copy methods from A and B into C
Object.assign(C.prototype, A.prototype);
Object.assign(C.prototype, B.prototype);

let obj = new C();

obj.showA();
obj.showB();