// 📘 cloneNode() কী?

// cloneNode() হলো JavaScript DOM-এর একটি method,
//  যা কোনো existing HTML element-
// এর exact copy (clone/duplicate) তৈরি করে।

// সহজ ভাষায়,

// cloneNode() = কোনো HTML element-এর ফটোকপি বানানো। 

const title = document.getElementById("title");

const copy = title.cloneNode ();

// document.body.append(copy);

// output = 
// Hello DOM
// Hello DOM




// =========================================================


const box = document.getElementById("box");

const copy = box.cloneNode(false);

document.body.append(copy);

//  Output
// JavaScript
// DOM Day 12

// নিচে আরেকটা খালি div তৈরি হবে, কিন্তু তার ভিতরে কোনো লেখা থাকবে না। 
// তাই Browser-এ আলাদা করে কিছু চোখে পড়বে না।


// 🧠 কী হলো?

// false মানে শুধু Parent Element Copy হবে।

// =================================================================

const box = document.getElementById("box");

const copy = box.cloneNode(true);

document.body.append(copy);

// /Output
// JavaScript
// DOM Day 12

// JavaScript
// DOM Day 12

// দুইটা একই রকম block দেখা যাবে।

// 🧠 কী হলো?

// true মানে

// Parent Copy হবে ✅
// সব Child-ও Copy হবে ✅

// ===============================================================

const btn = document.getElementById("btn");

for (let i = 0; i < 3; i++) {
    const copy = btn.cloneNode(true);
    document.body.append(copy);
}

//  Output
// Click Me
// Click Me
// Click Me
// Click Me

// একটা Original Button + তিনটা Clone Button = মোট ৪টা Button।

// 🧠 কী হলো?

// Loop ৩ বার চলেছে।

// প্রতি বার—

// Button Clone হয়েছে।
// append() দিয়ে Body-তে যোগ হয়েছে।

// তাই শেষে মোট ৪টা Button দেখাচ্ছে।