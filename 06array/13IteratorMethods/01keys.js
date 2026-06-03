/*
keys() is an array method that returns an iterator containing the indexes (keys) of an array.
It does not modify the original array.
The iterator can be used with loops such as for...of.
It is useful when you need to access array positions rather than values.

Syntax
array.keys()

Return Value
. Returns an Array Iterator object containing the array indexes.
*/

// Basic Example
const fruitBasket = ["Apple", "Banana", "Mango"];
const basketKeys = fruitBasket.keys();
for (const position of basketKeys) {
  console.log(position);
}
/* 
0
1
2
*/


// Store Iterator
const studentNames = ["Rasid", "Sameer", "hasim"];
const nameIndexes = studentNames.keys();
console.log(nameIndexes.next().value); // 0
console.log(nameIndexes.next().value); // 1


// Convert Iterator to Array
const subjectList = ["Math", "Science", "English"];
const indexArray = [...subjectList.keys()];
console.log(indexArray); // [ 0, 1, 2 ]


// Empty Array
const emptyCollection = [];
const collectionKeys = [...emptyCollection.keys()];
console.log(collectionKeys); // []

/*
Key Points
. Returns an iterator of array indexes.
. Original array remains unchanged.
. Indexes start from 0.
. Often used with for...of loops.
. Can be converted into an array using the spread operator (...).
. Returns indexes, not values.
. Works with empty arrays as well.
*/