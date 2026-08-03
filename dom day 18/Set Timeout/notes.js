



// 🤔 setTimeout() কী?

// setTimeout() হলো JavaScript-এর একটি Timing Function।

// এটি কোনো কাজকে নির্দিষ্ট সময় (delay) পরে মাত্র একবার execute করে।

// সহজ ভাষায়:

// "এখনই কাজ করো না। ২ সেকেন্ড পরে একবার করো।"

// Real Life Example 🌍

// ধরো  Swiggy/Foodpanda/Zomato-তে order করলে।

// Order Confirm
//         │
//         ▼
// Wait 5 Seconds
//         │
//         ▼
// Show "Order Confirmed"

// এখানে অপেক্ষা করার কাজটাই setTimeout()-এর মতো।





// Syntax
setTimeout(function () {

//   // যে code পরে চলবে

}, delay);








// অথবা Arrow Function দিয়ে:

setTimeout(() => {

  console.log("Hello");

}, 2000);






// Parameters
setTimeout(callback, delay);





// 1️⃣ callback

// যে function পরে execute হবে।

() => {
   console.log("Hello");
}









// 2️⃣ delay

Milliseconds (ms)

// 1000 = 1 second

// 2000 = 2 seconds

// 5000 = 5 seconds

// 10000 = 10 seconds




// Example 1
console.log("Start");

setTimeout(() => {

    console.log("Hello Mehraz");

}, 3000);

console.log("End");



// Output

// Start

// End

// (3 Seconds Later)

// Hello Mehraz
// 🤔 "Hello" আগে কেন আসেনি?






// JavaScript line by line execute করে।

console.log("Start");

// ↓






setTimeout()



// JavaScript দেখে—


// "এটা এখন execute করব না।
// Timer শুরু করি।"

// ↓

console.log("End");

// ↓

// ৩ সেকেন্ড পরে

// Hello Mehraz

// Timeline


// 0 sec

// Start

// ↓

// Timer Started

// ↓

// End

// ↓

// Waiting...

// ↓

// 3 sec

// Hello Mehraz
// Milliseconds
// 1000 = 1 sec

// 2000 = 2 sec

// 3000 = 3 sec

// 5000 = 5 sec

// 10000 = 10 sec




// Return Value

// setTimeout() একটি Timer ID return করে।

const timer = setTimeout(() => {

    console.log("Hello");

}, 2000);



console.log(timer);

// Output হতে পারে:


// 1

// অথবা

// 7

// বা অন্য কোনো integer।

// এই ID-টাই পরে clearTimeout()-এ ব্যবহার করা হয়।




// Common Mistake ❌
setTimeout(console.log("Hello"),2000);

// এটা ভুল।

// কারণ console.log() সঙ্গে সঙ্গে execute হয়ে যায়।




// সঠিক:

setTimeout(() => {

   console.log("Hello");

},2000);






// কোথায় ব্যবহার হয়?
// ⏳ Loading Screen
// 🔔 Notification
// 🎮 Game Delay
// 💬 Chat Message Delay
// 🎞️ Animation
// ⏱️ Auto Hide Alert
// 🎉 Welcome Message




// 🧠 মনে রাখার Shortcut
setTimeout()

// ✔ একবার কাজ করে

// ✔ নির্দিষ্ট সময় পরে

// ✔ Delay ব্যবহার করে

// ✔ Timer ID Return করে

// ✔ clearTimeout() দিয়ে Cancel করা যায়









