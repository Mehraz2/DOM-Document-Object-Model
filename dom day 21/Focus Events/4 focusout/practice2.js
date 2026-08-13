








// 🧪 Practice 2 — কোন Field থেকে বের হয়েছে, সেটা দেখা

// 🎯 Goal

// Name field থেকে বের হলে

// → You left the name field.

// Email field থেকে বের হলে

// → You left the email field.




const form = document.querySelector("#form");
const message = document.querySelector("#message");

form.addEventListener("focusout", function (event) {

    message.textContent =
        `You left the ${event.target.id} field.`;

});






// 👀 Output

// Name field থেকে বের হলে
// You left the name field.
// Email field থেকে বের হলে
// You left the email field.









// ====================================== 🧠 Output Logic ===============================


// User focuses an input
//          ↓
// User types something
//          ↓
// User leaves the input
//          ↓
// focusout event fires
//          ↓
// Event bubbles to the form
//          ↓
// event.target.id detects the field
//          ↓
// Message changes







// ============================================🔍 Code Explanation ===========================





// 1️⃣ Form select
// const form = document.querySelector("#form");

// Parent form select করা হয়েছে।





// 2️⃣ Message select
// const message =
//     document.querySelector("#message");

// <p> element select করা হয়েছে।




// 3️⃣ event.target.id
// event.target.id

// এটা বলে দেয়:

// কোন input focus হারিয়েছে

// যদি user name input থেকে বের হয়:

// event.target.id

// ↓

// name

// যদি email input থেকে বের হয়:

// event.target.id

// ↓

// email














// 🔥 এখানে focusout কেন ব্যবহার করা হয়েছে?

// কারণ:

// input
//  ↓
// focusout
//  ↓
// Bubble
//  ↓
// form
//  ↓
// event.target
//  ↓
// Correct field detected

// blur ব্যবহার করলে parent form event ধরতে পারত না।













