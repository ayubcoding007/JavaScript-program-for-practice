/*
The matchAll() method returns an iterator containing all matches of a regular expression in a string, including capturing groups. 
Unlike match(), it provides detailed information for every match. The regular expression must use the global (g) flag, 
otherwise an error is thrown. It is useful when you need all matches along with their groups and positions.

Syntax
. string.matchAll(regexp)

Parameter
. regexp: A regular expression with the g flag.

Return Value
. Returns an Iterator of match objects.
. Each match contains:
  . Matched text
  . Capturing groups
  . Index position
  . Input string
*/


// Basic Example
let str = "cat bat rat";
let matches = [...str.matchAll(/at/g)];
console.log(matches);
/*
[
  ['at', index: 1, input: 'cat bat rat'],
  ['at', index: 5, input: 'cat bat rat'],
  ['at', index: 9, input: 'cat bat rat']
]
*/


// Using for...of
let str1 = "cat bat rat";

for (let match of str1.matchAll(/at/g)) {
    console.log(match[0]);
}
/*
at
at
at
*/

/*
Difference Between match() and matchAll()
Feature	                                match()	            matchAll()
. Returns	                            . Array / null	    . Iterator
. All matches	                        . Only with g	    . Yes
. Capturing groups for all matches	    . No	            . Yes
. Index information	                    . First match only	. Every match
. Requires g flag	                    . No	            . Yes
*/