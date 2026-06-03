/*
The trimStart() method removes whitespace only from the beginning (left side) of a string. It returns a new string and does not modify the original string. Spaces, tabs (\t), and newlines (\n) at the start are removed.

Syntax
. string.trimStart()

Return Value
. Returns a new string with leading whitespace removed.
*/

// Example
let str = "   Hello World";
console.log(str.trimStart()); // Hello World

// With Tabs and New Lines
let nt = "\n\t Hello";
console.log(nt.trimStart());

// Original String Remains Unchanged
let Or = "   JavaScript";
let newOr = str.trimStart();
console.log(Or);
console.log(newOr);



/*
The trimEnd() method removes whitespace only from the end (right side) of a string. It returns a new string and does not 
modify the original string. Spaces, tabs, and newlines at the end are removed.

Syntax
. string.trimEnd()

Return Value
. Returns a new string with trailing whitespace removed.
*/

// Example
let sc = "Hello World   ";
console.log(sc.trimEnd()); // Hello World


// With Tabs and New Lines
let endtn = "Hello\t\n";
console.log(endtn.trimEnd());


// Original String Remains Unchanged
let endOr = "JavaScript   ";
let newendOr = endOr.trimEnd();
console.log(endOr);
console.log(newendOr);

/*
Difference Between trim(), trimStart(), and trimEnd()
Method	            Removes Spaces From
. trim()	        . Both start and end
. trimStart()	    . Start only
. trimEnd()	        . End only
*/


/*
Important Points
. trimStart() removes whitespace only from the beginning.
. trimEnd() removes whitespace only from the end.
. Both return new strings.
. Original string remains unchanged.
. Useful for cleaning user input and formatted text.
*/