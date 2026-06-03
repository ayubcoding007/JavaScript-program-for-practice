/*
localStorage in JavaScript is a browser feature used to store data locally in the user's browser. 
The data stays even after refreshing the page or closing the browser.

Features of localStorage
. Stores data as key-value pairs
. Data is saved permanently until cleared
. Storage limit is usually around 5–10 MB
. Only stores strings
. Works on the same origin (domain + protocol + port)


Syntax

Save Data
localStorage.setItem("name", "John");

Get Data
let value = localStorage.getItem("name");
console.log(value);

Remove One Item
localStorage.removeItem("name");

Clear All Data
localStorage.clear();

*/

// Store user data
localStorage.setItem("username", "Rahul");

// Read user data
let user = localStorage.getItem("username");

console.log(user);

/*
Storing Objects
Since localStorage stores only strings, use JSON.stringify() and JSON.parse().
*/

// Store Object
const user = {
  name: "Rahul",
  age: 22
};

localStorage.setItem("userData", JSON.stringify(user));

// Retrieve Object
const data = JSON.parse(localStorage.getItem("userData"));

console.log(data.name);
console.log(data.age);


/*
Difference Between localStorage and sessionStorage

Feature	            localStorage	    sessionStorage
. Lifetime	        . Permanent	        . Until tab closes
. Storage Limit	    . 5–10 MB	        . 5 MB

Accessible Across Tabs	Yes	No
*/


/*
Common Uses
. Save login preferences
. Dark/light theme settings
. Cart items in shopping sites
. Form auto-save
. Language settings

Important Notes
. Do not store passwords or sensitive data
. Data is accessible through browser developer tools
. Works only in browsers
*/