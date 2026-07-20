const ul = document.getElementById("fruits");
const button = document.getElementById("addBtn");

button.addEventListener("click", () => {
  const li = document.createElement("li"); // নতুন li তৈরি
  li.innerText = "Orange";                  // লেখাটি সেট করা
  ul.appendChild(li);                       // ul-এর শেষে যোগ করা
});

// =====================================================

const ul = document.getElementById("fruits");
const button = document.getElementById("addBtn");

let count = 1;

button.addEventListener("click", () => {
  const li = document.createElement("li");

  li.innerText = `Fruit ${count}`;

  ul.appendChild(li);

  count++;
});

// এখন Browser-এ:

// Apple-এ click 
// Mango-তে click 
// Fruit 6-এ click করো (যেটা পরে add হয়েছে)

// ========Practice 2===================================================

const ul = document.getElementById("fruits");

ul.addEventListener("click", (event) => {
    event.target.remove();
});

const ul = document.getElementById("fruits");

ul.addEventListener("click", (event) => {
    alert("Clicked");
});

const ul = document.getElementById("fruits");

alert(ul);

alert("JS Loaded");

// ======================

alert("JS Loaded");

const ul = document.getElementById("fruits");

alert(ul);

ul.addEventListener("click", () => {
    alert("Clicked!");
});

// -----------------------------------------

alert("JS Loaded");





const ul = document.getElementById("fruits");

alert(ul);

ul.addEventListener("click", () => {
    alert("Clicked!");
});

// ===============================================

// Practice 1: Add Fruit button click করলে নতুন <li> dynamically list-এর শেষে যোগ হবে.

// Practice 2: যে <li>-তে click করবো, event.target সেটাকেই detect করবে.

// Practice 3: Click করা <li> browser থেকে delete হয়ে যাবে (event.target.remove()).

// Topic 2 (closest()): Child-এ click করলেও closest() দিয়ে parent <li> পাওয়া যাবে.

// Topic 3 (matches()): Click করা element নির্দিষ্ট selector-এর সাথে match করে কিনা check করবে