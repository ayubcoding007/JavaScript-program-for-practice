/*
The valueOf() method returns the primitive value of an object. It is commonly used internally by JavaScript when an object 
needs to be converted to a primitive value. Different objects return different primitive values. The original object remains 
unchanged.

Syntax
object.valueOf()
*/


// 1. Number valueOf()
// Returns the primitive number value.

let num = new Number(100);
console.log(num.valueOf()); // 100


// 2. String valueOf()
// Returns the primitive string value.
let str = new String("Hello");
console.log(str.valueOf()); // Hello


// 3. Boolean valueOf()
// Returns the primitive boolean value.
let flag = new Boolean(true);
console.log(flag.valueOf()); // true


// 5. Array valueOf()
// Returns the array object itself.
let arr = [10, 20, 30];
console.log(arr.valueOf()); // [10, 20, 30]


// 6. Object valueOf()
// By default, it returns the object itself.
let obj = { name: "Ayub" };
console.log(obj.valueOf()); // { name: "Ayub" }


// Custom valueOf()
// You can define your own valueOf() method.
let person = {
  name: "Ayub",
  age: 20,
  valueOf() {
    return this.age;
  }
};
console.log(person.valueOf());

/*
Difference Between toString() and valueOf()
Method	            Returns
. toString()	    . String representation
. valueOf()	        . Primitive value
*/