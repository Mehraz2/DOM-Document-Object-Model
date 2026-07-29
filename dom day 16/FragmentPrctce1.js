
// practice 1==============================


const list = document.getElementById("list");

// Create DocumentFragment
const fragment = document.createDocumentFragment();

// Create elements
const li1 = document.createElement("li");
li1.textContent = "Apple";

const li2 = document.createElement("li");
li2.textContent = "Banana";

const li3 = document.createElement("li");
li3.textContent = "Mango";

// Add elements to Fragment
fragment.appendChild(li1);
fragment.appendChild(li2);
fragment.appendChild(li3);

// Add Fragment to DOM
list.appendChild(fragment);


// 🖥️ Output
// • Apple
// • Banana
// • Mango






// 🔍 এখানে কী হচ্ছে?
// Step 1
const fragment = document.createDocumentFragment();

// একটি খালি temporary container তৈরি হলো।

// Step 2
fragment.appendChild(li1);
fragment.appendChild(li2);
fragment.appendChild(li3);

// তিনটি <li> এখন DOM-এ নয়, Fragment-এর ভিতরে আছে।

// Fragment
// │
// ├── Apple
// ├── Banana
// └── Mango
// Step 3
list.appendChild(fragment);

// এখন Fragment-এর সব child একসাথে <ul>-এ চলে গেল।

// <ul>
//  ├── Apple
//  ├── Banana
//  └── Mango
// </ul>

// ⚠️ remind.............

// fragment নিজে <ul>-এর child হয় না।
// শুধু তার children <ul>-এ চলে যায়।
// এরপর fragment আবার খালি হয়ে যায়।








// =========================================================================


