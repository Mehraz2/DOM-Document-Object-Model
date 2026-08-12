



// 🧪 Practice 4 — Blur হলে Form Validation + Border Change

// 🎯 Goal

// User input থেকে বের হবে
//           ↓
//        blur
//           ↓
// Input খালি?
//      ↓          ↓
//    Yes          No
//     ↓            ↓
// Red Border    Green Border
//     ↓            ↓
// Error         Success
// Message       Message



const input = document.querySelector("#nameInput");
const message = document.querySelector("#message");

input.addEventListener("blur", function () {

    if (input.value.trim() === "") {

        input.style.border = "2px solid red";

        message.textContent = "Name is required.";

    } else {

        input.style.border = "2px solid green";

        message.textContent = "Registration completed.";

    }

});






// 🧠 Output Logic

// User input-এ click করে
//             ↓
// User কিছু লেখে
//             ↓
// Input থেকে বের হয়
//             ↓
// blur event fire হয়
//             ↓
// Input-এর value check হয়
//             ↓
//         Empty?
//        ↙      ↘
//      Yes      No
//       ↓        ↓
// Red Border   Green Border
//       ↓        ↓
// Error       Success
// Message      Message







// ==============================================🔍 Code Explanation =================================

// 1️⃣ Input এবং Message select
// const input = document.querySelector("#nameInput");
// const message = document.querySelector("#message");

// দুইটা element JavaScript-এ নিয়ে এলাম।




// 2️⃣ blur event
// input.addEventListener("blur", function () {

// Input focus হারালেই function execute হবে।




// 3️⃣ if condition
// if (input.value.trim() === "")

// Input খালি কিনা check করছি।




// 4️⃣ Error state
// input.style.border = "2px solid red";

// message.textContent = "Name is required.";

// খালি হলে red border এবং error message দেখাবে।





// 5️⃣ Success state
// input.style.border = "2px solid green";

// message.textContent = "Registration completed.";

// Value থাকলে green border এবং success message দেখাবে।







// 🔥 blur-এর ৪টা Practice Summary

// Practice 1	Background change
// Practice 2	Message show
// Practice 3	Basic validation
// Practice 4	Validation + Border + Message












