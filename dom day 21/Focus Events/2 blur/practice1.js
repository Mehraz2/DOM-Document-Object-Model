





// 🧪 Practice 1 — Blur হলে Background Change

// 🎯 Goal
// Input Focus
//     ↓
// User অন্য জায়গায় click করে
//     ↓
// blur event fire
//     ↓
// Background lightgray হবে







const input = document.querySelector("#nameInput");

input.addEventListener("blur", function () {
    input.style.backgroundColor = "lightgray";
});



// 👀 Output

// Step 1
// [ Enter your name ]

// User click করল:

// Focus পেল

// কিছু হবে না।




// Step 2

// User input থেকে বের হয়ে অন্য জায়গায় click করল:

// blur
//  ↓
// backgroundColor = lightgray

// Result:

// [ Enter your name ]

// Input-এর background lightgray হয়ে যাবে।















// =========================================== 🧠 Logic =============================

// Page Load
//     ↓
// Input Select
//     ↓
// User Focus দেয়
//     ↓
// User Input ছাড়ে
//     ↓
// blur event fire
//     ↓
// Function Execute
//     ↓
// Background Change













//============================================== 🔍 Code Explanation =========================

// Element Select
// const input = document.querySelector("#nameInput");

// Input element select করলাম।

// Blur Event Listen
// input.addEventListener("blur", function () {

// মানে:

// Input focus হারালে function চালাও।

// Style Change
// input.style.backgroundColor = "lightgray";

// Focus চলে গেলে background lightgray হবে।





















// ================================= 🎯 Focus Practice 1 vs Blur Practice 1 ===================================

// Focus
// input.addEventListener("focus", function () {
//     input.style.backgroundColor = "yellow";
// });
// Focus আসলে কাজ হয়
// Blur
// input.addEventListener("blur", function () {
//     input.style.backgroundColor = "lightgray";
// });
// Focus চলে গেলে কাজ হয়

// এটাই মূল পার্থক্য। 🔥


