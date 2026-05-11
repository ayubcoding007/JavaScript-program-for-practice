/*
clearImmediate() is a built-in JavaScript method used to cancel or stop
 an immediate action scheduled by setImmediate(). When setImmediate() 
is used, it returns an Immediate object, and this object can be passed to 
clearImmediate() to prevent the callback function from executing. It is 
mainly available in Node.js and is useful when a scheduled immediate task 
is no longer needed.
*/

// program

let immediateId = setImmediate(() => {
  console.log("This will not run");
});

clearImmediate(immediateId);