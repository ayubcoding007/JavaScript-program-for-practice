/*
reduceRight() works like reduce(), but it processes array elements from right to left (last element to first element).
It reduces all elements into a single value using an accumulator.
The original array remains unchanged.
It is useful when the order of processing matters.

Syntax
array.reduceRight(function(accumulator, element, index, array) {
    return updatedAccumulator;
}, initialValue);

Arrow Function Syntax
array.reduceRight((accumulator, element) => {
    return updatedAccumulator;
}, initialValue);


Parameter	    Description

accumulator	    Stores the accumulated result
element	        Current array element
index	        Current index (optional)
array	        Original array (optional)
initialValue	Starting value (optional but recommended)

Return Value
. Returns a single accumulated value.
*/

// Sum Numbers from Right to Left
const numberSeries = [10, 20, 30, 40];
const totalValue = numberSeries.reduceRight((runningTotal, currentNumber) => {
    return runningTotal + currentNumber;
}, 0);
console.log(totalValue); // 100


// Reverse String Creation
const letterCollection = ["J", "S", "A"];
const reversedText = letterCollection.reduceRight((resultText, currentLetter) => {
    return resultText + currentLetter;
}, "");
console.log(reversedText); // ASJ


// Subtraction Example
const valueList = [10, 5, 2];
const finalResult = valueList.reduceRight((runningValue, currentValue) => {
    return runningValue - currentValue;
});
console.log(finalResult); // -13


// Flatten Nested Arrays
const nestedCollection = [[1, 2], [3, 4], [5, 6]];
const mergedNumbers = nestedCollection.reduceRight((combinedArray, currentArray) => {
    return combinedArray.concat(currentArray);
}, []);
console.log(mergedNumbers); // [5, 6, 3, 4, 1, 2]


// Build Object
const keyValuePairs = [
    ["firstName", "Sheikh"],
    ["ageValue", 22]
];
const userDetails = keyValuePairs.reduceRight((resultObject, currentPair) => {
    resultObject[currentPair[0]] = currentPair[1];
    return resultObject;
}, {});
console.log(userDetails); // { ageValue: 22, firstName: 'Sheikh' }


/*
Difference: reduce() vs reduceRight()
Feature	                    reduce()	    reduceRight()
Direction	                Left → Right	Right → Left
First element processed	    First element	Last element
Return value	            Single value	Single value
Original array modified	    No	            No
*/

/*
Key Points
. Reduces an array to a single value.
. Processes elements from right to left.
. Uses an accumulator.
. Does not modify the original array.
. Returns any data type (number, string, object, array, etc.).
. Useful when processing order is important.
. Similar to reduce(), but in reverse direction.
*/