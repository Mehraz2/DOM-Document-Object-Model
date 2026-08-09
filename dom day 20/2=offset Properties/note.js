
// 📁 DOM Day 20 — offset Properties

// offset Properties হলো DOM-এর এমন কিছু property, 
// যেগুলো কোনো HTML element-এর size এবং layout-এর position জানতে ব্যবহার করা হয়।

// মূলত আমরা ৪টা property শিখব:

element.offsetWidth
element.offsetHeight
element.offsetTop
element.offsetLeft



// 1️⃣ offsetWidth কী?

// offsetWidth কোনো element-এর rendered width কত, সেটা জানায়।

// এখানে সাধারণত ধরা হয়:

Content
//    +
Padding
   +
Border

// কিন্তু margin ধরা হয় না।

// Example
// .box {
//     width: 200px;
//     padding: 20px;
//     border: 5px solid black;
// }

// যদি default box-sizing: content-box থাকে, তাহলে:

// Content width = 200px

// Left padding  = 20px
// Right padding = 20px

// Left border   = 5px
// Right border  = 5px
// 
// তাই:

200 + 20 + 20 + 5 + 5
// = 250px

// JavaScript:

const box = document.querySelector(".box");

console.log(box.offsetWidth);

// Output:

// 250

// ⚠️ Margin?

// margin: 30px;

// দিলে offsetWidth 280px হবে না।

// কারণ:

// offsetWidth margin include করে না।





// 2️⃣ offsetHeight কী?

// offsetHeight একইভাবে element-এর rendered height দেয়।

// এখানেও সাধারণত:

Content
   // +
Padding
//    +
Border

// ধরা হয়।

// Example
// .box {
//     height: 100px;
//     padding: 20px;
//     border: 5px solid black;
// }

// হিসাব:

// 100
// + 20 top padding
// + 20 bottom padding
// + 5 top border
// + 5 bottom border
// ----------------



// 150px

// তাই:

console.log(box.offsetHeight);

// Output:

// 150






// 3️⃣ offsetTop কী?

// এখানে একটু বেশি মনোযোগ দাও। 👀

// offsetTop হলো element-এর offset parent-এর top edge থেকে element-এর top edge পর্যন্ত distance।

// এটা viewport-এর relative position নয়।

// Example:

// <div class="parent">
//     <div class="box"></div>
// </div>
// .parent {
//     position: relative;
// }

// .box {
//     margin-top: 50px;
// }

// তারপর:

console.log(box.offsetTop);

// Element-এর offset parent-এর relative layout অনুযায়ী value পাওয়া যাবে।






// 4️⃣ Offset Parent কী?

// offsetTop এবং offsetLeft বোঝার জন্য offset parent বোঝা খুব গুরুত্বপূর্ণ।

// সহজভাবে:

// যে ancestor element-এর relative positioning context-এর সাথে 
// element-এর layout position সম্পর্কিত, সেটিই সাধারণত offset parent হিসেবে কাজ করে।

// সবচেয়ে সহজ example:

<div class="parent">
//     <div class="child">
//         Hello
//     </div>
// </div>
// .parent {
    position: relative;
// }

// .child {
//     position: absolute;
//     top: 40px;
//     left: 60px;
// }

// এখানে .parent হলো .child-এর offset parent।

// তাই:

console.log(child.offsetTop);

// প্রায়:

// 40

// এবং:

console.log(child.offsetLeft);

// প্রায়:

// 60





// 5️⃣ offsetLeft কী?

// offsetLeft হলো element-এর offset parent-এর left edge থেকে 
// element-এর left edge পর্যন্ত distance।

// Example:

// .parent {
//     position: relative;
// }

// .child {
//     position: absolute;
//     left: 80px;
// }
console.log(child.offsetLeft);

// Output:

// 80
// 🔥 offsetTop বনাম getBoundingClientRect().top

// এটা খুব গুরুত্বপূর্ণ।

// getBoundingClientRect().top

// Viewport থেকে element-এর top position:

// box.getBoundingClientRect().top
// offsetTop

// Offset parent থেকে element-এর top position:

box.offsetTop

// অর্থাৎ:

getBoundingClientRect()
//         ↓
// Viewport-এর relative

offsetTop / offsetLeft
//         ↓
// Offset parent-এর relative








// 🔥 offsetWidth বনাম getBoundingClientRect().width

// দুটোই element-এর width দিতে পারে, কিন্তু একেবারে একই জিনিস হিসেবে ধরে নিও না।

// box.offsetWidth

// সাধারণত integer pixel value দেয়।

// অন্যদিকে:

box.getBoundingClientRect().width

// আরও precise measurement দিতে পারে এবং fractional pixel value-ও হতে পারে।

// Example:

// offsetWidth → 250

// getBoundingClientRect().width → 250.5






// 📌 offset Properties কোথায় কাজে লাগে?

// বাস্তব website-এ এগুলোর ব্যবহার অনেক।

// 1. Element-এর size জানা
box.offsetWidth
box.offsetHeight

// যেমন:

// Modal-এর size
// Sidebar-এর width
// Card-এর size
// Container-এর dimensions
// 2. Element-এর layout position জানা
// box.offsetTop
// box.offsetLeft

// যেমন:

// কোনো element কোথায় বসানো হয়েছে
// Nested layout-এর position বের করা
// Dynamic UI তৈরি করা
// 3. Dynamic JavaScript UI

// ধরো  JavaScript দিয়ে কোনো element-এর width দেখে অন্য element-এর width ঠিক করবে:

const box = document.querySelector(".box");

const width = box.offsetWidth;

console.log(width);

// তারপর সেই value দিয়ে অন্য কিছু করতে পারো।

// 4. Responsive / Dynamic Layout

// JavaScript-এর মাধ্যমে element-এর বর্তমান rendered size জানতে:

const width = box.offsetWidth;
const height = box.offsetHeight;

// ব্যবহার করা যায়।










// ⚠️ একটা গুরুত্বপূর্ণ বিষয়: display: none

// যদি element থাকে:

// .box {
//     display: none;
// }

// তাহলে তার layout থেকে element-টি সরিয়ে দেওয়া হয়।

// ফলে:

box.offsetWidth
box.offsetHeight

// সাধারণত:

// 0

// দেবে।

// কারণ browser বর্তমানে element-টাকে layout-এ render করছে না।












// ⚠️ Integer Value

// offsetWidth এবং offsetHeight সাধারণত integer pixel value দেয়।

// যেমন:

// 250

// fractional value নয়:

// 250.5

// এটা getBoundingClientRect()-এর সাথে comparison করার সময় মনে রাখবে।





// 📊 চারটা Property একসাথে

// Property	                     কী দেয়	                       Relative to
// --------------------------------------------------------------------------------
// offsetWidth	              Element-এর width                  	Element
// offsetHeight	              Element-এর height	                    Element
// offsetTop	                 Top distance	                    Offset parent
// offsetLeft	                Left distance                   	Offset parent