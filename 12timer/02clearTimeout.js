/*
clearTimeout() is a built-in JavaScript function used to cancel or stop a 
timer that was previously created using setTimeout(). When setTimeout() is 
called, it returns a timer ID, and this ID can be passed to clearTimeout() 
to prevent the scheduled function from running. It is commonly used when a 
delayed action is no longer needed, such as canceling notifications, stopping 
delayed messages, or preventing unnecessary code execution.
*/

let timer = setTimeout(() => {
  console.log("This will not run");
}, 3000);

clearTimeout(timer);
