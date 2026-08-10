




// 📁 Practice 2 — offsetHeight
// 🎯 Goal

// offsetHeight কীভাবে element-এর height হিসাব করে সেটা হাতে-কলমে দেখা।






const box = document.querySelector(".box");

const height = box.offsetHeight;

console.log("Offset Height:", height);



// 🖥️ Output

// CSS-এ:

// height: 200px;
// padding: 20px;
// border: 5px solid black;

// তাই মোট height:

// 200px
// + 20px top padding
// + 20px bottom padding
// + 5px top border
// + 5px bottom border
// ------------------------
// 250px



// Console:

// Offset Height: 250










// 🧠 কী হচ্ছে?
const height = box.offsetHeight;

// এটা element-এর rendered height বের করছে।

// সাধারণভাবে:

// offsetHeight
//      ↓
// Content
// + Padding
// + Border

// ❌ Margin include করে না।

// 🧪 নিজে পরীক্ষা kori............

// CSS-এ:

// margin: 50px;

// যোগ 

// তারপর আবার Console 

// Output এখনও:

// Offset Height: 250

// থাকবে।

// কারণ margin offsetHeight-এর অংশ নয়।

// 📌 offsetWidth vs offsetHeight
// offsetWidth
// → Content + Padding + Border
// → Horizontal size

// offsetHeight
// → Content + Padding + Border
// → Vertical size




// আজকের Practice 2-এর মূল কথা:

// offsetHeight = element-এর rendered height, সাধারণত content + padding + border;
// 

// margin নয়। 🧠

