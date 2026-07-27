// 📘 insertAdjacentElement() কী?

// insertAdjacentElement() হলো একটি DOM Method, 
// যার মাধ্যমে আগে থেকে তৈরি করা একটি DOM Element-কে 
// কোনো target DOM element-এর নির্দিষ্ট position-এ insert করা যায়।

// সহজ ভাষায়—

//  আগে document.createElement() দিয়ে একটি element তৈরি করবে, 
// তারপর insertAdjacentElement() ব্যবহার করে সেটিকে DOM-এর 
// নির্দিষ্ট জায়গায় বসাবে।


// ===============================================================

// 📝 Syntax
element.insertAdjacentElement(position, newElement);
// 📌 Parameters
// 1️⃣ position

// নতুন element কোথায় insert হবে, সেটা নির্ধারণ করে।

// এটি ৪টি value নিতে পারে:

// "beforebegin" // Target element-এর বাইরে, আগে
// "afterbegin"  // Target element-এর ভিতরে, শুরুতে
// "beforeend"   // Target element-এর ভিতরে, শেষে
// "afterend"    // Target element-এর বাইরে, পরে
// 2️⃣ newElement

// যে DOM Element insert করতে চাও।

// এটি সাধারণত document.createElement() দিয়ে তৈরি করা হয়।

// Example:

const heading = document.createElement("h2");

heading.textContent = "Welcome";

// এখন heading-কে insert করা যাবে।

// 📌 Example


// HTML



<div id="box">
    <p>Original Text</p>
</div>



// JavaScript
const box = document.getElementById("box");

const heading = document.createElement("h2");

heading.textContent = "New Heading";

box.insertAdjacentElement(
    "beforeend",
    heading
);


// // output=

// <div id="box">
//     <p>Original Text</p>
//     <h2>New Heading</h2>
// </div>

// এখানে <h2> HTML string থেকে তৈরি হয়নি।

// বরং আমরা JavaScript দিয়ে একটি বাস্তব DOM Element তৈরি করেছি 
// এবং সেটিকে insert করেছি।

// ==============================================================

// 📌 Browser-এর ভিতরে কী ঘটে?
// Step 1

// Browser একটি নতুন DOM Element তৈরি করে।


const heading = document.createElement("h2");
// Step 2

// Element-এর content সেট করা হয়।

heading.textContent = "New Heading";
// Step 3

// insertAdjacentElement() method সেই element-টিকে নির্দিষ্ট position-এ insert করে।

box.insertAdjacentElement(
    "beforeend",
    heading
);

// ====================================================


// 📌 কেন insertAdjacentElement() ব্যবহার করব?

// যখন element insert করার আগে সেটিকে customize করতে হবে।

// যেমন—

classList.add()
id
style
dataset
setAttribute()
addEventListener()

// এসব আগে থেকেই element-এর সাথে যোগ করা যায়।

// Example:

const btn = document.createElement("button");

btn.textContent = "Click Me";

btn.classList.add("primary");

btn.addEventListener("click", () => {
    alert("Hello!");
});

box.insertAdjacentElement(
    "beforeend",
    btn
);

// =======================================================================

// 📌 insertAdjacentHTML() vs insertAdjacentElement()
// insertAdjacentHTML()
// box.insertAdjacentHTML(
//     "beforeend",
//     "<h2>Hello</h2>"
// );




// ✅ HTML string insert করে।

insertAdjacentElement()
const h2 = document.createElement("h2");

h2.textContent = "Hello";

box.insertAdjacentElement(
    "beforeend",
    h2
);

// ✅ DOM Element insert করে।

// 📌 সবচেয়ে গুরুত্বপূর্ণ ভুল ⚠️

// এটা ভুল—

box.insertAdjacentElement(
    "beforeend",
    "<h2>Hello</h2>"
);

// ❌ Error হবে।

// কারণ insertAdjacentElement() HTML string নেয় না।

// এটি অবশ্যই একটি DOM Element চায়।

// 🧠 remember thing
// ✅ আগে document.createElement() দিয়ে element তৈরি করতে হয়।
// ✅ insertAdjacentElement() শুধুমাত্র DOM Element insert করে।
// ✅ HTML string accept করে না।
// ✅ insertAdjacentHTML()-এর মতোই একই ৪টি position ব্যবহার করে।
// ✅ Element insert করার আগে সেটিকে customize করা যায়।