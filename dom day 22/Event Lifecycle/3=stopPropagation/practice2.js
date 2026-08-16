







// আজ  event.target + Capturing নিয়ে কাজ করব।

// এখানে দেখব, Capturing চললেও event.target পরিবর্তন হয় না।









const grandparent2 = document.getElementById("grandparent2");
const parent2 = document.getElementById("parent2");
const child2 = document.getElementById("child2")


grandparent2.addEventListener("click", function (event) {
    console.log("Grandparent");
    console.log(event.target);   
}. 
  true
);

parent2.addEventListener("click", function (event) {
    console.log("Parent");
    console.log(event.target);
    
}, 
   true
);

child2.addEventListener(
  "click",
  function (event) {
    console.log("Button");
    console.log(event.target);
  },
  true
);







// 🖥️ Output

// যদি  Button-এ click :

// Grandparent
// <button id="child2">Click Me</button>


// Parent
// <button id="child2">Click Me</button>


// Button
// <button id="child2">Click Me</button>











// 🧠 Output Logic
// Capturing Order


// Grandparent
//       ↓
// Parent
//       ↓
// Button
// event.target


// Button
//       ↓
// Button
//       ↓
// Button









// 🔍 Code Logic Explain
// এই অংশটি 
// :
// console.log(event.target);

// event.target সব সময় সেই element-কে দেখায়, যেখানে প্রথমে click করা হয়েছে।

// Capturing-এর সময় event উপরের দিক থেকে নিচের দিকে যায়।

// Grandparent
//       ↓
// Parent
//       ↓
// Button

// কিন্তু event.target সব সময় Button-ই দেখাবে।

// কারণ click প্রথমে Button-এর ওপর হয়েছে।












// 🎯 গুরুত্বপূর্ণ বিষয়

// Capturing-এর direction পরিবর্তন হয়।

// Grandparent → Parent → Button

// কিন্তু event.target পরিবর্তন হয় না।

// Button → Button → Button



