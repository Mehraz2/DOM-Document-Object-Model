








// // stopPropagation() হলো JavaScript-এর Event Object-এর একটি method।

// // এর কাজ হলো event-এর উপরের element-এ যাওয়া বন্ধ করে দেওয়া।





// প্রথমে Bubbling বুঝতে হবে

// suppose, HTML এমন:

// <div id="grandparent">
//   Grandparent


//   <div id="parent">
//     Parent


//     <button id="child">Click Me</button>
//   </div>
// </div>

// যদি Button-এ click , তাহলে event এভাবে চলবে:

// Button
//    ↓
// Parent
//    ↓
// Grandparent

// এটাকেই Event Bubbling বলে।

stopPropagation() 
ছাড়া

JavaScript
const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");


grandparent.addEventListener("click", function () {
  console.log("Grandparent");
});


parent.addEventListener("click", function () {
  console.log("Parent");
});


child.addEventListener("click", function () {
  console.log("Button");
});

// Output

// Button
// Parent
// Grandparent

// কারণ event Button থেকে শুরু হয়ে উপরের দিকে যাচ্ছে।




stopPropagation()
//  ব্যবহার করলে

// JavaScript
child.addEventListener("click", function (event) {
  event.stopPropagation();


  console.log("Button");
});

// Output

// Button




// এটা আসলে কী করে?
event.stopPropagation();

// এটা JavaScript-কে বলে:

// "এখানেই থামো। Event-কে আর উপরের element-এ পাঠিও না।"












// Event Flow-এর কোথায় কাজ করে?

// Capturing Phase
//        ↓


// Target Phase
//        ↓


// Bubbling Phase

// stopPropagation() Event Flow-এর যেকোনো পর্যায়ে event-এর পরবর্তী যাত্রা বন্ধ করতে পারে।

// event.target বন্ধ করে না

// অনেকে মনে করে stopPropagation() মানে click বন্ধ হয়ে যায়।

// এটা ভুল। ❌

child.addEventListener("click", function (event) {
  event.stopPropagation();


  console.log(event.target);
});


// Output
// <button>Click Me</button>



// event.target ঠিকই কাজ করবে।

// preventDefault() আর stopPropagation() এক নয়
preventDefault()

// Browser-এর default behavior বন্ধ করে।




// <a href="https://google.com">Google</a>
// link.addEventListener("click", function (event) {
//   event.preventDefault();
// });








stopPropagation()

// Event-এর উপরের element-এ যাওয়া বন্ধ করে।

event.stopPropagation();

// পার্থক্য
// -------------------------------------------------------------------------------------
// Method	                                          কাজ
// -------------------------------------------------------------------------------------
// stopPropagation()                          	Event-এর উপরের element-এ যাওয়া বন্ধ করে
// preventDefault()	                            Browser-এর default behavior বন্ধ করে












// কোথায় ব্যবহার হয়? 🤔

// 1. Modal

// পুরো Screen
//         ↓
// Modal Overlay
//         ↓
// Modal Box

// Modal Box-এর ভেতরে click করলে Modal বন্ধ হবে না।














// 2. Dropdown Menu
// Dropdown
//       ↓
// Menu Item

// Menu Item-এ click করলে পুরো Dropdown বন্ধ হওয়া ঠেকানো যায়।













// 3. Navigation Menu
// Navigation
//       ↓
// Submenu
//       ↓
// Button

// Button-এ click করলে Parent Menu-এর event বন্ধ করা যায়।

















// 4. Card Component
// Card
//     ↓
// Button

// Card-এ click করলে Details Page খুলবে।

// কিন্তু Card-এর ভেতরের Button-এ click করলে আলাদা কাজ করবে।











// Syntax

event.stopPropagation();






// মনে রাখার জন্য এক লাইনের নোট 📝

// preventDefault() = Browser-এর কাজ বন্ধ করে।


// stopPropagation() = Event-এর যাত্রা বন্ধ করে।