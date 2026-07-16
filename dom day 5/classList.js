let title = document.getElementById("title");

title.classList.add("red");

// output = title element-এর সাথে red নামে একটি CSS class যোগ করো।

// =================================================================

let title = document.getElementById("title");

title.classList.add("red");

title. classList.remove("red")

// 🧠 Rule
// classList.add() ➜ Class যোগ করে ✅
// classList.remove() ➜ Class মুছে ফেলে ❌

// ===================================================================

let title = document.getElementById("title");

title.classList.toggle("red");

// 🧠 toggle()-এর Rule

// toggle() মানে Switch।

// যদি Class না থাকে ➜ যোগ করবে (add)
// যদি Class থাকে ➜ মুছে ফেলবে (remove)

// তাই একে ON/OFF Switch বলা যায়। 💡

// OFF  → toggle() → ON
// ON   → toggle() → OFF

// =========================================================

let title  = document.getElementById("title");

title.classList.toggle("red");
title.classList.toggle("red");