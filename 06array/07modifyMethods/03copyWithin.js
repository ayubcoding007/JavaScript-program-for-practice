/*
copyWithin() is an array method that copies a part of an array to another position within the same array.
It modifies the original array and does not change its length.
The copied values overwrite existing elements.
It is useful for rearranging array elements without creating a new array.

Syntax
. array.copyWithin(target, start, end)

Parameter	    Description
. target	    . Index where copied elements will be placed
. start	        . Index from which copying begins
. end	        . Index where copying stops (not included, optional)

Return Value
. Returns the modified original array.
*/

// Basic Example
const numberGroup = [10, 20, 30, 40, 50];
numberGroup.copyWithin(0, 3);
console.log(numberGroup); // [40, 50, 30, 40, 50]


// Copy Selected Elements
const fruitCollection = ["Apple", "Banana", "Mango", "Orange"];
fruitCollection.copyWithin(1, 2, 4);
console.log(fruitCollection); // ["Apple", "Mango", "Orange", "Orange"]


// Copy to Middle Position
const cityList = ["Delhi", "Mumbai", "Chennai", "Hyderabad"];
cityList.copyWithin(2, 0, 2);
console.log(cityList); // ["Delhi", "Mumbai", "Delhi", "Mumbai"]


// Using Negative Indexes
const colorPalette = ["Red", "Blue", "Green", "Yellow"];
colorPalette.copyWithin(-2, 0, 2);
console.log(colorPalette); // ["Red", "Blue", "Red", "Blue"]


// Copy Single Element
const languageSet = ["HTML", "CSS", "JavaScript", "Python"];
languageSet.copyWithin(1, 3);
console.log(languageSet); // ["HTML", "Python", "JavaScript", "Python"]

/*
Key Points
. Copies elements within the same array.
. Modifies the original array.
. Does not change the array length.
. Overwrites existing elements.
. Supports negative indexes.
. The end index is not included.
. Returns the modified array.
. No new array is created.
*/