





// 🧪 Practice 1 — Basic clientWidth
// 🎯 লক্ষ্য

// একটা div বানাবো:

// width: 300px
// কোনো padding নেই
// কোনো border নেই
// JavaScript দিয়ে clientWidth বের করব

// তাহলে expected output হবে:

// 300





const box =document.getElementById("box");

console.log(box.clientWidth);







// 🧠 Logic + Output

// box
//  ↓
// clientWidth
//  ↓
// Element-এর inner width
//  ↓
// 300

// Output:

// 300

// কারণ CSS-এ box-এর width: 300px এবং কোনো padding নেই।













// ================================🔍 Code Logic Explanation==================

// 1. Element select করা
const box = document.getElementById("box");

// getElementById("box") দিয়ে HTML-এর:

// <div id="box">Hello World</div>

// element-টাকে JavaScript-এর box variable-এর মধ্যে রাখলাম।




// 2. clientWidth ব্যবহার
console.log(box.clientWidth);

// box.clientWidth element-এর ভেতরের width বের করে।

// আমাr ক্ষেত্রে:

// Content width = 300px
// Padding       = 0px
// Border        = 0px

// তাই:

// clientWidth = 300

// এবং console.log() সেটা Console-এ দেখায়।
















