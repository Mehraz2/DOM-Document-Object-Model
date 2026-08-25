






// 🟣 MutationObserver — Practice 4

// Topic: Real-world Combined Practice 🚀

// এবার Practice 1–3-এর concept একসাথে ব্যবহার করব:

// childList
// attributes
// subtree

// একটা ছোট Dynamic Notification System বানাবো। Button চাপলে নতুন notification যোগ হবে,
//  notification-এর class পরিবর্তন হবে—আর MutationObserver সব change detect করবে।




const notification4 = document.getElementById("notification4");

const addBtn4 = document.getElementById("addBtn4");

const observer4 = new MutationObserver((mutations) => {

    mutations.forEach((mutations) => {

        if (mutation.type === "childList") {

            console.log("New Notification Added");
            
        }

        if (mutation.type === "attributes") {

            console.log("Attribute Changed", mutation.attributeName);
            
        }
    });
});





addBtn4.addEventListener("click", () => {

    const newNotification = document.createElement("div");

    newNotification.classList.add("item4");

    newNotification.textContent = "PIzzza and Kacci khwa hobe Vorpur......";

    notification4.append(newNotification);

    setTimeout(() => {

        newNotification.classList.add("active4");

    }, 500);

});














// 4️⃣ JS-এর Output 🎯

// Page load করলে:

// Notification Panel

// ┌──────────────────────────┐
// │ Welcome to the website!  │
// └──────────────────────────┘

// [ Add Notification ]

// Button click করলে নতুন notification যোগ হবে:

// Notification Panel

// ┌──────────────────────────┐
// │ Welcome to the website!  │
// ├──────────────────────────┤
// │ New notification received!│
// └──────────────────────────┘

// [ Add Notification ]

// প্রায় 0.5 second পরে নতুন notification-এর background green হবে।

// Console-এ:

// New notification added!

// তারপর:

// Attribute changed: class

// কারণ নতুন notification-এর class পরিবর্তন হয়েছে:

// item4
//   ↓
// item4 active4


















// 5️⃣ Output Logic 🧠

// পুরো system:

// Page Load
//      ↓
// notification4 observe
//      ↓
// User Button Click
//      ↓
// New notification তৈরি
//      ↓
// notification4-এর ভিতরে append
//      ↓
// childList mutation
//      ↓
// Observer detect
//      ↓
// Console message
//      ↓
// 500ms wait
//      ↓
// active4 class add
//      ↓
// attributes mutation
//      ↓
// Observer আবার detect
//      ↓
// Console message











// এখানে একটা action থেকে দুই ধরনের mutation হচ্ছে।


// প্রথম mutation:
// New <div> added
//        ↓
// childList



// দ্বিতীয় mutation:
// class পরিবর্তন
//        ↓
// attributes

// এটাই Practice 4-এর আসল point। 🔥












// 6️⃣ JS Code Logic

// Step 1 — Notification container ধরলাম
// const notification4 = document.getElementById("notification4");

// এই container-এর ভিতরের পরিবর্তন observe করব।














// Step 2 — Button ধরলাম
// const addBtn4 = document.getElementById("addBtn4");

// Button click করলে notification তৈরি হবে।












// Step 3 — Observer তৈরি
// const observer4 = new MutationObserver((mutations) => {

// DOM mutation হলে callback চলবে।












// Step 4 — Mutation loop
// mutations.forEach((mutation) => {

// প্রতিটি mutation check করছি।













// Step 5 —Child change detect
// if (mutation.type === "childList") {

//     console.log("New notification added!");

// }

// নতুন child যোগ হলে এটা চলবে।


















// Step 6 — Attribute change detect
// if (mutation.type === "attributes") {

//     console.log(
//         "Attribute changed:",
//         mutation.attributeName
//     );

// }

// Class পরিবর্তন হলে:

// Attribute changed: class

// দেখাবে।
















// Step 7 — Observer configuration
// observer4.observe(notification4, {
//     childList: true,
//     attributes: true,
//     subtree: true
// });

// এখানে তিনটা option একসাথে:

// childList
//    ↓
// Child add/remove

// attributes
//    ↓
// Attribute change

// subtree
//    ↓
// ভেতরের nested elements-ও observe

















// Step 8 — নতুন notification তৈরি
// const newNotification = document.createElement("div");

// নতুন <div> তৈরি হলো।














// Step 9 — Class দেওয়া
// newNotification.classList.add("item4");

// নতুন notification-এর initial class হলো:

// item4









// Step 10 — Text দেওয়া
// newNotification.textContent = "New notification received!";

// Notification-এর text সেট করলাম।












// Step 11 — DOM-এ যোগ
// notification4.append(newNotification);

// এখানে নতুন child যোগ হলো।

// তাই:

// childList mutation
//        ↓
// Observer detect













// Step 12 — 500ms পরে class change
// setTimeout(() => {

//     newNotification.classList.add("active4");

// }, 500);

// 500ms পরে:

// item4
//   ↓
// item4 active4

// Class attribute পরিবর্তন হয়েছে।

// তাই আবার:

// attributes mutation

// detect হবে।




