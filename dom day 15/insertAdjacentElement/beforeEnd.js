


// beforeend কী?

// beforeend মানে:

// কোনো existing element-এর ভিতরে (inside) একদম শেষে নতুন element যোগ করা।

// সহজভাবে:

// afterbegin → ভিতরে শুরুতে যোগ করে
// beforeend → ভিতরে শেষে যোগ করে





// DOM Structure আগে:
// div#box
//  |
//  ├── h2
//  └── p
// beforeend এর পরে:
// div#box
//  |
//  ├── h2
//  ├── p
//  └── button  ✅ নতুন element


const container = document.getElementById("container");

const paragraph = document.createElement("p");

paragraph.innerText = "New Paragraph Added at End";

container.insertAdjacentElement("beforeend", paragraph);


// Output:

// Before:

// <div id="container">

//     <h2>Old Heading</h2>

// </div>








// After:

// <div id="container">

//     <h2>Old Heading</h2>

//     <p>
//         New Paragraph Added at End
//     </p>

// </div>



// এখানে:

//=== container → target element
//=== "beforeend" → container-এর ভিতরে একদম শেষে
//=== paragraph → নতুন element




// চারটা position remining🧠
// beforebegin
//       ↓
//    [ELEMENT]
//       ↑
// afterend

// বাইরে:

// beforebegin → element-এর আগে
// afterend → element-এর পরে

// ভিতরে:

// [ELEMENT]

// ↑
// afterbegin

// ↓

// = beforeend
// = afterbegin → ভিতরে প্রথমে
// = beforeend → ভিতরে শেষে

// এক লাইনে:

// beforeend = element-এর ভিতরে ঢুকে সবশেষে বসা। ✅

// ======== practice 2 ==========================================================


const skills = document.getElementById("skills");

const newSkill = document.createElement("li");

newSkill.innerText = "React";

skills.insertAdjacentElement("beforeend", newSkill);


// Output:

// Before:

// <ul id="skills">

//     <li>JavaScript</li>
//     <li>DOM</li>

// </ul>





// After:

// <ul id="skills">

//     <li>JavaScript</li>
//     <li>DOM</li>
//     <li>React</li>

// </ul>

// এখানে:

// skills → target (ul)
// beforeend → ul এর ভিতরে সবশেষে
// newSkill → নতুন <li>
// DOM Structure:




// Before:

// ul#skills
//  |
//  ├── li (JavaScript)
//  └── li (DOM)






// After:

// ul#skills
//  |
//  ├── li (JavaScript)
//  ├── li (DOM)
//  └── li (React) ✅ নতুন element


// ==== practice 3 =====================================================================


const card = document.getElementById("card");

const button = document.createElement("button");

button.innerText = "View Profile";

card.insertAdjacentElement("beforeend", button);


// Output:

// Before:

// <div id="card">

//     <h2>Profile Card</h2>
//     <p>User Information</p>

// </div>





// After:

// <div id="card">

//     <h2>Profile Card</h2>
//     <p>User Information</p>
//     <button>View Profile</button>

// </div>


// এখানে:

// card → target element
// beforeend → card-এর ভিতরে একদম শেষে
// button → নতুন element
// DOM Structure:

// Before:

// div#card
//  |
//  ├── h2
//  └── p






// After:

// div#card
//  |
//  ├── h2
//  ├── p
//  └── button ✅ নতুন element






