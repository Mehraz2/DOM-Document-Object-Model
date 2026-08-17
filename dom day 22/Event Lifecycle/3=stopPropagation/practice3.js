


// ● Day 22 — Event Capturing (Practice 3) 🚀

// আজ event.currentTarget + Capturing শিখব।

// এখানে event.target এবং event.currentTarget-এর পার্থক্য Capturing-এর মাধ্যমে দেখব।




const grandparent3 = document.getElementById("grandparent3");
const parent3 = document.getElementById("parent3");
const child3 = document.getElementById("child3");


grandparent3.addEventListener("click", function (event) {
    console.log("Grandparent");
    console.log("target:", event.target);
    console.log("currentTarget:", event.currentTarget);
  },
  true
);


parent3.addEventListener ("click", function (event) {
    console.log("parent");
    console.log("target:", event.target);
    console.log("currentTarget:", event.currentTarget);
    
}, 
   true
);



child3.addEventListener("click", function (event) {
    console.log("Button");
    console.log("target", event.target);
    console.log("currentTarget:", event.currentTarget);   
},
   true);









// 🖥️ Output

// যদি তুমি Button-এ click করো:

// Grandparent


// target: <button id="child3">...</button>


// currentTarget: <div id="grandparent3">...</div>


// Parent


// target: <button id="child3">...</button>


// currentTarget: <div id="parent3">...</div>


// Button


// target: <button id="child3">...</button>


// currentTarget: <button id="child3">...</button>











// 🧠 Output Logic
// Capturing


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
// event.currentTarget


// Grandparent
//       ↓
// Parent
//       ↓
// Button







// 🔍 Code Logic Explain
// event.target
// console.log(event.target);

// event.target সব সময় সেই element-কে দেখায়, যেখানে click হয়েছে।

// তাই তিনবারই Button দেখাবে।

// event.currentTarget
// console.log(event.currentTarget);

// event.currentTarget সেই element-কে দেখায়, যার eventListener বর্তমানে চলছে।










// 🎯 মনে রাখার সহজ নিয়ম
// event.target = কোথায় click হয়েছে?


// event.currentTarget = কার eventListener চলছে?


