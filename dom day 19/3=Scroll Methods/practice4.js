



// 🟢 Scroll Methods — scrollIntoView() Practice 4
// 🎯 Goal

// তিনটি Button ব্যবহার করে Element-কে Top, Center এবং Bottom-এ Scroll করানো।





const target = document.getElementById("target");

const topBtn = document.getElementById("topBtn");
const centerBtn = document.getElementById("centerBtn");
const bottomBtn = document.getElementById("bottomBtn");

topBtn.addEventListener("click", () => {

    target.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});

centerBtn.addEventListener("click", () => {

    target.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});

bottomBtn.addEventListener("click", () => {

    target.scrollIntoView({
        behavior: "smooth",
        block: "end"
    });

});





// 🖥️ Output

// Website খুললে তিনটি Button দেখবে।

// Top

// Center

// Bottom



// 👉 Top Button

// Click করলে—

// Target Box Viewport-এর একদম উপরে চলে আসবে।

// 👉 Center Button

// Click করলে—

// Target Box Screen-এর মাঝখানে চলে আসবে।

// 👉 Bottom Button

// Click করলে—

// Target Box Screen-এর নিচে এসে থামবে।








// 🎯 Output Explain


// 📌 কোথায় Execute হবে?

// Browser-এর Web Page-এ।

// 📌 কখন Execute হবে?

// যখন User—

// Top Button
// Center Button
// Bottom Button

// এর যেকোনো একটিতে Click করবে।

// 📌 তিনটি Button-এর পার্থক্য
// Top
// block: "start"

// ➡️ Element Viewport-এর Top-এ।

// Center
// block: "center"

// ➡️ Element Viewport-এর Center-এ।

// Bottom
// block: "end"

// ➡️ Element Viewport-এর Bottom-এ।









// 📌 Real Project-এ কোথায় ব্যবহার হয়?

// ✅ Table of Contents
// ✅ Documentation Navigation
// ✅ FAQ Navigation
// ✅ Form Error Field
// ✅ Portfolio Navigation
// ✅ Landing Page Menu















//==========================================  📖 Code Explain  ====================================


// 1️⃣
const target = document.getElementById("target");

// 👉 Target Box Select করা হয়েছে।

// 2️⃣
const topBtn = document.getElementById("topBtn");

// 👉 Top Button Select করা হয়েছে।

// 3️⃣
topBtn.addEventListener("click", () => {

// 👉 Top Button-এ Click করলে নিচের Code Run হবে।

// 4️⃣
target.scrollIntoView({

// 👉 Target Box-কে Screen-এ নিয়ে আসবে।

// 5️⃣
behavior: "smooth"

// 👉 ধীরে ধীরে Scroll করবে।

// 6️⃣
// block: "start"

// 👉 Target Box Viewport-এর Top-এ থাকবে।

// 7️⃣
// block: "center"

// 👉 Target Box Viewport-এর Center-এ থাকবে।

// 8️⃣
// block: "end"

    });

});


// 👉 Target Box Viewport-এর Bottom-এ থাকবে।











// 🧠 কী shikhlam ?


// scrollIntoView() শুধু Scroll করায় না, Element কোথায় থামবে সেটাও নিয়ন্ত্রণ করতে পারে।
// block option-এর মাধ্যমে Position নিয়ন্ত্রণ করা যায়।
// start, center, end—এই তিনটি সবচেয়ে বেশি ব্যবহৃত value।
// behavior: "smooth" যোগ করলে User Experience অনেক ভালো হয়।














// 🎉 scrollIntoView() Summary

// // Basic
element.scrollIntoView();



// // Smooth Scroll
element.scrollIntoView({
//     behavior: "smooth"
});




// // Top
element.scrollIntoView({
    behavior: "smooth",
    block: "start"
});



// // Center
element.scrollIntoView({
    behavior: "smooth",
    block: "center"
});




// // Bottom
element.scrollIntoView({
    behavior: "smooth",
    block: "end"
});












