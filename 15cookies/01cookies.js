/*
Cookies in JavaScript are small pieces of data stored in the browser.
They are mainly used to store user information and send it to the 
server with every HTTP request.

Features of Cookies
. Stored in browser as text
. Sent automatically to the server
. Have expiration time
. Small storage size (~4 KB)
. Can be accessed by JavaScript (unless HttpOnly)
*/

// Create a Cookie
document.cookie = "username=Rahul";

// Create Cookie with Expiry Date
document.cookie =
"username=Rahul; expires=Fri, 31 Dec 2026 12:00:00 UTC";

// Set Path
document.cookie =
  "username=Rahul; path=/";

// Read Cookies
console.log(document.cookie);

// Update Cookie
// . Just set the cookie again with a new value.
document.cookie = "username=John";

// Delete Cookie
// Set expiry date in the past.
document.cookie ="username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";



// Example
// Save cookie
document.cookie = "theme=dark";
// Read cookie
console.log(document.cookie);

/*
Full Cookie Syntax
document.cookie = "name=value; expires=date; max-age=seconds; path=/; domain=example.com; Secure; SameSite=Strict";

Structure Breakdown
. key=value;
. expires=date;
. max-age=seconds;
. path=path;
. domain=domain;
. Secure;
. SameSite=value;

Cookie Attributes

Attribute	        Purpose
. expires	        . Expiration date
. max-age	        . Lifetime in seconds
. path	            . URL path access
. domain	        . Allowed domain
. secure	        . HTTPS only
. samesite	        . Prevent CSRF attacks
. httponly	        . Prevent JS access (server-side only)
*/

/*
Difference: Cookies vs localStorage vs sessionStorage

Feature	            Cookies	    localStorage	sessionStorage
. Size	            . ~4 KB	    . 5–10 MB	    . 5 MB
. Expiry	        . Yes	    . No	        . Tab close
. Sent to Server	. Yes	    . No	        . No
. Accessible by JS	. Yes*	    . Yes	        . Yes
*/

/*
Common Uses
. Authentication
. Session management
. Remember user login
. Tracking/user analytics
. User preferences

Important Notes
. Avoid storing sensitive data in normal cookies
. Use Secure and HttpOnly for authentication cookies
. Cookies are slower than localStorage because they are sent with every request

*/
// progarm (expires - dynamicDate Set)
let date = new Date();
// 3 days add
date.setDate(date.getDate() + 3);
document.cookie = "user=Rahul; expires=" + date.toUTCString();


// Current date object
let newDate = new Date();

// 7 days future date
newDate.setDate(newDate.getDate() + 7);

// Full cookie setup
document.cookie =
  "username=Rahul" +                 // key=value
  "; max-age=604800" +              // 7 days in seconds
  "; expires=" + newDate.toUTCString() + // expiry date
  "; path=/" +                      // accessible on whole website
  "; domain=example.com" +          // domain access
  "; Secure" +                      // HTTPS only
  "; SameSite=Strict";              // CSRF protection