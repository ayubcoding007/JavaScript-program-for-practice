/*
slice() is an array method that extracts a portion of an array and returns it as a new array.
It does not modify the original array.
The selected elements are copied from the start index up to, but not including, the end index.
It is commonly used to create shallow copies or subarrays.


Syntax
array.slice(start, end)

Parameter	Description
. start	    . Starting index (optional, default 0)
. end	    . Ending index, not included (optional)

Return Value
. Returns a new array containing the selected elements.
*/

// Basic Example
const fruitBasket = ["Apple", "Banana", "Mango", "Orange"];
const selectedFruits = fruitBasket.slice(1, 3);
console.log(selectedFruits); // ["Banana", "Mango"]


// Copy Entire Array
const scoreList = [10, 20, 30, 40];
const copiedScores = scoreList.slice();
console.log(copiedScores); // [10, 20, 30, 40]


// Omit End Parameter
const cityNames = ["Delhi", "Mumbai", "Chennai", "Hyderabad"];
const remainingCities = cityNames.slice(2);
console.log(remainingCities); // ["Chennai", "Hyderabad"]


// Using Negative Indexes
const colorSet = ["Red", "Blue", "Green", "Yellow"];
const lastColors = colorSet.slice(-2);
console.log(lastColors); // ["Green", "Yellow"]


// Extract Single Element
const languageGroup = ["HTML", "CSS", "JavaScript"];
const singleLanguage = languageGroup.slice(1, 2);
console.log(singleLanguage); // ["CSS"]

/*
Key Points
. Returns a new array.
. Does not modify the original array.
. Extracts elements from start to end - 1.
. Supports negative indexes.
. If end is omitted, extracts until the last element.
. slice() creates a shallow copy.
. Useful for copying arrays and creating subarrays.
*/