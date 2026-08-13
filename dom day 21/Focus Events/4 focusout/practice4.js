


// // 🧪 Practice 4 — Multiple Field Validation

// // 🎯 Goal

// // Name field
// //      ↓
// // focusout
// //      ↓
// // Validate




// Email field
//       ↓
// focusout
//       ↓
// Validate




// যদি field খালি হয়:

// Name is required.

// অথবা:

// Email is required.






const form = document.querySelector("#form");
const message = document.querySelector("#message");

form.addEventListener("focusout", function (event) {

    if (event.target.value.trim() === "") {

        message.textContent =
            `${event.target.id} is required.`;

    } else {

        message.textContent =
            `${event.target.id} looks good.`;

    }

});






// 👀 Output

// Name field খালি রেখে বের হলে
// name is required.

// Email field খালি রেখে বের হলে
// email is required.

// Name field-এ কিছু লিখে বের হলে
// name looks good.

// Email field-এ কিছু লিখে বের হলে
// email looks good.








// ================================ 🧠 Output Logic ================================


// User types
//       ↓
// User leaves a field
//       ↓
// focusout event fires
//       ↓
// Event bubbles to the form
//       ↓
// event.target identifies the field
//       ↓
// value.trim() checks the value
//       ↓
// Empty?
//    ↓        ↓
//  Yes        No
//  ↓           ↓
// Error     Success

















// ============================ 🔍 Code Explanation ====================================



// event.target.id
// event.target.id

// বলে দেয় কোন field থেকে user বের হয়েছে।

// event.target.value
// event.target.value

// Input-এর value নিয়ে আসে।

// Template Literal
// `${event.target.id} is required.`

// যদি name field খালি হয়:

// name is required.

// যদি email field খালি হয়:

// email is required.







// 🔥 Day 21 Summary



// Topic	                                        Bubbling

// focus	                                          ❌
// blur                                             	❌
// focusin                                       	✅
// focusout	                                           ✅





