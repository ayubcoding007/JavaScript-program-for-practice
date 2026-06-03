/*
substring() is a string method used to extract characters from a string and return them as a new string.
It does not modify the original string.
The extraction starts at a specified index and ends before the ending index.
Unlike slice(), substring() does not support negative indexes.

Syntax
string.substring(start, end)

Parameter	Description
. start	    . Starting index
. end	    . Ending index (not included, optional)

Return Value
. Returns a new string containing the extracted characters.
*/

// Basic Example
const courseTitle = "JavaScript";
const resultText = courseTitle.substring(0, 4);
console.log(resultText); // Java


// Extract From a Position to End
const cityName = "Hyderabad";
const cityPart = cityName.substring(4);
console.log(cityPart); // rabad


// Start Index Greater Than End Index
const languageName = "JavaScript";
const extractedText = languageName.substring(6, 2);
console.log(extractedText); // vaSc
// substring() automatically swaps the indexes when start > end.


// Extract Single Character
const colorName = "Green";
const oneCharacter = colorName.substring(2, 3);
console.log(oneCharacter); // e


// Negative Values
const companyLabel = "ayubcompany";
const companyPart = companyLabel.substring(-2, 4);
console.log(companyPart); // ayub


/*
Difference slice() vs substring()
Feature	                        slice()	                    substring()
. Supports negative indexes	    . Yes	                    . No
. start > end	                . Returns empty string	    . Swaps indexes automatically
. Original string modified  	. No	                    . No
*/

/*
Key Points
. Returns a new string.
. Does not modify the original string.
. Extracts characters from start to end - 1.
. Negative indexes are treated as 0.
. If start > end, indexes are automatically swapped.
. Useful for extracting specific parts of a string.
*/