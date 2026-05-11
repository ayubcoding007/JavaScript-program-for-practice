/*
setTimeout() is a built-in JavaScript function used to execute a block of code or a 
function after a specified delay in milliseconds. It is commonly used for creating 
delays, scheduling tasks, showing notifications after some time, or running asynchronous 
code later without blocking the execution of the program. The setTimeout() function 
takes two main arguments: a callback function to execute and the delay time in milliseconds. 
After the given time has passed, JavaScript runs the specified function once.
*/

setTimeout(() => {
  console.log("Hello after 3 seconds");
}, 3000);

// Parameters (attributes/arguments)

/*
function greet(name) {
  console.log("Hello " + name);
}

let timeoutId = setTimeout(greet, 3000, "Ali");
*/