// 🤔 Event Listener কী?

// Event Listener হলো এমন একটি function, 
// যা কোনো event হওয়ার অপেক্ষা করে। 
// Event ঘটলে, সে তার ভিতরের code execute করে।

// সহজ ভাষায়:

// "কোনো ঘটনার জন্য অপেক্ষা করে, ঘটনা ঘটলে কাজ করে।"

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    alert("Original Button");
});

const copy = btn.cloneNode(true);

document.body.append(copy);

//  Output
// Click Me
// Click Me
// Test

// ১ম Button

// Alert Box

// Original Button

// ২য় Button (Clone)

// Nothing Happens

// =========================================================


const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    alert("Original Button");
});

const copy = btn.cloneNode(true);

copy.addEventListener("click", function () {
    alert("Clone Button");
});

document.body.append(copy);

//  Output
// Click Me
// Click Me
// Test

// ১ম Button

// Alert Box

// Original Button

// ২য় Button

// Alert Box

// Clone Button

// ============================================================

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    console.log("Original");
});

const copy = btn.cloneNode(true);

document.body.append(copy);

// Browser Output
// Click Me
// Click Me
// Test

// Original Button Click

// 💻 Console
// Original

// Clone Button Click

// 💻 Console
// (No Output)

// ============================================================

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    console.log("Original Clicked");
});

const copy = btn.cloneNode(true);

copy.textContent = "Clone Button";

copy.addEventListener("click", function () {
    console.log("Clone Clicked");
});

document.body.append(copy);

//  Output
// Click Me
// Clone Button
// Test 1

// Original Button Click

// 💻 Console
// Original Clicked
// Test 2

// Clone Button Click

// 💻 Console
// Clone Clicked

// 🎯 এই ৪টা Practice থেকে যা শিখবে
// ✅ cloneNode() event listener copy করে না।
// ✅ Clone-এ চাইলে নতুন listener যোগ করা যায়।
// ✅ alert() দিয়েও test করা যায়, console.log() দিয়েও।
// ✅ Original আর Clone-এর behavior আলাদা করা যায়।