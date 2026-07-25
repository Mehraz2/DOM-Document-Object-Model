// 🤔 replaceChild() কী?

// replaceChild() হলো Parent Element-এর একটি method, যা তার একটি Child Element-কে অন্য একটি নতুন Child Element দিয়ে Replace করে।

// সহজ ভাষায়,

// পুরোনো Child বের করে, তার জায়গায় নতুন Child বসিয়ে দেয়।

// 🏠 বাস্তব উদাহরণ

// SUPPOSE বাসায় একটা পুরোনো চেয়ার আছে।

// 🪑 Old Chair

//  নতুন চেয়ার কিনলে।

// এখন কী করব?

// পুরোনো চেয়ার বের করব।
// নতুন চেয়ার একই জায়গায় রাখবে।
// 🪑 Old Chair
//         ↓
// 🪑 New Chair

// এটাই replaceChild()-এর কাজ।


// 🧠 কেন replaceChild() দরকার?

// অনেক সময় পুরো Parent পরিবর্তন করতে হয় না।

// শুধু ভিতরের একটা Element বদলালেই হয়।

// যেমন:

// ❌ Loading... → ✅ Data Loaded
// ❌ Login Button → ✅ Logout Button
// ❌ Old Image → ✅ New Image
// ❌ "Add to Cart" → ✅ "Added"

// ---------------------------------------------------------------




const parent = document.getElementById("box");

const oldChild = document.getElementById("old");

const newChild = document.createElement("p");

newChild.textContent = "New Paragraph";

parent.replaceChild(newChild, oldChild);

// 🖥️ Output
// Before

// <div id="box">
//     <p>Old Paragraph</p>
// </div>


// After

// <div id="box">
//     <p>New Paragraph</p>
// </div>


// 🧠 Code Flow
// Select Parent
//       ↓
// Select Old Child
//       ↓
// Create New Child
//       ↓
// Add Text
//       ↓
// Replace Old with New


// =======================practice 2 =========================================

// Parent
const parent = document.getElementById("box");

// Old Image
const oldImage = document.getElementById("oldImage");

// New Image
const newImage = document.createElement("img");

newImage.src = "https://picsum.photos/200?random=2";
newImage.alt = "New Image";

// Replace
parent.replaceChild(newImage, oldImage);

// 🖥️ Output
// Before
// 📷 Image 1

// ⬇️

// After
// 🌄 Image 2
// 🧠 কী নতুন holo?

// আগের Practice-এ আমরা শুধু text replace করেছিলাম।

// এবার replace করলাম একটা সম্পূর্ণ HTML element (<img>)।

// ami bujhlam যে replaceChild() শুধু <p> বা <h1> নয়, 
// যেকোনো DOM element replace করতে পারে।


// ===========practice 3===================================

// Parent
const parent = document.getElementById("box");

// Old Child
const oldChild = document.getElementById("old");

// Button
const btn = document.getElementById("btn");

// Click Event
btn.addEventListener("click", () => {

  // Create New Child
  const newChild = document.createElement("p");

  newChild.textContent = "Data Loaded Successfully!";

  // Replace
  parent.replaceChild(newChild, oldChild);

});


// 🖥️ Output
// Before
// Loading...

// [Replace]

// ⬇️ Button Click


// After
// Data Loaded Successfully!



// [Replace]
// 🧠 কী নতুন bujhlam?

// আগের Practice-এ page load হওয়ার সাথে সাথেই replace হচ্ছিল।

// এবার replace হবে user-এর action (button click)-এর পরে।

// এটাই Dynamic DOM Manipulation।



// ============= practice 4================================


// Parent
const parent = document.getElementById("fruits");

// Old Child (Banana)
const oldChild = parent.children[1];

// New Child
const newChild = document.createElement("li");

newChild.textContent = "Mango";

// Replace
parent.replaceChild(newChild, oldChild);