/*
The toLocaleString() method converts a number, date, array, or object into a string formatted 
according to the user's locale (language and region settings). It provides locale-specific 
formatting such as currency symbols, date formats, number separators, and more. It is commonly 
used in internationalized applications.

Syntax

For Numbers
number.toLocaleString(locales, options)

For Dates
date.toLocaleString(locales, options)
*/


// Basic Number Formatting
// Create a number
let num = 1234567.89;
// Convert number to locale-specific format
console.log(num.toLocaleString()); // 1,234,567.89


// US Locale Formatting
// Number value
let num = 1234567.89;
// Format according to US standards
console.log(num.toLocaleString("en-US")); // 1,234,567.89


// Indian Locale Formatting
// Number value
let num = 1234567.89;
// Format according to Indian standards
console.log(num.toLocaleString("en-IN")); // 12,34,567.89


// Currency Formatting (Indian Rupee)
// Amount value
let amount = 50000;
// Convert amount into Indian currency format
console.log(
  amount.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR"
  })
); // ₹50,000.00


// Percentage Formatting
let value = 0.75;
console.log(
  value.toLocaleString("en-US", {
    style: "percent"
  })
); // 75%


// Formatting Date and Time
let date = new Date();
console.log(
  date.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  })
); // Sunday, May 31, 2026, 10:30 AM


// Current Date and Time
// Create current date object
let today = new Date();
// Convert date to locale-specific string
console.log(today.toLocaleString()); // 31/5/2026, 10:30:15 am


// Create date object
let today = new Date();
// Display only date information
console.log(
  today.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })
); // May 31, 2026


// Display Full Date with Day Name
// Create date object
let today = new Date();
// Display complete date information
console.log(
  today.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  })
); // Sunday, May 31, 2026


// Complete Example
// Product price
let price = 25999.99;
// Product launch date
let launchDate = new Date("2026-05-31");
// Display currency in Indian format
console.log(
  "Price: " +
  price.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR"
  })
); // Price: ₹25,999.99
// Display formatted date
console.log(
  "Launch Date: " +
  launchDate.toLocaleString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })
); // Launch Date: 31 May 2026


/*
Common Options
Option	                    Description
. currency	                . Currency code ("INR", "USD")
. style	                    . "decimal", "currency", "percent"
. minimumFractionDigits	    . Minimum decimal places
. maximumFractionDigits	    . Maximum decimal places
. year	                    . "numeric", "2-digit"
. month	                    . "numeric", "short", "long"
. day	                    . "numeric", "2-digit"
. weekday	                . "short", "long"
. hour	                    . Time hour format
. minute	                . Time minute format
*/


/*
toString() vs toLocaleString()
Feature	                    toString()	        toLocaleString()
. Locale aware	            . No	            . Yes
. Currency formatting	    . No	            . Yes
. Date localization	        . No	            . Yes
. Number grouping	        . No	            . Yes
. Internationalization	    . No	            . Yes
*/