/*
map() is an array method used to transform each element of an array and create a new array.
It executes a callback function once for every array element.
The original array remains unchanged.
It is commonly used when you want to modify data and return the results.

Syntax
array.map(function(element, index, array) {
    // return value
});

Arrow Function Syntax
array.map((element, index) => {
    return value;
});

Parameter	    Description
. element	    . Current array element
. index	        . Current element index (optional)
. array	        . Original array (optional)

Return Value
. Returns a new array containing the transformed elements.
*/


// Basic Example
const numberSeries = [1, 2, 3, 4];
const doubledNumbers = numberSeries.map((currentNumber) => {
    return currentNumber * 2;
});
console.log(doubledNumbers); // [2, 4, 6, 8]

// Convert to Uppercase
const cityNames = ["delhi", "mumbai", "chennai"];
const uppercaseCities = cityNames.map((cityValue) => {
    return cityValue.toUpperCase();
});
console.log(uppercaseCities); // ["DELHI", "MUMBAI", "CHENNAI"]


// Access Index
const fruitBasket = ["Apple", "Banana", "Mango"];
const fruitDetails = fruitBasket.map((fruitItem, fruitIndex) => {
    return `${fruitIndex} - ${fruitItem}`;
});
console.log(fruitDetails); // ["0 - Apple", "1 - Banana", "2 - Mango"]

// Array of Objects
const employeeRecords = [{ employeeName: "Ayub" }, { employeeName: "Fathima" }];
const employeeNames = employeeRecords.map((employeeData) => {
    return employeeData.employeeName;
});
console.log(employeeNames); // ["Ram", "Shyam"]


// Extract String Lengths
const languageList = ["HTML", "CSS", "JavaScript"];
const languageLengths = languageList.map((languageName) => {
    return languageName.length;
});
console.log(languageLengths); // [4, 3, 10]


/*
Difference: forEach() vs map()
Feature	                        forEach()	                    map()
Returns new array	            No	                            Yes
Return value required	        No	                            Yes
Original array modified	        No (unless done manually)	    No
Used for transformation	        Less suitable	                Best choice
*/

/*
Key Points
. Creates and returns a new array.
. Does not modify the original array.
. Executes a callback for every element.
. Each callback should return a value.
. Commonly used for data transformation.
. Accepts element, index, and array parameters.
. Very useful with arrays of objects.
. One of the most frequently used array methods in JavaScript.
*/