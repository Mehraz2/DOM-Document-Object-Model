




// 🎯 Goal

// Input-এ focus করলে:

// Input focus
//     ↓
// Message দেখাবে
//     ↓
// "Input is focused!"




const input = document.querySelector("#nameInput");
const message = document.querySelector("#message");

input.addEventListener("focus", function () {
    message.textContent = "Input is focused!";
});




// 👀 Output
// প্রথমে:
//         Focus Event

//     ┌────────────────────────┐
//     │ Enter your name        │
//     └────────────────────────┘

// কোনো message নেই।

// Input-এ click করলে:
//         Focus Event

//     ┌────────────────────────┐
//     │ Enter your name        │
//     └────────────────────────┘

//        Input is focused!




// ========================================🧠 Logic ===========================================

// Page load
//    ↓
// Input + Message select
//    ↓
// User input-এ click করে
//    ↓
// focus event fire
//    ↓
// Event listener function চলে
//    ↓
// message.textContent change
//    ↓
// "Input is focused!" দেখায়




//================================================= 🔍 Code Explanation  ================================



// 1️⃣ Input select
// const input = document.querySelector("#nameInput");

// HTML থেকে input element নিয়ে input variable-এ রাখলাম।



// 2️⃣ Message select
// const message = document.querySelector("#message");

// HTML-এর:

// <p id="message"></p>

// element-টা select করলাম।



// 3️⃣ Focus event
// input.addEventListener("focus", function () {

// মানে:

// Input-এ focus এলে function চালাও।



// 4️⃣ Text change
// message.textContent = "Input is focused!";

// Focus হওয়ার পর <p> element-এর text পরিবর্তন করছি।

// আগে:

// <p id="message"></p>

// ছিল empty।

// Focus হওয়ার পর:

// Input is focused!

// হয়ে যাচ্ছে।