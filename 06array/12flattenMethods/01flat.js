/*
The flat() method creates a new array by flattening nested arrays into a single array. It removes one or more levels of 
nesting based on the depth provided. The original array is not modified. This method is useful when working with 
multidimensional arrays.

Syntax
. arrayName.flat(depthValue);

Parameter
. depthValue - Optional. Number of nested levels to flatten. Default is 1.

Return Value
Returns a new flattened array.
*/


// Basic Example
const nestedNumbers = [1, 2, [3, 4]];
const flatNumbers = nestedNumbers.flat();
console.log(flatNumbers); // [1, 2, 3, 4]


// Flatten One Level (Default)
const studentGroups = [
  ["Ayub", "Fathima"],
  ["sana", "najim"]
];
const allStudents = studentGroups.flat();
console.log(allStudents); // [ 'Ayub', 'Fathima', 'sana', 'najim' ]


// Flatten Two Levels
const layeredValues = [1, [2, [3, 4]]];
const flattenedValues = layeredValues.flat(2);
console.log(flattenedValues); // [1, 2, 3, 4]


// Flatten All Levels
const deepStructure = [1, [2, [3, [4, [5]]]]];
const completeFlatten = deepStructure.flat(Infinity);
console.log(completeFlatten); // [1, 2, 3, 4, 5]


// Original Array Remains Unchanged
const categoryData = [1, [2, 3]];
const resultData = categoryData.flat();
console.log(categoryData); // [ 1, [ 2, 3 ] ]
console.log(resultData); // [ 1, 2, 3 ]


// Remove Empty Slots
const sparseValues = [1, , 3, [4, , 5]];
const cleanedValues = sparseValues.flat();
console.log(cleanedValues); // [1, 3, 4, 5]


/*
Important Points
flat() creates a new flattened array.
Default depth is 1.
Use Infinity to flatten all levels.
Does not modify the original array.
Removes empty slots in arrays.
Introduced in ES2019.
*/