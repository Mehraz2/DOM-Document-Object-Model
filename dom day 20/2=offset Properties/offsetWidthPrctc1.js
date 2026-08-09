



// 📁 Practice 1 — offsetWidth
// 🎯 Goal

// একটা element-এর মোট rendered width offsetWidth দিয়ে বের করা।





const box = document.querySelector(".box");

const width = box.offsetWidth;

console.log("Offset Width:", width);



// 🖥️ Output

// CSS-এ আমরা দিয়েছি:

// width: 300px;
// padding: 20px;
// border: 5px;

// তাই:

// 300px
// + 20px left padding
// + 20px right padding
// + 5px left border
// + 5px right border
// --------------------------------
// 350px

// Console:

// Offset Width: 350


















//========================================= 🧠 Code Explain ==============================



// 1️⃣ Element select
const box = document.querySelector(".box");

// .box element-টা select করলাম।




// 2️⃣ offsetWidth
const width = box.offsetWidth;

// এখানে browser element-এর rendered width বের করছে।

// সাধারণভাবে এতে:

// Content
// + Padding
// + Border

// ধরা হয়।

// ❌ Margin ধরা হয় না।





// 3️⃣ Console
console.log("Offset Width:", width);

// Width Console-এ দেখাচ্ছে।

// ⚠️ একটা গুরুত্বপূর্ণ পরীক্ষা

// এখন CSS-এ এটা যোগ করে দেখো:

// margin: 50px;

// তারপর আবার Console দেখো।

// offsetWidth 350-ই থাকবে।

// কারণ:

// offsetWidth margin include করে না।

// এটা নিজে পরীক্ষা করলে conceptটা মাথায় ভালোভাবে বসবে। 🧠












// 📌 Practice 1-এ কী শিখলে?

offsetWidth
//      ↓
// Element-এর rendered width
//      ↓
// Content + Padding + Border
//      ↓
// Margin বাদ







