

// // প্রথমে Event Lifecycle কী? 🤔

// // যখন কোনো element-এ click kori, event সঙ্গে সঙ্গে সেই element-এ যায় না।


// // suppose, HTML এমন:

// // <body>
// //   <div>
// //     <button>Click Me</button>
// //   </div>
// // </body>

// //  যদি button-এ click করো, তাহলে event-এর যাত্রাপথ হবে:

// // Window
// //  ↓
// // Document
// //  ↓
// // HTML
// //  ↓
// // Body
// //  ↓
// // Div
// //  ↓
// // Button

// // এটাকে বলে Capturing Phase।














// // Capturing কী? 🧐

// // Capturing হলো এমন একটি process, যেখানে event উপরের element থেকে নিচের element-এর দিকে যায়।

// // Window
// //  ↓
// // Document
// //  ↓
// // HTML
// //  ↓
// // Body
// //  ↓
// // Div
// //  ↓
// // Button

// // এখানে event ধীরে ধীরে parent থেকে child-এর দিকে যাচ্ছে।






// // বাস্তব উদাহরণ 🎯
// // suppse, একজন ডাকপিয়ন একটি চিঠি দিতে এসেছে।

// // চিঠি দেওয়ার পথ:

// // বাড়ি
// //  ↓
// // তলা
// //  ↓
// // রুম
// //  ↓
// // টেবিল
// //  ↓
// // amar হাত

// // এখানে চিঠি উপরে থেকে নিচে এসেছে।

// // Capturing-ও ঠিক এভাবেই কাজ করে।











// // Capturing-এর Syntax


// element.addEventListener(
//   "click",
//   function () {
//     console.log("Hello");
//   },
//   true
// );


// // true কেন ব্যবহার করা হয়? 🤔

// addEventListener("click", callback, true);

// // তৃতীয় parameter-এর value যদি true হয়, তাহলে event Capturing Phase-এ কাজ করবে।

// // true = Capturing

// // false = Bubbling
// // Example 1

// // HTML
// // <div id="parent">
// //   <button id="child">Click Me</button>
// // </div>



// // CSS
// // #parent {
// //   padding: 50px;
// //   border: 2px solid black;
// // }

// // #child {
// //   padding: 20px;
// // }





// // JavaScript
// const parent = document.getElementById("parent");
// const child = document.getElementById("child");


// parent.addEventListener(
//   "click",
//   function () {
//     console.log("Parent");
//   },
//   true
// );


// child.addEventListener(
//   "click",
//   function () {
//     console.log("Child");
//   },
//   true
// );

// // Output

// // Parent
// // Child





// // Output এমন হলো কেন? 🤔

// // কারণ event প্রথমে parent-এর কাছে গেছে।

// // Parent
// //  ↓
// // Child

// // তারপর callback execute হয়েছে।





// // যদি true না লিখি?
// parent.addEventListener("click", function () {
//   console.log("Parent");
// });


// child.addEventListener("click", function () {
//   console.log("Child");
// });

// // Output
// // Child
// // Parent






// // এটা হলো Bubbling।

// // এটা পরে শিখব।







// // Capturing কখন ব্যবহার করা হয়? 🎯

// // 1. Event-এর flow নিয়ন্ত্রণ করার জন্য
// addEventListener("click", callback, true);

// // 2. Parent element-কে আগে execute করানোর জন্য

// // Parent
// //  ↓
// // Child





// // 3. Complex UI তৈরি করার সময়

// // যেমন:

// // Modal
// // Dropdown
// // Sidebar
// // Nested Menu









// // Capturing কখন ব্যবহার করা হয় না? ❌

// // সাধারণ website-এ Capturing খুব কম ব্যবহার করা হয়।

// // বেশিরভাগ সময় developer-রা Bubbling ব্যবহার করে।




















// // মনে রাখার Shortcut 📝

// // Capturing = Top → Bottom


// // Parent → Child




// // true = Capturing
// // Window
// //  ↓
// // Document
// //  ↓
// // HTML
// //  ↓
// // Body
// //  ↓
// // Parent
// //  ↓
// // Child













// // VS Code-এ comment করে লিখে রাখতে ..................

// // // Capturing


// // // Event travels from top to bottom.


// // Parent → Child


// addEventListener("click", callback, true);


// // true = Capturing



















