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