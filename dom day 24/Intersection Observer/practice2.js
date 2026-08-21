



// 🟢 Day 24 — Practice 2: Multiple Elements

// এবার একসাথে একাধিক element observe করব।
// Practice 1-এ ছিল box1; এবার থাকবে box2, box3, box4।







const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");

const observer2 = new IntersectionObserver((entries) => {

    entries.forEach((entry2) => {
        if (entry2.isIntersecting) {
            console.log(entry2.target.id + "is visible");
            
        } else {
             console.log(entry2.target.id + "is not visible!");
             
        }
    });
});

observer2.observe(box2);
observer2.observe(box3);
observer2.observe(box4);








// 4️⃣ JS Output 🖥️

// Page load করলে প্রথমে যেগুলো viewport-এর বাইরে থাকবে:

// box2 is not visible!
// box3 is not visible!
// box4 is not visible!

// Scroll করে box2 viewport-এর মধ্যে আনলে:

// box2 is visible!

// আর box2 বাইরে চলে গেলে:

// box2 is not visible!

// তারপর box3-এ গেলে:

// box3 is visible!

// তারপর box4-এ গেলে:

// box4 is visible!











// 5️⃣ Output Logic 🧠

// Practice 1:

// একটা element
//      ↓
// entries[0]
//      ↓
// check

// Practice 2:

// একাধিক element
//      ↓
// entries
//      ↓
// forEach()
//      ↓
// প্রতিটি entry আলাদাভাবে check

// যেমন:

// box2 → visible?
// box3 → visible?
// box4 → visible?

// যে box viewport-এর মধ্যে আসবে, সেটার নাম console-এ দেখাবে।











// 6️⃣ JavaScript Explanation


// Step 1 — তিনটা box select
// const box2 = document.getElementById("box2");
// const box3 = document.getElementById("box3");
// const box4 = document.getElementById("box4");

// তিনটা আলাদা element JavaScript-এ নিয়ে আসলাম।




















// Step 2 — 
// Observer তৈরি
// const observer2 = new IntersectionObserver((entries) => {

// একটা observer তৈরি করলাম, যেটা একাধিক element observe করতে পারবে।











// Step 3 — forEach()
// entries.forEach((entry2) => {

// এখানে নতুন জিনিস হলো forEach()।

// কারণ আমাদের একাধিক element আছে।

// প্রতিটা entry2 একেকটা observed element-এর information ধরে।















// Step 4 — isIntersecting
// if (entry2.isIntersecting) {

// Check করছে:

// এই particular element কি viewport-এর মধ্যে এসেছে?

// যদি true:

// console.log(entry2.target.id + " is visible!");















// Step 5 — entry2.target
// entry2.target

// এটা বলে:

// কোন element-এর intersection information এসেছে।

// আর:

// entry2.target.id

// দিয়ে সেই element-এর ID পাচ্ছি।

// তাই:

// box2
// box3
// box4

// এর মধ্যে কোনটা visible হয়েছে সেটা automatically পাওয়া যাচ্ছে।

// Step 6 — তিনটা element observe
// observer2.observe(box2);
// observer2.observe(box3);
// observer2.observe(box4);

// একই observer দিয়ে তিনটা element observe করছি।















// 🧠 Practice 1 vs Practice 2
// Practice 1
// const entry1 = entries[0];

// একটা element নিয়ে কাজ করেছি।

// Practice 2
// entries.forEach((entry2) => {

// একাধিক element নিয়ে কাজ করছি।

// এই difference-টাই Practice 2-এর মূল শিক্ষা। 🎯




