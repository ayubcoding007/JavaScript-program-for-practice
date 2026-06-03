/*
filter() is an array method used to select elements that satisfy a condition.
It executes a callback function for each array element and returns a new array containing only the matching elements.
The original array remains unchanged.
It is commonly used for searching and filtering data.

Syntax
array.filter(function(element, index, array) {
    return condition;
});

Arrow Function Syntax
array.filter((element, index) => {
    return condition;
});

Parameter	    Description
. element	    . Current array element
. index	        . Current element index (optional)
. array	        . Original array (optional)

Return Value
. Returns a new array containing elements that pass the condition.
*/

// Basic Example
const numberSeries = [10, 15, 20, 25, 30];
const evenNumbers = numberSeries.filter((currentNumber) => {
    return currentNumber % 2 === 0;
});
console.log(evenNumbers); // [10, 20, 30]


// Filter Strings
const cityNames = ["Delhi", "Mumbai", "Goa", "Chennai"];
const shortCities = cityNames.filter((cityValue) => {
    return cityValue.length <= 4;
});
console.log(shortCities); // ["Goa"]


// Using Index
const fruitBasket = ["Apple", "Banana", "Mango", "Orange"];
const selectedFruits = fruitBasket.filter((fruitItem, fruitIndex) => {
    return fruitIndex < 2;
});
console.log(selectedFruits); // ["Apple", "Banana"]


// Array of Objects
const employeeRecords = [
    { employeeName: "Ali", employeeAge: 22 },
    { employeeName: "Rasid", employeeAge: 18 },
    { employeeName: "Jaid", employeeAge: 25 }
];
const adultEmployees = employeeRecords.filter((employeeData) => {
    return employeeData.employeeAge >= 21;
});
console.log(adultEmployees); // [{ employeeName: 'Ali', employeeAge: 22 }, { employeeName: 'Jaid', employeeAge: 25 }]


// Remove Falsy Values
const mixedValues = [0, "JavaScript", false, "", 100, null];
const truthyValues = mixedValues.filter((currentValue) => {
    return currentValue;
});
console.log(truthyValues); // ["JavaScript", 100]


/*
Difference: map() vs filter()
Feature	                map()	            filter()
Purpose	                Transform elements	Select elements
Returns new array	    Yes	                Yes
Array size	            Usually same	    Can be smaller
Condition required      No	                Yes
*/

/*
Key Points
. Returns a new array.
. Does not modify the original array.
. Keeps only elements that satisfy the condition.
. Elements returning true are included.
. Elements returning false are excluded.
. Commonly used for searching and filtering data.
. Accepts element, index, and array parameters.
. Very useful with arrays of objects.
*/