


// 🟢 ResizeObserver — এটা কী?

// ResizeObserver হলো JavaScript-এর একটি Web API, যেটা কোনো HTML element-এর size পরিবর্তন হলে সেটা detect করে।

// সহজ ভাষায়:

// কোনো element-এর width বা height পরিবর্তন হলে ResizeObserver সেটা ধরে এবং আমাদের callback function চালায়।

// suppose:

// ┌──────────────┐
// │              │
// │     BOX      │  ← width = 200px
// │              │
// └──────────────┘

// box-এর width বাড়ালে:

// ┌──────────────────────┐
// │                      │
// │         BOX          │  ← width = 400px
// │                      │
// └──────────────────────┘

// ResizeObserver বুঝবে:

// আগে → 200px
// এখন → 400px





// ➡️ Size changed!
// ➡️ Callback চালাও



















// 🧠 IntersectionObserver-এর সাথে মিল

// Day 24-এ IntersectionObserver korsi................. 

// দুটোর concept একই ধরনের:

// Observer
//    ↓
// কোনো একটা change-এর জন্য অপেক্ষা করে
//    ↓
// Change হলে callback চালায়

// কিন্তু কী observe করছে, সেটা আলাদা।

// IntersectionObserver










// Element viewport-এর সাথে intersect ?
//                 ↓
//              YES/NO

// ResizeObserver

// Element-এর size পরিবর্তন হয়েছে?
//                 ↓
//              YES/NO











// 🔥 ResizeObserver কোথায় কাজ করে?

// এটা HTML element-এর size observe করতে ব্যবহার হয়।

// যেমন:

// <div id="box"></div>

// এই div-এর:

// width
// height

// পরিবর্তন হলে ResizeObserver কাজ করতে পারে।

// বাস্তবে ব্যবহার হতে পারে:













// 1. Responsive component

// একটা card ছোট হলে:

// [ Image ]
// [ Title  ]

// আর বড় হলে:

// [ Image ] [ Title ]

// Component-এর নিজের size অনুযায়ী layout পরিবর্তন করা যায়।














// 2. Dashboard

// Dashboard-এর কোনো chart/container-এর size পরিবর্তন হলে chart আবার calculate করা দরকার হতে পারে।

// Container resize
//        ↓
// ResizeObserver
//        ↓
// Chart resize













// 3. Sidebar

// Sidebar ছোট/বড় হলে ভিতরের content পরিবর্তন করা যায়।










// 4. Custom UI component

// একটা reusable component নিজের size বুঝে behaviour পরিবর্তন করতে পারে।

// এখানে একটা বড় সুবিধা আছে:

// Window কত বড় সেটা না দেখে element নিজে কত বড় সেটা জানা যায়।






// ⚠️ এটা কখন কাজ করে?

// এখানে সবচেয়ে গুরুত্বপূর্ণ logic হলো:

// Observer তৈরি
//       ↓
// Element observe করা
//       ↓
// Element-এর size change
//       ↓
// ResizeObserver callback
//       ↓
// entries পাওয়া
//       ↓
// নতুন size বের করা
//       ↓
// নিজের logic চালানো

// যেমন:

// const observer = new ResizeObserver((entries) => {
//     // size changed
// });

// observer.observe(box);

// box observe করা হয়েছে।

// এখন:

// box width:
// 200px → 300px

// তখন callback চলবে।










// 🔥 কিন্তু একটা গুরুত্বপূর্ণ বিষয়

// ResizeObserver নিজে size change করলে শুধু তখনই কাজ করে—এমন না।

// যে কোনো কারণে element-এর rendered size পরিবর্তন হলে সেটা detect করতে পারে।

// যেমন:

// CSS পরিবর্তন
// width: 300px;

// থেকে:

// width: 500px;
// JavaScript
// box.style.width = "500px";
// Content পরিবর্তন
// box.textContent = "অনেক বড় একটা text...";


// Content-এর কারণে element-এর size বদলালে observer সেটা detect করতে পারে।

// Parent/container-এর কারণে layout change

// Parent-এর layout পরিবর্তনের ফলে child-এর size পরিবর্তন হলেও observer সেটা detect করতে পারে।




















// ❌ কোথায় কাজ করবে না?

// এখানে ভুল করলে concept গুলিয়ে যাবে।

// 1. শুধু position পরিবর্তন হলে

// suppose:

// box.style.left = "200px";

// Element-এর position বদলেছে।

// কিন্তু:

// width = same
// height = same

// তাহলে ResizeObserver-এর কাজ নেই।

// কারণ:

// Position change ≠ Size change

// এক্ষেত্রে ResizeObserver ব্যবহার করার কারণ নেই।















// 2. শুধু color পরিবর্তন হলে
// box.style.backgroundColor = "red";

// Size পরিবর্তন হয়নি।

// তাই ResizeObserver trigger হওয়ার কারণ নেই।












// 3. শুধু text/content বদলালেই সবসময় trigger হবে না

// এটা subtle।

// box.textContent = "Hello";

// Text বদলেছে বলে callback অবশ্যই চলবে—এমন না।

// যদি text পরিবর্তনের পরেও:

// width একই
// height একই

// থাকে, তাহলে resize হয়নি।

// কিন্তু content-এর কারণে height/width বদলে গেলে তখন ResizeObserver trigger করতে পারে।












// 🚨 Window resize বনাম Element resize

// এটা খুব ভালোভাবে মনে রাখব।

// Window resize:
// window.addEventListener("resize", () => {
//     console.log("Window resized");
// });

// এটা browser window resize detect করে।

// Element resize:
// const observer = new ResizeObserver(() => {
//     console.log("Element resized");
// });

// observer.observe(box);

// এটা specific element-এর size observe করে।

// তাই:

// Browser window resize
//         ↓
// window resize event

// আর:

// Element size resize
//         ↓
// ResizeObserver

// দুটো এক জিনিস না।












// 🧩 এবার মূল Logic

// এই code:

// const observer = new ResizeObserver((entries) => {
    
// });

// এর ভিতরে আসলে কী হচ্ছে?












// Step 1
// new ResizeObserver()

// একটা observer তৈরি করছে।












// Step 2

// Callback function দিচ্ছো:

// (entries) => {
    
// }

// মানে:

// "কোনো observed element-এর size পরিবর্তন হলে এই function চালাবে।"















// Step 3
// observer.observe(box);

// মানে:

// "এই box element-টাকে observe করো।"
















// Step 4

// Box-এর size পরিবর্তন হলো।

// 200px
//  ↓
// 400px












// Step 5

// Browser callback চালাবে:

// (entries) => {
    
// }










// Step 6

// entries-এর মধ্যে resize হওয়া element-এর information থাকবে।

// তারপর:

// entry.contentRect.width

// দিয়ে width পাওয়া যায়।

// আর:

// entry.contentRect.height

// দিয়ে height পাওয়া যায়।














// 🧠 পুরো Logic এক লাইনে
// observe element → size changes → callback → entries → width/height → তোমার logic

// এটাই ResizeObserver-এর মেরুদণ্ড।









// 🟢 Practice 1 — Basic Resize Detection

// এখন প্রথম practice করব।

// Folder:

// Day-25-ResizeObserver
// └── Practice-1
//     ├── index.html
//     ├── style.css
//     └── script.js
// HTML
// <div id="box1">
//     Resize Me
// </div>
// CSS
// #box1 {
//     width: 200px;
//     height: 150px;
//     background-color: tomato;

//     resize: both;
//     overflow: auto;
// }

// এখানে:

// resize: both;

// দেওয়ার কারণে browser-এ box-এর corner ধরে resize করতে পারবে।

// JavaScript
// const box1 = document.getElementById("box1");

// const observer1 = new ResizeObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log("Width:", entry.contentRect.width);
//         console.log("Height:", entry.contentRect.height);
//     });
// });

// observer1.observe(box1);




















// 🔍 Codeটা A → Z

// প্রথম:

// const box1 = document.getElementById("box1");

// HTML থেকে box নিয়ে এলাম।

// তারপর:

// const observer1 = new ResizeObserver(...)

// ResizeObserver তৈরি করলাম।

// তারপর:

// (entries) => {

// Size change হলে এই callback চলবে।

// তারপর:

// entries.forEach((entry) => {

// ResizeObserver একাধিক element observe করতে পারে। তাই entries array-এর প্রতিটি entry নিয়ে কাজ করছি।

// তারপর:

// entry.contentRect.width

// যে element resize হয়েছে তার width।

// আর:

// entry.contentRect.height

// তার height।

// সবশেষে:

// observer1.observe(box1);

// এটাই সবচেয়ে গুরুত্বপূর্ণ।

// এটা না দিলে observer জানবেই না কোন element observe করতে হবে।

























