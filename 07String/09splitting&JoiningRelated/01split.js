/*
split() is a string method used to divide a string into an array of substrings.
The split occurs based on a specified separator such as a space, comma, or other character.
It does not modify the original string.
The method returns a new array containing the separated parts.

Syntax
string.split(separator, limit)

Parameter	    Description
. separator	    . Character or pattern used to split the string
. limit	        . Maximum number of elements in the returned array (optional)

Return Value
. Returns a new array of substrings.
*/

// Split by Space
const fullName = "Sheikh Ayub";
const nameParts = fullName.split(" ");
console.log(nameParts); // [ 'Sheikh', 'Ayub' ]


// Split by Comma
const cityData = "Delhi,Mumbai,Chennai";
const cityList = cityData.split(",");
console.log(cityList); //  'Delhi', 'Mumbai', 'Chennai' ]


// Split into Characters
const colorName = "Green";
const letterArray = colorName.split("");
console.log(letterArray); // [ 'G', 'r', 'e', 'e', 'n' ]


// Using Limit
const languageText = "HTML CSS JavaScript Python";
const selectedLanguages = languageText.split(" ", 2);
console.log(selectedLanguages); // 'HTML', 'CSS' ]


// Separator Not Found
const companyName = "AyubInfo";
const resultArray = companyName.split(",");
console.log(resultArray); //  [ 'AyubInfo' ]