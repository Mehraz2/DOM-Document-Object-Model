



// 🟢 Scroll Methods — scrollIntoView() Practice 2
// 🎯 Goal

// Button-এ Click করলে Smooth Scroll করে Contact Section-এ যাবে।



const btn = document.getElementById("btn");
const contact = document.getElementById("contact");

btn.addEventListener("click", () => {

    contact.scrollIntoView({
        behavior: "smooth"
    });

});






// 🖥️ Output

// Website খুললে—

// Home

// Button-এ Click করলে—

// আগের Practice 1-এর মতো এক লাফে (jump) Contact Section-এ যাবে না।

// বরং—

// Home
// ⬇
// About
// ⬇
// Services
// ⬇
// Contact

// ধীরে ধীরে Smooth Animation দিয়ে নিচে Scroll করবে।








// 🎯 Output Explain



// 📌 কোথায় Execute হবে?

// Output Browser-এর Web Page-এ দেখা যাবে।



// 📌 কখন Execute হবে?

// যখন User—

// Go To Contact

// Button-এ Click করবে।



// 📌 আগের Practice আর এখনকার পার্থক্য


// Practice 1
contact.scrollIntoView();


// ➡️ সরাসরি Contact Section-এ Jump করবে।




// Practice 2
contact.scrollIntoView({
    behavior: "smooth"
});




// ➡️ ধীরে ধীরে সুন্দর Animation দিয়ে Contact Section-এ যাবে।



// 📌 Real Project-এ কোথায় ব্যবহার হয়?

// এই Feature সবচেয়ে বেশি দেখা যায়—

// ✅ Portfolio Website
// ✅ Landing Page
// ✅ Navigation Menu
// ✅ Documentation Website
// ✅ FAQ Section
// ✅ Contact Button


// প্রায় সব Modern Website Smooth Scroll ব্যবহার করে।











// 








// +_+_+_+_+_+_+__+_++_++_+_+_+_+_+_+_+=== 📖 Code Explain ==_+_+_+_+_+_+_+_+_+++_+_+_+_+_+_+_+_+_+_+_


// 1️⃣
const btn = document.getElementById("btn");

// 👉 Button Select করা হয়েছে।



// 2️⃣
const contact = document.getElementById("contact");

// 👉 Contact Section Select করা হয়েছে।



// 3️⃣
btn.addEventListener("click", () => {

// 👉 Button-এ Click করলে নিচের Code Execute হবে।



// 4️⃣
contact.scrollIntoView({

// 👉 scrollIntoView() Method-এ এবার Object পাঠানো হয়েছে।

// এর মাধ্যমে Method-এর behavior নিয়ন্ত্রণ করা যায়।



// 5️⃣
behavior: "smooth"

    });

});

// 👉 Browser-কে বলা হচ্ছে—

// "Jump করবে না, Smooth Animation দিয়ে Scroll করবে।"



// 6️⃣
// });

// 👉 Method শেষ হয়েছে।





// 🧠 কী shikhlam?

// scrollIntoView()-এ Options Object পাঠানো যায়।
// behavior: "smooth" দিলে Scroll Animation হয়।
// এটি User Experience (UX) অনেক ভালো করে।
// Modern Website-এ Smooth Scroll খুবই সাধারণ একটি Feature।








