/*
with() is an array method that creates a new array with the value at a specified index replaced.
It does not modify the original array.
The method follows an immutable approach by returning an updated copy.
It is a modern non-mutating alternative to directly changing an array element.

Syntax
. array.with(index, value)

Parameter	Description
. index	    . Position of the element to replace
. value	    . New value to insert

Return Value
. Returns a new array with the specified element replaced.
*/


// Replace an Element
const animalGroup = ["Cat", "Dog", "Rabbit"];
const revisedAnimals = animalGroup.with(1, "Tiger");
console.log(revisedAnimals); // ["Cat", "Tiger", "Rabbit"]


// Original Array Remains Unchanged
const numberSeries = [5, 10, 15];
const freshSeries = numberSeries.with(0, 100);
console.log(numberSeries); // [5, 10, 15]
console.log(freshSeries); // [100, 10, 15]


// Replace Last Element Using Negative Index
const techStack = ["HTML", "CSS", "JavaScript"];
const modernStack = techStack.with(-1, "TypeScript");
console.log(modernStack); // ["HTML", "CSS", "TypeScript"]


// Replace First Element
const playerNames = ["Virat", "Rohit", "Gill"];
const updatedPlayers = playerNames.with(0, "Dhoni");
console.log(updatedPlayers); // ["Dhoni", "Rohit", "Gill"]

/*
Key Points
. Creates a new array.
. Replaces only one element at a given index.
. Original array remains unchanged.
. Supports negative indexes.
. Useful in immutable programming and state management.
*/