/*
Hybrid Inheritance is a combination of two or more types of inheritance.
Mixing inheritance types together such as
. Single inheritance
. Multiple inheritance
. Hierarchical inheritance
. Multilevel inheritance

Hybrid inheritance occurs when more than one type of inheritance is combined 
in a single program.

Diagram example

   A
  / \
 B   C
      \
       D

*/

// program

class A {
  showA() {
    console.log("Class A");
  }
}

class B extends A {
  showB() {
    console.log("Class B");
  }
}

class C extends A {
  showC() {
    console.log("Class C");
  }
}

class D extends C {
  showD() {
    console.log("Class D");
  }
}

let obj = new D();

obj.showA();
obj.showC();
obj.showD();

// Why use hybrid inheritance?
// . Complex program structure
// . Better code organization
// . Reusability in large applications

/*
note

JavaScript does not directly support true multiple inheritance, so hybrid 
inheritance in JS is usually made by combining extends and techniques like 
Object.assign() if needed.

*/