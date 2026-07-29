

// afterbegin কী করে?

// afterbegin মানে:

// ➡️ Target element-এর ভিতরে শুরুতে নতুন element যোগ করবে।

// Structure:

const container = document.getElementById("container");

const paragraph = document.createElement("p");

paragraph.innerText = "I am added with afterbegin";

container.insertAdjacentElement("afterbegin", paragraph);


// Output:

// Before:

// <div id="container">

//     <h2>Existing Heading</h2>

// </div>








// After:

// <div id="container">

//     <p>I am added with afterbegin</p>

//     <h2>Existing Heading</h2>

// </div>
// কী হলো?
// container.insertAdjacentElement("afterbegin", paragraph);

// মানে:

// container → যেখানে element ঢুকবে
// afterbegin → container-এর ভিতরে, সবার আগে
// paragraph → যে নতুন element যোগ হচ্ছে

// DOM:

// Before:

// div#container
//     |
//     └── h2










// After:

// div#container
//     |
//     ├── p   ← নতুন element
//     |
//     └── h2

// ===== practice 2 ======================================================================


const list = document.getElementById("list");

const newItem = document.createElement("li");

newItem.innerText = "HTML";

list.insertAdjacentElement("afterbegin", newItem);


// Output:

// Before:

// <ul id="list">

//     <li>JavaScript</li>
//     <li>React</li>

// </ul>





// After:

// <ul id="list">

//     <li>HTML</li>
//     <li>JavaScript</li>
//     <li>React</li>

// </ul>



































