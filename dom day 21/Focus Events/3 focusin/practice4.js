



// 🧪 Practice 4 — Dynamic Help Message Using focusin

// 🎯 Goal

// Name input
//      ↓
// Show → Enter your full name

// Email input
//       ↓
// Show → Enter a valid email address





const form = document.querySelector("#form");
const message = document.querySelector("#message");

form.addEventListener("focusin", function (event) {

    if (event.target.id === "name") {

        message.textContent = "Enter your full name";

    } else if (event.target.id === "email") {

        message.textContent = "Enter a valid email address";

    }

});



// 👀 Output

// User যদি Name field-এ click করে
// [ Enter your name ]

// Enter your full name

// User যদি Email field-এ click করে
// [ Enter your email ]

// Enter a valid email address










// ===================================== 🧠 Output Logic ====================================================


// User clicks an input
//           ↓
// focusin event fires
//           ↓
// Event bubbles to the form
//           ↓
// event.target.id is checked
//           ↓
// Name or Email?
//        ↓          ↓
//      Name       Email
//        ↓          ↓
// Show help     Show help
// message       message





// ===================================== 🔍 Code Explanation =========================================



// 1️⃣ event.target.id
// event.target.id

// এটা বলে দেয়, কোন input-এ focus হয়েছে।









// 2️⃣ প্রথম condition
// if (event.target.id === "name")

// যদি name input-এ focus হয়, তাহলে:

// message.textContent = "Enter your full name";









// 3️⃣ দ্বিতীয় condition
// else if (event.target.id === "email")

// যদি email input-এ focus হয়, তাহলে:

// message.textContent =
//     "Enter a valid email address";











// ================================= 🔥 focusin-এর ৪টা Practice Summary================================


// Practice 1	Form highlight
// Practice 2	event.target
// Practice 3	Active field highlight
// Practice 4	Dynamic help message













