




// 🧪 Practice 2 — কোন Input-এ Focus হয়েছে তা দেখানো


// 🎯 Goal

// User যে input-এ click করবে, তার নাম message হিসেবে দেখানো হবে।

// Name input
//      ↓
// "You are typing in the Name field"

// Email input
//       ↓
// "You are typing in the Email field"




const form = doucuent.querysector("#form");
const message = document.querySelector("#message");

form.addEventListener("focusin", function (event) {

    message.textContent = 
     `You are typing in the ${event.target.id} field`;
})






// 🧠 Output Logic

// User clicks an input
//           ↓
// Input gets focus
//           ↓
// focusin event fires
//           ↓
// Event bubbles to the form
//           ↓
// event.target identifies the input
//           ↓
// Message changes






// ================================== 🔍 Code Explanation ===========================




// 1️⃣ Form select
// const form = document.querySelector("#form");

// Parent form select করলাম।





// 2️⃣ Message select
// const message = document.querySelector("#message");

// Message দেখানোর জন্য <p> element select করলাম।






// 3️⃣ event parameter
// function (event)

// event object event সম্পর্কে তথ্য দেয়।




// 4️⃣ event.target
// event.target

// এটা বলে দেয়:

// কোন element event trigger করেছে।





// 5️⃣ event.target.id

// যদি user এখানে click করে:

// <input id="name">

// তাহলে:

// event.target.id

// ফলাফল হবে:

// name






// 🔥 focus দিয়ে এটা করা কঠিন, focusin দিয়ে সহজ

// কারণ:

// focus
//  ↓
// No bubbling





// কিন্তু:




// focusin
//  ↓
// Bubbling
//  ↓
// event.target
//  ↓
// Parent form সব input নিয়ন্ত্রণ করতে পারে

