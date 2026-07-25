// 📘 before() Method কী?

// before() হলো একটি Modern DOM Method, 
// যা কোনো existing element-এর ঠিক আগে (before) নতুন element বা content insert করে।

// সহজ ভাষায়,

// পুরোনো element-কে না সরিয়ে, তার ঠিক আগে নতুন element যোগ করে।


// suppose লাইনে তিনজন দাঁড়িয়ে আছে।

// A
// B
// C

// তুমি X-কে B-এর আগে দাঁড় করালে।

// ফলাফল:

// A
// X
// B
// C

// 👉 B কোথাও যায়নি।
// শুধু B-এর আগে X এসেছে।


// Step 1: Select the existing element
const oldElement = document.getElementById("old");

// Step 2: Create a new element
const newElement = document.createElement("h1");

// Step 3: Add text
newElement.textContent = "Welcome";

// Step 4: Insert before the existing element
oldElement.before(newElement);


//  Output


// Before
// <p>JavaScript DOM</p>

// Browser:

// JavaScript DOM

// After
// <h1>Welcome</h1>
// <p>JavaScript DOM</p>

// Browser:

// Welcome
// JavaScript DOM

// =======  practice 2====================================================


// Step 1: Select the image
const image = document.getElementById("image");

// Step 2: Create a button
const button = document.createElement("button");

// Step 3: Add button text
button.textContent = "Download Image";

// Step 4: Insert the button before the image
image.before(button);


//  Output


// Before
// 🖼️ Random Image

// After
// [ Download Image ]

// 🖼️ Random Image


// ============= practice 3 =============================================



// Step 1: Select the paragraph
const message = document.getElementById("message");

// Step 2: Select the button
const button = document.getElementById("btn");

// Step 3: Add click event
button.addEventListener("click", () => {

    // Step 4: Create a new heading
    const heading = document.createElement("h2");

    // Step 5: Add text
    heading.textContent = "Success ✅";

    // Step 6: Insert before the paragraph
    message.before(heading);

});



//  Output


// Before
// Loading...

// [ Insert Before ]

// ⬇️ Click Button

// After
// Success ✅

// Loading...

// [ Insert Before ]