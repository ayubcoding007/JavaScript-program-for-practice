/*
The replaceAll() method replaces all occurrences of a specified value in a string and returns a new string. Unlike replace(), 
it replaces every matching occurrence automatically. The original string remains unchanged. It was introduced in ES2021.

Syntax
. string.replaceAll(searchValue, newValue)

Parameters
. searchValue → The value or pattern to search for.
. newValue → The replacement value.

Return Value
. Returns a new string with all matches replaced.
*/


// Basic Example
let fruits = "apple apple apple";
console.log(fruits.replaceAll("apple", "mango")); // mango mango mango


// Replace a Word
let str = "I love Java. Java is easy.";
console.log(str.replaceAll("Java", "JavaScript")); // I love JavaScript. JavaScript is easy.


// Case-Sensitive Replace
let csr = "Hello hello";
console.log(csr.replaceAll("hello", "Hi")); // Hello Hi


// Using Regular Expression
let ure = "cat dog cat dog";
console.log(ure.replaceAll(/cat/g, "lion")); // lion dog lion dog
// . When using a RegExp with replaceAll(), the g (global) flag is required.


// Replace Spaces
let Spaces = "Java Script Tutorial";
console.log(Spaces.replaceAll(" ", "-")); // Java-Script-Tutorial


// Replace Digits
let digi = "abc123xyz456";
console.log(digi.replaceAll(/[0-9]/g, "*")); // abc***xyz***


// Original String Remains Unchanged
let or = "apple apple";
let newOr = or.replaceAll("apple", "mango");
console.log(or); // apple apple
console.log(newOr); // mango mango


/*
Important Points
. Replaces all matching occurrences.
. Returns a new string.
. Does not modify the original string.
. Case-sensitive by default.
. Supports strings and Regular Expressions (g flag required for RegEx).
*/