// 📘 after() কী?

// after() হলো একটি Modern DOM Method, যা কোনো existing element-এর ঠিক পরে (after) নতুন element বা content insert করে।

// সহজ ভাষায়,

// পুরোনো element-কে না সরিয়ে, তার ঠিক পরে নতুন element যোগ করে।



// Step 1: Select the existing element
const oldElement = document.getElementById("old");

// Step 2: Create a new element
const newElement = document.createElement("h1");

// Step 3: Add text
newElement.textContent = "Welcome";

// Step 4: Insert after the existing element
oldElement.after(newElement);

//  Output

// Before
// <p>JavaScript DOM</p>

// Browser:

// JavaScript DOM

// After
// <p>JavaScript DOM</p>
// <h1>Welcome</h1>

// Browser:

// JavaScript DOM

// Welcome

// ===============practice 2===================================


// Step 1: Select the image
const image = document.getElementById("image");

// Step 2: Create a button
const button = document.createElement("button");

// Step 3: Add button text
button.textContent = "Download Image";

// Step 4: Insert the button after the image
image.after(button);


//  Output
// Before
// 🖼️ Random Image
// After
// 🖼️ Random Image

// [ Download Image ]