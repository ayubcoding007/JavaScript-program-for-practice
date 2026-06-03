/*
values() is an array method that returns an iterator containing the values of an array.
It does not modify the original array.
The iterator can be used with for...of loops to access each element.
It is useful when you need array values one by one.

Syntax
array.values()

Return Value
. Returns an Array Iterator object containing the array values.
*/


const fruitCollection = ["Apple", "Banana", "Mango"];
const fruitValues = fruitCollection.values();
for (const itemName of fruitValues) {
  console.log(itemName);
}
/*
Apple
Banana
Mango
*/


// Using next()
const scoreList = [10, 20, 30];
const scoreValues = scoreList.values();
console.log(scoreValues.next().value); // 10
console.log(scoreValues.next().value); // 20


// Convert Iterator to Array
const colorPalette = ["Red", "Blue", "Green"];
const colorValues = [...colorPalette.values()];
console.log(colorValues); // ["Red", "Blue", "Green"]


// Empty Array
const emptyStorage = [];
const storageValues = [...emptyStorage.values()];
console.log(storageValues);// []

/*
Key Points
. Returns an iterator of array values.
. Original array remains unchanged.
. Works well with for...of loops.
. Can be used with next() to get values one at a time.
. Can be converted to an array using the spread operator (...).
. Returns values, not indexes.
. Works with empty arrays.
*/