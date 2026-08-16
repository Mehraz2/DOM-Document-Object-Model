



// এটি Event Bubbling বন্ধ করার জন্য ব্যবহার করা হয়।






const grandparent4 = document.getElementById("grandparent4");
const parent4 = document.getElementById("parent4");
const child4 = document.getElementById("child4");

grandparent4.addEventListener("click", function () {
  console.log("Grandparent Clicked");
});

parent4.addEventListener("click", function () {
  console.log("Parent Clicked");
});

child4.addEventListener("click", function (event) {
  event.stopPropagation();

  console.log("Button Clicked");
});







// 🖥️ Output

// যদি Button-এ ক্লিক :

// Button Clicked

// যদি event.stopPropagation() মুছে :

// Button Clicked


// Parent Clicked


// Grandparent Clicked













// 🧠 Output Logic

// stopPropagation() ছাড়া:

// Button
//    ↓
// Parent
//    ↓
// Grandparent

// stopPropagation() ব্যবহার করলে:

// Button

// ❌ Bubbling বন্ধ














// 🔍 Code Logic Explain

// এই লাইনটি সবচেয়ে গুরুত্বপূর্ণ:
// event.stopPropagation();

// এর কাজ হলো:

// "Event-কে আর উপরের element-এ যেতে দেওয়া হবে না।"

// এই অংশটি :
// child4.addEventListener("click", function (event) {
//   event.stopPropagation();


//   console.log("Button Clicked");
// });

// Button-এ click হওয়ার পরে event Parent-এর কাছে যাবে না।

// Grandparent-এর কাছেও যাবে না।















// 🎯 বাস্তব জীবনের ব্যবহার

// suppose একটি Modal Box আছে।

//  Modal-এর ভেতরে click করলে Modal বন্ধ হবে না।

// কিন্তু Modal-এর বাইরের অংশে click করলে Modal বন্ধ হবে।

// এমন পরিস্থিতিতে stopPropagation() অনেক বেশি ব্যবহার করা হয়।







