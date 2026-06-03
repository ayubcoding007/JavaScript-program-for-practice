/*
fill() is an array method used to replace all or selected elements of an array with a specified value.
It modifies the original array directly.
You can fill the entire array or only a portion of it by providing start and end indexes.
It is useful for initializing arrays with default values.

Syntax
array.fill(value, start, end)

Parameter	Description
. value	    . Value used to fill the array
. start	    . Starting index (optional, default 0)
. end	    . Ending index, not included (optional)

Return Value
. Returns the modified original array.
*/


// Fill Entire Array
const scoreBoard = [1, 2, 3, 4];
scoreBoard.fill(0);
console.log(scoreBoard); // [0, 0, 0, 0]


// Fill Part of an Array
const numberSeries = [10, 20, 30, 40, 50];
numberSeries.fill(100, 1, 4);
console.log(numberSeries); // [10, 100, 100, 100, 50]


// Create and Fill a New Array
const emptySlots = new Array(5);
emptySlots.fill("JavaScript");
console.log(emptySlots); // ["JavaScript", "JavaScript", "JavaScript", "JavaScript", "JavaScript"]


// Using Negative Indexes
const colorPalette = ["Red", "Blue", "Green", "Yellow"];
colorPalette.fill("Black", -2);
console.log(colorPalette); // ["Red", "Blue", "Black", "Black"]


// Fill Single Element
const cityGroup = ["Delhi", "Mumbai", "Chennai"];
cityGroup.fill("Hyderabad", 1, 2);
console.log(cityGroup); // ["Delhi", "Hyderabad", "Chennai"]


/*
Key Points
. Fills array elements with a specified value.
. Modifies the original array.
. Can fill the entire array or a selected range.
. Supports negative indexes.
. Returns the modified array.
. Useful for initializing arrays with default values.
. The end index is not included in the fill operation.
*/