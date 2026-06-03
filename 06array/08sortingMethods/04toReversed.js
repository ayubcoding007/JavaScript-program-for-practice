/*
The toReversed() method creates a new array with elements in reverse order without modifying the original array. It is the immutable version of reverse(). Introduced in ES2023, it helps write safer code by preserving the original data. The method returns a new reversed array.

Syntax
. arrayName.toReversed();

Return Value
. Returns a new reversed array.
*/

// Basic Example
const numberCollection = [10, 20, 30, 40];
const reversedNumbers = numberCollection.toReversed();
console.log(reversedNumbers); //[40, 30, 20, 10]


// Original Array Remains Unchanged
const scoreRecords = [5, 15, 25, 35];
const reversedScores = scoreRecords.toReversed();
console.log(scoreRecords); // [5, 15, 25, 35]
console.log(reversedScores); // [35, 25, 15, 5]


// Reverse String Array
const cityNames = ["Delhi", "Mumbai", "Chennai", "Hyderabad"];
const reversedCities = cityNames.toReversed();
console.log(reversedCities); // ["Hyderabad", "Chennai", "Mumbai", "Delhi"]


// Reverse Object Array
const employeeDetails = [
  { employeeName: "Ali" },
  { employeeName: "Ramzan" },
  { employeeName: "Krina" }
];
const reversedEmployees = employeeDetails.toReversed();
console.log(reversedEmployees); // [{ employeeName: 'Krina' },{ employeeName: 'Ramzan' },{ employeeName: 'Ali' }]


// Chaining Methods
const markValues = [50, 20, 80, 40];
const resultMarks = markValues.toSorted((firstMark, secondMark) =>firstMark - secondMark).toReversed();
console.log(resultMarks); // [80, 50, 40, 20]

/*
Difference Between reverse() and toReversed()
Feature	                    reverse()	            toReversed()
Modifies Original Array	    Yes	                    No
Returns Reversed Array	    Yes	                    Yes
Immutable	                No                      Yes
ES Version	                Older JavaScript	    ES2023
*/


// reverse()
const valueList = [1, 2, 3, 4];
const outputList = valueList.reverse();
console.log(valueList); // [4, 3, 2, 1] - (Original array changed.)
console.log(outputList); // [4, 3, 2, 1]

// toReversed()
const itemList = [1, 2, 3, 4];
const reversedItems = itemList.toReversed();
console.log(itemList); // [1, 2, 3, 4]
console.log(reversedItems); // [4, 3, 2, 1]

/*
Important Points
toReversed() is the immutable version of reverse().
. Introduced in ES2023.
. Does not modify the original array.
. Returns a new reversed array.
. Useful in React and functional programming.
*/