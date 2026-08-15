





// 🎯 Day 22 — Bubbling (A to Z)

// আজ Event Bubbling সম্পূর্ণ শিখব। 🚀






// 🤔 Bubbling কী?

// Bubbling হলো এমন একটি process, যেখানে event নিচের element থেকে উপরের element-এর দিকে যায়।

// Child
//  ↑
// Parent
//  ↑
// Body
//  ↑
// HTML
//  ↑
// Document
//  ↑
// Window










// 📌 Bubbling কেন বলা হয়?

// পানির নিচে একটি বুদবুদ (Bubble) তৈরি হলে সেটি নিচ থেকে উপরে ওঠে।

// JavaScript-এর event-ও একইভাবে কাজ করে।

// Bubble = নিচ থেকে উপরে ওঠা


// Event Bubbling = Child থেকে Parent-এর দিকে যাওয়া





// ⚡ Bubbling হলো JavaScript-এর Default Behavior

element.addEventListener("click", callback);

// এখানে true ব্যবহার করা হয়নি।

// তাই JavaScript স্বয়ংক্রিয়ভাবে Bubbling ব্যবহার করবে।












// 🎯 Event Flow

// suppose HTML এমন:

// <body>


//     <div>


//         <button>
//             Click Me
//         </button>


//     </div>


// </body>

// যদি button-এ click kori, তাহলে event-এর পথ হবে:

// Button
//  ↑
// Div
//  ↑
// Body
//  ↑
// HTML
//  ↑
// Document
//  ↑
// Window












// 📌 Bubbling-এর Syntax

element.addEventListener(
    "click",
    function () {


    }
);











// 🎯 Example

// HTML
// <div id="parent">


//     Parent


//     <button id="child">
//         Click Me
//     </button>


// </div>
// JavaScript

const parent = document.getElementById("parent");


const child = document.getElementById("child");


parent.addEventListener("click", function () {


    console.log("Parent");


});


child.addEventListener("click", function () {


    console.log("Child");


});


// 🖥️ Output

// Child


// Parent


// 🤔 Output এমন হলো কেন?

// কারণ event প্রথমে child-এ ঘটেছে।

// Child
//  ↑
// Parent

// তাই child-এর event listener আগে execute হয়েছে।

// তারপর parent-এর event listener execute হয়েছে।














// 🎯 Bubbling কোথায় ব্যবহার করা হয়?

// 1. Event Delegation

// একটি parent element দিয়ে অনেক child element নিয়ন্ত্রণ করা যায়।

// 2. Dynamic Element Handle করা
// UL
//  ↑
// LI
//  ↑
// Button











// 3. কম Code লেখার জন্য

// প্রতিটি child element-এ আলাদা event না বসিয়ে parent-এ একটি event ব্যবহার করা যায়।










// ❌ কখন Bubbling সমস্যা তৈরি করে?

// ধরো:

// Modal
//  ↑
// Button

// তুমি শুধু button-এ click করতে চেয়েছিলে।

// কিন্তু event bubble হয়ে modal-এও পৌঁছে গেল।

// এতে অপ্রত্যাশিত behavior হতে পারে।

// 🛑 stopPropagation()











// Bubbling বন্ধ করার জন্য ব্যবহার করা হয়।

event.stopPropagation();











// 📝 মনে রাখার Shortcut
// Capturing = Parent → Child


// Bubbling = Child → Parent


// true = Capturing


// Default = Bubbling


// stopPropagation() = Bubbling বন্ধ করে
















// 📌 VS Code Notes
// // Event Bubbling


// // Child → Parent


// // Bubbling is the default behavior.


// // addEventListener("click", callback);


// // stopPropagation() stops bubbling.


// // Used for:


// // Event Delegation


// // Dynamic Elements


// // Less Code










