/*
The sort() method in JavaScript is used to arrange the elements of an array in a specific order. By default, 
it converts elements into strings and sorts them in ascending Unicode order. The method modifies the original 
array and returns the sorted array. A custom comparison function can be provided to control the sorting behavior.

Syntax
arrayName.sort(compareFunction);

Parameter
. compareFunction - Optional function that defines the sort order.

Return Value
. Returns the sorted array (same original array is modified).
*/


// Default Sorting
const cityCollection = ["Delhi", "Mumbai", "Chennai", "Bangalore"];
cityCollection.sort();
console.log(cityCollection); // ["Bangalore", "Chennai", "Delhi", "Mumbai"]


// Number Sorting (Ascending)
// . Without a compare function, numbers are treated as strings.
const scoreList = [45, 2, 100, 12, 8];
scoreList.sort((firstValue, secondValue) => firstValue - secondValue);
console.log(scoreList); // [2, 8, 12, 45, 100]

// Number Sorting (Descending)
const temperatureReadings = [25, 10, 50, 5, 40];
temperatureReadings.sort((higherNumber, lowerNumber) => lowerNumber - higherNumber);
console.log(temperatureReadings); // [50, 40, 25, 10, 5]


// String Sorting (Ascending)
const fruitBasket = ["Mango", "Apple", "Orange", "Banana"];
fruitBasket.sort();
console.log(fruitBasket); // ["Apple", "Banana", "Mango", "Orange"]


// String Sorting (Descending)
const languageNames = ["Java", "Python", "JavaScript", "C++"];
languageNames.sort((earlierText, laterText) => laterText.localeCompare(earlierText));
console.log(languageNames); // [ 'Python', 'JavaScript', 'Java', 'C++' ]


// Case-Insensitive Sorting
const employeeNames = ["rehan", "Ayub", "sana", "Daud"];
employeeNames.sort((leftName, rightName) =>leftName.toLowerCase().localeCompare(rightName.toLowerCase())); 
console.log(employeeNames); // ["Ayub", "Daud", "rehan", "sana"]


// Sorting Objects by Property
const studentRecords = [
  { studentName: "Rauf", obtainedMarks: 70 },
  { studentName: "Ali", obtainedMarks: 90 },
  { studentName: "Kaif", obtainedMarks: 80 }
];
studentRecords.sort((firstStudent, secondStudent) =>firstStudent.obtainedMarks - secondStudent.obtainedMarks);
console.log(studentRecords); // [{ studentName: 'Rauf', obtainedMarks: 70 },{ studentName: 'Kaif', obtainedMarks: 80 },{ studentName: 'Ali', obtainedMarks: 90 }]


// Sorting Objects by String Property
const productCatalog = [
  { itemTitle: "Laptop" },
  { itemTitle: "Camera" },
  { itemTitle: "Mobile" }
];
productCatalog.sort(
  (startingItem, endingItem) =>
    startingItem.itemTitle.localeCompare(endingItem.itemTitle)
);
console.log(productCatalog); // [{ itemTitle: 'Camera' },{ itemTitle: 'Laptop' },{ itemTitle: 'Mobile' }]