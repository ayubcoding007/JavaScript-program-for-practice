/*
sessionStorage in JavaScript is used to store data temporarily in the browser.
. The data exists only for the current browser tab/session.
. When the tab is closed, the data is automatically removed.

Features of sessionStorage
. Stores data as key-value pairs
. Data survives page refresh
. Data is deleted when tab/window closes
. Stores only strings
. Separate storage for each tab


Syntax

Store Data
sessionStorage.setItem("username", "Rahul");

Get Data
let user = sessionStorage.getItem("username");
console.log(user);

Remove Specific Item
sessionStorage.removeItem("username");

Clear All Data
sessionStorage.clear();

*/


// Example


// Save data
sessionStorage.setItem("theme", "dark");

// Retrieve data
let theme = sessionStorage.getItem("theme");

console.log(theme);


// Storing Objects
// . Use JSON.stringify() and JSON.parse().

// Store Object
const user = {
  name: "Rahul",
  age: 22
};
sessionStorage.setItem("user", JSON.stringify(user));

// Retrieve Object
const data = JSON.parse(sessionStorage.getItem("user"));
console.log(data.name);
console.log(data.age);

/*

Common Uses
. Temporary login session
. Multi-step form data
. OTP verification state
. Temporary UI state
. One-tab-only data

Important Notes
. Do not store sensitive information
. Data is browser-specific
. Cleared automatically when tab closes

*/
