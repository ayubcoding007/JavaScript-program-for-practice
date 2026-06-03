/*
The reverse() method in JavaScript is used to reverse the order of elements in an array. The first element becomes the last, 
and the last element becomes the first. It modifies the original array and returns the reversed array. This method works with 
numbers, strings, objects, and other array elements.

Syntax
. arrayName.reverse();

Return Value
. Returns the same array after reversing its elements.
*/


// Reverse a Number Array
const marksCollection = [10, 20, 30, 40, 50];
marksCollection.reverse();
console.log(marksCollection); // [50, 40, 30, 20, 10]


// Reverse a String Array
const colorPalette = ["Red", "Blue", "Green", "Yellow"];
colorPalette.reverse();
console.log(colorPalette); // ["Yellow", "Green", "Blue", "Red"]


// Reverse After Sorting
const salaryDetails = [30000, 10000, 50000, 20000];
salaryDetails.sort((lowerAmount, higherAmount) => lowerAmount - higherAmount);
salaryDetails.reverse();
console.log(salaryDetails); // [ 50000, 30000, 20000, 10000 ]


// Reverse Without Changing Original Array
const originalValues = [1, 2, 3, 4, 5];
const copiedValues = [...originalValues].reverse();
console.log(originalValues); // [1, 2, 3, 4, 5]
console.log(copiedValues); // [5, 4, 3, 2, 1]


// Reverse an Array of Objects
const employeeRecords = [
  { employeeName: "Ali" },
  { employeeName: "Sultan" },
  { employeeName: "Sheikh" }
];
employeeRecords.reverse();
console.log(employeeRecords); //[{ employeeName: "Sheikh" },{ employeeName: "Sultan" },{ employeeName: "Ali" }]


// Reverse a String Using Array Methods
const userMessage = "JavaScript";
const reversedMessage = userMessage.split("").reverse().join("");
console.log(reversedMessage); // "tpircSavaJ"

/*
. Important Points
. reverse() changes the original array.
. First element becomes last.
. Last element becomes first.
. Returns the modified array.
. Time Complexity: O(n).
. Use [...arrayName].reverse() to keep the original array unchanged.
*/
