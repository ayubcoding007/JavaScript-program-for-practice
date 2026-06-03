/*
substr() is a string method used to extract a specified number of characters from a string starting at a given index.
It returns a new string and does not modify the original string.
The second parameter represents the length, not the ending index.
Note: substr() is deprecated and is not recommended for modern JavaScript code.


Syntax
string.substr(start, length)

Parameter	    Description
. start	        . Starting index
. length	    . Number of characters to extract (optional)

Return Value
. Returns a new string containing the extracted characters.
*/

// Basic Example
const courseTitle = "JavaScript";
const resultText = courseTitle.substr(0, 4);
console.log(resultText);// Java


// Extract From a Position to End
const cityName = "Hyderabad";
const cityPart = cityName.substr(4);
console.log(cityPart); // rabad


// Extract Specific Number of Characters
const languageName = "JavaScript";
const shortText = languageName.substr(4, 6);
console.log(shortText); // Script


// Using Negative Index
const companyLabel = "ayubinfo";
const companyPart = companyLabel.substr(-2, 2);
console.log(companyPart); // fo


// Extract Single Character
const colorName = "Green";
const oneCharacter = colorName.substr(2, 1);
console.log(oneCharacter); // e

/*
Difference: slice() vs substring() vs substr()
Feature	                    slice()	    substring()	    substr()
Second parameter	        End index	End index	    Length
Supports negative start	    yes	        No	            Yes
Deprecated	                No	        No	            Yes
*/


/*
Key Points
. Returns a new string.
. Does not modify the original string.
. Second parameter specifies length, not ending index.
. Supports negative starting indexes.
. Deprecated; prefer slice() instead.
. Useful for understanding older JavaScript codebases.
*/