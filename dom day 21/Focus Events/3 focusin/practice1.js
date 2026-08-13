





// 🧪 Practice 1 — Form Highlight Using focusin

// 🎯 Goal

// User input-এ click করব
//           ↓
// focusin event fire হবে
//           ↓
// Event parent form-এ পৌঁছাবে
//           ↓
// পুরো form highlight হবে




const form = document.querySelector("#form");

form.addEventListener("focusin", function () {

    form.style.backgroundColor = "lightyellow";

});






// 👀 Output

// প্রথমে
// Registration Form

// [ Enter your name ]

// [ Enter your email ]

// Name input-এ click করলে


// Name input
//       ↓
// focusin
//       ↓
// Form background → lightyellow




// Email input-এ click করলে

// Email input
//        ↓
// focusin
//        ↓
// Form background → lightyellow






//=========================================== 🧠 Output Logic ===========================================

// User clicks an input
//           ↓
// Input gets focus
//           ↓
// focusin event fires
//           ↓
// Event bubbles
//           ↓
// Parent form catches the event
//           ↓
// Background changes



//  ========================================🔍 Code Explanation ==========================================

// 1️⃣ Form select
// const form = document.querySelector("#form");

// form element-টাকে select করলাম।





// 2️⃣ Event listener
// form.addEventListener("focusin", function () {

// মানে:

// Form-এর ভেতরে কোনো element focus পেলে function execute করো।




// 3️⃣ Background change
// form.style.backgroundColor = "lightyellow";

// পুরো form-এর background পরিবর্তন করা হচ্ছে।









// ⚠️ গুরুত্বপূর্ণ

// এই code-টা focus দিয়ে লিখলে কাজ করত না।

// কারণ:

// focus
//  ↓
// No bubbling
//  ↓
// Parent form event ধরতে পারে না


// কিন্তু:

// focusin
//  ↓
// Bubbling
//  ↓
// Parent form event ধরতে পারে





