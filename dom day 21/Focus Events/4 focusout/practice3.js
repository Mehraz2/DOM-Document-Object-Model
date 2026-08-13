






// 🧪 Practice 3 — focusout দিয়ে Multiple Input Validation

// 🎯 Goal

// User কোনো field থেকে বের হলে:

// focusout
//    ↓
// কোন field?
//    ↓
// value empty?
//    ↓
// YES → Error
// NO  → Success



const form = document.querySelector("#form");
const message = document.querySelector("message");

form.addEventListener("focusout", function (event) {

       if(event.terget.value.trim() === "") {

           
        message.textContent =
            `${event.target.id} is required.`;

    } else {

        message.textContent =
            `${event.target.id} is valid.`;
       }
});






// 👀 Output



// ১️⃣ Name empty রেখে বের হলে
// [ Enter your name ]

// name is required.
// ২️⃣ Name লিখে বের হলে
// [ Mehraz ]

// name is valid.
// ৩️⃣ Email empty রেখে বের হলে
// [ Enter your email ]

// email is required.




// ================================== 🧠 Output Logic ============================


// User enters Name
//        ↓
// Leaves Name
//        ↓
// focusout
//        ↓
// event.target
//        ↓
// value check
//        ↓
//    Empty?
//    ↙    ↘
//  YES     NO
//  ↓        ↓
// Error   Success




// ========================================== 🔍 Code Explanation ===============================



// 1️⃣ Parent form-এ listener
// form.addEventListener("focusout", function (event) {

// এখানে প্রতিটি input-এর জন্য আলাদা listener লাগেনি।

// কারণ focusout bubble করে।

// input
//   ↓
// focusout
//   ↓
// form





// 2️⃣ event.target
// event.target

// যে input থেকে focus চলে গেছে সেটাকে ধরে।





// 3️⃣ Value check
// event.target.value.trim() === ""

// Input খালি কিনা check করছি।

// trim() extra spaces বাদ দেয়।





// 4️⃣ Empty হলে
// message.textContent =
//     `${event.target.id} is required.`;





// যেমন:

// name is required.










// 5️⃣ Value থাকলে
// message.textContent =
//     `${event.target.id} is valid.`;

// যেমন:

// email is valid.












// 🔥 এই Practice-এর আসল শিক্ষা

// আগে এমন করতে পারত:

// name.addEventListener("focusout", ...);

// email.addEventListener("focusout", ...);

// কিন্তু এখান:

// form.addEventListener("focusout", ...);

// একটা listener → অনেক input।

// এটাই focusout + bubbling-এর practical power। 💪







