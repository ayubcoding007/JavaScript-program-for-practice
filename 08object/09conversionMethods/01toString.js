/*
The toString() method in JavaScript converts an object, value, or data type into its string 
representation. It is inherited from the base Object prototype, so almost every JavaScript 
object has access to it. Many built-in objects override this method to provide more meaningful 
string output. It is commonly used when JavaScript needs to display or concatenate values as 
strings.

Syntax
object.toString()

Parameters
. No parameters are required.

Return Value
. Returns a string representing the object.
*/


// Default Object.toString()
// . When called on a plain object, it returns:
let obj = {};
console.log(obj.toString()); // [object Object]
// Explanation
// . [object Object] is the default string representation of a normal object.


// toString() with Numbers
let num = 123;
console.log(num.toString()); // "123"


// Convert Number to Different Bases
console.log(num.toString(2));   // Binary  11111111
console.log(num.toString(8));   // Octal  377
console.log(num.toString(16));  // Hexadecimal  ff


// toString() with Arrays
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.toString());  // Apple,Banana,Mango
// Array elements are joined using commas.


// toString() with Strings
let str = "JavaScript";
console.log(str.toString());  //JavaScript
// Returns the same string value.


// toString() with Boolean Values
let value = true;
console.log(value.toString());  // true


// toString() with Dates
let today = new Date();
console.log(today.toString()); // Wed May 31 2026 10:20:30 GMT+0530 (India Standard Time)


// Custom toString() Method
// . You can override toString() inside your own objects.


let person = {
    name: "Ayub",
    age: 22,
    toString() {
        return `${this.name} is ${this.age} years old`;
    }
};
console.log(person.toString());  // Ayub is 22 years old


// Implicit Use of toString()
// . JavaScript automatically calls toString() in some situations.
let obj = {
    toString() {
        return "Hello";
    }
};
console.log(obj + " World");  // Hello World
// . JavaScript converts the object to a string automatically.


// Object.prototype.toString()
console.log(Object.prototype.toString.call([]));  // [object Array]
console.log(Object.prototype.toString.call({}));  // [object Object]
console.log(Object.prototype.toString.call(new Date()));  // [object Date]
console.log(Object.prototype.toString.call("Hello"));  // [object String]


// Type Detection Using toString()
function getType(value) {
    return Object.prototype.toString.call(value);
}
console.log(getType([]));  // [object Array]
console.log(getType(null));  // [object Null]
console.log(getType(undefined)); // [object Undefined]
// . This is more reliable than typeof in many cases.


/*
typeof vs Object.prototype.toString()
Value	            typeof	    Object.prototype.toString.call()
. []	            . object	. [object Array]
. {}	            . object	. [object Object]
. null	            . object	. [object Null]
. new Date()	    . object	. [object Date]
. "Hello"	        . string	. [object String]
*/


// Real-World Example
class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }
    toString() {
        return `Student: ${this.name}, Marks: ${this.marks}`;
    }
}
let s1 = new Student("Aman", 95);
console.log(s1.toString()); // Student: Aman, Marks: 95