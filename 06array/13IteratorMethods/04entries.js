/*
entries() is an array method that returns an iterator containing both the index and value of each array element as a pair.
It does not modify the original array.
Each item returned is in the format [index, value].
It is commonly used with for...of loops when both position and value are needed.

Syntax
array.entries()

Return Value
. Returns an Array Iterator object containing [index, value] pairs.
*/


// Basic Example
const fruitItems = ["Apple", "Banana", "Mango"];
const itemEntries = fruitItems.entries();
for (const [itemIndex, itemValue] of itemEntries) {
  console.log(itemIndex, itemValue);
}
/* 
0 Apple
1 Banana
2 Mango
*/


// Using next()
const markSheet = [80, 90, 100];
const markEntries = markSheet.entries();
console.log(markEntries.next().value); // [0, 80]
console.log(markEntries.next().value); // [1, 90]


// Convert Iterator to Array
const cityGroup = ["Delhi", "Mumbai", "Chennai"];
const cityEntries = [...cityGroup.entries()];
console.log(cityEntries); // [[0, "Delhi"], [1, "Mumbai"], [2, "Chennai"]]


// Empty Array
const blankData = [];
const dataEntries = [...blankData.entries()];
console.log(dataEntries); // []


/*
Key Points
. Returns an iterator of [index, value] pairs.
. Original array remains unchanged.
. Useful when both index and value are required.
. Works with for...of loops.
. Can be used with next().
. Can be converted into an array using the spread operator (...).
. Works with empty arrays.
*/