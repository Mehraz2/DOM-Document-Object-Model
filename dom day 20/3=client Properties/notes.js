




// 📐 clientWidth

// clientWidth হলো DOM-এর একটি Element Property, যেটা কোনো element-এর ভেতরের visible width কত pixel, সেটা দেয়।

// Syntax
element.clientWidth

// এটা read-only property।

// মানে:

const box = document.querySelector(".box");

console.log(box.clientWidth);

// এখানে browser element-এর বর্তমান width হিসাব করে একটি number দেবে।









// 🧠 clientWidth আসলে কী মাপে?

// সহজ formula:

// clientWidth
//     =
// content width
// +
// left padding
// +
// right padding

// কিন্তু:

// ❌ border
// ❌ vertical scrollbar




// সাধারণভাবে clientWidth-এর মধ্যে থাকে না।

// 🔥 Example 1 — শুধু width
// <div class="box">Hello</div>
// .box {
//     width: 300px;
// }

const box = document.querySelector(".box");

console.log(box.clientWidth);

// Output:

// 300

// কারণ:

// content = 300px
// padding = 0

// তাই:

// clientWidth = 300px











// 🔥 Example 2 — Padding থাকলে
// .box {
//     width: 300px;
//     padding: 20px;
// }

// যদি box-sizing default content-box হয়, তাহলে:

// content width = 300px
// left padding  = 20px
// right padding = 20px

// তাই:

// 300 + 20 + 20
// = 340px
console.log(box.clientWidth);

// Output:

// 340












// ⚠️ এখানে একটা গুরুত্বপূর্ণ বিষয়

// অনেকে ভাবে:

// width 300px হলে clientWidth অবশ্যই 300px।

// না।

// Padding থাকলে clientWidth বেড়ে যায়।

// ❌ Border কি যোগ হবে?

// না।

// .box {
//     width: 300px;
//     padding: 20px;
//     border: 10px solid black;
// }

// তাহলে:

// content = 300
// padding = 20 + 20
// border  = 10 + 10

// clientWidth:

// 300 + 20 + 20
// = 340px

// Border বাদ।

// কিন্তু পুরো outer width হবে:

// 300 + 40 + 20
// = 360px

// এখানেই clientWidth আর offsetWidth-এর পার্থক্য শুরু হয়।

















// 🆚 clientWidth বনাম offsetWidth

// এটা এখন থেকেই মাথায় ঢুকিয়ে রাখো। 👇
// --------------------------------------------------------------------------------------------------
// Property	                      Content                	Padding	                         Border
// --------------------------------------------------------------------------------------------------
// clientWidth                  	✅	                     ✅                           	❌
// offsetWidth                      ✅	                     ✅	                            ✅

// উদাহরণ:

// .box {
//     width: 300px;
//     padding: 20px;
//     border: 10px solid black;
// }

// তাহলে:

// clientWidth = 340px
// offsetWidth = 360px

// কারণ:

// clientWidth
// = 300 + 20 + 20
// = 340
// offsetWidth
// = 300 + 20 + 20 + 10 + 10
// = 360







// 📌 clientWidth কি CSS-এর width-এর মতো?

// না।

// এটা খুব গুরুত্বপূর্ণ।

// CSS:

// width: 300px;

// এটা একটি style rule।

// আর:

element.clientWidth

// এটা browser থেকে element-এর বর্তমান calculated inner width পড়ছে।

// অর্থাৎ CSS পরিবর্তন হলে clientWidth-ও পরিবর্তিত হতে পারে।















// 🔥 Dynamic Example
// <div id="box">Hello World</div>

{/* <button id="btn">Change Width</button> */}
// #box {
//     width: 200px;
//     padding: 20px;
// }


const box = document.getElementById("box");
const btn = document.getElementById("btn");

console.log(box.clientWidth);

btn.addEventListener("click", () => {
    box.style.width = "400px";

    console.log(box.clientWidth);
});

// প্রথমে:

// 240

// কারণ:

// 200 + 20 + 20 = 240

// Button click করার পর:

// 440

// কারণ:

// 400 + 20 + 20 = 440

// অর্থাৎ clientWidth বর্তমান অবস্থার measurement দেয়।











// 📌 clientWidth কেন ব্যবহার করব?

// Real-world frontend development-এ অনেক জায়গায় দরকার হয়।

// যেমন:

// 1. Responsive UI

// Element-এর available width জানতে।

// 2. Overflow detect করতে

// যেমন:

if (element.scrollWidth > element.clientWidth) {
    console.log("Content is overflowing");
}

// এখানে:

// clientWidth
//     ↓
// বর্তমানে visible/inner width



// scrollWidth
//     ↓
// পুরো content দেখাতে যত width দরকার


// এই combination অনেক useful।




// 📌 clientWidth Number return করে
console.log(typeof box.clientWidth);

// Output:

// number

// এবং unit string থাকে না।

// মানে:

box.clientWidth

// দেবে:

// 340

// এটা দেবে না:

// "340px"

// তাই চাইলে:

console.log(`${box.clientWidth}px`);

// Output:

// 340px


// ⚠️ clientWidth Read-only

// এভাবে value set করা যাবে না:

box.clientWidth = 500;

// কারণ এটা measurement property।

// Width পরিবর্তন করতে:

// box.style.width = "500px";

// তারপর আবার:

console.log(box.clientWidth);

// দিয়ে নতুন measurement পাওয়া যাবে।





// ⚠️ display: none হলে কী হবে?

// এটাও গুরুত্বপূর্ণ।

// যদি element:

display: none;

// থাকে, তাহলে browser layout-এ element-এর rendered box থাকে না।

// সেক্ষেত্রে:

element.clientWidth

// সাধারণত:

// 0

// পাবে।













// 🧠 এক লাইনের Definition

// VS Code notes-

// // clientWidth → An element's inner visible width in pixels.
// // It includes content width + left/right padding.
// // It excludes borders and usually excludes the vertical scrollbar.
// // It returns a number and is read-only.


// আর formula:

// clientWidth = content width + left padding + right padding















