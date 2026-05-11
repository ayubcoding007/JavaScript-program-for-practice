/*
Compile-time polymorphism is achieved by method overloading, where multiple 
methods have the same name but different parameters.

Key point
. No real compile-time polymorphism 
. Simulated using optional/default/rest parameters 
In one line:

Compile-time polymorphism means the same method performs different tasks 
based on different parameters (method overloading).
*/



class Test {
  add(a, b, c) {
    if (c === undefined) {
      return a + b;
    } else {
      return a + b + c;
    }
  }
}

let obj = new Test();

console.log(obj.add(2, 3));
console.log(obj.add(2, 3, 4));