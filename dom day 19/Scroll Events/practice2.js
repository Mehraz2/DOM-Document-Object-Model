




// 🟢 Scroll Event — Practice 2 (Show Alert While Scrolling)

// এবার একটু ভিন্ন কিছু করি। এবার console.log() না করে, 
// scroll হলেই browser-এ alert দেখাবো।

// ⚠️ এই practice শুধু scroll event বোঝার জন্য। Real project-এ 
// এভাবে alert() ব্যবহার করা হয় না, কারণ এটা user experience খারাপ করে।






window.addEventListener("scroll2", () => {
       alert("You Are scrolling");
});








// 🖥️ Output

// Page নিচের দিকে scroll করলেই—

// ┌────────────────────┐
// │ You are scrolling! │
// │                    │
// │         OK         │
// └────────────────────┘

// OK চাপলে আবার scroll করলেই আবার একই alert আসবে।





//--------------- 🎯 Output Explain------------

// 📌 কোথায় Execute হবে?

// Browser-এর screen-এর মাঝখানে একটি Alert Box দেখাবে।


// 📌 কখন Execute হবে?

// যখন User—

// Mouse Wheel ঘোরাবে
// Touchpad দিয়ে scroll করবে
// Scrollbar drag করবে
// Keyboard দিয়ে scroll করবে


// 📌 কেন বারবার Alert আসে?

// কারণ scroll event একবার নয়, বারবার fire হয়।

// যদি ১ সেকেন্ডে ২০ বার scroll করো, তাহলে Event-ও অনেকবার fire হবে।

// তাই Alert-ও বারবার আসবে।

// 📌 Real Project-এ কি এভাবে ব্যবহার করা হয়?

// ❌ না।

// কারণ—

// বারবার Alert আসলে User কিছুই করতে পারবে না।
// Website ব্যবহার করা বিরক্তিকর হয়ে যাবে।

// এর পরিবর্তে Developer-রা ব্যবহার করে—

// ✅ Sticky Navbar
// ✅ Infinite Scroll
// ✅ Animation
// ✅ Progress Bar
// ✅ Back To Top Button









// =-=-=-=-=-=-=-=-=-=-=-=-=-=📖 Code Explain--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=



// window

// 👉 পুরো Browser Window-কে বোঝায়।

addEventListener()

// 👉 Event listen করার জন্য ব্যবহার করা হয়।

"scroll"


// 👉 Scroll Event listen করছে।

// ()  => {



// 👉 Scroll হলেই এই Arrow Function execute হবে।

alert("You are scrolling!");


// 👉 Browser-এর Alert Box দেখাবে।



// 🧠 কী shikhlam?

// scroll event দিয়ে শুধু console.log() নয়, যেকোনো JavaScript code চালানো যায়।
// alert()-ও চালানো যায়।
// কিন্তু scroll event অনেকবার fire হয়, তাই alert() ব্যবহার করা ভালো practice নয়।