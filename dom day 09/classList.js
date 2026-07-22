const title = document.getElementById("title");

const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const toggleBtn = document.getElementById("toggleBtn");
const checkBtn = document.getElementById("checkBtn");


// যখন Add Class button-এ click হবে
addBtn.addEventListener("click", function () {

    title.classList.add("red");

})

// output =

// যখন Click করব

// title.classList.add("red");

// Console-এ কিছুই আসবে না।।

// Screen-এ যা হবে:

// আগে:

// Hello World   (কালো)

// Click করার পরে:

// Hello World   (লাল)

// Inspect করলে আগে:

// <h1 id="title">Hello World</h1>

// Click করার পরে:

// <h1 id="title" class="red">Hello World</h1>

// ================practice 2===================================


const title = document.getElementById("title");

const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const toggleBtn = document.getElementById("toggleBtn");
const checkBtn = document.getElementById("checkBtn");

// Add Class
addBtn.addEventListener("click", function () {
    title.classList.add("red");
});

// Remove Class
removeBtn.addEventListener("click", function () {
    title.classList.remove("red");
});


// 📌 Output =

// শুরুতে HTML
// <h1 id="title">Hello World</h1>

// Screen

// Hello World

// (Black)

// Add Class button click

// HTML

// <h1 id="title" class="red">Hello World</h1>

// Screen

// Hello World

// (Red)

// =======================================
// Practice 3 : classList.toggle()
// কাজ:
// Class থাকলে remove করবে।
// Class না থাকলে add করবে।
// =======================================

const title = document.getElementById("title");

const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const toggleBtn = document.getElementById("toggleBtn");
const checkBtn = document.getElementById("checkBtn");

// Add Class
addBtn.addEventListener("click", function () {
    title.classList.add("red");
});

// Remove Class
removeBtn.addEventListener("click", function () {
    title.classList.remove("red");
});

toggleBtn.addEventListener("click", function () {

    title.classList.toggle("red");

});

// Real Life:
// ✅ Dark Mode
// ✅ Menu Open/Close
// ✅ Like Button
// ✅ Sidebar Toggle
// =======================================