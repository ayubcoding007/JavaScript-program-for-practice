/*
The toString() method converts all elements of an array into a single string. Array elements are separated 
by commas (,). It does not modify the original array and returns the resulting string. This method is 
automatically called when an array needs to be represented as text.

Syntax
. arrayName.toString();

Return Value
. Returns a string containing all array elements separated by commas.
*/

// Basic Example
const numberCollection = [10, 20, 30, 40];
const stringResult = numberCollection.toString();
console.log(stringResult); // "10,20,30,40"


// String Array
const fruitBasket = ["Apple", "Mango", "Orange"];
const fruitText = fruitBasket.toString();
console.log(fruitText); // "Apple,Mango,Orange"


// Original Array Remains Unchanged
const cityRecords = ["Delhi", "Mumbai", "Chennai"];
const cityText = cityRecords.toString();
console.log(cityRecords); // ["Delhi", "Mumbai", "Chennai"]
console.log(cityText); // "Delhi,Mumbai,Chennai"


// Mixed Data Types
const mixedValues = [100, "JavaScript", true, null];
const mixedText = mixedValues.toString();
console.log(mixedText); // "100,JavaScript,true,"


// Nested Array
const nestedCollection = [
  [1, 2],
  [3, 4],
  [5, 6]
];
const nestedText = nestedCollection.toString();
console.log(nestedText); // 1,2,3,4,5,6


// Empty Array
const emptyCollection = [];
const emptyText = emptyCollection.toString();
console.log(emptyText); // "" (Empty string)


// Automatic Conversion
const subjectNames = ["Math", "Science", "English"];
console.log(subjectNames + ""); // "Math,Science,English"


/*
Difference Between toString() and join()
Feature	                    toString()	        join()
Returns String	            Yes	                Yes
Custom Separator	        No	                Yes
Original Array Modified	    No	                No
*/

/*
Important Points
. Converts an array into a string.
. Elements are separated by commas.
. Does not change the original array.
. Returns a string value.
. Nested arrays are flattened into comma-separated values.
. join() is more flexible because it allows custom separators.
*/