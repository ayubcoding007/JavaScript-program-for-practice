/*
every() is an array method used to check whether all elements satisfy a condition.
It executes a callback function for each element and returns a boolean value.
If every element passes the test, it returns true; otherwise, it returns false.
The original array remains unchanged.

Syntax
array.every(function(element, index, array) {
    return condition;
});

Arrow Function Syntax
array.every((element, index) => {
    return condition;
});

Parameter	Description
element	    Current array element
index	    Current element index (optional)
array	    Original array (optional)

Return Value
. Returns a boolean (true or false).
*/


// Check All Numbers Are Positive
const numberSeries = [10, 20, 30, 40];
const allPositive = numberSeries.every((currentNumber) => {
    return currentNumber > 0;
});
console.log(allPositive); // true


// Check All Numbers Are Even
const valueList = [2, 4, 6, 8];
const allEven = valueList.every((currentValue) => {
    return currentValue % 2 === 0;
});
console.log(allEven);// true


// 3. Condition Fails
const scoreBoard = [50, 70, 90, 35];
const passedExam = scoreBoard.every((scoreValue) => {
    return scoreValue >= 40;
});
console.log(passedExam); // false
// 4. Array of Objects
const employeeRecords = [
    { employeeAge: 25 },
    { employeeAge: 30 },
    { employeeAge: 22 }
];
const adultsOnly = employeeRecords.every((employeeData) => {
    return employeeData.employeeAge >= 18;
});
console.log(adultsOnly); // true


// 5. Using Index
const cityNames = ["Delhi", "Mumbai", "Chennai"];
const validCities = cityNames.every((cityValue, cityIndex) => {
    return cityIndex >= 0 && cityValue.length > 0;
});
console.log(validCities); // true

/*Key Points
Returns true only if all elements satisfy the condition.
Returns false when any element fails the condition.
Does not modify the original array.
Stops checking as soon as a condition fails.
Returns a boolean value.
Useful for validation and rule checking.
Works with arrays of primitives and objects.
*/