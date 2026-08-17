
























const grandparent4 = document.getElementById("grandparent4");

const parent4 = document.getElementById("parent4");

const child4 = document.getElementById("child4");

// Capturing

grandparent4.addEventListener(
  "click",
  function () {
    console.log("Grandparent Capturing");
  },
  true
);

parent4.addEventListener(
  "click",
  function () {
    console.log("Parent Capturing");
  },
  true
);

child4.addEventListener(
  "click",
  function () {
    console.log("Child Capturing");
  },
  true
);

// Bubbling

grandparent4.addEventListener("click", function () {
  console.log("Grandparent Bubbling");
});

parent4.addEventListener("click", function () {
  console.log("Parent Bubbling");
});

child4.addEventListener("click", function () {
  console.log("Child Bubbling");
});





// 📌 Output Logic

// এখানে Capturing এবং Bubbling দুটোই একসঙ্গে ব্যবহার করা হয়েছে।

// Child button-এ ক্লিক ।

// Browser-এর ভেতরে Event Flow হবে:

// Capturing Phase


// Grandparent
//      ▼
// Parent
//      ▼
// Child

// তারপর:

// Target Phase


// Child

// এরপর:

// Bubbling Phase


// Child
//      ▲
// Parent
//      ▲
// Grandparent












// Step 1

// Browser প্রথমে Grandparent-এ যাবে।

// Grandparent Capturing









// Step 2

// তারপর Parent-এ যাবে।

// Grandparent Capturing


// Parent Capturing











// Step 3

// সবশেষে Child-এ পৌঁছাবে।

// Grandparent Capturing


// Parent Capturing


// Child Capturing










// Step 4

// এরপর Bubbling শুরু হবে।

// Child Bubbling













// Step 5

// Event আবার উপরের দিকে উঠবে।

// Child Bubbling


// Parent Bubbling













// Step 6

// সবশেষে Grandparent-এ ফিরে যাবে।

// Child Bubbling


// Parent Bubbling


// Grandparent Bubbling
















// 📌 JavaScript Code Logic

// এই লাইনটি কী?
// const grandparent4 = document.getElementById("grandparent4");

// Grandparent element-কে select করছে।

// এই লাইনটি কী ?
// const parent4 = document.getElementById("parent4");

// Parent element-কে select করছে।

// এই লাইনটি কী ?
// const child4 = document.getElementById("child4");

// Child button-কে select 

// এই অংশটি কী ?
// grandparent4.addEventListener(
//   "click",
//   function () {
//     console.log("Grandparent Capturing");
//   },
//   true
// );

// true দেওয়ার কারণে Event Listener Capturing Phase-এ কাজ করবে।

// এই অংশটি কী ?

// parent4.addEventListener(
//   "click",
//   function () {
//     console.log("Parent Capturing");
//   },
//   true
// );

// Parent-এর জন্য Capturing Event যোগ করা হয়েছে।

// এই অংশটি কী ?

// child4.addEventListener(
//   "click",
//   function () {
//     console.log("Child Capturing");
//   },
//   true
// );

// Child button-এর জন্য Capturing Event যোগ করা হয়েছে।

// এই অংশটি কী ?

// grandparent4.addEventListener("click", function () {
//   console.log("Grandparent Bubbling");
// });

// true দেওয়া হয়নি, তাই এটা Bubbling Phase-এ কাজ করবে।













// সবচেয়ে গুরুত্বপূর্ণ বিষয় 🧠
// Capturing = Top → Bottom


// Bubbling = Bottom → Top
