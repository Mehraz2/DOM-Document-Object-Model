

// এবার শুধু console.log() না, DOM পরিবর্তন করব। এটাই বাস্তবে বেশি ব্যবহার হয়।



const title2 = document.getElementById("title2");
const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", () => {

     console.log("Waiting...........");

     setTimeout(() => {
        title2.textContent= "Welcome Mehraz";
        console.log("Text Changed");
        
     }, 3000)
     


});



// ▶️ Output
// প্রথমে Page
// Hello World
// Button Click করলে

// Console

// Waiting...

// Page

// Hello World

// (এখনও পরিবর্তন হবে না)

// ৩ সেকেন্ড পরে

// Console

// Text Changed

// Page

// Welcome Mehraz
// Timeline
// Page Load
//       │
//       ▼
// Hello World
//       │
//       ▼
// Button Click
//       │
//       ▼
// Waiting...
//       │
//       ▼
// 3 Seconds Delay
//       │
//       ▼
// Welcome Mehraz







// 🧠 Line by Line Explanation=================================================


const title = document.getElementById("title2");

// <h1> element-কে select করেছি।

const btn = document.getElementById("btn2");

// Button select করেছি।

// btn.addEventListener("click", () => {

// Button click করলে নিচের code execute হবে।

console.log("Waiting...");

// এটা সঙ্গে সঙ্গে execute হবে।

// setTimeout(() => {

// এখানে timer শুরু হলো।

title.textContent = "Welcome Mehraz";

// ৩ সেকেন্ড পরে <h1>-এর লেখা পরিবর্তন হবে।

console.log("Text Changed");





// Console-এ message দেখাবে।

// }, 3000);

// 3000ms = 3 Seconds




// 🎯 কী shikhlam?
// ✅ setTimeout() শুধু console.log() নয়, DOM update করতেও ব্যবহার করা যায়।
// ✅ Delay শেষ হওয়ার আগে page-এর কিছুই পরিবর্তন হয় না।
// ✅ Delay শেষ হলে callback function execute হয়।
// ✅ textContent update করা যায় setTimeout()-এর ভিতর থেকে।














































