/*
JavaScript doesn’t have a built-in copy constructor in the same formal way as 
languages like C++ or Java. But the idea is similar: creating a new object by 
copying values from an existing object.
*/

// program

// class Person {
//   constructor(person) {
//     this.name = person.name;
//     this.age = person.age;
//   }
// }

// const person1 = { name: "Ayub", age: 22 };
// const person2 = new Person(person1);

// console.log(person2); 

// advance Program
class Student {
  constructor(nameOrPerson, age) {
    if (typeof nameOrPerson === "object") {
      
      this.name = nameOrPerson.name;
      this.age = nameOrPerson.age;
    } else {
      
      this.name = nameOrPerson;
      this.age = age;
    }
  }
}

const p1 = new Student("Ayub", 22);
const p2 = new Student(p1);

console.log(p2);


// Important note

/*
This usually makes a shallow copy. If your object contains nested objects or 
arrays, those inner references are still shared unless you do a deep copy.
*/