/*
forEach() is an array method used to execute a function once for each array element.
It iterates through the array in order and performs the specified action.
It does not return a new array.
It is commonly used for displaying, processing, or updating data.

Syntax
array.forEach(function(element, index, array) {
    // code
});

Arrow Function Syntax
array.forEach((element, index) => {
    // code
});

Parameter	Description
. element	. Current array element
. index	    . Current element index (optional)
. array	    . Original array (optional)

Return Value
. Returns undefined.
*/


// Basic Example
const fruitBasket = ["Apple", "Banana", "Mango"];

fruitBasket.forEach((fruitItem) => {
    console.log(fruitItem);
});
/*
Apple
Banana
Mango
*/


// Access Index
const cityNames = ["Delhi", "Mumbai", "Chennai"];
cityNames.forEach((cityValue, cityIndex) => {
    console.log(cityIndex, cityValue);
});
/*
0 Delhi
1 Mumbai
2 Chennai
*/


// Calculate Sum
const scoreList = [10, 20, 30, 40];
let totalScore = 0;
scoreList.forEach((scoreValue) => {totalScore += scoreValue;});
console.log(totalScore); // 100


// Modify Array Elements
const numberSeries = [1, 2, 3];
numberSeries.forEach((currentValue, currentIndex, originalArray) => {originalArray[currentIndex] = currentValue * 2;});
console.log(numberSeries); // [2, 4, 6]


// Array of Objects
const studentRecords = [ { studentName: "Ayub" }, { studentName: "Fatima" }];
studentRecords.forEach((studentData) => {
    console.log(studentData.studentName);
});
/*
Ayub
Fatima
*/


/*
Key Points
. Executes a function for each array element.
. Iterates from first element to last element.
. Returns undefined.
. Does not create a new array.
. Cannot be stopped using break or continue.
. Commonly used for logging, calculations, and updates.
. Accepts element, index, and array parameters.
. Works only on existing array elements.
*/