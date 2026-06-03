/*
The toSorted() method creates a new sorted array without changing the original array. It works like sort(), 
but it is non-mutating (immutable). This method was introduced in modern JavaScript (ES2023) to make array 
operations safer and more predictable.

Syntax
. arrayName.toSorted(compareFunction);

Parameters
. compareFunction - Optional function that defines the sort order.

Return Value
. Returns a new sorted array and leaves the original array unchanged.
*/

// Default Sorting
const fruitCollection = ["Mango", "Apple", "Orange", "Banana"];
const sortedFruits = fruitCollection.toSorted();
console.log(sortedFruits); // ["Apple", "Banana", "Mango", "Orange"]


// Original Array Remains Unchanged
const scoreValues = [40, 10, 30, 20];
const arrangedScores = scoreValues.toSorted();
console.log(scoreValues); // [40, 10, 30, 20]
console.log(arrangedScores); // [10, 20, 30, 40]


// Number Sorting (Ascending)
const quantityData = [100, 5, 50, 20];
const ascendingNumbers = quantityData.toSorted((smallerNumber, largerNumber) => smallerNumber - largerNumber);
console.log(ascendingNumbers); // [5, 20, 50, 100]


// Number Sorting (Descending)
const temperatureValues = [15, 45, 25, 35];
const descendingTemperatures = temperatureValues.toSorted((firstReading, secondReading) => secondReading - firstReading);
console.log(descendingTemperatures); // [45, 35, 25, 15]


// String Sorting
const languageCollection = ["Python","Java","JavaScript","C++"];
const orderedLanguages = languageCollection.toSorted();
console.log(orderedLanguages); // ["C++", "Java", "JavaScript", "Python"]


/*
Feature	                    sort()	                toSorted()
Modifies Original Array	    Yes	                    No
Returns Sorted Array	    Yes	                    Yes
Immutable	                No	                    Yes
Introduced In	            Old JavaScript	        ES2023
*/

/*
Important Points
. toSorted() is the immutable version of sort().
. Introduced in ES2023.
. Does not modify the original array.
. Returns a new sorted array.
. Supports custom compare functions.
. Preferred in modern React and functional programming patterns.
*/
