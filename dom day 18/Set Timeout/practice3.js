

// 🎯 Practice 3 — clearTimeout()
// clearTimeout() কী?

// clearTimeout() ব্যবহার করা হয় setTimeout()-এর timer শেষ হওয়ার 
// আগেই সেটাকে cancel করার জন্য।

// সহজ ভাষায়:

// setTimeout() = Timer Start করে
// clearTimeout() = Timer Stop করে





// 📌 Real Life Example

// ধরো,

// ৫ সেকেন্ড পরে একটা notification দেখাবে।

// কিন্তু user যদি ৫ সেকেন্ডের আগেই Cancel button চাপ দেয়?

// তাহলে notification আর আসবে না।

// এটাই clearTimeout()।




const title = document.getElementById("title");
const startBtn = document.getElementById("startBtn");
const cancelBtn = document.getElementById("cancelBtn");

let timer;

startBtn.addEventListener("click", () => {

    timer = setTimeout(() => {

        title.textContent = "Welcome Mehraz";
        console.log("Timer Finished");

    }, 5000);

    console.log("Timer Started");

});

cancelBtn.addEventListener("click", () => {

    clearTimeout(timer);

    console.log("Timer Cancelled");

});











// ▶️ Output

// Case 1
// Start Timer button

// Console

// Timer Started

// ৫ সেকেন্ড পরে

// Timer Finished

// Page

// Waiting...

// ↓

// Welcome Mehraz




// Case 2

// Start Timer চাপার ৩ সেকেন্ড পরে Cancel Timer 

// Console

// Timer Started

// Timer Cancelled

// Page

// Waiting...

// আর কখনোই

// Welcome Mehraz

// দেখাবে না।

// কারণ Timer cancel হয়ে গেছে।




// Timeline

// Timer শেষ হলে

// Click Start
//       │
//       ▼
// Timer Started
//       │
//       ▼
// 5 Seconds
//       │
//       ▼
// Welcome Mehraz
// Timer Cancel হলে
// Click Start
//       │
//       ▼
// Timer Started
//       │
//       ▼
// Click Cancel
//       │
//       ▼
// Timer Cancelled
//       │
//       ▼
// Nothing Happens
















// ================================================================================
// 🧠 Line by Line Explanation=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=
// ===============================================================================



let timer;

// Timer ID রাখার জন্য variable।

// timer = setTimeout(...)

// setTimeout() যে Timer ID return করে, সেটা timer-এ রাখলাম।

clearTimeout(timer);

// এই Timer ID ব্যবহার করে timer cancel করলাম।

// 🎯 কী shikhlam
// ✅ setTimeout() একটি Timer ID return করে।
// ✅ সেই Timer ID clearTimeout()-এ দিতে হয়।
// ✅ Delay শেষ হওয়ার আগে cancel করলে callback execute হয় না।
// ✅ Delay শেষ হয়ে গেলে clearTimeout() আর কোনো প্রভাব ফেলে না।













