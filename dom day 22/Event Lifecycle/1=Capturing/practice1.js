






// 🎯 Practice 1 — Event Capturing

// আজ শুধু একটা কাজ করব।

// একটা parent এবং একটা child element তৈরি করব। তারপর Capturing ব্যবহার করে দেখব কোন event আগে execute হয়।





const parent = document.getElementById("parent");

const child = document.getElementById("child");

parent.addEventListener(

    "click",
    function () {
        console.log("Parent clicked");
        
    },
    true
);

child.addEventListener(
    "click",
    function () {
        console.log("Child clicked");
        
    },
    true
);







// 🖥️ Output

// Click Me button-এ click kori

// Console-এ দেখব

// Parent clicked


// Child clicked














// 🧠 Output Logic

// Event প্রথমে parent-এর কাছে যায়।

// Parent
//  ↓
// Child

// তাই Parent clicked আগে দেখায়।

// তারপর Child clicked দেখায়।

















// 🔍 Code Logic
// parent.addEventListener(
//     "click",
//     function () {
//         console.log("Parent clicked");
//     },
//     true
// );

// true ব্যবহার করার কারণে event Capturing Phase-এ কাজ করছে।

// child.addEventListener(
//     "click",
//     function () {
//         console.log("Child clicked");
//     },
//     true
// );

// child-এর event listener-ও Capturing ব্যবহার করছে।





























