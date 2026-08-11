




// 🎯 Goal

// User যখন input-এ focus করবে:

// Input focus
//     ↓
// Background color → yellow



const input = document.querySelector("#nameInput");

input.addEventListener("focus", function () {
    input.style.backgroundColor = "yellow";
});




// 👀 Output
// Page load হওয়ার সময়:
//         Focus Event

//     ┌────────────────────┐
//     │ Click here         │
//     └────────────────────┘

// Input-এ click করলে:
//         Focus Event

//     ┌────────────────────┐
//     │ Click here         │
//     └────────────────────┘
//           🟨

// Input-এর background yellow হয়ে যাবে।








// ================================🧠 Logic============================================



// পুরো logic:

// User input-এ click করে
//         ↓
// Input focus পায়
//         ↓
// focus event fire হয়
//         ↓
// addEventListener-এর function চলে
//         ↓
// backgroundColor = "yellow"
//         ↓
// Input yellow হয়ে যায়



// ====================================🔍 Code Explanation =========================================

// 1️⃣ Element select
// const input = document.querySelector("#nameInput");

// HTML-এর:

// <input id="nameInput">

// element-টাকে JavaScript-এ নিয়ে এলাম।



// 2️⃣ addEventListener()
// input.addEventListener("focus", function () {

// এখানে বলছি:

// input element-এ যখন focus event ঘটবে, তখন এই function চালাও।




// 3️⃣ Style change
// input.style.backgroundColor = "yellow";

// Focus পাওয়ার পর input-এর background yellow করে দিচ্ছি।







// 🔥 সবচেয়ে গুরুত্বপূর্ণ

// এখানে:

// "focus"

// হলো event name।

// আর:

// function () {
//     input.style.backgroundColor = "yellow";
// }

// হলো event ঘটলে যে কাজ হবে।








