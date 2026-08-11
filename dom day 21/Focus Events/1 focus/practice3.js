

// 🎯 Goal

// Input-এ focus করলে:

// Focus
//   ↓
// Border → blue
//   ↓
// Message → "You are typing..."





const input = document.querySelector("#nameInput");
const message = document.querySelector("#message");

input.addEventListener("focus", function () {
    input.style.border = "2px solid blue";
    message.textContent = "You are typing...";
});







// 👀 Output

// প্রথমে:
//         Focus Event

//     ┌────────────────────────┐
//     │ Enter your name        │
//     └────────────────────────┘
// Input-এ click করলে:
//         Focus Event

//     ┏━━━━━━━━━━━━━━━━━━━━━━━━┓
//     ┃ Enter your name        ┃
//     ┗━━━━━━━━━━━━━━━━━━━━━━━━┛

//        You are typing...

// অর্থাৎ focus হওয়ার সাথে সাথে দুইটা কাজ হচ্ছে:

// Input focus
//     ↓
// Border blue
//     +
// Message show






// =====================================🧠 Logic ===========================================

// Page load
//    ↓
// Input select
//    ↓
// Message select
//    ↓
// User input-এ click করে
//    ↓
// focus event fire
//    ↓
// Function execute
//    ↓
// Border blue হয়
//    ↓
// Message show হয়





// ============================================🔍 Code Explanation ================================

// 1️⃣ Input select
// const input = document.querySelector("#nameInput");

// HTML-এর input element JavaScript-এ নিয়ে এলাম।




// 2️⃣ Message select
// const message = document.querySelector("#message");

// Message দেখানোর <p> element select করলাম।




// 3️⃣ Focus event
// input.addEventListener("focus", function () {

// এর অর্থ:

// Input-এ focus এলে এই function execute করো।




// 4️⃣ Border change
// input.style.border = "2px solid blue";

// Focus পাওয়ার পর input-এর border blue হয়ে যাবে।






// 5️⃣ Message change
// message.textContent = "You are typing...";

// <p> element-এর text পরিবর্তন করে message দেখানো হচ্ছে।















