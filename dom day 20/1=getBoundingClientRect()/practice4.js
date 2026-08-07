// const box = document.querySelector(".box");

// window.addEventListener("scroll", function () {

//     const rect = box.getBoundingClientRect();

//     console.clear();

//     console.log("Top :", rect.top);
//     console.log("Bottom :", rect.bottom);

// });










// 🖥️ Example Output

// Page load হওয়ার পরে:

// Top : 1000
// Bottom : 1150

// কিছুটা নিচে scroll করলে:

// Top : 650
// Bottom : 800

// আরও নিচে:

// Top : 250
// Bottom : 400

// Element viewport-এর একদম উপরে এলে:

// Top : 0

// Viewport-এর উপরে চলে গেলে:

// Top : -120

















// 🧠 Code Explain
// window.addEventListener("scroll", function () {

// ➡️ User যখনই page scroll করবে, এই function চলবে।

// const rect = box.getBoundingClientRect();

// ➡️ প্রতিবার নতুন করে element-এর current position নেওয়া হচ্ছে।

// console.clear();

// ➡️ আগের output মুছে দিয়ে শুধু latest value দেখায়।

// console.log("Top :", rect.top);
// console.log("Bottom :", rect.bottom);

// ➡️ Scroll করার সাথে সাথে top এবং bottom কীভাবে বদলায়, সেটা দেখতে পাবে।

// 📚 কী shikhlam?


// getBoundingClientRect() static নয়, dynamic।
// Scroll করলে top, bottom, left, right-এর মান পরিবর্তন হতে পারে।
// কারণ এগুলো viewport-এর relative।