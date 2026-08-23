




// 🟢 IntersectionObserver — Practice 3

// এবার আমরা একাধিক box observe করব। 
// এটা Practice 2-এর চেয়ে গুরুত্বপূর্ণ, কারণ real project-এ সাধারণত একটার বেশি element থাকে।









const box3 = document.querySelectorAll(".box3");

const observer3 = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});


box3.forEach((box) => {
    observer3.observe(box);
});







// 4️⃣ JS-এর Output 🎯

// Page খুললে তিনটা box থাকবে কিন্তু প্রথমে hidden থাকবে।

// তারপর scroll।

// যখন:

// Box 1 → viewport-এ ঢুকব

// তখন Box 1 দেখা যাবে।

// আরও scroll:

// Box 2 → viewport-এ ঢুকবে

// তখন Box 2 দেখা যাবে।

// আরও scroll:

// Box 3 → viewport-এ ঢুকব

// তখন Box 3 দেখা যাবে।

// অর্থাৎ:

// Scroll
//   ↓
// Box viewport-এ আসে
//   ↓
// Observer detect করে
//   ↓
// show class add হয়
//   ↓
// CSS animation

















// 5️⃣ Output Logic 🧠

// এখানে Practice 2-এর সবচেয়ে বড় difference হলো:

// একটা box নয় → অনেকগুলো box।

// box3
// box3
// box3
//  ↓
// querySelectorAll()
//  ↓
// সব box পাওয়া
//  ↓
// প্রতিটা box observe করা
//  ↓
// যে box viewport-এ ঢুকবে
//  ↓
// শুধু সেই box-এর class add হবে

// suppose Box 2 viewport-এ dhuki..........।

// তাহলে:

// Box 1 → কিছু হবে না
// Box 2 → show হবে
// Box 3 → কিছু হবে না

// এটাই এই Practice-এর মূল concept। 🔥















// 6️⃣ Code Logic — A to Z

// Step 1 — সব box select
// const boxes3 = document.querySelectorAll(".box3");

// querySelectorAll() ব্যবহার করেছি কারণ আমাদের একাধিক .box3 আছে।

// এটা একটা NodeList দেবে:

// boxes3
//  ├── Box 1
//  ├── Box 2
//  └── Box 3














// Step 2 — Observer তৈরি
// const observer3 = new IntersectionObserver((entries) => {

// Observer viewport-এর সাথে element-এর intersection detect করবে।









// Step 3 — প্রতিটা entry নিয়ে কাজ
// entries.forEach((entry) => {

// Observer যেসব element-এর intersection detect করেছে, সেগুলো একে একে entry হিসেবে পাওয়া যায়।












// Step 4 — Element দেখা যাচ্ছে কিনা
// if (entry.isIntersecting) {

// যদি element viewport-এর মধ্যে আসে → true















// Step 5 — কোন box এসেছে সেটা বের করা

// এখানে Practice 2-এর থেকে গুরুত্বপূর্ণ একটা জিনিস আছে:

// entry.target

// entry.target মানে:

// যে element-টা বর্তমানে observe করা হচ্ছে।

// suppose Box 2 viewport-এ dhuksi............।

// তাহলে:

// entry.target

// হবে:

// <div class="box3">
//     <h2>Box 2</h2>
// </div>












// Step 6 — শুধু ওই box-এ class যোগ
// entry.target.classList.add("show");

// তাই সব box একসাথে show হবে না।

// যে box viewport-এ ঢুকবে, শুধু সেই box-এই .show যোগ হবে।















// Step 7 — সব box observe করা
// boxes3.forEach((box) => {
//     observer3.observe(box);
// });

// এখানে আমরা প্রতিটা box-কে Observer-এর কাছে পাঠাচ্ছি।

// Box 1 → observe
// Box 2 → observe
// Box 3 → observe




