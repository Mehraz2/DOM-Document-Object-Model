




// 📁 Practice 4 — All Offset Properties
// 🎯 Goal

// একটা element-এর:

// offsetWidth
// offsetHeight
// offsetTop
// offsetLeft

// একসাথে বের করা এবং পুরো offset conceptটা ঝালাই kori



const box = document.querySelector(".box");

console.log("Offset Width :", box.offsetWidth);
console.log("Offset Height :", box.offsetHeight);
console.log("Offset Top :", box.offsetTop);
console.log("Offset Left :", box.offsetLeft);





// 🖥️ Output

// CSS অনুযায়ী:

// Offset Width  : 300
// Offset Height : 200
// Offset Top    : 100
// Offset Left   : 150

// কেন Width 300?

// 250 content
// + 20 left padding
// + 20 right padding
// + 5 left border
// + 5 right border
// -----------------
// 300px

// কেন Height 200?
// 150 content
// + 20 top padding
// + 20 bottom padding
// + 5 top border
// + 5 bottom border
// ------------------

// 200px
// Position:
// offsetTop  → 100px
// offsetLeft → 150px

// কারণ CSS-এ:

// top: 100px;
// left: 150px;





// ===================================🧠 এখন চারটাকে একসাথে bujharr try kori========================


box.offsetWidth

// ➡️ Element কত wide।




box.offsetHeight

// ➡️ Element কত tall।



box.offsetTop

// ➡️ Offset parent-এর top থেকে কত নিচে।





box.offsetLeft

// ➡️ Offset parent-এর left থেকে কত ডানে।






        //       offsetTop
        //             ↓
        // ┌─────────────────────┐
        // │                     │
        // │        ┌────────────┼──→ offsetLeft
        // │        │            │
        // │        │    BOX     │
        // │        │            │
        // │        └────────────┘
        // │              ↑
        // │              │
        // └──────────────┼──────┘
        //                │
        //          offsetHeight

        //       ← offsetWidth →







// 📊 Offset Properties — সম্পূর্ণ

// Property	কাজ
// offsetWidth	Element-এর rendered width
// offsetHeight	Element-এর rendered height
// offsetTop	Offset parent-এর top থেকে distance
// offsetLeft	Offset parent-এর left থেকে distance




// ⚠️ remonder

// offsetWidth / offsetHeight
// → Size

// offsetTop / offsetLeft
// → Position relative to offset parent

// এটাই Offset Properties-এর মূল concept। 🧠🔥













