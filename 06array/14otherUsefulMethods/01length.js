/*
The length property returns the number of elements present in an array. It is a read/write property, meaning you can 
both get and set its value. The length is always one more than the highest index in the array. It does not count 
from 1; array indexing starts from 0.

Syntax
. arrayName.length

Return Value
. Returns a number representing the array length.
*/

// Get Array Length
const fruitCollection = ["Apple","Mango","Orange","Banana"];
console.log(fruitCollection.length); // 4


// Length of Number Array
const scoreValues = [10,20,30,40,50];
console.log(scoreValues.length); // 5


// Empty Array Length
const emptyCollection = [];
console.log(emptyCollection.length); // 0


// Add Elements and Check Length
const cityNames = ["Delhi","Mumbai"];
cityNames.push("Chennai");
console.log(cityNames.length); // 3


// Set Length to Shorten Array
const numberSeries = [1,2,3,4,5];
numberSeries.length = 3;
console.log(numberSeries); // [ 1, 2, 3 ]


// Last Element Using Length
const languageNames = ["Java","Python","JavaScript"];
const lastLanguage = languageNames[languageNames.length - 1];
console.log(lastLanguage); // JavaScript


// Loop Using Length
const studentNames = ["Ayub", "Fatima", "sana"];
for (let studentIndex = 0; studentIndex < studentNames.length; studentIndex++) {
    console.log(studentNames[studentIndex]);
}
/*
Ayub
Fatima
sana
*/

/*
Important Points
. length is a property, not a method.
. Returns the number of elements in an array.
. Array indexing starts from 0.
. Can be used to truncate an array.
. Can be used to expand an array with empty slots.
. Access last element using arrayName[arrayName.length - 1].
*/