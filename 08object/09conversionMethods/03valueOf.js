/*
The valueOf() method returns the primitive value of an object. It is used internally by JavaScript 
whenever an object needs to be converted into a primitive value (number, string, or boolean). 
Most built-in objects like Number, String, Boolean, Date, and Array have their own implementation 
of valueOf(). It does not modify the original object.

Syntax

. General syntax
object.valueOf();

Return Value
Returns the primitive value associated with the object.
*/


// valueOf() with Number Object
// Create Number object
let num = new Number(100);
// Return primitive number value
console.log(num.valueOf()); // 100


// valueOf() with String Object
// Create String object
let str = new String("JavaScript");
// Return primitive string value
console.log(str.valueOf()); // JavaScript


// valueOf() with Boolean Object
// Create Boolean object
let status = new Boolean(true);
// Return primitive boolean value
console.log(status.valueOf()); // true


// valueOf() with Date Object
// Create Date object
let today = new Date();
// It returns the number of milliseconds since January 1, 1970 (Unix Epoch).
console.log(today.valueOf()); // 1780219937585


// valueOf() with Array
let arr = [10, 20, 30];
// Return array object itself
console.log(arr.valueOf()); // [10, 20, 30]


// valueOf() with Plain Object
// Create object
let obj = {
  name: "Ayub",
  age: 22
};
// Return object itself
console.log(obj.valueOf()); // { name: 'Ayub', age: 22 }


// Using valueOf() in Arithmetic Operations
// Number object
let num = new Number(50);
// JavaScript automatically uses valueOf()
console.log(num.valueOf() + 20); // 70


// Compare Number Object with Primitive Number
// Number object
let numObj = new Number(100);
// Primitive number
let num = 100;
// Compare values
console.log(numObj.valueOf() === num); // true


// Custom valueOf() Method
// Create custom object
let person = {
  name: "Aman",
  age: 25,
  valueOf() {
    return this.age;
  }
};
// Uses custom valueOf()
console.log(person + 5); // 30


