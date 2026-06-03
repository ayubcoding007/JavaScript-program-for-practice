/*
slice() is a string method used to extract a part of a string and return it as a new string.
It does not modify the original string.
The extraction starts at the specified index and ends before the end index.
It also supports negative indexes.

Syntax
string.slice(start, end)

Parameter	Description
. start	    . Starting index
. end	    . Ending index (not included, optional)

Return Value
. Returns a new string containing the extracted characters.
*/

// Basic Example
const courseName = "JavaScript";
const resultText = courseName.slice(0, 4);
console.log(resultText); // Java


// Extract From a Position to End
const cityLabel = "Hyderabad";
const cityPart = cityLabel.slice(4);
console.log(cityPart); // rabad


// Using Negative Indexes
const languageTitle = "JavaScript";
const lastPart = languageTitle.slice(-6);
console.log(lastPart); // Script


// Extract Single Character
const colorWord = "Green";
const oneLetter = colorWord.slice(2, 3);
console.log(oneLetter); // e


// Copy Entire String
const companyName = "abc";
const copiedName = companyName.slice();
console.log(copiedName); // abc


/*
Key Points
. Returns a new string.
. Does not change the original string.
. Extracts characters from start to end - 1.
. Supports negative indexes.
. If end is omitted, extracts until the end of the string.
. Commonly used for substring extraction.
. Strings are immutable, so the original string remains unchanged.
*/