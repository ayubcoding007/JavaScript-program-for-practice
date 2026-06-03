/*
splice() is an array method used to add, remove, or replace elements in an array.
It modifies the original array directly.
The method can remove existing elements and insert new ones at a specified position.
It is a mutating method, unlike toSpliced().

Syntax
. array.splice(start, deleteCount, item1, item2, ...)

Parameter	            Description
. start	                . Index where changes begin
. deleteCount	        . Number of elements to remove
. item1, item2, ...	    . Elements to add (optional)

Return Value
. Returns an array containing the removed elements.
*/


// Remove Elements
const fruitBasket = ["Apple", "Banana", "Mango", "Orange"];
const removedItems = fruitBasket.splice(1, 2);
console.log(fruitBasket); // ["Apple", "Orange"]
console.log(removedItems); // ["Banana", "Mango"]


// Add Elements
const cityNames = ["Delhi", "Mumbai"];
cityNames.splice(1, 0, "Chennai");
console.log(cityNames);
// ["Delhi", "Chennai", "Mumbai"]


// Replace Elements
const colorCollection = ["Red", "Blue", "Green"];
const deletedColors = colorCollection.splice(1, 1, "Yellow");
console.log(colorCollection); // ["Red", "Yellow", "Green"]
console.log(deletedColors); // ["Blue"]


// Remove All Elements After an Index
const numberSeries = [10, 20, 30, 40, 50];
numberSeries.splice(2);
console.log(numberSeries); // [10, 20]


// Negative Index
const languageList = ["HTML", "CSS", "JavaScript"];
languageList.splice(-1, 1, "TypeScript");
console.log(languageList); // ["HTML", "CSS", "TypeScript"]

/*
Key Points
. Modifies the original array.
. Can add, remove, or replace elements.
. Returns an array of removed elements.
. Supports negative indexes.
. deleteCount determines how many elements are removed.
. If deleteCount is 0, elements are only added.
. Flexible but mutating method.
. toSpliced() is the non-mutating alternative.
*/