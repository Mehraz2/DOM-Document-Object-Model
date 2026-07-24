// Clone vs Move
// 🤔 Clone vs Move কী?

// DOM-এ যখন একটা existing element নিয়ে কাজ করো, 
// তখন দুইটা জিনিস হতে পারে:

// 🟢 Clone (Copy)

// একটা element-এর হুবহু নতুন কপি তৈরি হয়।

// Original-ও থাকে।

// Clone-ও থাকে।

// Before

// 📦 Box

// ↓

// Clone

// 📦 Box
// 📦 Box

// মোট = ২টা Element

// 🔴 Move

// একটা element এক জায়গা থেকে আরেক জায়গায় চলে যায়।

// নতুন element তৈরি হয় না।

// Before

// Box A
// 📦 Box

// Box B
// (empty)

// ↓

// Move

// Box A
// (empty)

// Box B
// 📦 Box

// মোট = ১টা Element


const heading = document.querySelector("h2");

const box2 = document.getElementById("box2");

box2.append(heading);

// 🌐 Browser Output
// Hello World

// দেখতে একই লাগবে।

// কিন্তু Inspect করলে—

// Before
// <div id="box1">
//     <h2>Hello World</h2>
// </div>

// <div id="box2"></div>
// After
// <div id="box1"></div>

// <div id="box2">
//     <h2>Hello World</h2>
// </div>

// ✅ Move হয়েছে।

// =============================================================


const heading = document.querySelector("h2");

const box2 = document.getElementById("box2");

const copy = heading.cloneNode(true);

box2.append(copy);

// Output
// Hello World

// Hello World
// Inspect
// <div id="box1">
//     <h2>Hello World</h2>
// </div>

// <div id="box2">
//     <h2>Hello World</h2>
// </div>

// ✅ Original আছে।

// ✅ Copy-ও আছে।

// =================================================

const card = document.getElementById("card");

const container2 = document.getElementById("container2");

container2.append(card);


// Output
// Product Card

// Inspect করলে—

// Before
// <div id="container1">
//     <div id="card">
//         Product Card
//     </div>
// </div>

// <div id="container2"></div>
// After
// <div id="container1"></div>

// <div id="container2">
//     <div id="card">
//         Product Card
//     </div>
// </div>

// ✅ পুরো Card Move হয়েছে।

// ========================================================

const card = document.getElementById("card");

const container2 = document.getElementById("container2");

const copy = card.cloneNode(true);

container2.append(copy);

// 🌐 Browser Output
// Product Card

// Product Card

// Inspect করলে—

// Before
// <div id="container1">
//     <div id="card">
//         Product Card
//     </div>
// </div>

// <div id="container2"></div>
// After
// <div id="container1">
//     <div id="card">
//         Product Card
//     </div>
// </div>

// <div id="container2">
//     <div id="card">
//         Product Card
//     </div>
// </div>

// ✅ Original Card আছে।

// ✅ Clone Card-ও আছে।


