/*
The toLocaleString() method converts array elements into a locale-sensitive string representation. 
Each element's own toLocaleString() method is called, and the results are joined with locale-specific 
separators. It does not modify the original array. This method is useful for formatting numbers, dates, 
and currencies according to regional settings.

Syntax
arrayName.toLocaleString();

Or

arrayName.toLocaleString(
  localeValue,
  formattingOptions
);


Parameter	
. localeValue - Optional locale such as "en-US", "en-IN", "fr-FR"
. formattingOptions - Optional formatting configuration

Return Value
. Returns a locale-formatted string.
*/


// Basic Example
const numberCollection = [1000, 2000, 3000];
const formattedText = numberCollection.toLocaleString();
console.log(formattedText); // "1,000,2,000,3,000"

// Number Formatting (India)
const salaryRecords = [1000000, 2500000];
const indianFormat = salaryRecords.toLocaleString("en-IN");
console.log(indianFormat); // "10,00,000,25,00,000"


// Number Formatting (US)
const revenueData = [1000000, 5000000];
const americanFormat = revenueData.toLocaleString("en-US");
console.log(americanFormat); // "1,000,000,5,000,000"


// Date Array Formatting
const eventSchedule = [
  new Date("2026-01-15"),
  new Date("2026-06-20")
];
const dateOutput = eventSchedule.toLocaleString("en-US");
console.log(dateOutput) // "1/15/2026, 12:00:00 AM,6/20/2026, 12:00:00 AM"


// Currency Formatting
const paymentValues = [25000, 50000];
const currencyOutput = paymentValues.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR"
  });
console.log(currencyOutput); // "₹25,000.00,₹50,000.00"


// Original Array Remains Unchanged
const quantityRecords = [1000, 2000];
const textResult = quantityRecords.toLocaleString();
console.log(quantityRecords); // [1000, 2000]
console.log(textResult); // "1,000,2,000"


/*
Difference Between toString() and toLocaleString()
Feature	                    toString()	            toLocaleString()
Returns String	            Yes	                    Yes
Locale Aware	            No	                    Yes
Number Formatting	        No	                    Yes
Date Formatting	            No	                    Yes
Modifies Original Array	    No	                    No
*/

/*
Important Points
. Converts array elements into a locale-specific string.
. Calls each element's toLocaleString() method internally.
. Useful for numbers, currencies, and dates.
. Does not modify the original array.
. Returns a formatted string.
. Introduced for internationalization support.
*/