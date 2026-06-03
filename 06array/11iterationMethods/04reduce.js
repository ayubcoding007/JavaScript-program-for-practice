/*
reduce() is an array method used to reduce multiple array elements into a single value.
It executes a callback function for each element and accumulates the result.
The final output can be a number, string, object, or array.
It is commonly used for sums, products, counting, and data aggregation.

Syntax
array.reduce(function(accumulator, element, index, array) {
    return updatedAccumulator;
}, initialValue);

Arrow Function Syntax
array.reduce((accumulator, element) => {
    return updatedAccumulator;
}, initialValue);

Parameter	        Description
. accumulator	    . Stores the accumulated result
. element	        . Current array element
. index	            . Current index (optional)
. array	            . Original array (optional)
. initialValue	    . Starting value of accumulator (optional but recommended)

Return Value
. Returns a single accumulated value.
*/


// Sum of Numbers
const numberSeries = [10, 20, 30, 40];
const totalSum = numberSeries.reduce((runningTotal, currentNumber) => {
    return runningTotal + currentNumber;
}, 0);
console.log(totalSum); // 100

// Product of Numbers
const valueList = [2, 3, 4];
const finalProduct = valueList.reduce((runningProduct, currentValue) => {
    return runningProduct * currentValue;
}, 1);
console.log(finalProduct); // 24


// Find Maximum Value
const scoreBoard = [45, 80, 25, 95, 60];
const highestScore = scoreBoard.reduce((currentMax, scoreValue) => {
    return scoreValue > currentMax ? scoreValue : currentMax;
});
console.log(highestScore); // 95


// Count Occurrences
const fruitCollection = ["Apple", "Banana", "Apple", "Mango"];
const fruitCount = fruitCollection.reduce((countObject, fruitName) => {
    countObject[fruitName] = (countObject[fruitName] || 0) + 1;
    return countObject;
}, {});
console.log(fruitCount); // { Apple: 2, Banana: 1, Mango: 1 }


// Flatten Nested Arrays
const nestedNumbers = [[1, 2], [3, 4], [5, 6]];
const flatNumbers = nestedNumbers.reduce((mergedArray, currentArray) => {
    return mergedArray.concat(currentArray);
}, []);
console.log(flatNumbers); // [1, 2, 3, 4, 5, 6]

/*
Difference: filter() vs reduce()
Feature	            filter()        	reduce()
Purpose	            Select elements	    Produce one result
Return type	        Array	            Any value
Array size	        Same or smaller	    Single value
Accumulator	        No	                Yes
*/

/*
Key Points
. Reduces an array to a single value.
. Uses an accumulator to store results.
. Returns a number, string, object, array, or any value.
. Does not modify the original array.
. initialValue is recommended for predictable results.
. Commonly used for sums, products, grouping, counting, and aggregation.
. One of the most powerful JavaScript array methods.
*/