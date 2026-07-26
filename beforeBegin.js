const skills = document.getElementById("skills");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", () => {
  skills.insertAdjacentHTML(
    "beforeend",
    "<li>JavaScript</li>"
  );
});

// 🖥️ Output

// শুরুতে:

// My Skills

// • HTML
// • CSS

// [Add JavaScript]

// Button-এ click করার পর:

// My Skills

// • HTML
// • CSS
// • JavaScript

// আরও click করলে:

// • HTML
// • CSS
// • JavaScript
// • JavaScript
// • JavaScript

//  practice 2 =================================

const languageList = document.getElementById("languageList");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", () => {
  languageList.insertAdjacentHTML(
    "afterbegin",
    "<li>C++</li>"
  );
});