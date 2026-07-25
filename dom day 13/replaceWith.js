

// 🤔 replaceWith() কী?

// replaceWith() হলো একটি DOM Method, যা বর্তমান Element-কে নতুন Element দিয়ে Replace করে।

// সহজ ভাষায়,

// যে Element-এর উপর replaceWith() call করা হয়, সে নিজেই DOM থেকে সরে যায় 
// এবং তার জায়গায় নতুন Element বসে।

// 🏠 Real Life Example

// ধরো তোমার ডেস্কে একটা পুরোনো বই আছে।

// 📕 Old Book

// তুমি নতুন বই আনলে।

// এখন কী করবে?

// 📕 Old Book
//         ↓
// 📘 New Book

// পুরোনো বই সরিয়ে নতুন বই একই জায়গায় রাখবে।

// এটাই replaceWith()-এর কাজ।


// Step 1: Select the old element
const oldElement = document.getElementById("old");

// Step 2: Create a new paragraph
const newElement = document.createElement("p");

// Step 3: Add text to the new paragraph
newElement.textContent = "New Paragraph";

// Step 4: Replace the old paragraph
oldElement.replaceWith(newElement);


// output
// Before
// Old Paragraph

// ⬇️ JavaScript Run

// After
// New Paragraph

// =============practice 2=========================


// Step 1: Select the old element
const oldElement = document.getElementById("old");

// Step 2: Create a new h1 element
const newElement = document.createElement("h1");

// Step 3: Add text
newElement.textContent = "Welcome to JavaScript";

// Step 4: Replace
oldElement.replaceWith(newElement);

//  Output
// Before
// <p>Welcome to My Website</p>

// Browser

// Welcome to My Website
// After
// <h1>Welcome to JavaScript</h1>


// ==========practice 3==================================================

// Step 1: Select the old element
const oldElement = document.getElementById("status");

// Step 2: Select the button
const button = document.getElementById("btn");

// Step 3: Add click event
button.addEventListener("click", () => {

    // Step 4: Create a new element
    const newElement = document.createElement("p");

    // Step 5: Add text
    newElement.textContent = "Data Loaded Successfully!";

    // Step 6: Replace
    oldElement.replaceWith(newElement);

});


// Output
// Before
// Loading...

// [ Replace ]

// ⬇️ Click Button

// After
// Data Loaded Successfully!

// [ Replace ]



// =========practice 4==================================================



// Step 1: Select the parent
const parent = document.getElementById("fruits");

// Step 2: Select the old list item
const oldElement = parent.children[1];

// Step 3: Create a new list item
const newElement = document.createElement("li");

// Step 4: Add text
newElement.textContent = "Mango";

// Step 5: Replace
oldElement.replaceWith(newElement);



//  Output

// Before
// Apple
// Banana
// Orange

// ⬇️

// After
// Apple
// Mango
// Orange