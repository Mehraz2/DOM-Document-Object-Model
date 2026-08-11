








// 🎯 Goal

// User input-এ focus করলে একটি instruction দেখাবে:

// Focus
//   ↓
// "Please enter your full name"

// আর input-এর placeholder-ও পরিবর্তন হবে।










const input = document.querySelector("#nameInput");
const message = document.querySelector("#message");

input.addEventListener("focus", function () {
    input.placeholder = "Enter your full name";
    message.textContent = "Please enter your full name";
});




// 👀 Output

// প্রথমে:
//        Registration Form

//           Full Name

//     ┌────────────────────┐
//     │ Enter your name    │
//     └────────────────────┘
// Input-এ focus করলে:
//        Registration Form

//           Full Name

//     ┌────────────────────┐
//     │ Enter your full    │
//     │ name               │
//     └────────────────────┘

//     Please enter your full name



//===================================== 🧠 Logic =============================


// Page Load
//    ↓
// Input + Message select
//    ↓
// User input-এ focus করে
//    ↓
// focus event fire
//    ↓
// Placeholder পরিবর্তন
//    +
// Instruction message দেখানো




// ================================== 🔍 Code Explanation==============================


// 1️⃣ Element select
// const input = document.querySelector("#nameInput");
// const message = document.querySelector("#message");

// দুইটা element JavaScript-এ নিয়ে এলাম।




// 2️⃣ Focus event
// input.addEventListener("focus", function () {

// মানে:

// Input-এ focus এলে function চালাও।




// 3️⃣ Placeholder পরিবর্তন
// input.placeholder = "Enter your full name";

// Input-এর placeholder নতুন text দিয়ে replace করলাম।




// 4️⃣ Instruction দেখানো
// message.textContent = "Please enter your full name";

// User-কে কী করতে হবে সেটা জানিয়ে দিলাম।