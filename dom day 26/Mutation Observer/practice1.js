





// 🟣 MutationObserver — Practice 1
// Topic: childList — নতুন/পুরোনো child element detect করা

// এখানে আমরা এমন একটা box বানাবো যেখানে button চাপলে নতুন <p> element যোগ হবে। MutationObserver সেই নতুন element যোগ হওয়ার ঘটনাটা detect করবে।







const content1 = document.getElementById("content1");

const addBtn1 = document.getElementById("addBtn1");

const observer1 = new MutationObserver((mutations) => {

        mutations.forEach((mutations) => {

            if (mutations.type === "childList") {
                console.log("A Child Element was Added Or Removed");
                
            }
        });
});


observer1.observe(content1, {
    childList: true 
});

addBtn1.addEventListener("click", () => {

    const newParagraph = document.createElement("p");

    newParagraph.textContent = "New Paragraph Added";

    content1.append(newParagraph);
});


















// 4️⃣ JS-এর Output 🎯

// Page load করলে দেখব:

// MutationObserver

// Original paragraph

// [ Add Paragraph ]

// এখন Add Paragraph button-এ click করবে।

// তখন নতুন paragraph আসবে:

// MutationObserver

// Original paragraph
// New paragraph added!

// [ Add Paragraph ]

// আর Browser Console-এ:

// A child element was added or removed!

// দেখাব।

// Button যতবার click করব, ততবার নতুন <p> তৈরি হবে এবং MutationObserver সেটা detect করবে।

















// 5️⃣ Output Logic 🧠

// পুরো flow:

// Page Load
//    ↓
// content1 select
//    ↓
// MutationObserver তৈরি
//    ↓
// content1 observe করা শুরু
//    ↓
// User "Add Paragraph" click করে
//    ↓
// JavaScript নতুন <p> তৈরি করে
//    ↓
// <p> content1-এর ভিতরে যোগ হয়
//    ↓
// DOM পরিবর্তন হয়
//    ↓
// MutationObserver সেটা detect করে
//    ↓
// callback function চলে
//    ↓
// Console-এ message

// সবচেয়ে গুরুত্বপূর্ণ অংশ:

// আগে:

// content1
//  └── p

// Click
//  ↓



// পরে:
// content1
//  ├── p
//  └── p  ← নতুন

// এই নতুন child যোগ হওয়াটাই mutation।













// 6️⃣ JS Code Logic 🔥

// Step 1 — Target element ধরলাম
// const content1 = document.getElementById("content1");

//  content1-এর ভিতরের পরিবর্তন observe করব।









// Step 2 — Button ধরলাম
// const addBtn1 = document.getElementById("addBtn1");

// এই button click করলে নতুন element তৈরি হবে।











// Step 3 — MutationObserver তৈরি
// const observer1 = new MutationObserver((mutations) => {

// এখানে Observer তৈরি হলো।

// DOM-এ mutation হলে এই callback function চলবে।










// Step 4 — Mutation-এর মধ্যে loop
// mutations.forEach((mutation) => {

// mutations-এর মধ্যে detect হওয়া changes থাকে।

// একটা একটা করে সেগুলো check করছি।









// Step 5 — Mutation type check
// if (mutation.type === "childList") {

// এখানে আমরা check করছি:

// "এই mutation কি child element add/remove হওয়ার কারণে হয়েছে?"

// যেহেতু আমরা childList: true দিয়েছি, তাই child add/remove detect হবে।














// Step 6 — Console output
// console.log("A child element was added or removed!");

// Mutation detect হলে এই message console-এ দেখাবে।











// Step 7 — Observer চালু
// observer1.observe(content1, {
//     childList: true
// });

// এখানে দুইটা গুরুত্বপূর্ণ জিনিস:

// observer1.observe()

// → observation শুরু করছে।

// আর:

// childList: true

// → child element add/remove detect করবে।









// Step 8 — Button click
// addBtn1.addEventListener("click", () => {

// Button click হলে নিচের code চলবে।











// Step 9 — নতুন element তৈরি
// const newParagraph = document.createElement("p");

// একটা নতুন <p> তৈরি হলো।












// Step 10 — Text দেওয়া
// newParagraph.textContent = "New paragraph added!";

// নতুন paragraph-এর text সেট করলাম।
















// Step 11 — DOM-এ যোগ
// content1.append(newParagraph);

// এটাই Practice 1-এর সবচেয়ে গুরুত্বপূর্ণ line।

// কারণ এখানে:

// new <p>
//    ↓
// content1-এর child হলো
//    ↓
// DOM পরিবর্তন হলো
//    ↓
// MutationObserver detect করলো