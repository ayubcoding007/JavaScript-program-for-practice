/*
The normalize() method returns a Unicode-normalized form of a string. It converts different Unicode representations of 
the same character into a standard format, making string comparisons reliable. This is especially useful when working 
with accented characters and international text.

Syntax
. string.normalize()
or
. string.normalize(form)

Forms of Normalization
. Form	    Meaning
. NFC	    . Canonical Composition (Default)
. NFD	    . Canonical Decomposition
. NFKC	    . Compatibility Composition
. NFKD	    . Compatibility Decomposition
*/


// Basic Example
let a = "\u00E9";
let b = "e\u0301";
console.log(a === b); //false
console.log(a.normalize() === b.normalize()); // true


// Using NFC
let str = "e\u0301";
console.log(str.normalize("NFC")); // é


// Using NFD
let str1 = "é";
console.log(str1.normalize("NFD")); // e + 


// Character Length Difference
// Before normalization:
let str2 = "e\u0301";
console.log(str2.length); // 2
console.log(str2.normalize("NFC").length); // 1


// Removing Accents
let str3 = "café";
let result = str3
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "");
console.log(result); //cafe

/*
Interview Points
. JavaScript strings use Unicode internally.
. The same character can have multiple Unicode representations.
. normalize() standardizes Unicode strings.
. Default normalization form is NFC.
. Useful for string comparison, searching, and internationalization.
. Common forms: NFC, NFD, NFKC, NFKD.

*/


/*
Unicode is a universal character encoding standard that assigns a unique number (code point) to every 
character from different languages, symbols, and emojis. JavaScript strings are based on Unicode, 
allowing them to store text from almost any language. Unicode ensures consistent representation 
of characters across platforms.
*/



// Unicode Escape Sequence
let uni1 = "\u0048\u0065\u006C\u006C\u006F";
console.log(str); //Hello

// Unicode Code Point
let char = "A";
console.log(char.codePointAt(0)); // 65


// Emoji Unicode
let emoji = "😊";
console.log(emoji.codePointAt(0).toString(16)); // 1f60a


// String Normalization
// What is Normalization?
// Some Unicode characters can be represented in multiple ways but look identical.
let x = "\u00E9";      // é
let y = "e\u0301";     // e + combining accent
console.log(x === y); //false