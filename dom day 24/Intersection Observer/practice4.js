




// 🟢 Day 24 — Practice 4: threshold + rootMargin

// এবার IntersectionObserver-এর দুইটা important option নিয়ে কাজ করব:

// threshold
// rootMargin

// এগুলো বুঝলে অনেক বেশি control নিয়ে IntersectionObserver ব্যবহার করতে পারব। 🔥




const box8  = document.getElementById("box8");
const box9  = document.getElementById("box9");
const box10 = document.getElementById("box10");

const observe4 = new IntersectionObserver((entries) => {

    entries.forEach((entry4) => {

        console.log(entry4.target.id,"Intersection Ratio", 
            entry4.intersectionRatio
        );

        if (entry4.isIntersecting) {

            entry4.target.classList.add("show4");
        }
        
    });
}, {
    threshold: 0.5,
    rootMargin: "100px"
});

observe4.observe(box8);
observe4.observe(box9);
observe4.observe(box10);







// 4️⃣ JS Output 🖥️

// এবার Console-এ এমন output 

// box8 Intersection Ratio: 0

// তারপর scroll করলে:

// box8 Intersection Ratio: 0.25

// আরও scroll করলে:

// box8 Intersection Ratio: 0.5

// আর তখন box animation শুরু হবে।

// এরপর:

// box9 Intersection Ratio: 0.5

// তারপর:

// box10 Intersection Ratio: 0.5

// ⚠️ Exact output browser-এর viewport size এবং element-এর position অনুযায়ী পরিবর্তিত হতে পারে।


















// 5️⃣ Output Logic 🧠

// এবার আগের Practice-এর থেকে একটু আলাদা।

// আমরা বলেছি:

// threshold: 0.5

// মানে:

// Element-এর প্রায় 50% intersection হলে observer-এর threshold condition trigger হবে।

// Flow:

// Box
//  ↓
// Viewport-এর কাছে
//  ↓
// Intersection শুরু
//  ↓
// 25%
//  ↓
// 50%
//  ↓
// Threshold reached
//  ↓
// Animation















// 6️⃣ threshold কী?
// threshold: 0.5

// এটা বলে:

// কতটা intersection হলে observer callback-এর threshold crossing ঘটবে।

// 0
// threshold: 0

// Element-এর intersection শুরু হলেই threshold crossing হতে পারে।

// 0.5
// threshold: 0.5

// প্রায় 50% intersection।

// 1
// threshold: 1

// Element পুরোপুরি intersect করলে।




















// 7️⃣ intersectionRatio

// এটা Practice 4-এর নতুন জিনিস।

// entry4.intersectionRatio

// এটা বলে element-এর কত অংশ currently intersect করছে।

// উদাহরণ:

// 0

// কোনো intersection নেই।

// 0.5

// প্রায় 50% intersect করছে।

// 1

// পুরো element intersect করছে।

// তাই:

// console.log(
//     entry4.target.id,
//     "Intersection Ratio:",
//     entry4.intersectionRatio
// );

// দিয়ে আমরা দেখতে পারছি intersection কতটুকু হচ্ছে।




















// 8️⃣ rootMargin কী?

// আমরা লিখেছি:

// rootMargin: "100px"

// এর মানে observer-এর root-এর bounding area-কে 100px করে expand করা হচ্ছে।








// সহজভাবে ভাবো:

// Actual viewport
// ┌─────────────────────┐
// │                     │
// │       Screen        │
// │                     │
// └─────────────────────┘

// rootMargin: "100px" দিলে observer-এর হিসাবের area কিছুটা বড় হয়:

//      100px
// ┌─────────────────────┐
// │                     │
// │     VIEWPORT        │
// │                     │
// └─────────────────────┘
//      100px

// তাই element actual viewport-এর একটু আগেই observer-এর intersection area-তে ঢুকতে পারে।

// এটা lazy loading-এর মতো কাজে খুব useful।























// 9️⃣ threshold vs rootMargin

// ⚠️

// threshold

// জিজ্ঞেস করে:

// কতটা intersect করলে threshold crossing হবে?

// threshold: 0.5
// rootMargin

// জিজ্ঞেস করে:

// Intersection-এর হিসাবের area কতটা expand/contract করব?

// rootMargin: "100px"

// সহজভাবে:

// threshold
//    ↓
// কতটা দেখা/overlap হলে?


// rootMargin
//    ↓
// কত আগে/পরে intersection area ধরব?



















// 🔟 JavaScript Code Explanation
// Box select
// const box8 = document.getElementById("box8");
// const box9 = document.getElementById("box9");
// const box10 = document.getElementById("box10");

// তিনটা box select করেছি।

// Observer
// const observer4 = new IntersectionObserver((entries) => {

// Practice 4-এর জন্য নতুন observer তৈরি করেছি।

// Multiple elements
// entries.forEach((entry4) => {

// প্রতিটা observed element-এর entry আলাদাভাবে check করছি।

// Intersection Ratio
// entry4.intersectionRatio

// বর্তমানে element-এর কত অংশ intersection করছে সেটা জানতে পারছি।

// Class add
// if (entry4.isIntersecting) {


//     entry4.target.classList.add("show4");


// }

// Element intersect করলে show4 class যোগ হচ্ছে।

// CSS:

// .box4.show4 {
//     opacity: 1;
//     transform: scale(1);
// }

// তাই box:

// ছোট + invisible
//        ↓
// বড় + visible

// হয়ে যাবে। ✨














// 1️⃣1️⃣ Observer Options

// সবচেয়ে important অংশ:

// {
//     threshold: 0.5,
//     rootMargin: "100px"
// }

// এখানে {}-এর ভিতরের জিনিসগুলো হলো IntersectionObserver options।

// Practice 1-এ আমরা options দিইনি।

// Practice 4-এ observer-কে configure করছি।
