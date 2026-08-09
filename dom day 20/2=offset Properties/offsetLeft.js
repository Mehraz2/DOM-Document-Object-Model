




// 📁 Practice 3B — offsetLeft
// 🎯 Goal

// offsetLeft ব্যবহার করে দেখব, একটি element 
// তার offset parent-এর left side থেকে কত pixel দূরে আছে।



const box = document.querySelector(".box");

const leftPosition = box.offsetLeft;

console.log("Offset Left:", leftPosition);



// 🖥️ Output

// Console-এ:

// Offset Left: 120

// কারণ CSS-এ আমরা লিখেছি:

// left: 120px;

// এবং .parent হলো .box-এর offset parent।

// তাই:

// box.offsetLeft

// → 120

// 🧠 কীভাবে কাজ করছে?

// আমাদের structure:

// .parent
//    │
//    └── .box

// .parent:

// position: relative;

// .box:

// position: absolute;
// left: 120px;

// তাই:

// Parent
// ┌─────────────────────────────────────┐
// │                                     │
// │      ←──── 120px ────→             │
// │                     ┌──────────┐    │
// │                     │   BOX    │    │
// │                     └──────────┘    │
// │                                     │
// └─────────────────────────────────────┘
// box.offsetLeft

// মানে:

// .box তার offset parent-এর left side থেকে কত দূরে?

// উত্তর:

// 120px








// ⚠️ খুব গুরুত্বপূর্ণ

// offsetLeft:

// box.offsetLeft

// ❌ Browser viewport-এর left থেকে distance নয়।



// এটা:

// Offset Parent
//       ↓
//    left side
//       ↓
//     Element

// এর distance।

// আর আগেরটা:

// box.getBoundingClientRect().left

// হলো:

// Viewport
//    ↓
// Element-এর left position
// 📌 offsetTop + offsetLeft

// এখন দুইটা আলাদা practice হলো:

// box.offsetTop




// → Offset parent-এর top থেকে distance

// box.offsetLeft

// → Offset parent-এর left থেকে distance

// সহজ করে:

//            offsetTop
//                ↓
//                ↓
//         ┌─────────────┐
//         │             │
// offset  │     BOX     │
// Left →  │             │
//         └─────────────┘



























