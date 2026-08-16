






// event.target ব্যবহার করে Bubbling আরও ভালোভাবে বুঝব।







const grandparent2 = document.getElementById("grandparent2");
const parent2 = document.getElementById("parent2");
const child2 = document.getElementById("child2");

grandparent2.addEventListener("click", function (event) {
    console.log("Grandparent Clicked");
    console.log(event.target);       
});



parent2.addEventListener("click", function (event) {
  console.log("Parent Clicked");
  console.log(event.target);
});

child2.addEventListener("click", function (event) {
  console.log("Button Clicked");
  console.log(event.target);
});








// 🖥️ Output

// যদি তুমি Button-এ ক্লিক করো, তাহলে Console-এ দেখাবে:

// Button Clicked
// <button id="child2">Click Me</button>


// Parent Clicked
// <button id="child2">Click Me</button>


// Grandparent Clicked
// <button id="child2">Click Me</button>











// 🧠 Output Logic
// Button
//    ↓
// Parent
//    ↓
// Grandparent

// event.target সব সময় সেই element-কে দেখায়, যেটার ওপর প্রথমে click করা হয়েছে।

// তাই event উপরের দিকে গেলেও event.target পরিবর্তন হয় না।











// 🔍 Code Logic Explain

// এই অংশটি :
// console.log(event.target);

// event.target বলছে,

// "আমার যাত্রা Button থেকে শুরু হয়েছে।"

// তাই Parent-এর event চললেও Button দেখাবে।

// Grandparent-এর event চললেও Button দেখাবে।








// 🎯 যদি Parent-এর ওপর ক্লিক
// Parent Clicked
// <div id="parent2">Parent</div>


// Grandparent Clicked
// <div id="parent2">Parent</div>




// 🎯 যদি Grandparent-এর ওপর ক্লিক করো
// Grandparent Clicked
// <div id="grandparent2">Grandparent</div>












