


// 🎯 Practice 3 — Click the Child Element (Capturing) 🔥

// আজকের প্র্যাকটিসের মূল উদ্দেশ্য হলো Capturing phase কীভাবে কাজ করে, সেটা নিজের চোখে দেখা।

// এখানে Child button-এ ক্লিক করব এবং দেখব event কীভাবে উপরে থেকে নিচে (Top → Bottom) যায়।




const grandparent3 = document.getElementById("grandparent3");
const parent3 = document.getElementById("parent3");
const child3 = document.getElementById("child3");

grandparent3.addEventListener(
  "click",
  function () {
    console.log("Grandparent");
  },
  true
);

parent3.addEventListener(
  "click",
  function () {
    console.log("Parent");
  },
  true
);

child3.addEventListener(
  "click",
  function () {
    console.log("Child");
  },
  true
);





// 📌  Output

// Click Me button-এ ক্লিক করলে Console-এ দেখাবে:

// Grandparent
// Parent
// Child




// 📌 Output Logic

//  Child button-এ ক্লিক করে।

// কিন্তু Browser সরাসরি Child-এ যায়নি।

// কারণ এখানে Capturing ব্যবহার করা হয়েছে।

// Browser event flow:

// Grandparent
//      ▼
// Parent
//      ▼
// Child
// Step 1

// Browser Grandparent-এ যায়।

// Grandparent








// Step 2

// তারপর Parent-এ যায়।

// Grandparent
// Parent







// Step 3

// সবশেষে Child-এ পৌঁছায়।

// Grandparent
// Parent
// Child







// এই লাইনটি কী?
// const grandparent3 = document.getElementById("grandparent3");

// grandparent3 element-কে select ।

// এই লাইনটি কী ?
// const parent3 = document.getElementById("parent3");

// parent3 element-কে select ।

// এই লাইনটি কী ?
// const child3 = document.getElementById("child3");

// child3 button-কে select ।

// এই অংশটি কী ?
// grandparent3.addEventListener(
//   "click",
//   function () {
//     console.log("Grandparent");
//   },
//   true
// );




// Grandparent-এর মধ্যে click event যোগ করা হয়েছে।

// true দেওয়ার কারণে Event Listener Capturing Phase-এ কাজ করবে।

// এই অংশটি ?
// parent3.addEventListener(
//   "click",
//   function () {
//     console.log("Parent");
//   },
//   true
// );

// Parent-এ click হলে "Parent" Console-এ দেখাবে।

// এই অংশটি ?
// child3.addEventListener(
//   "click",
//   function () {
//     console.log("Child");
//   },
//   true
// );

// Child button-এ click হলে "Child" Console-এ দেখাবে।

// সবচেয়ে গুরুত্বপূর্ণ লাইন 🔥
// true

// এর মানে হলো:

// Capturing Mode চালু  holo.......


