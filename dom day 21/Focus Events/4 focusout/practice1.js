





// 🧪 Practice 1 — focusout হলে Message দেখা


// 🎯 Goal


// User input-এ click করবে
//         ↓
// কিছু লিখবে
//         ↓
// Input থেকে বের হবে
//         ↓
// focusout event fire হবে
//         ↓
// Message দেখাবে






const input = document.querySelector("#name");
const message = document.querySelector("#message");

input.addEventListener("focusout", function () {

    message.textContent = "You left the input field.";

});





// 👀 Output


// শুরুতে

// [ Enter your name ]
// User input-এ click করল

// Focus

// কিছুই হবে না।

// User input থেকে বের হয়ে গেল

// [ Mehraz ]

// You left the input field.














// ======================================= 🧠 Output Logic =================================



// User clicks input
//         ↓
// Input gets focus
//         ↓
// User types
//         ↓
// User clicks outside
//         ↓
// focusout event fires
//         ↓
// Function executes
//         ↓
// Message appears







//  ========================================= 🔍 Code Explanation  ======================================



// 1️⃣ Input select
// const input = document.querySelector("#name");

// Input element-টা select করলাম।





// 2️⃣ Message select
// const message = document.querySelector("#message");

// <p> element-টা select করলাম।





// 3️⃣ focusout event
// input.addEventListener("focusout", function () {

// মানে:

// Input focus হারালে function execute করো।






// 4️⃣ textContent
// message.textContent =
//     "You left the input field.";

// Message update করা হচ্ছে।










