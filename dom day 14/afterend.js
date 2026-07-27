// 🤔 afterend কী?

// afterend target element-এর বাইরে, ঠিক পরে HTML insert করে।

// এটাও child বানায় না, বরং next sibling হিসেবে add করে।

const fruitList = document.getElementById("fruitList");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", () => {
    fruitList.insertAdjacentHTML(
        "beforebegin",
        "<h2>🍎 Fruit List</h2>"
    );
});

// 🖥️ Output
// শুরুতে
// • Apple
// • Mango
// • Orange

// [Add Heading]
// Button-এ click করার পর
// 🍎 Fruit List

// • Apple
// • Mango
// • Orange

// [Add Heading]