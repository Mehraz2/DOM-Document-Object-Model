




// 🟢 Scroll Event — Practice 3 (Change Background Color While Scrolling)

// এবার আমরা এমন একটি example করব যেটা দেখেই বোঝা যাবে scroll event কাজ করছে। 
// Console বা Alert-এর দরকার হবে না।



window.addEventListener("scroll3", () => {
    document.body.style.backgroundColor = "lightblue";
});








// 🖥️ Output

// Website খুললে প্রথমে Background হবে—

// White

// তারপর User একটু Scroll করলেই—

// Light Blue

// Background Color সাথে সাথেই পরিবর্তন হয়ে যাবে।



// 🎯 Output Explain
// 📌 কোথায় Execute হবে?

// Browser-এর Web Page-এ।

// এবার Output Console-এ নয়, সরাসরি Web Page-এর Background-এ দেখা যাবে।

// 📌 কখন Execute হবে?

// যখন User—

// Mouse Wheel ঘুরাবে
// Touchpad দিয়ে Scroll করবে
// Scrollbar Drag করবে
// Keyboard দিয়ে Scroll করবে

// যেই Scroll শুরু হবে, সাথে সাথেই Background Color পরিবর্তন হবে।

// 📌 কতবার Execute হবে?

// scroll event বারবার fire হবে।

// তাই এই code-টাও বারবার execute হবে।

// তবে Background একবার lightblue হয়ে গেলে, একই color বারবার set হবে। তাই তুমি নতুন কোনো পরিবর্তন দেখতে পাবে না।

// 📌 Real Project-এ কোথায় ব্যবহার হয়?

// এই technique ব্যবহার করে অনেক Website-এ—

// ✅ Navbar-এর Color Change হয়।
// ✅ Header-এর Style Change হয়।
// ✅ Dark Mode Effect দেওয়া হয়।
// ✅ Scroll Animation শুরু হয়।
// ✅ Special Section Highlight করা হয়।




// 📖 Code Explain



// 1️⃣
// window

// 👉 পুরো Browser Window-কে বোঝায়।


// 2️⃣
// addEventListener()

// 👉 Event listen করার জন্য ব্যবহার করা হয়।



// 3️⃣
// "scroll"

// 👉 User Scroll করলেই এই Event Trigger হবে।



// 4️⃣
// () => {

// 👉 Scroll হলেই এই Function Execute হবে।



// 5️⃣
document.body

// 👉 পুরো <body> Element-কে Select করছে।



// 6️⃣
style.backgroundColor

// 👉 Body-এর Background Color পরিবর্তন করছে।


// 7️⃣
// "lightblue"

// 👉 Background-এর নতুন Color।

// 🧠 কী শিখলে?
// scroll event দিয়ে শুধু console.log() বা alert() নয়, DOM-ও পরিবর্তন করা যায়।
// Scroll Event Trigger হলেই CSS পরিবর্তন করা সম্ভব।
// Real Project-এ এই ধারণা ব্যবহার করে Sticky Navbar, Scroll Animation, Theme Change ইত্যাদি তৈরি করা হয়।
























