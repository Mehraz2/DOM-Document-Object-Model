














const box = document.getElementById("box");

console.log(box.clientWidth);



// /1️⃣ Output Logic

// CSS:

// #box {
//     width: 300px;
//     padding: 20px;
//     border: 10px solid black;
// }

// এখানে:

// width = 300px
// padding-left = 20px
// padding-right = 20px
// border = 10px — এটা clientWidth-এর মধ্যে ধরা হবে না

// তাই:

// clientWidth
// = width + left padding + right padding
// = 300 + 20 + 20
// = 340px
// Console Output:
// 340

// 📌 reminder

// clientWidth = content width + left/right padding
// ❌ Border ধরা হয় না
// ❌ Margin ধরা হয় না



// 2️⃣ Code Explanation + Logic
// HTML
// <div id="box">client Width</div>

// এখানে আমরা একটা div বানিয়েছি এবং তার id দিয়েছি box।

// CSS
// #box {
//     width: 300px;
//     padding: 20px;
//     border: 10px solid black;
// }

// এখানে box-এর:

// Content = 300px
// Padding = 20px + 20px
// Border  = 10px + 10px

// কিন্তু clientWidth শুধু content + padding হিসাব করে।

// তাই:

// 300 + 20 + 20
// ↓
// 340px
// JavaScript
// const box = document.getElementById("box");

// getElementById() দিয়ে HTML-এর box element-টাকে JavaScript-এ নিয়ে আসছি।

// এখন:

// box

// মানে আমাদের <div id="box"> element।

// clientWidth
// console.log(box.clientWidth);

// এখানে .clientWidth দিয়ে আমরা box-এর ভেতরের visible width বের করছি।

// এটা:

// Content Width + Left Padding + Right Padding

// হিসাব করে।

// তাই:

// 300 + 20 + 20 = 340

// Console:

// 340







