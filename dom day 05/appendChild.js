

document.body.appendChild(heading);

// output = 
// 🖥️ এখন Browser-এ কী হবে?

// আগে Browser-এ কিছুই ছিল না।

// এখন দেখা যাবে:

// Hello Mehraz

// কারণ আমরা Browser-কে বলেছি:

// "এই <h1>-টাকে Body-এর ভিতরে রেখে দাও।"

// =========================================================

let paragraph = document.createElement("p");

paragraph.textContent = "i am learning js dom"

document.body.appendChild(paragraph);

// output = মানে নিজেই JavaScript দিয়ে একটা নতুন <p> element বানিয়ে 
// এবং Page-এ যোগ করে


// ================================================================

let button = document.createElement("button");

button.textContent = "Click Me";

document.body.appendChild(button);
