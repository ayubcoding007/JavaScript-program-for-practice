/*
The flatMap() method first applies a function to each array element using map(), then flattens the result by one level. 
It combines the functionality of map() and flat(1) into a single method. The original array is not modified. It is 
useful when each element needs to be transformed into multiple values.

Syntax
arrayName.flatMap(
  (currentElement, currentIndex, sourceArray) => {
    return transformedValue;
  }
);

Parameter	            Description
. currentElement	    . Current array element
. currentIndex	        . Current element index
. sourceArray	        . Origin  al array
*/



// Basic Example
const numberCollection = [1, 2, 3];
const resultValues =numberCollection.flatMap(currentNumber => [currentNumber, currentNumber * 2]);
console.log(resultValues); // [1, 2, 2, 4, 3, 6]


// Equivalent to map() + flat()
const scoreValues = [10, 20, 30];
const outputValues = scoreValues.map(currentScore => [currentScore, currentScore + 5]).flat();
console.log(outputValues); // [10, 15, 20, 25, 30, 35]


// Using flatMap():
const markValues = [10, 20, 30];
const finalMarks = markValues.flatMap(currentMark => [currentMark, currentMark + 5]);
console.log(finalMarks) // [ 10, 15, 20, 25, 30, 35 ]


// Split Words into Characters
const wordCollection = ["Hi","JS"];
const characterList =wordCollection.flatMap(currentWord => currentWord.split(""));
console.log(characterList); // [ 'H', 'i', 'J', 'S' ]


// Remove Elements While Mapping
const quantityValues = [1,2,3,4,5];
const evenNumbers = quantityValues.flatMap(currentValue =>currentValue % 2 === 0 ? [currentValue]: []);
console.log(evenNumbers); //[ 2, 4 ]


// Convert Sentences into Words
const sentenceCollection = ["JavaScript is powerful", "Array methods are useful"];
const wordList =sentenceCollection.flatMap(currentSentence => currentSentence.split(" "));
console.log(wordList); // [ 'JavaScript', 'is', 'powerful', 'Array', 'methods', 'are', 'useful' ]


// Original Array Remains Unchanged
const cityNames = ["Delhi","Mumbai"];
const cityOutput = cityNames.flatMap(currentCity => [currentCity, currentCity.toUpperCase()]);
console.log(cityNames); // ["Delhi", "Mumbai"]
console.log(cityOutput); // [ 'Delhi', 'DELHI', 'Mumbai', 'MUMBAI' ]

/*
Difference Between map() and flatMap()
Feature	                    map()	flatMap()
Transforms Elements	        Yes	     Yes
Flattens Result	            No	     Yes (1 level)
Returns New Array	        Yes	     Yes
Modifies Original Array	    No	     No
*/

/*
Important Points
. flatMap() = map() + flat(1).
. Flattens only one level.
. Returns a new array.
. Does not modify the original array.
. Useful for transforming and expanding data.
. Introduced in ES2019.
*/