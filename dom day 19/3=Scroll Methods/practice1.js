




// 🟢 Scroll Methods — scrollIntoView() Practice 1
// 🎯 Goal

// Button-এ Click করলে নির্দিষ্ট Section-এ Scroll হবে।




const btn = document.getElementById("btn");
const contact = document.getElementById("contact");

btn.addEventListener("click", () => {

    contact.scrollIntoView();

});





// 🖥️ Output

// Website খুললে—

// Home

// উপরে একটি Button থাকবে।

// Go To Contact

// Button-এ Click করলে—

// Home
// ⬇
// About
// ⬇
// Services
// ⬇
// Contact

// Browser নিজে থেকেই Contact Section-এ চলে যাবে।






// 🎯 Output Explain



// 📌 কোথায় Execute হবে?

// Output সরাসরি Browser Web Page-এ দেখা যাবে।

// Console-এ কিছু দেখাবে না।




// 📌 কখন Execute হবে?

// যখন User—

// Go To Contact

// Button-এ Click করবে।





// 📌 কীভাবে Execute হচ্ছে?

// Button Click

// ⬇

// JavaScript Run

// ⬇

contact.scrollIntoView();

// ⬇

// Browser নিজে Scroll করে

// ⬇

// Contact Section Screen-এ চলে আসে।






// 📌 Real Project-এ কোথায় ব্যবহার হয়?

// এই Method খুবই জনপ্রিয়।

// ব্যবহার হয়—

// ✅ Navigation Menu
// ✅ Contact Button
// ✅ FAQ
// ✅ Landing Page
// ✅ Portfolio Website
// ✅ Documentation Website
// ✅ One Page Website













// +++++++++++++++++++++++📖 Code Explain+++++++++++++++++++++++++++++


// 1️⃣
const btn = document.getElementById("btn");

// 👉 Button Select করা হয়েছে।


// 2️⃣
const contact = document.getElementById("contact");

// 👉 Contact Section Select করা হয়েছে।


// 3️⃣
btn.addEventListener("click", () => {

// 👉 Button-এ Click করলে নিচের Code Run হবে।


// 4️⃣
contact.scrollIntoView();
})
// 👉 Browser-কে বলছে—

// "Contact Element-টাকে Screen-এ নিয়ে আসো।"

// Browser নিজে Scroll করে Element-টিকে Visible করে দেয়।











// 🧠 কী shikhlam ?

// scrollIntoView() একটি Method।
// এটি নির্দিষ্ট Element-কে Screen-এ নিয়ে আসে।
// User-কে নিজে Scroll করতে হয় না।
// শুধু একটি Method Call করলেই Browser Scroll করে দেয়।




