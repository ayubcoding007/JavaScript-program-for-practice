/*
some() Method in JavaScript Array
Definition (3–4 lines)

some() is an array method used to check whether at least one element satisfies a condition.
It executes a callback function for each element and returns a boolean value.
If any element passes the test, it returns true; otherwise, it returns false.
The original array remains unchanged.

Syntax
array.some(function(element, index, array) {
    return condition;
});
Arrow Function Syntax
array.some((element, index) => {
    return condition;
});
Parameters
Parameter	Description
element	Current array element
index	Current element index (optional)
array	Original array (optional)
Return Value

Returns a boolean (true or false).
*/


// 1. Check for Even Number
const numberSeries = [1, 3, 5, 8];
const hasEvenNumber = numberSeries.some((currentNumber) => {
    return currentNumber % 2 === 0;
});
console.log(hasEvenNumber); // true


// 2. Check for Negative Number
const valueList = [10, 20, -5, 30];
const containsNegative = valueList.some((currentValue) => {
    return currentValue < 0;
});
console.log(containsNegative) // true


// 3. Condition Not Met
const scoreBoard = [60, 70, 80];
const failedStudent = scoreBoard.some((scoreValue) => {
    return scoreValue < 40;
});
console.log(failedStudent); // false


// 4. Array of Objects
const employeeRecords = [
    { employeeAge: 15 },
    { employeeAge: 25 },
    { employeeAge: 30 }
];
const hasAdultEmployee = employeeRecords.some((employeeData) => {
    return employeeData.employeeAge >= 18;
});
console.log(hasAdultEmployee); // true


// 5. Using Index
const cityNames = ["Delhi", "Mumbai", "Chennai"];
const validIndexFound = cityNames.some((cityValue, cityIndex) => {
    return cityIndex === 1 && cityValue === "Mumbai";
});
console.log(validIndexFound); // true


/*
Key Points
Returns true if at least one element satisfies the condition.
Returns false if no elements satisfy the condition.
Does not modify the original array.
Stops checking as soon as a matching element is found.
Returns a boolean value.
Useful for validation and existence checks.
Works with arrays of primitives and objects.
*/