





const grandparent1 = document.getElementById("grandparent1");
const parent1 = document.getElementById("parent1");
const child1 = document.getElementById("child1");

grandparent1.addEventListener("click", function () {
    console.log("Grandparent Clicked");
  },
    true
);

parent1.addEventListener("click", function () {
    console.log("parent Clicked");    

  }, 
   true
);

child1.addEventListener("click",function () {
    console.log("Button Clicked");
  },

  true
);






// 🖥️ Output

// যদি Button-এ click :

// Grandparent Clicked


// Parent Clicked


// Button Clicked










// 🧠 Output Logic
// Grandparent
//       ↓
// Parent
//       ↓
// Button













// 🔍 Code Logic

// এই অংশটি :

// addEventListener("click", function () {}, true);

// শেষের true-টাই সবচেয়ে গুরুত্বপূর্ণ।






// false (Default)

// Button
//    ↓
// Parent
//    ↓
// Grandparent

// এটা হলো Bubbling।







// true
// Grandparent
//       ↓
// Parent
//       ↓
// Button

// এটা হলো Capturing।






// true না লিখলে কী হবে?
// child1.addEventListener("click", function () {
//   console.log("Button Clicked");
// });





// JavaScript স্বয়ংক্রিয়ভাবে false ধরে নেবে।

// অর্থাৎ, Capturing হবে না, Bubbling হবে।







