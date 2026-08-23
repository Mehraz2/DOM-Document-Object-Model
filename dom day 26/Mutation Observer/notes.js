




// 🟣 Day 26 — MutationObserver

// 1️⃣ MutationObserver কী?

// MutationObserver হলো JavaScript-এর একটি Web API, যেটা DOM-এর পরিবর্তন observe/detect করে।

// সহজ ভাষায়:

// DOM-এর মধ্যে কিছু পরিবর্তন হলে MutationObserver সেটা detect করে callback function চালায়।

// যেমন DOM-এ:

// নতুন element যোগ
//        ↓
// element remove
//        ↓
// class change
//        ↓
// attribute change
//        ↓
// text/content change

// এসব mutation detect করা যায়।














// 2️⃣ কোথায় কাজ করে?

// MutationObserver মূলত DOM tree-এর পরিবর্তনের উপর কাজ করে।

// যেমন:

// ✅ নতুন element যোগ
// <div id="box"></div>

// JavaScript দিয়ে:

// const newElement = document.createElement("p");
// box.append(newElement);

// p element DOM-এ যোগ হয়েছে।

// MutationObserver এটা detect করতে পারে।

// ✅ Element remove
// box.remove();

// DOM থেকে element চলে গেছে।

// MutationObserver এটা detect করতে পারে।

// ✅ Attribute change
// box.classList.add("active");

// এখানে class attribute পরিবর্তন হয়েছে।

// MutationObserver এটা detect করতে পারে।

// ✅ Text change
// box.textContent = "Hello";

// Element-এর content পরিবর্তন হয়েছে।

// MutationObserver configuration অনুযায়ী এটা detect করতে পারে।

















// 3️⃣ কেন MutationObserver দরকার?

// suppose একটা website-এ JavaScript continuously DOM পরিবর্তন করছে।

// user চাইছ:

// "যখনই নতুন কোনো element তৈরি হবে, তখন আমাকে জানাও।"

// এখন যদি বারবার check করতে থাক:

// setInterval(() => {
//     // DOM check
// }, 100);

// এটা ভালো approach না।

// কারণ কোনো পরিবর্তন না হলেও বারবার check করছ।

// MutationObserver-এর idea:

// DOM change
//    ↓
// Browser detect করে
//    ↓
// MutationObserver callback
//    ↓
// action নাও

// অর্থাৎ change না হওয়া পর্যন্ত unnecessary checking করার দরকার নেই।























// 4️⃣ MutationObserver কীভাবে কাজ করে?

// Basic structure:

// const observer = new MutationObserver((mutations) => {

//     // DOM change হলে এখানে code চলবে

// });

// এখানে:

// new MutationObserver()

// → Observer তৈরি করছে।

// আর:

// (mutations) => {}

// → mutation detect হলে callback।

// তারপর:

// observer.observe(target, options);

// এখানে Observer-কে বলছ:

// "এই element-টা observe করো এবং এই ধরনের changes detect করো।"

















// 5️⃣ পুরো Logic 🧠
// Target Element
//       ↓
// MutationObserver তৈরি
//       ↓
// observe() করা
//       ↓
// কোন ধরনের mutation detect করবে সেট করা
//       ↓
// DOM-এ পরিবর্তন
//       ↓
// Browser mutation detect করে
//       ↓
// Callback চালু
//       ↓
// Mutation information পাওয়া যায়
//       ↓
// তুমি প্রয়োজনীয় action নাও

// এটাই পুরো MutationObserver logic।


















// 6️⃣ observe() কেন লাগে?

// শুধু এটা লিখলে:

// const observer = new MutationObserver(() => {
//     console.log("Changed");
// });

// Observer তৈরি হয়েছে।

// কিন্তু সে কিছু observe করছে না।

// তাই:

// observer.observe(box, {
//     childList: true
// });

// এখন সে box observe করবে।




















// 7️⃣ কী কী observe করতে পারে?

// MutationObserver-এর প্রধান options:

// childList

// নতুন child যোগ/remove হলে।

// childList: true
// attributes

// Attribute পরিবর্তন হলে।

// attributes: true

// যেমন:

// class
// id
// data-name
// src
// href
// characterData

// Text node-এর data পরিবর্তন হলে।

// characterData: true
// subtree

// শুধু target না, target-এর ভেতরের descendants-এর mutation-ও observe করবে।

// subtree: true

// এটা খুব গুরুত্বপূর্ণ।
















// 8️⃣ কোথায় বাস্তবে কাজ করবে? 🚀
// Dynamic UI

// যেখানে JavaScript দিয়ে DOM dynamically তৈরি হচ্ছে।

// User action
//    ↓
// New element
//    ↓
// DOM changes
//    ↓
// MutationObserver
// Chat application

// নতুন message আসলে:

// New message
//    ↓
// DOM-এ message যোগ
//    ↓
// MutationObserver detect
//    ↓
// Notification / auto action
// Dynamic notification

// নতুন notification DOM-এ যোগ হলে detect করা।

// Third-party widgets

// কোনো external widget DOM-এর মধ্যে element তৈরি করলে সেটা detect করে প্রয়োজনীয় কাজ করা যায়।

// Browser extension

// Page-এর DOM dynamically change হলে extension সেটা monitor করতে পারে।

















// 9️⃣ কোথায় কাজ করবে না? ❌

// এটা খুব গুরুত্বপূর্ণ।



// ❌ Element-এর size পরিবর্তন detect করার জন্য নয়

// যেমন:

// width: 300px
//       ↓
// width: 500px

// এটার জন্য:

// ResizeObserver

// ব্যবহার করব।














// ❌ Element viewport-এ ঢুকেছে কিনা দেখার জন্য নয়
// scroll
//  ↓
// element viewport-এ ঢুকেছে

// এর জন্য:

// IntersectionObserver

// ব্যবহার করবে।













// ❌ JavaScript variable change detect করবে না

// যেমন:

// let score = 10;

// score = 20;

// এটা DOM mutation নয়।

// MutationObserver এটা detect করবে না।


















// ❌ Server/database change detect করবে না

// Database-এ data পরিবর্তন হলে MutationObserver সেটা জানবে না।

// এটা DOM observer, database observer না।















// 🔥 তিনটা Observer-এর Final Difference

// ==-=-=-=-=-:

//                 WHAT CHANGED?
//                      │
//         ┌────────────┼────────────┐
//         ↓            ↓            ↓
//       DOM          SIZE        VIEWPORT
//         ↓            ↓            ↓
//  Mutation        Resize     Intersection
//  Observer        Observer     Observer















// MutationObserver

// DOM বদলেছে?

// ResizeObserver

// Element-এর size বদলেছে?

// IntersectionObserver

// Element viewport-এর সাথে intersect করছে?













// 10️⃣ MutationObserver-এর সবচেয়ে important logic

// একটা real example suppose:

// User clicks "Add"
//         ↓
// JavaScript creates <div>
//         ↓
// <div> DOM-এ যোগ হয়
//         ↓
// MutationObserver সেটা detect করে
//         ↓
// Callback চলে
//         ↓
//  action নাও

// অর্থাৎ MutationObserver নিজে DOM change করে না।

// এটা শুধু:

// পরিবর্তন observe করে → information দেয় →  action নাও।

// এই distinctionটা খুব গুরুত্বপূর্ণ। ⚠️



















