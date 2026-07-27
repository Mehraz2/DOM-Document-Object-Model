

// "beforebegin" কী?

// "beforebegin" হলো এমন একটি position 
// যেখানে target element-এর বাইরে 
// এবং ঠিক আগে নতুন DOM element insert করা হয়।

// অর্থাৎ—

// ❌ target element-এর ভিতরে নয়
// ✅ target element-এর বাইরে
// ✅ target element শুরু হওয়ার ঠিক আগে





// কখন ব্যবহার করব?

// যখন target element-এর আগে নতুন element যোগ করতে চাই, কিন্তু target element-এর ভিতরে নয়।

// উদাহরণ:

// কোনো section-এর আগে একটি heading যোগ করা।
// কোনো card-এর আগে একটি badge যোগ করা।
// কোনো form-এর আগে একটি warning message দেখানো।




// 🧠 reminder
// ✅ Target element-এর বাইরে insert করে।
// ✅ Target element-এর আগে insert করে।
// ✅ HTML string নয়, DOM Element insert করে।
// ✅ Target element-এর child হয় না।



const box = document.getElementById("box");

// Create a new h2 element
const heading = document.createElement("h2");

// Add text
heading.textContent = "I am before the box";

// Insert before the target element
box.insertAdjacentElement("beforebegin", heading);


// ✅ Output

// <h2>I am before the box</h2>

// <div id="box">
//     <p>I am inside the box.</p>
// </div>



// Browser-এ দেখাবে:

// I am before the box

// I am inside the box.

// ========== practice 2 =============================================================

const content = document.getElementById("content");

// Create a new div
const notice = document.createElement("div");

// Add text
notice.textContent = "📢 New Lesson Available";

// Add some style
notice.style.backgroundColor = "yellow";
notice.style.padding = "10px";
notice.style.fontWeight = "bold";

// Insert before the target element
content.insertAdjacentElement("beforebegin", notice);



// output =

// 🖥️ Before
// JavaScript DOM

// Learn DOM Manipulation step by step.
// 🖥️ After
// 📢 New Lesson Available

// JavaScript DOM

// Learn DOM Manipulation step by step.


// what learn ?
// =document.createElement() দিয়ে নতুন DOM element তৈরি করা।
// =textContent দিয়ে content যোগ করা।
// =style দিয়ে element customize করা।
// =insertAdjacentElement("beforebegin") 
//   দিয়ে target element-এর বাইরে, ঠিক আগে insert করা।

// ======  practice 3=====================================================================




const title = document.getElementById("title");

title.insertAdjacentHTML(
    "beforebegin",
    "<p>This paragraph is added before h1</p>"
);



// Output:

// Before:

// JavaScript DOM





// After:

// This paragraph is added before h1

// JavaScript DOM


// ============ practice 4 ==================================================================== 


const title = document.getElementById("title");

title.insertAdjacentHTML(
    "afterend",
    "<p>This paragraph is added after h1</p>"
);




