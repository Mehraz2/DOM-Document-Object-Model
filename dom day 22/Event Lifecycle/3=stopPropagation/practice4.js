



// ● Day 22 — Event Capturing (Practice 4) 🚀

// আজ  Capturing + stopPropagation() শিখব।

// এখানে দেখব, Capturing Phase-এর মধ্যেও stopPropagation() ব্যবহার করে event থামানো যায়।







const grandparent4 = document.getElementById("grandparent4");
const parent4 = document.getElementById("parent4");
const child4 = document.getElementById("child4");

grandparent4.addEventListener("click",function (event) {
    console.log("Grandparent Clicked");

    event.stopPropagation();
  },
  true
);

parent4.addEventListener("click",function () {
    console.log("Parent Clicked");
  },
  true
);

child4.addEventListener("click",function () {
    console.log("Button Clicked");
  },
  true
);









// 🖥️ Output

// যদি তুমি Button-এ click করো:

// Grandparent Clicked




// 🧠 Output Logic

// সাধারণ Capturing:

// Grandparent
//       ↓
// Parent
//       ↓
// Button

// stopPropagation() ব্যবহার করলে:

// Grandparent
//       ↓

// ❌ Event এখানেই থেমে গেছে










// 🔍 Code Logic Explain

// এই লাইনটি দেখো:
// event.stopPropagation();

// Capturing-এর সময় event প্রথমে grandparent4-এ আসে।

// Grandparent
//       ↓
// Parent
//       ↓
// Button

// কিন্তু grandparent4-এর ভেতরে stopPropagation() ব্যবহার করা হয়েছে।

// তাই event আর parent4-এর কাছে যাবে না।

// child4-এর কাছেও যাবে না।














// 🎯 সবচেয়ে গুরুত্বপূর্ণ বিষয়

// stopPropagation() শুধু Bubbling-এর জন্য নয়।

// Capturing-এর সময়ও এটি event-এর যাত্রা থামাতে পারে।














