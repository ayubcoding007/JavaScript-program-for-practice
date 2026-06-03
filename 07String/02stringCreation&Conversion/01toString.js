/*
toString() is a built-in JavaScript method used to convert a value into its string representation. Almost every JavaScript object 
inherits this method from Object.prototype. Different data types (Number, Array, Date, Function, etc.) provide their own 
implementation of toString().

Syntax
. value.toString()
*/


// 1. String toString()
// When used on a string, it simply returns the same string.
let str = "Hello";
console.log(str.toString()); // Hello


// 2. Number toString()
// Converts a number into a string.
let num = 123;
console.log(num.toString()); // "123"


// Convert Number to Different Bases
let num1 = 15;
console.log(num1.toString(2));   // Binary
console.log(num1.toString(8));   // Octal
console.log(num1.toString(16));  // Hexadecimal


// 3. Boolean toString()
let isTrue = true;
console.log(isTrue.toString()); // "true"


// 4. Array toString()
// Converts all array elements into a comma-separated string.
let arr = [10, 20, 30];
console.log(arr.toString()); // "10,20,30"


// 5. Date toString()
// Converts a date object into a readable string.
let today = new Date();
console.log(today.toString()); // Mon Jun 02 2026 10:30:00 GMT+0530


// 6. Object toString()
// Default behavior
let obj = {};
console.log(obj.toString()); // [object Object]


// Custom toString()
let person = {
    name: "Ayub",
    age: 20,
    toString() {
        return `${this.name} - ${this.age}`;
    }
};
console.log(person.toString()); // Ayub - 20