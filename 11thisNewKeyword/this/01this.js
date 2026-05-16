/*
The this keyword in JavaScript refers to the current execution context of a 
function. It means the object that is currently calling the function. Its value 
changes depending on where and how it is used. In simple words, this points to 
the object that owns or executes the code.

*/

// this in an object

const person = {
  name: "Ayub",
  show: function() {
    console.log(this.name);
  }
};

// person.show();


// this in a normal function

function test() {
  console.log(this);
}
// test();

// . In non-strict mode, this refers to the global object (window in browser).
// . In strict mode, it is undefined.


// this in a class

class Student {
  constructor(name) {
    this.name = name;
  }
  show() {
    console.log(this.name);
  }
}
const s1 = new Student("Ayub");
// s1.show();
// Here, this refers to the object created using new.



// this with event (browser)

button.onclick = function() {
  console.log(this);
};
//this refers to the HTML element (button).
