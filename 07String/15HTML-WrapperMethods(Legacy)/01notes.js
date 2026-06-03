/*
HTML Wrapper Methods are old JavaScript string methods that wrap a string inside HTML tags and return the resulting HTML string. 
They were commonly used in early web development to format text. These methods are now deprecated (legacy) and are not 
recommended; modern code should use DOM manipulation or CSS instead.

Summary Table
. Method	            HTML Output
. anchor("id")	        . <a name="id">text</a>
. big()	                . <big>text</big>
. blink()	            . <blink>text</blink>
. bold()	            . <b>text</b>
. fixed()	            . <tt>text</tt>
. fontcolor("red")	    . <font color="red">text</font>
. fontsize(5)	        . <font size="5">text</font>
. italics()	            . <i>text</i>
. link(url)	            . <a href="url">text</a>
. small()	            . <small>text</small>
. strike()	            . <strike>text</strike>
. sub()	                . <sub>text</sub>
. sup()	                . <sup>text</sup>
*/

let text = "Hello World";


// 1. anchor()
// Creates a named anchor (<a name="...">)
console.log("1. anchor()");
console.log(text.anchor("top")); // <a name="top">Hello World</a>


// 2. big()
// Wraps text inside <big>
console.log("\n2. big()");
console.log(text.big()); // <big>Hello World</big>


// 3. blink()
// Wraps text inside <blink> (obsolete)
console.log("\n3. blink()");
console.log(text.blink()); // <blink>Hello World</blink>


// 4. bold()
// Wraps text inside <b>
console.log("\n4. bold()");
console.log(text.bold()); // <b>Hello World</b>



// 5. fixed()
// Wraps text inside <tt> (teletype)
console.log("\n5. fixed()");
console.log(text.fixed()); //<tt>Hello World</tt>


// 6. fontcolor()
// Changes font color using <font color="">
console.log("\n6. fontcolor()");
console.log(text.fontcolor("red")); //<font color="red">Hello World</font>


// 7. fontsize()
// Changes font size using <font size="">
console.log("\n7. fontsize()");
console.log(text.fontsize(5)); // <font size="5">Hello World</font>



// 8. italics()
// Wraps text inside <i>
console.log("\n8. italics()");
console.log(text.italics()); // <i>Hello World</i>


// 9. link()
// Creates hyperlink using <a href="">
console.log("\n9. link()");
console.log(text.link("https://example.com")); //<a href="https://example.com">Hello World</a>


// 10. small()
// Wraps text inside <small>
console.log("\n10. small()");
console.log(text.small()); // <small>Hello World</small>


// 11. strike()
// Adds strike-through text using <strike>
console.log("\n11. strike()");
console.log(text.strike()); // <strike>Hello World</strike>

// 12. sub()
// Displays text as subscript
console.log("\n12. sub()");
console.log("H2O".sub()); // <sub>H2O</sub>


// 13. sup()
// Displays text as superscript
console.log("\n13. sup()");
console.log("x2".sup()); // <sup>x2</sup>

