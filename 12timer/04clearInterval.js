/*
clearInterval() is a built-in JavaScript method used to stop or cancel a timer 
created by setInterval(). Since setInterval() repeatedly runs a function after 
a fixed time interval, clearInterval() is used when you want to stop that 
repeated execution. It takes the interval ID returned by setInterval() as an 
argument and cancels the ongoing timer.
*/

// program

let timer = setInterval(() => {
  console.log("Running...");
}, 1000);

clearInterval(timer);