


// 🟢 Scroll Event — Practice 4 (Show a Message While Scrolling)

// এবার এমন একটি practice করব যেটা real-time DOM update দেখাবে। 
// Scroll করলে page-এর উপরে একটি message দেখা যাবে।




const message = document.getElementById("message");

window.addEventListener("scroll", () => {
    message.textContent = "You are scrolling...";
});






// 🖥️ Output

// Website খুললে—

// Scroll Down

// <h2> খালি থাকবে।

// তারপর User Scroll করলেই—


// Scroll Down

//                     You are scrolling...

// Page-এর উপরের ডান পাশে "You are scrolling..." লেখা দেখা যাবে।









// --------------------------🎯 Output Explain--------------------


// 📌 কোথায় Execute হবে?

// এবার Output Console-এ নয় এবং Alert Box-এও নয়।

// Output সরাসরি Web Page-এর <h2> element-এর মধ্যে দেখা যাবে।




// 📌 কখন Execute হবে?



// যখন User—

// Mouse Wheel ঘোরাবে
// Touchpad দিয়ে Scroll করবে
// Scrollbar Drag করবে
// Keyboard দিয়ে Scroll করবে

// তখনই <h2>-এর text পরিবর্তন হবে।




// 📌 কতবার Execute হবে?

// User যত Scroll করবে,

// ততবার—

// message.textContent = "You are scrolling...";

// execute হবে।

// যদিও একই লেখা বারবার set হচ্ছে, তাই চোখে নতুন পরিবর্তন বোঝা যাবে না।




// 📌 Real Project-এ কোথায় ব্যবহার হয়?

// এই ধারণা ব্যবহার করে—

// ✅ Loading Message
// ✅ Live Status
// ✅ Scroll Indicator
// ✅ Sticky Notification
// ✅ Reading Progress Text

// দেখানো যায়।









// ===============================📖 Code Explain========================




// 1️⃣
// const message = document.getElementById("message");

// 👉 id="message"-ওয়ালা <h2> element-কে select করা হয়েছে।



// 2️⃣
window.addEventListener("scroll", () => {       

})

// 👉 Browser Window-এর scroll event listen করছে।

// User Scroll করলেই নিচের code execute হবে।




// 3️⃣
message.textContent = "You are scrolling...";

// 👉 <h2> element-এর text পরিবর্তন করছে।

// আগে কিছু ছিল না।

// Scroll করার পর হয়ে যাচ্ছে—

// You are scrolling...








// 🧠 কী shikhlam
// ?
// scroll event ব্যবহার করে DOM-এর text পরিবর্তন করা যায়।
// textContent দিয়ে element-এর content update করা যায়।
// Output Console-এর বাইরে Web Page-তেও দেখানো যায়।
// Real project-এ Status Message, Notification, Reading Indicator ইত্যাদিতে 
// এই technique ব্যবহার করা হয়।


























