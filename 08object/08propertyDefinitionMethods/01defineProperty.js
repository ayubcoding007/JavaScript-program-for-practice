/*
Object.defineProperty() in JavaScript is used to define or modify a single property on an object 
with full control over its behavior.

You can control:
. value
. writable
. enumerable
. configurable
. getter/setter

Syntax
Object.defineProperty(object, propertyName, descriptor)

Property Descriptor Options
Descriptor	    Meaning
. value	        . Property value
. writable	    . Can change value
. enumerable	. Shows in loops
. configurable	. Can delete/change property
. get	        . Getter function
. set	        . Setter function


Important Note

Default values are
. writable: false
. enumerable: false
. configurable: false

*/

// Basic Example
const person = {};
Object.defineProperty(person, "name", {
    value: "Ayub"
});
console.log(person.name);


// writable
const obj = {};
Object.defineProperty(obj, "id", {
    value: 100,
    writable: false
});
obj.id = 200;
console.log(obj.id); // 100 Cannot modify because writable: false.


// enumerable
const user = {};
Object.defineProperty(user, "password", {
    value: "12345",
    enumerable: false
});
console.log(Object.keys(user)); // [] Property is hidden from loops and Object.keys().


// configurable
const car = {};
Object.defineProperty(car, "brand", {
    value: "Toyota",
    configurable: false
});
delete car.brand;
console.log(car.brand); // Toyota Cannot delete property.


// Getter and Setter
const student = {
    firstName: "Aamir",
    lastName: "Khan"
};
Object.defineProperty(student, "fullName", {
    get() {
        return this.firstName + " " + this.lastName;
    },
    set(value) {
        const parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
});
console.log(student.fullName);
student.fullName = "Sheikh Ayub";
console.log(student.firstName);
/*
Object.defineProperty() in JavaScript is used to define or modify a single property on an object 
with full control over its behavior.

You can control:
. value
. writable
. enumerable
. configurable
. getter/setter

Syntax
Object.defineProperty(object, propertyName, descriptor)

Property Descriptor Options
Descriptor	    Meaning
. value	        . Property value
. writable	    . Can change value
. enumerable	. Shows in loops
. configurable	. Can delete/change property
. get	        . Getter function
. set	        . Setter function


Important Note

Default values are
. writable: false
. enumerable: false
. configurable: false

*/

// Basic Example
const person = {};
Object.defineProperty(person, "name", {
    value: "Ayub"
});
console.log(person.name);


// writable
const obj = {};
Object.defineProperty(obj, "id", {
    value: 100,
    writable: false
});
obj.id = 200;
console.log(obj.id); // 100 Cannot modify because writable: false.


// enumerable
const user = {};
Object.defineProperty(user, "password", {
    value: "12345",
    enumerable: false
});
console.log(Object.keys(user)); // [] Property is hidden from loops and Object.keys().


// configurable
const car = {};
Object.defineProperty(car, "brand", {
    value: "Toyota",
    configurable: false
});
delete car.brand;
console.log(car.brand); // Toyota Cannot delete property.


// Getter and Setter
const student = {
    firstName: "Aamir",
    lastName: "Khan"
};
Object.defineProperty(student, "fullName", {
    get() {
        return this.firstName + " " + this.lastName;
    },
    set(value) {
        const parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
});
console.log(student.fullName);
student.fullName = "Sheikh Ayub";
console.log(student.firstName);
/*
Object.defineProperty() in JavaScript is used to define or modify a single property on an object 
with full control over its behavior.

You can control:
. value
. writable
. enumerable
. configurable
. getter/setter

Syntax
Object.defineProperty(object, propertyName, descriptor)

Property Descriptor Options
Descriptor	    Meaning
. value	        . Property value
. writable	    . Can change value
. enumerable	. Shows in loops
. configurable	. Can delete/change property
. get	        . Getter function
. set	        . Setter function


Important Note

Default values are
. writable: false
. enumerable: false
. configurable: false

*/

// Basic Example
const person = {};
Object.defineProperty(person, "name", {
    value: "Ayub"
});
console.log(person.name);


// writable
const obj = {};
Object.defineProperty(obj, "id", {
    value: 100,
    writable: false
});
obj.id = 200;
console.log(obj.id); // 100 Cannot modify because writable: false.


// enumerable
const user = {};
Object.defineProperty(user, "password", {
    value: "12345",
    enumerable: false
});
console.log(Object.keys(user)); // [] Property is hidden from loops and Object.keys().


// configurable
const car = {};
Object.defineProperty(car, "brand", {
    value: "Toyota",
    configurable: false
});
delete car.brand;
console.log(car.brand); // Toyota Cannot delete property.


// Getter and Setter
const student = {
    firstName: "Aamir",
    lastName: "Khan"
};
Object.defineProperty(student, "fullName", {
    get() {
        return this.firstName + " " + this.lastName;
    },
    set(value) {
        const parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
});
console.log(student.fullName);
student.fullName = "Sheikh Ayub";
console.log(student.firstName);
/*
Object.defineProperty() in JavaScript is used to define or modify a single property on an object 
with full control over its behavior.

You can control:
. value
. writable
. enumerable
. configurable
. getter/setter

Syntax
Object.defineProperty(object, propertyName, descriptor)

Property Descriptor Options
Descriptor	    Meaning
. value	        . Property value
. writable	    . Can change value
. enumerable	. Shows in loops
. configurable	. Can delete/change property
. get	        . Getter function
. set	        . Setter function


Important Note

Default values are
. writable: false
. enumerable: false
. configurable: false

*/

// Basic Example
const person = {};
Object.defineProperty(person, "name", {
    value: "Ayub"
});
console.log(person.name);


// writable
const obj = {};
Object.defineProperty(obj, "id", {
    value: 100,
    writable: false
});
obj.id = 200;
console.log(obj.id); // 100 Cannot modify because writable: false.


// enumerable
const user = {};
Object.defineProperty(user, "password", {
    value: "12345",
    enumerable: false
});
console.log(Object.keys(user)); // [] Property is hidden from loops and Object.keys().


// configurable
const car = {};
Object.defineProperty(car, "brand", {
    value: "Toyota",
    configurable: false
});
delete car.brand;
console.log(car.brand); // Toyota Cannot delete property.


// Getter and Setter
const student = {
    firstName: "Aamir",
    lastName: "Khan"
};
Object.defineProperty(student, "fullName", {
    get() {
        return this.firstName + " " + this.lastName;
    },
    set(value) {
        const parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
});
console.log(student.fullName);
student.fullName = "Sheikh Ayub";
console.log(student.firstName);
