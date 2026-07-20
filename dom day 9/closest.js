// closest() কী করে?

// সহজ ভাষায়...

// যে element-এ click হয়েছে,
// সেখান থেকে উপরের দিকে উঠতে উঠতে যে 
// প্রথম matching element পাবে, 
// সেটা return করবে।


const ul = document.getElementById("fruits");

ul.addEventListener("click", (event) => {
    console.log(event.target);
    
})

// এখন Browser-এ

// Apple লেখার উপর click korle

// Console-এ দেখবে/

// <span>Apple</span>

// কারণ click হয়েছে span-এর উপর।

// --------------------------------------

const ul = document.getElementById("fruits");

ul.addEventListener("click", (event) => {
    const li = event.target.closest("li");

    console.log(li);
    
})

// এখন আবার

// Apple-এর উপর click korle

// এবার Console-এ

// <li>
//     <span>Apple</span>
// </li>

// 😲

// মানে  span-এ click করলেও closest("li") 
// amar উপরে থাকা প্রথম <li> এনে দিল।


// --------------------
// এটা কীভাবে ভাববে|

// ধরো  একটা বিল্ডিংয়ে আছi 🏢

// UL
// │
// ├── LI
// │     │
// │     └── SPAN  ←  এখানে click করেছো

// closest("li") বলছে...

// "যেখান থেকে click হয়েছে, সেখান থেকে উপরে ওঠো... 
// যতক্ষণ না <li> পাও।"

// তাই Result

// SPAN
// ⬆
// LI ✅



// ========practice 2===================================


const ul = document.getElementById("fruits");

ul.addEventListener("click", (event) =>{

    event.target.remove();
})

// এখন Browser-এ

// Apple লেখার উপর click করো।

// কি হবে?

// 🍎 Apple

// অদৃশ্য হবে।

// কিন্তু...

// <li></li>

// খালি <li> থেকে যাবে।

// Browser-এ একটা ফাঁকা bullet দেখতে পাবে।

// ==========Practice 3=================

const ul = document.getElementById("fruits");

ul.addEventListener("click", (event) => {

    if (event.target.matches("button")) {
        console.log("Button Clicked");
    }

});

// Test

// ✅ Apple লেখায় click korle

// Result:

// Nothing

// ✅ Delete button-এ click korle

// Result:

// Button Clicked


const ul = document.getElementById("fruits");

ul.addEventListener("click", (event) => {

    if (event.target.matches("button")) {

        event.target.closest("li").remove();

    }

});

// এবার Test

// 🟢 Apple লেখায় click করো

// ➡️ কিছু হবে না।

// but delet button a click korle 
// delet hoa jabe apple + button