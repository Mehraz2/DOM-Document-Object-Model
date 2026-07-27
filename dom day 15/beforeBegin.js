// "beforebegin" কী?

// "beforebegin" মানে হলো—

// Target element-এর ঠিক আগে (outside the element) 
// নতুন HTML বা Element insert করা।

// এটি target element-এর ভেতরে নয়, বাইরে insert করে।

const box = document.getElementById("box");

box.insertAdjacentHTML(
    "beforebegin",
    "<h1>Welcome To Dom<h1>"
);

// output= 
// Welcome to DOM

// JavaScript

// কী shikhlam ? ✅
// insertAdjacentHTML() HTML string insert করে।
// "beforebegin" target element-এর ঠিক আগে content যোগ করে।
// নতুন element target-এর sibling হয়, child নয়।
// Target element-এর ভিতরের content একদম অপরিবর্তিত থাকে।

// ============ practice 2 ==============================

const loginForm = document.getElementById("loginForm");

loginForm.insertAdjacentHTML(
    "beforebegin",
    "<p style='color:red;'>⚠ Please enter your login details.</p>"
);

// output = 

// 🖥️ Before


// Username:  [________]

// Password:  [________]

// [ Login ]
// 🖥️ After
// ⚠ Please enter your login details.

// Username:  [________]

// Password:  [________]

// [ Login ]

// ============= practice 3 ================================================

const product = document.getElementById("product");

product.insertAdjacentHTML(
    "beforebegin",
    "<h3 style='color:green;'>🔥 Flash Sale - 30% OFF Today!</h3>"
);

// output = 

// 🖥️ Before

// Wireless Headphones

// Price: $50
// 🖥️ After
// 🔥 Flash Sale - 30% OFF Today!

// Wireless Headphones

// Price: $50

// ======== practice 4 ============================================

const post = document.getElementById("post");

post.insertAdjacentHTML(
    "beforebegin",
    `
    <h1>📚 Latest Blog</h1>
    <p>Published on: July 27, 2026</p>
    <hr>
    `
);