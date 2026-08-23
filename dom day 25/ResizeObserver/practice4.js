




// 🟢 IntersectionObserver — Practice 4

// এবার একবার visible হওয়ার পর আবার scroll করলে animation repeat করবে না। 
// এখানে unobserve() শিখবে। এটা real-world scroll animation-এ খুব useful।







const box4 = document.querySelector(".box4");

const observer4 = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer4.unobserve(entry.target);
        }
    });
});

observer4.observe(box4);















// 4️⃣ JS-এর Output 🎯

// Page load করলে:

// Box দেখা যাবে না

// Scroll করে Box-এর কাছে গেলে:

// Box viewport-এ ঢুকবে
//         ↓
// Animation হবে
//         ↓
// Box visible হবে

// এবার আবার নিচে গিয়ে উপরে scroll করলেও:

// Box আবার animate করবে না

// কারণ একবার দেখা যাওয়ার পর JavaScript তাকে observe করা বন্ধ করে দিচ্ছে।

















// 5️⃣ Output Logic 🧠

// Page Load
//    ↓
// box4 observe হচ্ছে
//    ↓
// User scroll করে
//    ↓
// box4 viewport-এ ঢোকে
//    ↓
// isIntersecting = true
//    ↓
// show class add
//    ↓
// Animation
//    ↓
// unobserve()
//    ↓
// box4 আর observe হবে না

// তাই animation একবারই হবে।

















// 6️⃣ Code Logic

// Step 1 — Box select

// const box4 = document.querySelector(".box4");

// HTML থেকে .box4 ধরলাম।

















// Step 2 — Observer তৈরি
// const observer4 = new IntersectionObserver((entries) => {

// এখানে IntersectionObserver তৈরি হলো।


















// Step 3 — Entry check
// entries.forEach((entry) => {

// Observer যে entry দিয়েছে সেটা নিয়ে কাজ করছি।












// Step 4 — Viewport check
// if (entry.isIntersecting) {

// যদি Box viewport-এর মধ্যে আসে, তাহলে condition true হবে।

















// Step 5 — Animation চালানো
// entry.target.classList.add("show");

// .show class যোগ হবে।

// CSS:

// .box4.show {
//     opacity: 1;
//     transform: translateY(0);
// }

// এর ফলে animation হবে।


















// Step 6 — সবচেয়ে গুরুত্বপূর্ণ অংশ 🔥
// observer4.unobserve(entry.target);

// এটার অর্থ:

// এই element-টাকে আর observe করো না।

// তাই Box একবার viewport-এ আসার পর Observer তাকে আর track করবে না।




















// Step 7 — প্রথমে observe শুরু
// observer4.observe(box4);

// এখানে বলছি:

// box4-কে observe করো।













// 7️⃣ Practice 4-এর Core Concept

// Practice 3:

// entry.target.classList.add("show");

// → Element visible হলে class add।









// Practice 4:

// observer4.unobserve(entry.target);

// → একবার কাজ করার পর observation বন্ধ।







// মনে রাখব:
// observe()
//    ↓
// Detect
//    ↓
// show()
//    ↓
// unobserve()

// এটাই Practice 4-এর পুরো game। 🎯








