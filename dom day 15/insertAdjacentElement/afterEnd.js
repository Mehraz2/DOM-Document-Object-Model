

// afterend কী?

// afterend মানে:

// কোনো existing element-এর বাইরে এবং একদম পরে নতুন element যোগ করা।

// অর্থাৎ নতুন element target element-এর ভিতরে যাবে না, বরং তার পাশে নিচে/পরে বসবে।



// DOM Structure আগে:
// body
//  |
//  └── h1#title
// afterend এর পরে:
// body
//  |
//  ├── h1#title
//  |
//  └── p   ✅ নতুন element

// চারটা position একসাথে 🧠
// beforebegin
//      ↓
//  [ ELEMENT ]
//      ↓
// afterend

// বাইরে:

// beforebegin → element-এর আগে
// afterend → element-এর পরে

// ভিতরে:

// [ ELEMENT ]

// afterbegin → শুরুতে
// beforeend  → শেষে

// এক লাইনে মনে রাখো:

// afterend = element-এর বাইরে বের হয়ে, তার ঠিক পরে বসা। ✅






const title = document.getElementById("title");

const paragraph = document.createElement("p");

paragraph.innerText = "New Paragraph Added After H1";

title.insertAdjacentElement("afterend", paragraph);



// Output:

// Before:

// <h1 id="title">
//     JavaScript DOM
// </h1>






// After:

// <h1 id="title">
//     JavaScript DOM
// </h1>

// <p>
//     New Paragraph Added After H1
// </p>


// এখানে:

// title → target element (h1)
// "afterend" → h1-এর বাইরে, ঠিক পরে
// paragraph → নতুন element
// DOM Structure:





// Before:

// body
//  |
//  └── h1#title

// After:

// body
//  |
//  ├── h1#title
//  |
//  └── p  ✅ নতুন element

// মনে রাখো 🧠

// afterend

// TARGET ELEMENT
//       |
//       ↓
// NEW ELEMENT

// মানে target-এর পরে বসবে, কিন্তু target-এর ভিতরে না।




// ======= practice 2 ====================================================================


const menu = document.getElementById("menu");

const div = document.createElement("div");

div.innerText = "New Div Added After List";

menu.insertAdjacentElement("afterend", div);



// Output:

// Before:

// <ul id="menu">

//     <li>Home</li>
//     <li>About</li>

// </ul>



// After:

// <ul id="menu">

//     <li>Home</li>
//     <li>About</li>

// </ul>

// <div>
//     New Div Added After List
// </div>


// এখানে:

// menu → target element (ul)
// "afterend" → ul-এর বাইরে, ঠিক পরে
// div → নতুন element
// DOM Structure:




// Before:

// ul#menu
//  |
//  ├── li
//  └── li

// After:

// ul#menu
//  |
//  ├── li
//  └── li

// div  ✅ নতুন element



// ======== practice 3 ====================================================



const button = document.getElementById("btn");

const message = document.createElement("p");

message.innerText = "Button এর পরে নতুন paragraph";

button.insertAdjacentElement("afterend", message);









