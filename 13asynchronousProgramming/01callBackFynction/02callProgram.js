function print(name, callBack){
    console.log("Sheikh", name);
    callBack(); // callBack Call
}
function finish() {  //callback Function
   console.log("Task Completed");
}

// console.log();
print("Ayub", finish) // pasiing name and callBack function 