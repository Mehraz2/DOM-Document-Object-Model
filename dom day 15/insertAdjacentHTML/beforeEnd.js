
// "beforeend" কী?

// "beforeend" মানে হলো—

// Target element-এর ভিতরে, 
// একদম শেষে (last child হিসেবে) HTML insert করা।

// এটি element-এর ভিতরে insert করে, তবে সবার শেষে।

// 🎯 কখন ব্যবহার করবো?

// যখন কোনো element-এর শেষে নতুন content যোগ করতে চাই।

// যেমন—

// ✅ Chat message শেষে যোগ করা
// ✅ Todo list-এ নতুন item যোগ করা
// ✅ Comment section-এ নতুন comment যোগ করা
// ✅ Product list-এ নতুন product যোগ করা

// 🧠 মনে রাখার Trick
// before = শেষ হওয়ার আগে

// end = শেষ

// অর্থাৎ,

// Element শেষ হওয়ার ঠিক আগে (ভিতরে) insert হবে।

const todoList = document.getElementById("todoList");

todoList.insertAdjacentHTML(
    "beforeend",
    "<li>Learn JavaScript</li>"
);

// output = 

// 🖥️ Before
// • Learn HTML
// • Learn CSS


// 🖥️ After
// • Learn HTML
// • Learn CSS
// • Learn JavaScript

// ===================== practice 2 ======================================================


const comments = document.getElementById("comments");

comments.insertAdjacentHTML(
    "beforeend",
    "<p>Mehraz: Thanks for sharing!</p>"
);



// output = 


// 🖥️ Before
// Ali: Great article!

// Sara: Very helpful.



// 🖥️ After
// Ali: Great article!

// Sara: Very helpful.

// Mehraz: Thanks for sharing!


// ============= practice 3 ========================================================



const products = document.getElementById("products");

products.insertAdjacentHTML(
    "beforeend",
    `
    <div class="product">
        <h3>Mouse</h3>
        <p>Price: $25</p>
    </div>
    `
);


// output = 

// 🖥️ Before
// Laptop
// Price: $800

// Keyboard
// Price: $50



// 🖥️ After
// Laptop
// Price: $800

// Keyboard
// Price: $50

// Mouse
// Price: $25


// ============= practice 4 ======================================================




const blog = document.getElementById("blog");

blog.insertAdjacentHTML(
    "beforeend",
    `
    <hr>

    <h3>Next Topic</h3>

    <p>DOM Manipulation</p>
    `
);

// output = 


// 🖥️ Before
// JavaScript Basics

// Learn variables, functions, and loops.




// 🖥️ After
// JavaScript Basics

// Learn variables, functions, and loops.

// -------------------------

// Next Topic

// DOM Manipulation






// ====================================================================






















