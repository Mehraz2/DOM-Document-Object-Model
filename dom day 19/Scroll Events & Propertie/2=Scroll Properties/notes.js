


// ==========================================
// scrollTop Property
// ==========================================

// scrollTop হলো একটি Scroll Property।

// এটি বলে দেয়,
// কোনো Element বা Web Page
// Top থেকে কত Pixel নিচে Scroll হয়েছে।

// scrollTop-এর Value সবসময় Number হয়।

// Scroll না করলে

scrollTop = 0

// নিচে Scroll করলে

// scrollTop-এর Value বাড়তে থাকে।

// আবার উপরে গেলে

// scrollTop-এর Value কমতে থাকে।










// 🟢 সহজভাবে বুঝো

// ধরো একটা Building আছে।

// Top
// │
// │ 0px
// │
// │ 50px
// │
// │ 100px
// │
// │ 200px
// │
// │ 350px
// │



// Bottom

//  যদি একদম উপরে থাকো—

// scrollTop = 0

// একটু নিচে গেলে—

// scrollTop = 100

// আরও নিচে গেলে—

// scrollTop = 300





// 🟢 Real Life Example

// Facebook

// নিচে Scroll করলে

scrollTop = 100

// আরও নিচে

scrollTop = 500

// আরও নিচে

scrollTop = 1200

// অর্থাৎ,

// Top থেকে কত Pixel নিচে আছো, সেটাই scrollTop বলে।

// 🟢 কোথায় ব্যবহার হয়?

// ✔ Back To Top Button

// ✔ Sticky Navbar

// ✔ Reading Progress Bar

// ✔ Infinite Scroll

// ✔ Lazy Loading

// ✔ Show / Hide Button





// 🟢 Syntax

element.scrollTop

// Value Set করতে চাইলে—

element.scrollTop = 200;





// 🟢 Important

// scrollTop

// ✔ Property

// ✘ Event নয়

// ✘ Method নয়

// এটি শুধু Value Return করে
// অথবা Value Change করতে দেয়।










// 🟢 মনে রাখার Trick 🎯


// scrollTop

// ↓

// Top থেকে কত Pixel নিচে এসেছি?