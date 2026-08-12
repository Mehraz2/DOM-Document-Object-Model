





// 🧪 Practice 2 — Blur হলে Message Show

// 🎯 Goal

// User input-এ focus করবে → কিছু হবে না।

// User input থেকে বের হবে → message দেখাবে:

// Please complete this field.






const input = document.querySelector("#nameInput");
const message = document.querySelector("#message");

input.addEventListener("blur", function () {
    message.textContent = "Please complete this field.";
});





// 👀 Output

// প্রথমে:
//           Blur Event

//     ┌────────────────────┐
//     │ Enter your name    │
//     └────────────────────┘

// কোনো message নেই।

// Input-এ click করলে:
// Focus
// ↓
// কিছু পরিবর্তন হবে না
// Input থেকে বাইরে click করলে:
//           Blur Event

//     ┌────────────────────┐
//     │ Enter your name    │
//     └────────────────────┘

//     Please complete this field.








// ====================================== 🧠 Logic ======================================

// Page Load
//    ↓
// Input + Message select
//    ↓
// User input-এ click করে
//    ↓
// Input gets focus
//    ↓
// User input থেকে বের হয়
//    ↓
// blur event fires
//    ↓
// Function executes
//    ↓
// message.textContent পরিবর্তন
//    ↓
// Message দেখা যায়









// ============================================== 🔍 Code Explanation ============================


// 1️⃣ Input select
// const input = document.querySelector("#nameInput");

// HTML-এর input element-টা select করলাম।






// 2️⃣ Message select
// const message = document.querySelector("#message");

// যেখানে message দেখাবো সেই <p> element-টা select করলাম।







// 3️⃣ blur event
// input.addEventListener("blur", function () {

// মানে:

// Input focus হারালে এই function চালাও।





// 4️⃣ Message পরিবর্তন
// message.textContent = "Please complete this field.";

// Blur হওয়ার পরে <p> element-এর text পরিবর্তন করে message দেখানো হচ্ছে।




// 🔥 Practice 1 vs Practice 2

// Practice 1:

// input.addEventListener("blur", function () {
//     input.style.backgroundColor = "#dddddd";
// });







// ➡️ Blur → Background change

// Practice 2:

// input.addEventListener("blur", function () {
//     message.textContent = "Please complete this field.";
// });



// ➡️ Blur → Message show

// একই blur event, কিন্তু event ঘটার পর ভিন্ন DOM কাজ। 🧠





