


// sessionStorage কী?

// sessionStorage হলো Browser-এর Web Storage API-এর একটি অংশ।

// এটি Browser-এ অস্থায়ী (temporary) data সংরক্ষণ করে।

// localStorage আর sessionStorage-এর মূল পার্থক্য

// ধরো একটি website-এ login করল।

// যদি localStorage ব্যবহার kori

// Open Website
//       │
// Save Data
//       │
// Refresh ✅
//       │
// Close Tab ✅
//       │
// Close Browser ✅
//       │
// Data Still Exists



// Data থেকে যাবে, যতক্ষণ না বা JavaScript সেটি delete kore

// যদি sessionStorage ব্যবহার kori

// Open Website
//       │
// Save Data
//       │
// Refresh ✅
//       │
// Close Tab ❌
//       │
// Data Deleted

// Tab বন্ধ হলেই data মুছে যাবে।

// sessionStorage কখন ব্যবহার করা হয়?

// যেখানে data শুধু বর্তমান tab-এর জন্য দরকার।

// উদাহরণ:

// Multi-step Form
// OTP Verification
// Temporary Login State
// Current Checkout Step
// Quiz Progress
// Data কীভাবে রাখা হয়?



// sessionStorage-ও Key-Value Pair আকারে data রাখে।

// উদাহরণ:

// Key          Value
// --------------------------
// name         Mehraz
// city         Noakhali






// Syntax
sessionStorage.setItem(key, value);

sessionStorage.getItem(key);

sessionStorage.removeItem(key);

sessionStorage.clear();





// ছোট Example
// sessionStorage.setItem("name", "Mehraz");

// Output (Session Storage):

// Key       Value
// ---------------------
// name      Mehraz

// কিন্তু Tab বন্ধ করে আবার website খুললে—

// Session Storage

// Empty

// কারণ নতুন session শুরু হয়েছে।







// 🧠 মনে রাখার Shortcut
// localStorage = Permanent Storage
// sessionStorage = Temporary Storage (Current Tab Only)

// ===============================================================================


//   for better understanding under below..............

// sessionStorage কী?

// sessionStorage হলো ব্রাউজারের একটি Storage API, যেখানে তুমি key-value আকারে ডেটা রাখতে পারো।

// এটি localStorage-এর মতোই কাজ করে, কিন্তু একটি বড় পার্থক্য আছে।

// sessionStorage	localStorage
// Tab বন্ধ করলে ডেটা মুছে যায়	নিজে থেকে মুছে যায় না
// শুধু বর্তমান Tab-এর জন্য	সব Tab-এ একই Origin হলে শেয়ার হয়
// Browser restart করলে ডেটা থাকে না	Browser restart হলেও থাকে
// কবে ব্যবহার করা হয়?




// ✅ Login page-এর temporary data

// ✅ Multi-step form

// ✅ Current page state

// ✅ Temporary user preference






// Basic Syntax
// 1. Data Save
sessionStorage.setItem("name", "Mehraz");

// 2. Data Get
const name = sessionStorage.getItem("name");

console.log(name);



// Output

// Mehraz
// 3. Update
sessionStorage.setItem("name", "Rakib");










// আগের value overwrite হয়ে যাবে।

// Output

// Rakib
// 4. Remove One Item
sessionStorage.removeItem("name");

// 5. Clear Everything
sessionStorage.clear();

// 6. Check Exists
console.log(sessionStorage.getItem("name"));





// Output

// null







// কোথায় Data দেখা যায়?
// F12

// → Application

// → Storage

// → Session Storage

// → তোমার Website

// এখানে সব key-value দেখতে পারবে।

// sessionStorage vs Variables
let name = "Mehraz";




// Page Refresh করলে—

// name

// হারিয়ে যাবে।

// কিন্তু

sessionStorage.setItem("name", "Mehraz");

// Refresh করলেও থাকবে।

// তবে Tab বা Browser Window বন্ধ করলে মুছে যাবে।

// Important Methods
sessionStorage.setItem()

// ডেটা Save করে।

sessionStorage.getItem()

// ডেটা নিয়ে আসে।

sessionStorage.removeItem()

// একটি Item Delete করে।

// sessionStorage.clear()

// সব Delete করে।

// sessionStorage.length

// কয়টি Item আছে।

// console.log(sessionStorage.length);
// sessionStorage.key(index)

// Index অনুযায়ী Key বের করে।

// console.log(sessionStorage.key(0));
// মনে রাখার বিষয় ⚡
// sessionStorage শুধুমাত্র String সংরক্ষণ করে।
// Object বা Array রাখতে হলে JSON.stringify() ব্যবহার করতে হবে।
// আবার বের করার সময় JSON.parse() করতে হবে।
// Refresh করলে ডেটা থাকবে।
// Tab বা Browser Window বন্ধ করলে ডেটা মুছে যাবে।
// sessionStorage এবং localStorage-এর API একই; পার্থক্য মূলত ডেটা কতক্ষণ থাকে।