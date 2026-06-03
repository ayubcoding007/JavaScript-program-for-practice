/*
The join() method combines all elements of an array into a single string. You can specify a custom separator between elements. 
If no separator is provided, a comma (,) is used by default. The method does not modify the original array.

Syntax
arrayName.join(separatorValue);

Parameter	
. separatorValue - Optional separator placed between elements

Return Value
. Returns a string containing all array elements joined together.
*/


// Basic Example
const fruitCollection = ["Apple","Mango","Orange"];
const joinedFruits = fruitCollection.join();
console.log(joinedFruits); // "Apple,Mango,Orange"


// Join with Space
const wordCollection = ["JavaScript","is","awesome"];
const sentenceText = wordCollection.join(" ");
console.log(sentenceText); // "JavaScript is awesome"


// Join with Hyphen (-)
const numberSeries = [10, 20, 30, 40];
const hyphenOutput = numberSeries.join("-");
console.log(hyphenOutput); // "10-20-30-40"


// Join with Pipe (|)
const languageNames = ["Java","Python","JavaScript"];
const pipeOutput = languageNames.join(" | ");
console.log(pipeOutput); // "Java | Python | JavaScript"


// Empty String Separator
const characterList = ["H","E","L","L","O"];
const wordResult = characterList.join("");
console.log(wordResult); // "HELLO"


// Original Array Remains Unchanged
const cityRecords = ["Delhi","Mumbai","Chennai"];
const cityText =cityRecords.join(", ");
console.log(cityRecords); // ["Delhi", "Mumbai", "Chennai"]
console.log(cityText); // "Delhi, Mumbai, Chennai"


// Empty Array
const emptyCollection = [];
const resultText = emptyCollection.join("-");
console.log(resultText); // "" (Empty String)


// Nested Array
const nestedValues = [
  [1, 2],
  [3, 4]
];
const nestedOutput = nestedValues.join("-");
console.log(nestedOutput); // "1,2-3,4"


/*
Difference Between join() and toString()
Feature	                        join()	        toString()
Returns String	                Yes	            Yes
Custom Separator	            Yes	            No
Default Separator	            Comma	        Comma
Modifies Original Array	        No	            No
*/


// Real-World Example
// Create URL Path
const pathSegments = [
  "products",
  "electronics",
  "mobile"
];
const urlPath = pathSegments.join("/");
console.log(urlPath); // "products/electronics/mobile"

/*
Important Points
. join() converts an array into a string.
. Allows custom separators.
. Does not modify the original array.
. Default separator is comma (,).
. Returns a string.
. More flexible than toString().
*/