












// 🧪 Practice 3 — Blur দিয়ে Input Validation

// 🎯 Goal

// User input-এ কিছু লিখে বের হলে আমরা check করব:

// Input থেকে বের
//       ↓
//     blur
//       ↓
// Input empty?
//    ↙       ↘
//  Yes        No
//  ↓           ↓
// Error      Success





const input = document.querySelector("#nameInput");
const message = document.querySelector("#message");

input.addEventListener("blur", function () {

    if (input.value.trim() === "") {
        message.textContent = "Name is required.";
    } else {
        message.textContent = "Name looks good!";
    }

});




// 👀 Output

// Case 1 — কিছু না লিখে বের হলে

// Input
// [                    ]

//       ↓ blur

// Name is required.
// Case 2 — Name লিখে বের হলে

// Input
// [ Mehraz             ]

//       ↓ blur

// Name looks good!








// ================================================= 🧠 Logic ==============================================

// এবার আসল logic:

// User input-এ focus করে
//         ↓
// Name লিখে / না লিখে
//         ↓
// Input থেকে বের হয়
//         ↓
// blur event
//         ↓
// input.value check
//         ↓
//      ┌───────────────┐
//      │ Empty?        │
//      └───────────────┘
//         ↓        ↓
//        YES       NO
//         ↓        ↓
//      Error     Success






// ========================================= 🔍 Code Explanation =========================


// 1️⃣ Element select
// const input = document.querySelector("#nameInput");
// const message = document.querySelector("#message");

// Input এবং message element select করলাম।





// 2️⃣ Blur event
// input.addEventListener("blur", function () {

// Input যখন focus হারাবে তখন validation শুরু হবে।







// 3️⃣ Value নেওয়া
// input.value

// Input-এর ভিতরে user কী লিখেছে সেটা পাওয়া যায়।

// যেমন:

// input.value
//      ↓
// "Mehraz"







// 4️⃣ trim() কেন?
// input.value.trim()

// ধরো user শুধু space দিল:

// "     "

// সাধারণভাবে এটা technically empty string না।

// কিন্তু:

// "     ".trim()

// হলে:

// ""

// তাই validation reliable হয়।








// 5️⃣ if
// if (input.value.trim() === "") {

// মানে:

// Input-এর value খালি কিনা check করো।

// খালি হলে:

// message.textContent = "Name is required.";











// 6️⃣ else
// else {
//     message.textContent = "Name looks good!";
// }

// Input খালি না হলে success message দেখাবে।










// 🔥 এখানে blur-এর আসল ব্যবহার 

// আমরা blur দিয়ে validation করছি না।

// blur শুধু বলে দিচ্ছে কখন validation চালাতে হবে।

// blur
//  ↓
// Validation শুরু
//  ↓
// value check
//  ↓
// if / else
//  ↓
// Result

// এই conceptটা খুব গুরুত্বপূর্ণ। 🧠

