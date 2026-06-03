/*
toSpliced() is an array method that creates a new array with elements added, 
removed, or replaced at a specified index.

Unlike splice(), it does not modify the original array.
It follows the immutable programming approach by returning a changed copy.
Introduced in modern JavaScript as a non-mutating alternative to splice().

Syntax
. array.toSpliced(start, deleteCount, item1, item2, ...)

Parameter	            Description
start	                Index where changes begin
deleteCount	            Number of elements to remove
item1, item2, ...	    Elements to insert (optional)

Return Value
. Returns a new array containing the requested changes.
*/


// Remove Elements
const fruitsList = ["Apple", "Banana", "Mango", "Orange"];
const updatedFruits = fruitsList.toSpliced(1, 2);
console.log(updatedFruits); // ["Apple", "Orange"]

// Add Elements
const cityNames = ["Delhi", "Mumbai"];
const expandedCities = cityNames.toSpliced(1, 0, "Chennai");
console.log(expandedCities); // ["Delhi", "Chennai", "Mumbai"]


// Replace Elements
const colorSet = ["Red", "Blue", "Green"];
const modifiedColors = colorSet.toSpliced(1, 1, "Yellow");
console.log(modifiedColors); // ["Red", "Yellow", "Green"]


// Original Array Remains Unchanged
const scoreBoard = [10, 20, 30];
const newScores = scoreBoard.toSpliced(1, 1);
console.log(scoreBoard); // [10, 20, 30]
console.log(newScores); // [10, 30]


// Negative Index
const languagePack = ["HTML", "CSS", "JavaScript"];
const latestPack = languagePack.toSpliced(-1, 1, "TypeScript");
console.log(latestPack); // ["HTML", "CSS", "TypeScript"]


/*
Key Points
. Creates a new array.
. Original array stays unchanged.
. Can add, remove, or replace elements.
. Supports negative indexes.
. Modern, immutable alternative to splice().
*/