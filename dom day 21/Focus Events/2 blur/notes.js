






// 1. blur আসলে কী?

// blur হলো একটি DOM Focus Event।

// কোনো element বর্তমানে focus-এ থাকার পর যখন সেই element focus হারায়, তখন blur event ঘটে।

// সহজ ভাষায়:

// focus = element-এর দিকে attention গেল
// blur = element-এর উপর থেকে attention চলে গেল

// উদাহরণ:

// User input-এ click করল
//         ↓
// Input → focus
//         ↓
// User অন্য জায়গায় গেল
//         ↓
// Input → blur








// 2. ============================= বাস্তব জীবনের Example 🧠 ==============================

// একটা form:

// Name:
// [________________]

// Email:
// [________________]

// User প্রথমে Name input-এ click করল।

// Name → focus

// তারপর Email input-এ click করল।

// Name → blur
// Email → focus

// অর্থাৎ একই সময়ে:

// আগের element → blur
// নতুন element → focus

// এটা খুব গুরুত্বপূর্ণ।





// ===================================== 3. blur কেন দরকার? ===================================

// প্রশ্ন হচ্ছে:

// User input থেকে বের হয়ে গেছে—এটা জানার দরকার কী?

// অনেক কারণ আছে।

// সবচেয়ে গুরুত্বপূর্ণ:

// ✅ Form Validation

// User একটা email লিখল:

// Email:
// [mehraz@gmail      ]

// সে input থেকে বের হলো।

// তখন blur দিয়ে check করতে পারি:

// Email valid?
//    ↓
// না
//    ↓
// Error message দেখাও




// ✅ User Feedback

// User input থেকে বের হলে বলতে পারি:

// ✓ Looks good

// অথবা:

// ⚠ Invalid email



// ✅ Formatting

// User phone number লিখে input থেকে বের হলে:

// 01712345678

// কে format করতে পারি:

// 01712-345678



// ✅ Save Data

// User কোনো field edit করে বের হলে সেই data save করা যেতে পারে।



// ✅ UI Cleanup

// Focus থাকা অবস্থায় আমরা input-এর border blue করলাম।

// User চলে গেলে:

// blur
//  ↓
// blue border remove

// এটা খুব common UI behavior।






//================================ 4. Basic Syntax ==========================================

// element.addEventListener("blur", function () {
//     // element focus হারালে এই code চলবে
// });

// উদাহরণ:

// const input = document.querySelector("#name");

// input.addEventListener("blur", function () {
//     console.log("Input lost focus");
// });





// ===================================== 5. এখানে কী হচ্ছে? ===============================================

// এই অংশ:

// input.addEventListener("blur", function () {

// মানে:

// input element যখন focus হারাবে, তখন function চালাও।

// আর:

// console.log("Input lost focus");

// মানে:

// Focus চলে যাওয়ার পরে console-এ এই message দেখাও।





// ==================================== 6. blur কখন fire হয়? ==========================================

// একটা input-এ focus আছে:

// [ Mehraz ]
//    ↑
//  focus

// তারপর user অন্য জায়গায় click করল:

// [ Mehraz ]

//           ↓

// [ Email ]

// তখন:

// Name input → blur
// Email input → focus
// 7. Mouse দিয়ে blur
// Click input
//     ↓
// focus
//     ↓
// Click outside
//     ↓
// blur





// =========================================== 8. Keyboard দিয়ে blur =====================================

// ধরো:

// <input id="name">
// <input id="email">

// User Name-এ আছে:

// Name → focus

// তারপর Tab চাপল:

// Name → blur
// Email → focus

// তাই blur শুধু mouse-এর জন্য না।

// ============================================= 9. focus এবং blur একসাথে ====================================




// এগুলো সাধারণত pair হিসেবে কাজ করে।

// input.addEventListener("focus", function () {
//     console.log("Focused");
// });

// input.addEventListener("blur", function () {
//     console.log("Blurred");
// });

// Flow:

// Click input
//     ↓
// Focused

// Click somewhere else
//     ↓
// Blurred




// ================================== 10. Real-world Example — Form Validation 🔥 ===============================

// ধরো:

// <input id="email" type="email">

// User email লিখল:

// abc

// তারপর input থেকে বের হলো।

// blur তখন check করতে পারে:

// const email = document.querySelector("#email");

// email.addEventListener("blur", function () {

//     if (email.value === "") {
//         console.log("Email is required");
//     }

// });

// Flow:

// User input-এ আসে
//        ↓
// User email লেখে
//        ↓
// User input থেকে বের হয়
//        ↓
// blur
//        ↓
// Validation
//        ↓
// Error / Success

// এটাই blur-এর সবচেয়ে গুরুত্বপূর্ণ practical use-এর একটা।







//======================================= 11. blur + value ======================================

// blur নিজে value check করে না।

// আমরা blur ব্যবহার করে কখন check করব সেটা নির্ধারণ করি।

// যেমন:

// input.addEventListener("blur", function () {

//     console.log(input.value);

// });

// এখানে:

// blur
//  ↓
// input.value
//  ↓
// বর্তমান value পাওয়া






// ================================================== 12. blur + classList ===============================


// Modern web development-এ inline style-এর চেয়ে class ব্যবহার করা বেশি clean।

// HTML:

// <input id="email">

// CSS:

// .error {
//     border: 2px solid red;
// }

// JS:

// const email = document.querySelector("#email");

// email.addEventListener("blur", function () {
//     email.classList.add("error");
// });

// Input থেকে বের হলে:

// blur
//  ↓
// .error add
//  ↓
// red border








// ============================================== 13. blur + classList.remove() ===========================

// Focus হলে:

// input.classList.add("active");

// Blur হলে:

// input.classList.remove("active");

// Flow:

// Focus
//  ↓
// active class add

// Blur
//  ↓
// active class remove

// এটা খুব common UI pattern।











// ======================================== 14. blur কি শুধু <input>-এ কাজ করে? ==================================

// না।

// Focus করতে পারে এমন বিভিন্ন element-এর সাথে focus-related events ব্যবহার করা যায়।

// যেমন:

// <input>
// <button>
// <select>
// <textarea>

// এছাড়াও কিছু element tabindex ব্যবহার করে focusable করা যায়।







// ============================================ 15. blur আর change কি একই? ============================

// না। একদম না। ⚠️

// এটা খুব গুরুত্বপূর্ণ।

// blur

// Element focus হারিয়েছে।

// Focus
//  ↓
// User leaves
//  ↓
// blur
// change

// Element-এর value পরিবর্তন হয়েছে এবং সেই change commit হয়েছে—বিশেষ করে form controls-এ।

// তাই:

// blur ≠ change

// একটা input-এ কিছু না লিখেও:

// focus → blur

// হতে পারে।





// ========================================== 16. blur আর focusout কি একই? ====================================

// Behavior অনেকটা কাছাকাছি, কিন্তু একটা গুরুত্বপূর্ণ পার্থক্য আছে:

// blur
// Does NOT bubble
// focusout
// Bubbles







// =============================== এটাই Day 21-এর সবচেয়ে গুরুত্বপূর্ণ concept-এর একটা। ===================================

// 17. Bubbling মানে কী?

// ধরো:

// <div id="form">
//     <input id="name">
// </div>

// Input-এ event হলো।

// কিছু event child থেকে parent-এর দিকে যেতে পারে:

// input
//   ↓
// div
//   ↓
// body
//   ↓
// document

// এটাকে bubbling বলে।

// কিন্তু:

// blur → does not bubble
// focusout → bubbles

// তাই focusout অনেক সময় parent-level event delegation-এর জন্য বেশি useful।









// ===================================18. তাহলে blur কেন ব্যবহার করব? ======================================

// কারণ আমরা অনেক সময় নির্দিষ্ট element-এর focus চলে যাওয়ার মুহূর্তে কাজ করতে চাই।

// যেমন:

// Email input
//     ↓
// User finishes typing
//     ↓
// Leaves input
//     ↓
// blur
//     ↓
// Validate email

// এখানে blur খুব natural।








// ========================================== 19. blur() Method বনাম blur Event ⚠️ =================================

// এখানে ভুল করার সুযোগ অনেক।

// blur event:
// input.addEventListener("blur", function () {
//     console.log("Blur happened");
// });

// এটা ঘটনা detect করে।

// blur() method:
// input.blur();

// এটা JavaScript দিয়ে element-এর focus সরিয়ে দেয়।

// অর্থাৎ:

// blur event
// → detect

// blur()
// → trigger focus removal








//================================================ 20. একটা বাস্তব উদাহরণ ==================================

// const input = document.querySelector("#name");

// input.addEventListener("blur", function () {
//     console.log("User left the input");
// });

// User input থেকে বের হলে:

// blur event
//     ↓
// console.log()

// আর:

// input.blur();

// লিখলে JavaScript নিজেই input-এর focus সরানোর চেষ্টা করবে।









// ====================================== 21. blur Event-এর পুরো Mental Model 🧠 ===========================

// এটা মাথায় বসিয়ে নাও:

//               INPUT
//                 │
//                 ▼
//         User focuses it
//                 │
//                 ▼
//              focus
//                 │
//                 ▼
//        User interacts/types
//                 │
//                 ▼
//       User leaves the input
//                 │
//                 ▼
//               blur
//                 │
//                 ▼
//       Validation / Formatting
//        / Message / UI update









//========================================== 22. Real-world Form Flow 🚀=================================

// একটা professional form-এ এমন হতে পারে:

// User clicks Email
//         ↓
// focus
//         ↓
// Border blue
//         ↓
// User types email
//         ↓
// User leaves input
//         ↓
// blur
//         ↓
// Validate
//         ↓
//         ├── Valid → ✓ Email looks good
//         │
//         └── Invalid → ✕ Invalid email

// এখানেই বুঝতে parci blur শুধু একটা ছোট event না—form UX-এর খুব গুরুত্বপূর্ণ অংশ।