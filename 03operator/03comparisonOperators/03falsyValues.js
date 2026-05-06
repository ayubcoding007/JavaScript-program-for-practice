let a = 0;
let b = "";
let c = null;
let d = undefined;
let e = NaN;
let f = false;

console.log("0 == false :", a == f);         // true
console.log('"" == false :', b == f);        // true
console.log("null == undefined :", c == d);  // true
console.log("NaN == NaN :", e == e);         // false

console.log("!0 :", !a);             // true
console.log('!"" :', !b);            // true
console.log("!null :", !c);          // true
console.log("!undefined :", !d);     // true
console.log("!NaN :", !e);           // true

console.log("0 || 5 :", a || 5);     // 5
console.log('"" && 10 :', b && 10);  // ""