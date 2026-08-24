



// এবার topic হলো attributes — element-এর class, id, data-* ইত্যাদি
//  attribute পরিবর্তন detect করা।









const text2 = document.getElementById("text2");

const changeBtn2 = document.getElementById("changeBtn2");


const observer2 = new MutationObserver((mutations) => {

    mutations.forEach((mutation) => {

        if (mutation.type === "attributes") {

            console.log("An attribute was changed!");

            console.log("Changed attribute:", mutation.attributeName);

        }

    });

});


observer2.observe(text2, {
    attributes: true
});


changeBtn2.addEventListener("click", () => {

    text2.classList.toggle("active2");

});

















// 4️⃣ JS-এর Output 🎯

// প্রথমে:

// MutationObserver

// Watch my class change!

// [ Change Class ]

// Button click করলে paragraph-এর class পরিবর্তন হবে।

// তখন CSS-এর কারণে text:

// লাল হবে
// বড় হবে

// Console-এ দেখাবে:

// An attribute was changed!
// Changed attribute: class

// আবার button click করলে active2 class remove হবে এবং আবার আগের অবস্থায় ফিরে যাবে।

// Console-এ আবার:

// An attribute was changed!
// Changed attribute: class












// 5️⃣ Output Logic 🧠

// পুরো flow:

// Page Load
//     ↓
// text2 select
//     ↓
// MutationObserver তৈরি
//     ↓
// attributes observe
//     ↓
// User Button Click
//     ↓
// class toggle
//     ↓
// class attribute পরিবর্তন
//     ↓
// MutationObserver detect
//     ↓
// Callback চলে
//     ↓
// attributeName পাওয়া যায়
//     ↓
// Console Output




// আগে:

// <p id="text2">



// Button click করার পরে:

// <p id="text2" class="active2">

// এখানে নতুন element তৈরি হয়নি।

// শুধু class attribute পরিবর্তন হয়েছে।

// এটাই Practice 2-এর মূল concept।











// 6️⃣ JS Code Logic 🔥

// Step 1 — Element select
// const text2 = document.getElementById("text2");

// যে element-এর attribute observe করব সেটা ধরলাম।










// Step 2 — Button select
// const changeBtn2 = document.getElementById("changeBtn2");

// এই button দিয়ে class পরিবর্তন করব।















// Step 3 — Observer তৈরি
// const observer2 = new MutationObserver((mutations) => {

// DOM mutation detect হলে callback চলবে।












// Step 4 — Mutation loop
// mutations.forEach((mutation) => {

// প্রতিটা detected mutation check করছি।















// Step 5 — Mutation type check
// if (mutation.type === "attributes") {

// এখানে আমরা check করছি:

// Attribute কি পরিবর্তন হয়েছে?











// Step 6 — কোন attribute change হয়েছে?
// mutation.attributeName

// এটা আমাদের বলে কোন attribute পরিবর্তন হয়েছে।

// এখানে output হবে:

// class

// কারণ আমরা class পরিবর্তন করেছি।











// Step 7 — Attribute observe করা
// observer2.observe(text2, {
//     attributes: true
// });

// এখানে:

// attributes: true

// মানে:

// text2 element-এর attributes পরিবর্তন হলে আমাকে জানাও।









// Step 8 — Class পরিবর্তন
// text2.classList.toggle("active2");

// toggle():

// active2 নেই
//     ↓
// add করবে

// active2 আছে
//     ↓
// remove করবে

// তাই প্রতিবার click করলে attribute পরিবর্তন হবে।









