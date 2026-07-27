// insertAdjacentHTML() কী?

// insertAdjacentHTML() হলো একটি DOM Method,
// যার মাধ্যমে কোনো DOM element-এর নির্দিষ্ট position-এ
// HTML string insert করা যায়,
// existing content না মুছে।

// Browser সেই HTML string-কে parse করে
// actual DOM element তৈরি করে এবং DOM-এ insert করে.



// 📝 Syntax

// element.insertAdjacentHTML(position, html);



// 📌 Parameters

// 1️⃣ position

// HTML কোথায় insert হবে, সেটা নির্ধারণ করে।

// এটি ৪টি value নিতে পারে:

// "beforebegin" → Target element-এর বাইরে, আগে
// "afterbegin"  → Target element-এর ভিতরে, শুরুতে
// "beforeend"   → Target element-এর ভিতরে, শেষে
// "afterend"    → Target element-এর বাইরে, পরে



// 2️⃣ html

// যে HTML string insert করতে চাও।

// Example:

// "<h2>Hello</h2>"



// 📌 Example

// HTML

// <div id="box">
//     <p>Original Text</p>
// </div>


// JavaScript

// const box = document.getElementById("box");

// box.insertAdjacentHTML(
//     "beforeend",
//     "<h2>New Heading</h2>"
// );


// Result

// <div id="box">
//     <p>Original Text</p>
//     <h2>New Heading</h2>
// </div>

// এখানে <p> মুছে যায়নি।
// শুধু নতুন <h2> element শেষে যোগ হয়েছে.



// 📌 Browser-এর ভিতরে কী ঘটে?

// Step 1:
// Browser HTML string গ্রহণ করে।

// "<h2>New Heading</h2>"


// Step 2:
// Browser string-টি parse করে।


// Step 3:
// Browser একটি actual DOM element তৈরি করে।


// Step 4:
// নির্দিষ্ট position-এ সেই element insert করে।



// 📌 কেন insertAdjacentHTML() ব্যবহার করব?

// ধরো তোমার কাছে এই HTML আছে:

// <div id="box">
//     <p>Hello</p>
// </div>


// তুমি লিখলে:

// box.innerHTML += "<h2>World</h2>";

// এটাও কাজ করবে।

// কিন্তু innerHTML += ব্যবহার করলে Browser অনেক সময়
// পুরো element-এর HTML আবার parse করে এবং rebuild করতে পারে।

// এতে:
// • Performance কিছুটা কমতে পারে।
// • কিছু ক্ষেত্রে existing event listener হারিয়ে যেতে পারে।


// কিন্তু যদি লিখো:

// box.insertAdjacentHTML(
//     "beforeend",
//     "<h2>World</h2>"
// );

// তাহলে Browser শুধুমাত্র নির্দিষ্ট position-এ
// নতুন HTML insert করে।

// পুরো element নতুন করে rebuild করার প্রয়োজন হয় না।



// 📌 innerHTML vs insertAdjacentHTML()

// innerHTML

// ✅ পুরো HTML replace বা rebuild করতে পারে
// ✅ Existing content overwrite হতে পারে
// ✅ Replace ও append—দুই কাজেই ব্যবহার করা যায়


// insertAdjacentHTML()

// ✅ শুধু নির্দিষ্ট position-এ HTML insert করে
// ✅ Existing content অপরিবর্তিত থাকে
// ✅ তুলনামূলক বেশি efficient
// ✅ HTML string parse করে DOM element তৈরি করে



// 🧠 মনে রাখবে

// ✅ HTML string insert করে।
// ✅ Existing content delete করে না।
// ✅ Browser HTML string-কে parse করে actual DOM element তৈরি করে।
// ✅ ৪টি position ব্যবহার করা যায়।
// ✅ innerHTML += এর তুলনায় সাধারণত বেশি efficient।