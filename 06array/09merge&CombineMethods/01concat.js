/*
The concat() method is used to merge two or more arrays into a new array. It does not modify the original arrays. 
The method returns a new array containing all elements from the arrays passed as arguments. It can also combine 
array elements and individual values.

Syntax
arrayName.concat(
  arrayOrValue1,
  arrayOrValue2,
  ...
);

Parameter
. arrayOrValue - Arrays or values to be merged

Return Value
. Returns a new merged array.
*/


// Merge Two Arrays
const firstCollection = [10, 20, 30];
const secondCollection = [40, 50, 60];
const mergedCollection = firstCollection.concat(secondCollection);
console.log(mergedCollection); // [10, 20, 30, 40, 50, 60]


// Merge Multiple Arrays
const frontendSkills = ["HTML","CSS"];
const scriptingSkills = ["JavaScript"];
const backendSkills = ["Node.js","Express"];
const completeSkills = frontendSkills.concat(scriptingSkills,backendSkills);
console.log(completeSkills); // [ 'HTML', 'CSS', 'JavaScript', 'Node.js', 'Express' ]


// Add Values with Arrays
const numberGroup = [1, 2, 3];
const updatedGroup = numberGroup.concat(4,5,6);
console.log(updatedGroup); // [1, 2, 3, 4, 5, 6]


// Merge Arrays and Values Together
const cityNames = ["Delhi","Mumbai"];
const allCities =cityNames.concat("Chennai",["Hyderabad", "Pune"]);
console.log(allCities); // [ 'Delhi', 'Mumbai', 'Chennai', 'Hyderabad', 'Pune' ]


// Original Arrays Remain Unchanged
const primaryValues = [10, 20];
const secondaryValues = [30, 40];
const combinedValues = primaryValues.concat(secondaryValues);
console.log(primaryValues); // [10, 20]
console.log(secondaryValues); // [30, 40]
console.log(combinedValues); // [10, 20, 30, 40]


// Concatenate Nested Arrays
const firstNestedGroup = [[1, 2]];
const secondNestedGroup = [[3, 4]];
const nestedResult = firstNestedGroup.concat(secondNestedGroup);
console.log(nestedResult); // [ [ 1, 2 ], [ 3, 4 ] ]


// Empty Array Example
const emptyGroup = [];
const valueResult = emptyGroup.concat(100,200);
console.log(valueResult); // [100, 200]


// Using Spread Operator Alternative
const morningTasks = ["Exercise","Breakfast"];
const officeTasks = ["Meeting","Coding"];
const dailyTasks = [...morningTasks, ...officeTasks];
console.log(dailyTasks); // [ 'Exercise', 'Breakfast', 'Meeting', 'Coding' ]


/*
Difference Between concat() and push()
Feature	                    concat()	push()
Returns New Array	         Yes	    No
Modifies Original Array	     No	        Yes
Merge Arrays	             Yes	    Limited
*/

/*
Important Points
. concat() merges arrays and values.
. Returns a new array.
. Does not modify original arrays.
. Can combine multiple arrays at once.
. Shallow copy operation.
. Spread operator (...) is a modern alternative.
*/