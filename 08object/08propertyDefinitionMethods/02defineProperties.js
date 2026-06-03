/*
Object.defineProperties() in JavaScript is used to define multiple properties on an object at once.

It gives full control over
. value
. writable
. enumerable
. configurable
. getters/setters

Syntax
Object.defineProperties(object, {
    property1: descriptor1,
    property2: descriptor2
});

Property Descriptor Options
Property	    Meaning
. value	        . Actual value
. writable	    . Can change value
. enumerable	. Appears in loops
. configurable	. Can delete/modify
. get	        . Getter function
. set	        . Setter function

*/

// writable
const obj = {};

Object.defineProperties(obj, {
    id: {
        value: 101,
        writable: false
    }
});
obj.id = 200;
console.log(obj.id); //101  Cannot change because writable: false.


// enumerable
const user = {};
Object.defineProperties(user, {
    name: {
        value: "ayub",
        enumerable: true
    },
    password: {
        value: "12345",
        enumerable: false
    }
});
console.log(Object.keys(user)); // [ 'name' ] password is hidden from loops and Object.keys().


// Getter and Setter
const employee = {
    firstName: "Aamir",
    lastName: "Khan"
};
Object.defineProperties(employee, {
    fullName: {
        get() {
            return this.firstName + " " + this.lastName;
        },
        set(value) {
            const parts = value.split(" ");
            this.firstName = parts[0];
            this.lastName = parts[1];
        }
    }
});
console.log(employee.fullName);
employee.fullName = "Sheikh Ayub";
console.log(employee.firstName);

