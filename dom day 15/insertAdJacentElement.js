// insertAdjacentHTML() কী?

// insertAdjacentHTML() হলো একটি DOM Method, 
// যার মাধ্যমে কোনো HTML element-এর নির্দিষ্ট position-এ 
// নতুন HTML code (string আকারে) insert করা যায়, 
// পুরনো content না মুছে।

// অর্থাৎ, এটি HTML string-কে parse করে বাস্তব HTML element 
// হিসেবে DOM-এ যোগ করে।

// 📝 Syntax
// element.insertAdjacentHTML(position, html);
// Parameters
// 1️⃣ position

// কোথায় HTML insert হবে, সেটা বলে।

// এটি ৪টি value নিতে পারে:

// "beforebegin"
// "afterbegin"
// "beforeend"
// "afterend"
// 2️⃣ html

// যে HTML code যোগ করতে চাও।

// Example:

// "<h2>Hello</h2>"
// Example

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

// দেখো, <p> মুছে যায়নি। শুধু নতুন <h2> যোগ হয়েছে।

// কেন insertAdjacentHTML() ব্যবহার করব?

// ধরো তোমার কাছে এই HTML আছে:

// <div id="box">
//     <p>Hello</p>
// </div>

// এখন তুমি লিখলে—

// box.innerHTML += "<h2>World</h2>";

// এটাও কাজ করবে, কিন্তু এর একটি সমস্যা আছে।

// innerHTML += ব্যবহার করলে browser পুরো element-এর HTML 
// আবার parse করে এবং নতুন করে render করে। 
// এতে performance কমতে পারে, 
// আর কিছু ক্ষেত্রে existing event listener হারিয়ে যেতে পারে।

// কিন্তু—

// box.insertAdjacentHTML(
//     "beforeend",
//     "<h2>World</h2>"
// );

// এখানে browser শুধু নির্দিষ্ট position-এ নতুন HTML যোগ করে। 
// পুরো element নতুন করে rebuild করতে হয় না।

// innerHTML vs insertAdjacentHTML()
// innerHTML	insertAdjacentHTML()
// পুরো HTML replace বা rebuild করতে পারে	
// শুধু নির্দিষ্ট জায়গায় insert করে
// Existing content overwrite হতে পারে	Existing content থাকে
// তুলনামূলক কম efficient	তুলনামূলক বেশি efficient
// Replace ও append—দুই কাজেই ব্যবহার করা যায়	শুধুই insert করার জন্য
// মনে রাখবে 🧠
// ✅ HTML string insert করে।
// ✅ Existing content delete করে না।
// ✅ ৪টি position ব্যবহার করা যায়।
// ✅ innerHTML +=-এর চেয়ে সাধারণত বেশি efficient।
// ✅ Browser HTML string-কে parse করে real DOM element বানায়।