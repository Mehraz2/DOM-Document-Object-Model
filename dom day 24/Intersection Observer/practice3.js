




// 🟢 Day 24 — Practice 3: Scroll Reveal Animation

// এবার IntersectionObserver দিয়ে real-world scroll animation বানাব। 🔥

// User যখন কোনো box-এর কাছে scroll করবে, তখন boxটা hidden → visible হবে।

// এখানে নতুন করে শিখব:

// classList.add()
// entry3.target
// IntersectionObserver দিয়ে CSS animation trigger করা
// unobserve() দিয়ে একবার animation হওয়ার পর observation বন্ধ করা






const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");


const observer3 = new IntersectionObserver((entries) => {

    entries.forEach((entry3) => {

        if (entry3.isIntersecting) {

            entry3.target.classList.add("show3");

            observer3.unobserve(entry3.target);

        }

    });

});

observer3.observe(box5);
observer3.observe(box6);
observer3.observe(box7);














// 4️⃣ JS Output 🖥️

// এবার console-এ output দেওয়ার পরিবর্তে screen-এ visual output দেখবে।

// Page open করলে:

// Box 5 → Hidden
// Box 6 → Hidden
// Box 7 → Hidden

// কারণ CSS-এ:

// opacity: 0;

// দেওয়া আছে।

// Scroll করে Box 5 viewport-এ আনলে:


// Box 5
//    ↓
// Hidden → Visible

// তারপর Box 6:

// Box 6
//    ↓
// Hidden → Visible

// তারপর Box 7:

// Box 7
//    ↓
// Hidden → Visible













// 5️⃣ Output Logic 🧠

// পুরো logic:

// Page Load
//     ↓
// Box hidden
//     ↓
// Scroll
//     ↓
// Box viewport-এ ঢুকলো
//     ↓
// isIntersecting = true
//     ↓
// classList.add("show3")
//     ↓
// CSS change
//     ↓
// Box visible

// CSS আগে:

// opacity: 0
// transform: translateY(100px)

// তারপর JavaScript:

// classList.add("show3")

// এর ফলে:

// opacity: 1;
// transform: translateY(0);

// হয়ে যায়।














// 6️⃣ JavaScript Explanation
// Step 1 — তিনটা box select
// const box5 = document.getElementById("box5");
// const box6 = document.getElementById("box6");
// const box7 = document.getElementById("box7");

// তিনটা element select করলাম।













// Step 2 — Observer তৈরি
// const observer3 = new IntersectionObserver((entries) => {

// Practice 3-এর observer তৈরি করলাম।













// Step 3 — প্রতিটা entry check
// entries.forEach((entry3) => {

// একাধিক element observe করছি, তাই প্রতিটা entry আলাদাভাবে check করছি।














// Step 4 — Element viewport-এ এসেছে কিনা
// if (entry3.isIntersecting) {

// যদি element viewport-এর মধ্যে আসে, condition true হবে।

















// Step 5 — Class add
// entry3.target.classList.add("show3");

// এখানে সবচেয়ে important অংশ।

// entry3.target হচ্ছে:

// যে box-টা বর্তমানে viewport-এর মধ্যে এসেছে।

// তারপর:

// classList.add("show3");

// তার মধ্যে show3 class যোগ করছি।
















// 7️⃣ CSS কীভাবে কাজ করছে?

// শুরুতে:

// .box3 {
//     opacity: 0;
//     transform: translateY(100px);
// }

// মানে:

// Invisible
// +
// 100px নিচে

// কিন্তু যখন:

// classList.add("show3");

// হবে, তখন:

// .box3.show3 {
//     opacity: 1;
//     transform: translateY(0);
// }

// প্রয়োগ হবে।

// ফলে:

// Hidden
//    ↓
// Fade In
//    ↓
// Move Up
//    ↓
// Visible ✨
















// 8️⃣ unobserve() কেন ব্যবহার করেছি?
// observer3.unobserve(entry3.target);

// এটার মানে:

// Box একবার visible হয়ে গেলে এটাকে আর observe করার দরকার নেই।

// তাই একবার animation হওয়ার পর observer ওই element-টাকে আর monitor করবে না।

// এটা useful কারণ animationটা আমরা শুধু প্রথমবার scroll করে আসার সময় চাই।














// 🧠 Practice 2 vs Practice 3

// Practice 2
// Element visible
//       ↓
// Console output
// Practice 3
// Element visible
//       ↓
// JavaScript
//       ↓
// class add
//       ↓
// CSS animation
//       ↓
// Visual effect ✨

// এটাই real-world usage-এর দিকে  প্রথম বড় step।



