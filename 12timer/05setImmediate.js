
/*
setImmediate() is a JavaScript method used to execute a function immediately 
after the current event loop cycle is completed. It schedules a callback to 
run after the current code execution finishes, without waiting for a specific 
delay like setTimeout(). It is mainly available in environments like Node.js 
and is useful for deferring execution until the next iteration of the event 
loop.
*/

// program

setImmediate(() => {
  console.log("Runs immediately after current code");
});

console.log("First");

/*
setImmediate() is a built-in JavaScript method, primarily available in Node.js, 
used to schedule the immediate execution of a function after the current event 
loop cycle completes. Unlike setTimeout(), it does not require a delay value and 
is often used to defer execution until the current operations are finished.
*/