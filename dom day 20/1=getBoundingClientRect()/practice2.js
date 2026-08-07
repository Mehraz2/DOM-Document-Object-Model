





// 📁 Practice 2 — top, left, right, bottom
// 🎯 Goal

// Console-এ element-এর position আলাদা আলাদাভাবে দেখবে।








const box = document.querySelector(".box");

const rect = box.getBoundingClientRect();

console.log("Top :", rect.top);
console.log("Left :", rect.left);
console.log("Right :", rect.right);
console.log("Bottom :", rect.bottom);






// 🖥️ Example Output
// Top : 180
// Left : 120
// Right : 340
// Bottom : 300




//======================== 🧠 Code Explain===============



const rect = box.getBoundingClientRect();

// ➡️ Element-এর position এবং size নিয়ে একটি DOMRect object পাওয়া যায়।





console.log("Top :", rect.top);

// ➡️ Viewport-এর উপরের দিক থেকে element-এর উপর পর্যন্ত কত pixel দূরে।



console.log("Left :", rect.left);

// ➡️ Viewport-এর বাম দিক থেকে element-এর বাম পাশ পর্যন্ত কত pixel দূরে।




console.log("Right :", rect.right);

// ➡️ Viewport-এর বাম দিক থেকে element-এর ডান পাশ পর্যন্ত কত pixel দূরে।




console.log("Bottom :", rect.bottom);

// ➡️ Viewport-এর উপরের দিক থেকে element-এর নিচ পর্যন্ত কত pixel দূরে।






// 📚 কী shikhlam?



// rect.top → Element-এর top position
// rect.left → Element-এর left position
// rect.right → Element-এর right position
// rect.bottom → Element-এর bottom position
// সব value Viewport-এর relative।
