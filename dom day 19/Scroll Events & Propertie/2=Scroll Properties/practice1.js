




// 🟢 Scroll Properties — scrollTop Practice 1
// 🎯 Goal:

// scrollTop-এর Live Value দেখা।



window.addEventListener("scroll", () => {

    console.log(window.scrollY);

});



// 🖥️ Output

// Console-এ দেখবে—

// 0
// 15
// 40
// 75
// 120
// 180
// 250
// 420
// 560

// যত নিচে Scroll করবে,

// তত Number পরিবর্তন হবে।



// 🎯 Output Explain
// 📌 কোথায় Execute হবে?

// Browser-এর Developer Console-এ।

// Open করতে—

// F12
// ↓
// Console



// 📌 কখন Execute হবে?

// যখন User—

// Mouse Wheel Scroll করবে
// Touchpad ব্যবহার করবে
// Scrollbar Drag করবে
// Keyboard দিয়ে Scroll করবে







// 📌 এই Number-এর মানে কী?

// suppose Console-এ দেখালো—

// 150

// এর মানে,

// 👉Top থেকে 150 Pixel নিচে চলে এসেছ

// আবার যদি দেখায়—

// 500

// তাহলে,

// 👉 Top থেকে 500 Pixel নিচে আছো।

// যদি আবার একদম উপরে চলে যাও—

// 0

// মানে,

// 👉 এখন Page-এর একদম Top-এ।




// 📌 Real Project-এ কোথায় ব্যবহার হয়?

// এই Value ব্যবহার করে—

// ✅ Back To Top Button
// ✅ Sticky Navbar
// ✅ Reading Progress Bar
// ✅ Scroll Animation
// ✅ Infinite Scroll
// ✅ Lazy Loading

// তৈরি করা হয়।







// ======================================📖 Code Explain===============================

// 1️⃣
// window

// 👉 পুরো Browser Window-কে বোঝায়।




// 2️⃣
// addEventListener("scroll", ...)

// 👉 User Scroll করলেই Function Execute হবে।









// 3️⃣
window.scrollY

// 👉 Page-এর বর্তমান Vertical Scroll Position (Pixel-এ) Return করে।

// নোট: Modern browser-এ পুরো webpage-এর scroll position জানার জন্য window.scrollY সবচেয়ে বেশি ব্যবহার করা হয়। element.scrollTop মূলত কোনো scrollable element-এর জন্য ব্যবহৃত হয়। পরে আমরা element.scrollTop-ও practice করব।





// 4️⃣
console.log(window.scrollY);

// 👉 বর্তমান Scroll Position Console-এ দেখাবে।

// 🧠 কী shikhlam?

// scrollY Scroll Position জানায়।
// Value সবসময় Pixel-এ হয়।
// Scroll করলে Value বাড়ে।
// উপরে গেলে Value কমে।
// একদম Top-এ থাকলে Value = 0।














