


// এটা হবে একদম basic, যাতে setTimeout()-এর মূল concept পরিষ্কার হয়ে যায়।


const btn1 = document.getElementById("btn1");

btn.addEventListener("click", () => {

    console.log("Button Clicked");

    setTimeout(() => {
        console.log("Hello Mehraz");
    }, 3000);

});



// ▶️ Output
// Click করার সাথে সাথে



// Console:

// Button Clicked
// ৩ সেকেন্ড পরে

// Console:

// Hello Mehraz
// Timeline
// Button Click
//       │
//       ▼
// Button Clicked
//       │
//       ▼
// Waiting 3 Seconds...
//       │
//       ▼
// Hello Mehraz





// 🔍 Explanation==========================================================
const btn = document.getElementById("btn");

// Button-কে select করেছি।

btn.addEventListener("click", () => {})

// Button click হলে নিচের code execute হবে।

console.log("Button Clicked");

// এটা সাথে সাথে execute হবে।

setTimeout(() => {

// একটি timer শুরু হবে।

console.log("Hello Mehraz");

// এই code ৩ সেকেন্ড পরে execute হবে।

}, 3000);

// 3000 milliseconds = 3 seconds

// 🎯 কী shikhlam?
// ✅ setTimeout() delay তৈরি করে।
// ✅ Delay শেষ হলে callback function একবার execute হয়।
// ✅ Button click হওয়ার সাথে সাথে setTimeout()-এর ভিতরের code চলে না।
// ✅ Delay-এর unit হলো milliseconds (ms)।




































