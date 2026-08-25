




// 🟣 MutationObserver — Practice 3
// Topic: characterData + subtree

// এবার DOM-এর ভেতরের text change detect করব। সাথে subtree: true ব্যবহার করব, 
// যাতে target-এর ভিতরের nested element-এর পরিবর্তনও observe করা যায়।







const content3 = document.getElementById("content3");

const text3 = document.getElementById("text3");

const changeBtn3 = document.getElementById("changeBtn3");



const observer3 = new MutationObserver((mutations) => {

    mutations.forEach((mutation) => {

        if (mutation.type === "characterData") {

            console.log("Text changed!");

            console.log("Old value:", mutation.oldValue);

        }

    });

});






observer3.observe(content3, {
    characterData: true,
    subtree: true,
    characterDataOldValue: true
});


changeBtn3.addEventListener("click", () => {

    text3.textContent = "I Hate You So Much.....";

});









// 4️⃣ JS-এর Output 🎯

// প্রথমে:

// MutationObserver

// Original text

// Nested text

// [ Change Text ]

// Button click করলে:

// MutationObserver

// Original text

// I Hate You So Much....."!

// [ Change Text ]

// আর Console-এ:

// Text changed!
// Old value: Nested text

// অর্থাৎ Observer বুঝতে পারছে:

// আগে → "Nested text"

// পরে → "Text has been changed!




















// 5️⃣ Output Logic 🧠

// এখানে flow:

// Page Load
//     ↓
// content3 select
//     ↓
// MutationObserver তৈরি
//     ↓
// content3 observe
//     ↓
// subtree: true
//     ↓
// ভেতরের nested elements-ও observe
//     ↓
// Button Click
//     ↓
// text3-এর text পরিবর্তন
//     ↓
// Text node change
//     ↓
// MutationObserver detect
//     ↓
// characterData
//     ↓
// Callback
//     ↓
// Old value Console-এ

// এখানে একটা গুরুত্বপূর্ণ ব্যাপার:

// my target হলো:

// <div id="content3">

// কিন্তু পরিবর্তন হচ্ছে এর ভিতরের:

// <span id="text3">Nested text</span>

// তাহলে Observer কীভাবে সেটা detect করছে?

// এই option-এর কারণে:

// subtree: true

// এর মানে:

// শুধু content3 নয়, তার ভিতরের child এবং nested descendants-গুলোকেও observe করো।
















// 6️⃣ JS Code Logic 🔥
// Step 1 — Parent element select
// const content3 = document.getElementById("content3");

// এটাই আমাদের main target।













// Step 2 — Nested text select
// const text3 = document.getElementById("text3");

// এই element-এর text আমরা change করব।














// Step 3 — Observer তৈরি
// const observer3 = new MutationObserver((mutations) => {

// Mutation detect হলে callback চালু হবে।











// Step 4 — Mutation check
// mutations.forEach((mutation) => {

// প্রতিটা mutation check করছি।










// Step 5 — characterData check
// if (mutation.type === "characterData") {

// এখানে আমরা check করছি:

// Text node-এর data কি পরিবর্তন হয়েছে?











// Step 6 — পুরোনো text পাওয়া
// mutation.oldValue

// এটা আগের text দেখাবে।

// Output:

// Old value: Nested text

// এটার জন্য নিচের option দিতে হয়েছে:

// characterDataOldValue: true
// Step 7 — Observer configuration
// observer3.observe(content3, {
//     characterData: true,
//     subtree: true,
//     characterDataOldValue: true
// });

// এখানে তিনটা জিনিস:

// characterData: true

// → Text node change detect করবে।

// subtree: true

// → content3-এর ভিতরের nested elements-ও observe করবে।

// characterDataOldValue: true

// → Text পরিবর্তনের আগের value-টা পাওয়া যাবে।













// Step 8 — Text পরিবর্তন
// text3.textContent = "Text has been changed!";

// এই line-এর কারণে text পরিবর্তন হচ্ছে।

// Nested text
//      ↓
// Text has been changed!

// তারপর MutationObserver সেটা detect করছে।





