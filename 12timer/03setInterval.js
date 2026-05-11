/*
setInterval() is a built-in JavaScript function used to repeatedly execute a 
function or block of code after a specified time interval in milliseconds. 
Unlike setTimeout(), which runs code only once after a delay, setInterval() 
keeps running the code continuously at regular intervals until it is stopped 
using clearInterval(). It is commonly used for clocks, counters, automatic 
updates, slideshows, and repeated tasks.
*/

let timer = setInterval(() => {
  console.log("Hello");
}, 2000);


// Parameters (attributes/arguments)

/*
function greet(name) {
  console.log("Hello " + name);
}

let intervalId = setInterval(greet, 2000, "Ali");
*/ 