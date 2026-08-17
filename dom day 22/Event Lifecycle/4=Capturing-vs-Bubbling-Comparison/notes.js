





// 🎯 Capturing vs Bubbling Comparison (A to Z)

// একটা event (যেমন click) যখন ঘটে, তখন সেটা শুধু সেই element-এর মধ্যে সীমাবদ্ধ থাকে না। Event পুরো DOM tree-এর মধ্যে ভ্রমণ করে।

// Event-এর 3টা phase আছে।

// 1. Capturing Phase
// 2. Target Phase
// 3. Bubbling Phase

// suppose, HTML হলো:

// <div id="grandparent">
//   Grandparent


//   <div id="parent">
//     Parent


//     <button id="child">Click Me</button>
//   </div>
// </div>



// DOM tree দেখতে এমন হবে:

// Grandparent
//      │
//      ▼
//    Parent
//      │
//      ▼
//    Child







// 🔥 Phase 1: Capturing

// Capturing phase-এ event উপরের element থেকে নিচের element-এর দিকে যায়।

// Grandparent
//      │
//      ▼
//    Parent
//      │
//      ▼
//    Child


// Capturing-এর code

grandparent.addEventListener(
  "click",
  function () {
    console.log("Grandparent");
  },
  true
);




parent.addEventListener(
  "click",
  function () {
    console.log("Parent");
  },
  true
);


child.addEventListener(
  "click",
  function () {
    console.log("Child");
  },
  true
);


// Output

// যদি Child-এ ক্লিক

// Grandparent
// Parent
// Child








// কেন এমন হলো?

// কারণ true দেওয়ার ফলে browser বুঝতে পারে যে event listener-কে Capturing phase-এ চালাতে হবে।

// addEventListener("click", function () {}, true);

// এখানে:

// true = Capturing












// 🔥 Phase 2: Target

// Event যখন আসল element-এ পৌঁছায়, তখন তাকে Target phase বলে।

// এখানে:

// <button id="child">Click Me</button>

// child হচ্ছে target।

// Grandparent
//      │
//      ▼
//    Parent
//      │
//      ▼
//    Child ← Target















// 🔥 Phase 3: Bubbling

// Target-এ পৌঁছানোর পরে event আবার উপরের দিকে যেতে শুরু করে।

// Child
//    ▲
//    │
// Parent
//    ▲
//    │
// Grandparent





// Bubbling-এর code

grandparent.addEventListener("click", function () {
  console.log("Grandparent");
});


parent.addEventListener("click", function () {
  console.log("Parent");
});


child.addEventListener("click", function () {
  console.log("Child");
});



// Output

// যদি Child-এ ক্লিক করো:

// Child
// Parent
// Grandparent







// 🔥 Capturing + Bubbling একসাথে

const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");


// // Capturing


grandparent.addEventListener(
  "click",
  function () {
    console.log("Grandparent Capturing");
  },
  true
);


parent.addEventListener(
  "click",
  function () {
    console.log("Parent Capturing");
  },
  true
);


child.addEventListener(
  "click",
  function () {
    console.log("Child Capturing");
  },
  true
);






// // Bubbling


grandparent.addEventListener("click", function () {
  console.log("Grandparent Bubbling");
});


parent.addEventListener("click", function () {
  console.log("Parent Bubbling");
});


child.addEventListener("click", function () {
  console.log("Child Bubbling");
});






// 🔥 Output



// Grandparent Capturing
// Parent Capturing
// Child Capturing
// Child Bubbling
// Parent Bubbling
// Grandparent Bubbling




// 🔥 Browser-এর ভিতরে কী ঘটে?

//  suppose, Child button-এ ক্লিক ।







// Step 1

// Browser event তৈরি করল।

// Click Event Created






// Step 2

// Browser DOM tree-এর একদম উপরে গেল।

// Grandparent






// Step 3

// Capturing phase শুরু হলো।

// Grandparent
//      ▼
// Parent
//      ▼
// Child











// Step 4

// Target phase শুরু হলো।

// Child











// Step 5

// Bubbling phase শুরু হলো।

// Child
//      ▲
// Parent
//      ▲
// Grandparent












// 🔥 কবে Capturing ব্যবহার করা হয়?

// ✅ Event flow নিয়ন্ত্রণ করতে।

// ✅ Complex UI তৈরি করতে।

// ✅ Event delegation-এর বিশেষ কিছু ক্ষেত্রে।












// 🔥 কবে Bubbling ব্যবহার করা হয়?

// ✅ Button click

// ✅ Form submit

// ✅ Menu

// ✅ Dropdown

// ✅ Modal

// ✅ Event delegation











// 🔥 সবচেয়ে গুরুত্বপূর্ণ কথা
// Capturing = Outside → Inside


// Bubbling = Inside → Outside
// Capturing = Top → Bottom


// Bubbling = Bottom → Top





