/*
Object.groupBy() is a modern JavaScript method that groups elements of an iterable according 
to a callback function.
. The callback returns a group key, and all elements with the same 
  key are collected into an array.
. It returns a new object whose properties are the group names.
. Introduced as part of modern ECMAScript grouping features.

Syntax
Object.groupBy(items, callbackFn)

Parameters
. items → Array or iterable to group.
. callbackFn → Function executed for each element.
Must return the group key.
Return Value

Returns an object:
{
  groupName1: [...items],
  groupName2: [...items]
}
*/


const numbers = [1, 2, 3, 4, 5, 6];
const result = Object.groupBy(
  numbers,
  num => num % 2 === 0 ? "even" : "odd"
);
console.log(result); // { odd: [1, 3, 5], even: [2, 4, 6] }


// Group Users by Age
const users = [
  { name: "John", age: 20 },
  { name: "Mike", age: 25 },
  { name: "Alice", age: 20 }
];
const grouped = Object.groupBy(
  users,
  user => user.age
);
console.log(grouped);
/*
{ "20": [ { name: "John", age: 20 }, 
{ name: "Alice", age: 20 } ], 
"25": [ { name: "Mike", age: 25 } ] }
*/


// Group Products by Category
const products = [
  { name: "Laptop", category: "Electronics" },
  { name: "Phone", category: "Electronics" },
  { name: "Shirt", category: "Fashion" }
];
const result = Object.groupBy(
  products,
  item => item.category
);
console.log(result);

/*
{
  Electronics: [
    { name: "Laptop", category: "Electronics" },
    { name: "Phone", category: "Electronics" }
  ],
  Fashion: [
    { name: "Shirt", category: "Fashion" }
  ]
}
*/


// Group by First Letter
const fruits = [
  "Apple",
  "Banana",
  "Apricot",
  "Blueberry"
];
const grouped = Object.groupBy(
  fruits,
  fruit => fruit[0]
);
console.log(grouped);
/*
{
  A: ["Apple", "Apricot"],
  B: ["Banana", "Blueberry"]
}
*/


// Using Index Parameter || (element, index)

const arr = ["A", "B", "C", "D"];
const result = Object.groupBy(arr, (_, index) =>
    index % 2 === 0 ? "evenIndex" : "oddIndex"
);
console.log(result);
/*
{
  evenIndex: ["A", "C"],
  oddIndex: ["B", "D"]
}
*/


// Group Orders by Status
const orders = [
  { id: 1, status: "pending" },
  { id: 2, status: "completed" },
  { id: 3, status: "pending" }
];
const grouped = Object.groupBy(orders, order => order.status);
console.log(grouped);
/*
{
  pending: [
    { id: 1, status: "pending" },
    { id: 3, status: "pending" }
  ],
  completed: [
    { id: 2, status: "completed" }
  ]
}
*/


// Multiple Conditions
const students = [
  { name: "A", marks: 90 },
  { name: "B", marks: 60 },
  { name: "C", marks: 40 }
];
const grouped = Object.groupBy(
  students,
  student => {
    if (student.marks >= 75) return "Distinction";
    if (student.marks >= 50) return "Pass";
    return "Fail";
  }
);
console.log(grouped);
/*
{
  Distinction: [{ name: "A", marks: 90 }],
  Pass: [{ name: "B", marks: 60 }],
  Fail: [{ name: "C", marks: 40 }]
}
*/


// Real-World Example: Group Employees by Department
const employees = [
  { name: "John", dept: "HR" },
  { name: "Mike", dept: "IT" },
  { name: "Alice", dept: "IT" }
];
const result = Object.groupBy(
  employees,
  emp => emp.dept
);
console.log(result);
/*
{
  HR: [
    { name: "John", dept: "HR" }
  ],
  IT: [
    { name: "Mike", dept: "IT" },
    { name: "Alice", dept: "IT" }
  ]
}
*/

