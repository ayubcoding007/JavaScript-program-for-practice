/*
String.raw() is a static method of the String object that returns the raw string form of a template literal. 
It preserves escape characters such as \n, \t, and \\ instead of interpreting them. It is mainly used as a 
tag function for template literals when you need the exact text as written.

Syntax
. String.raw(template, ...substitutions)

Parameters
. template → Template literal object.
. substitutions → Values to insert into the template.

Return Value
. Returns a raw string with escape sequences preserved.
*/


// Basic Example
console.log(String.raw`Hello\nWorld`); // Hello\nWorld


// Normal Template Literal vs String.raw()
// Normal Template Literal
console.log(`Hello\nWorld`);
/*
Hello
World
*/

/*
Difference Between Normal String and String.raw()
Feature	                        Normal Template Literal	                String.raw()
\n	                            New line	                            Literal \n
\t	                            Tab	Literal                             \t
Variable Interpolation	        Yes	                                    Yes
Preserves Escape Sequences	    No	                                    Yes
*/

/*
Interview Points
. String.raw() is a static method of String.
. Usually used as a tag function for template literals.
. Preserves escape sequences (\n, \t, \\).
. Variable interpolation (${}) still works.
. Useful for file paths, regex patterns, and debugging strings.
*/