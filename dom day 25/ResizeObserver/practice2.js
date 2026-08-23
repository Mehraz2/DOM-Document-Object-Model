



// IntersectionObserver। 
// এবার আগেরটার চেয়ে একটু practical করি, 
// যাতে শুধু “visible হলো কি না” না, বরং element viewport-এ ঢুকলে 
// animation/class add করার logic বোঝো।







const box2 = document.querySelector(".box2");

const observe2 = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.istersecting) {
            box2.classList.add("show");
        }
    });
});

observer2.observe(box2);











// 2️⃣ Output

// Page load করার পর প্রথমে box দেখা যাবে না।

// নিচে scroll করলে যখন box2 viewport-এর মধ্যে আসবে, তখন:

// Box নিচ থেকে উপরে উঠব
// opacity: 0 থেকে opacity: 1 হবে
// Smooth animation হবে
// Box-এর .show class যোগ হবে

// অর্থাৎ:

// Scroll → Box viewport-এ ঢোকে → Observer detect করে → .show class যোগ হয় → Animation চলে 🎯















// 3️⃣ Output Logic

// সহজভাবে:

// Page Load
//    ↓
// box2 select
//    ↓
// IntersectionObserver তৈরি
//    ↓
// box2 observe করা শুরু
//    ↓
// User scroll করে
//    ↓
// box2 viewport-এ ঢোকে
//    ↓
// isIntersecting = true
//    ↓
// show class add
//    ↓
// CSS animation




















// 4️⃣ Code Logic
// Step 1 — Element ধরা
// const box2 = document.querySelector(".box2");

// HTML থেকে .box2 element-টা JavaScript-এ নিয়ে আসলাম।
















// Step 2 — Observer তৈরি
// const observer2 = new IntersectionObserver((entries) => {

// IntersectionObserver browser-কে বলছে:

// “এই element viewport-এর সাথে intersect করছে কি না আমাকে জানাও।”

















// Step 3 — Entry পাওয়া
// entries.forEach((entry) => {

// Observer যে information দেয়, সেটা entry-এর মধ্যে পাওয়া যায়।
















// Step 4 — Element দেখা যাচ্ছে কিনা
// if (entry.isIntersecting) {

// এটা সবচেয়ে গুরুত্বপূর্ণ।

// যদি:

// entry.isIntersecting

// true হয় → element viewport-এর মধ্যে এসেছে।


















// Step 5 — Class যোগ
// box2.classList.add("show");

// এখন HTML-এর box-এর সাথে .show class যুক্ত হবে।

// আগে:

// <div class="box2">

// পরে:

// <div class="box2 show">

// তখন CSS:

// .box2.show {
//     opacity: 1;
//     transform: translateY(0);
// }

// কাজ করবে।

// Step 6 — কোন element observe করবে?
// observer2.observe(box2);

// এখানে আমরা বলছি:

// box2-কে observe করো।

// এই লাইন না থাকলে Observer তৈরি হলেও কোন element observe করবে সেটা জানবে না।











