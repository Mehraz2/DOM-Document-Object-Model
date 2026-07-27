// 📘 Position 4 — "afterend"
// "afterend" কী?

// "afterend" মানে হলো—

// Target element-এর ঠিক পরে (outside the element) HTML insert করা।

// এটি beforebegin-এর মতোই element-এর বাইরে insert করে, তবে আগে নয়, পরে।

// 🎯 কখন ব্যবহার করবো?

// যখন কোনো element-এর ঠিক পরে কিছু যোগ করতে চাই।

// যেমন—

// ✅ Blog article-এর পরে Related Posts
// ✅ Form-এর পরে Success Message
// ✅ Product-এর পরে Review Section
// ✅ Card-এর পরে Divider
// ✅ Image-এর পরে Caption
// 🧠 মনে রাখার Trick
// after = পরে

// end = শেষ

// অর্থাৎ,

// Element শেষ হওয়ার পর, element-এর বাইরে insert হবে।


const loginForm = document.getElementById("loginForm");

loginForm.insertAdjacentHTML(
    "afterend",
    "<p style='color:green;'>✅ Login form loaded successfully.</p>"
);

// output = 

// 🖥️ Before
// Username: [________]

// Password: [________]

// [ Login ]
// 🖥️ After
// Username: [________]

// Password: [________]

// [ Login ]

// ✅ Login form loaded successfully.


// ✅ কী bujhlam?
// afterend target element-এর বাইরে, ঠিক পরে HTML যোগ করে।
// Insert হওয়া element sibling হয়, child নয়।
// Existing element-এর ভিতরের কোনো content পরিবর্তন হয় না।





// ======= practice 2 ==================================================================


const product = document.getElementById("product");

product.insertAdjacentHTML(
    "afterend",
    `
    <div class="reviews">
        <h3>Customer Reviews</h3>
        <p>⭐⭐⭐⭐⭐ Excellent product!</p>
    </div>
    `
);

// output = 

// 🖥️ Before
// Wireless Mouse

// Price: $25
// 🖥️ After
// Wireless Mouse

// Price: $25

// Customer Reviews

// ⭐⭐⭐⭐⭐ Excellent product!






const post = document.getElementById("post");

post.insertAdjacentHTML(
    "afterend",
    `
    <section class="related-posts">
        <h3>Related Posts</h3>
        <ul>
            <li>JavaScript Scope</li>
            <li>Arrow Functions</li>
            <li>DOM Manipulation</li>
        </ul>
    </section>
    `
);


// output = 

// 🖥️ Before
// Understanding JavaScript Closures

// Closures allow inner functions to access variables from outer functions.





// 🖥️ After
// Understanding JavaScript Closures

// Closures allow inner functions to access variables from outer functions.

// Related Posts

// • JavaScript Scope
// • Arrow Functions
// • DOM Manipulation














