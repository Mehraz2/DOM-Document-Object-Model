





// 🎯 Practice 2 — Grandparent → Parent → Child (Capturing)

// এবার Capturing-এর পুরো পথ দেখব।







const grandparent = document.getElementById("grandparent");

const parent2 = document.getElementById("parent2");

const child2 = document.getElementById("child2");

grandparent.addEventListener(
    "click",
    function () {
        console.log("Grandparent");
    },
    true
);

parent2.addEventListener(
    "click",
    function () {
        console.log("Parent2");
    },
    true
);

child2.addEventListener(
    "click",
    function () {
        console.log("Child2");
    },
    true
);





// 🖥️ Output

// Click Me button-এ click করো।

// Console-এ দেখবে:

// Grandparent


// Parent


// Child

















// 🧠 Output Logic

// Event প্রথমে grandparent-এর কাছে যায়।

// তারপর parent-এর কাছে যায়।

// সবশেষে child-এর কাছে যায়।

// Grandparent
//       ↓
// Parent
//       ↓
// Child









// 🔍 Code Logic



grandparent.addEventListener(
    "click",
    callback,
    true
);

// true ব্যবহার করার কারণে grandparent Capturing Phase-এ event ধরছে।

parent.addEventListener(
    "click",
    callback,
    true
);

// এরপর event parent-এ যাচ্ছে।

child.addEventListener(
    "click",
    callback,
    true
);

// সবশেষে event child-এ পৌঁছাচ্ছে।



















// 📝 Notes
// // Capturing follows a top-to-bottom path.

// // Grandparent
// // ↓
// // Parent
// // ↓
// // Child


true = Capturing


// Parent elements execute before child elements.


