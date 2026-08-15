







// 🎯 Practice 4 — event.target + event.currentTarget + Capturing

// এবার দেখব, কোন element-এ click করা হয়েছে (event.target) এবং কোন element event handle করছে (event.currentTarget)।







const parent4 = document.getElementById("parent4");

const child4 = document.getElementById("child4");

parent4.addEventListener(
    "click",
    function (event) {
        console.log("target:", event.target);

        console.log("currentTarget:", event.currentTarget);
    },
    true
);

child4.addEventListener(
    "click",
    function (event) {
        console.log("target:", event.target);

        console.log("currentTarget:", event.currentTarget);
    },
    true
);







// 🖥️ Output

// Click Me button-এ click 

// Console-এ এমন কিছু দেখতে পাবে:

// target: <button id="child">Click Me</button>


// currentTarget: <div id="parent">...</div>


// target: <button id="child">Click Me</button>


// currentTarget: <button id="child">Click Me</button>












// ===========================================================🧠 Output Logic

// প্রথমে Capturing শুরু হবে।

// Parent
//  ↓
// Child

// তাই parent-এর event listener আগে execute হবে।

// event.target

// console.log(event.target);

// event.target সব সময় সেই element-কে দেখায়, যেটাতে আসলে click করা হয়েছে।

// এখানে click করা হয়েছে button-এ।

// তাই output:

// <button>

// event.currentTarget

// console.log(event.currentTarget);

// event.currentTarget দেখায়, কোন element-এর event listener বর্তমানে কাজ করছে।

// প্রথমে:

// currentTarget = parent

// তারপর:

// currentTarget = child













// 📌 সবচেয়ে গুরুত্বপূর্ণ বিষয়
// event.target = কোথায় click করা হয়েছে


// event.currentTarget = কোন element event handle করছে


















// 📝 VS Code Notes
// // event.target


// // The element that was actually clicked.


// // event.currentTarget


// // The element whose event listener is currently running.


// // event.target !== event.currentTarget (sometimes)


// // Capturing


// // Parent → Child

