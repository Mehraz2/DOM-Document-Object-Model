





// 🧪 Practice 1 — Blur হলে Background Change

// 🎯 Goal
// Input Focus
//     ↓
// User অন্য জায়গায় click করে
//     ↓
// blur event fire
//     ↓
// Background lightgray হবে







const input = document.querySelector("#nameInput");

input.addEventListener("blur", function () {
    input.style.backgroundColor = "lightgray";
});








