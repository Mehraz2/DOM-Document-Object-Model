








// এবার দেখব padding যোগ করলে clientWidth কীভাবে পরিবর্তন হয়।







const box = document.getElementById("box");

console.log(box.clientWidth);






// 🖥️ Output Logic

// Console-এ output হবে:

// 340

// কারণ clientWidth হিসাব করে:

// Content Width = 300px
// Left Padding  = 20px
// Right Padding = 20px

// 300 + 20 + 20 = 340px

// তাই:

// clientWidth = 340







// ==========================================🔍 Code Explanation + Logic====================



// 1️⃣ HTML
// <div id="box">Hello World</div>

// এখানে box নামে একটি div element তৈরি করেছি।



// 2️⃣ CSS
// width: 300px;

// Element-এর content width হলো:

// 300px

// তারপর:

// padding: 20px;

// padding: 20px চারদিকে 20px দেয়।

// তাই horizontal padding:

// Left  = 20px
// Right = 20px



// 3️⃣ JavaScript
const box = document.getElementById("box");

// HTML-এর box element-টাকে JavaScript-এ select করেছি।

// তারপর:

console.log(box.clientWidth);

// clientWidth বের করে:

// content width
// +
// left padding
// +
// right padding

// তাই:

// 300 + 20 + 20
// = 340

// এজন্য Console:

// 340


// 🧠 remind

// clientWidth

// = Content + Horizontal Padding
// ❌ Border















