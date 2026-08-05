

// 🟢 Scroll Properties — scrollTop Practice 2
// 🎯 Goal:

// Scroll Position Live Web Page-এ দেখানো।

// এবার Console-এ না দেখিয়ে, Page-এর উপরে Live Value দেখাবো।




const position = document.getElementById("position");

window.addEventListener("scroll", () => {

    position.textContent = `${window.scrollY} px`;

});



// 🎯 Output Explain
// 📌 কোথায় Execute হবে?

// এবার Output Console-এ নয়।

// Output Web Page-এর উপরের ডান পাশে দেখা যাবে।



// 📌 কখন Execute হবে?

// User যখন—

// Mouse Wheel ব্যবহার করবে
// Touchpad দিয়ে Scroll করবে
// Scrollbar Drag করবে
// Keyboard দিয়ে Scroll করবে

// তখনই Value Update হবে।





// 📌 কীভাবে কাজ করছে?

// ধরো  নিচে Scroll করলে।

// window.scrollY

// আগে ছিল—

// 0

// তারপর—

// 80

// তারপর—

// 350

// প্রতিবার Scroll করার সময় JavaScript নতুন Value নিয়ে <h2>-এর ভিতরে বসিয়ে দিচ্ছে।





// 📌 Real Project-এ কোথায় ব্যবহার হয়?

// এই technique ব্যবহার করে—

// ✅ Scroll Position Indicator
// ✅ Reading Progress
// ✅ Developer Debugging
// ✅ Live Scroll Status
// ✅ Scroll Analytics

// বানানো যায়।











// ========================📖 Code Explai==================================



// 1️⃣
const position = document.getElementById("position");

// 👉 id="position"-এর <h2> element-কে select করা হয়েছে।



// 2️⃣
window.addEventListener("scroll", () => {

// 👉 User Scroll করলেই Function Execute হবে।

// 3️⃣
window.scrollY

// 👉 বর্তমান Vertical Scroll Position (Pixel) Return করছে।

// 4️⃣
position.textContent

// 👉 <h2>-এর Text পরিবর্তন করছে।

// 5️⃣
`${window.scrollY} px` 

})






// 👉 Template Literal ব্যবহার করে Number-এর শেষে " px" যোগ করা হয়েছে।

// যেমন—

// 250 px
// 🧠 কী শিখলে?
// window.scrollY-এর Value Live Update করা যায়।
// textContent দিয়ে Web Page-এ Value দেখানো যায়।
// Scroll Position Pixel-এ প্রকাশ করা যায়।
// DOM Update এবং Scroll Event একসাথে ব্যবহার করা যায়।












