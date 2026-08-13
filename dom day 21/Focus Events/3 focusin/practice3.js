


// 🧪 Practice 3 — Active Input Highlight

// 🎯 Goal

// User clicks Name input
//           ↓
// Name input highlight

// User clicks Email input
//           ↓
// Email input highlight





const form = document.querySelector("#form");

form.addEventListener("focusin", function (event) {

    const inputs = form.querySelectorAll("input");

    inputs.forEach(function (input) {
        input.classList.remove("active");
    });

    event.target.classList.add("active");

});






// 👀 Output


// শুরুতে

// [ Enter your name ]

// [ Enter your email ]

// Name input-এ click করলে
// [ Enter your name ]  ← Blue border

// [ Enter your email ]

// Email input-এ click করলে
// [ Enter your name ]

// [ Enter your email ] ← Blue border




//=-=-=--=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=🧠 Output Logic --=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=



// User clicks an input
//           ↓
// focusin event fires
//           ↓
// Event bubbles to the form
//           ↓
// All active classes are removed
//           ↓
// The clicked input gets the active class





// =-=-=-=-=-===-=-=-==-=-=-==-=-=-=-=-=-🔍 Code Explanation -=-=-=-===-=-==-==-=-=-=-===-=-=-==--



// 1️⃣ সব input select করা
// const inputs = form.querySelectorAll("input");

// querySelectorAll() সব input-কে একসাথে select করে।




// 2️⃣ forEach()
// inputs.forEach(function (input) {

// একটা একটা করে সব input-এর ওপর loop চালানো হচ্ছে।



// 3️⃣ পুরোনো class remove করা
// input.classList.remove("active");

// আগের input-এ যদি active class থাকে, তাহলে সেটা remove করা হচ্ছে।




// 4️⃣ event.target
// event.target

// যে input-এ user click করেছে, সেটাকে return করে।





// 5️⃣ নতুন class add করা
// event.target.classList.add("active");

// বর্তমান input-এ active class add করা হচ্ছে।






// -=-=-=-=-=-=-=-=-=-=-=-=-= 🔥 এখানে focusin কেন ব্যবহার করা হয়েছে? -=-=-==-==-==-==-===-=-=-=-=-=-=-=-==


// কারণ:

// Input
//    ↓
// focusin
//    ↓
// Bubble
//    ↓
// Form
//    ↓
// event.target
//    ↓
// Correct input found

// focus ব্যবহার করলে parent form event ধরতে পারত না।




