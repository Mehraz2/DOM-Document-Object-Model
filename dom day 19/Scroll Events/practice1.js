


// 🟢 Scroll Event — Practice 1 (Basic Scroll Detection)

// আজকের লক্ষ্য শুধু scroll Event কীভাবে কাজ করে সেটা দেখা। 
// কোনো scrollTop বা scrollHeight ব্যবহার করব না।



window.addEventListener("scroll", () => {
    console.log("scrolling");
    
});




// 🖥️ Output

// Browser খুলে নিচের দিকে scroll করো।

// Console-এ দেখবে—

// Scrolling...
// Scrolling...
// Scrolling...
// Scrolling...
// Scrolling...
// Scrolling...
// Scrolling...

// যত scroll করব, ততবার "Scrolling..." print হবে।







// =-=-=-=-=-=-=-=-=-=-=🎯 Output Explain=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-



// 📌 কোথায় Execute হবে?

// Browser-এর Developer Console-এ।

// Open করার জন্য—

// Right Click
//    ↓
// Inspect
//    ↓
// Console

// অথবা

// F12
// ↓
// Console
// 📌 কখন Execute হবে?

// যখনই user page scroll করবে।

// যেমন—

// Mouse Wheel ঘোরাবে।
// Touchpad দিয়ে scroll করবে।
// Scrollbar drag করবে।
// Keyboard-এর Arrow Key দিয়ে নিচে যাবে।
// Page Down চাপবে।

// এই প্রতিটি action-এ scroll event fire হবে।

// 📌 কতবার Execute হবে?

// একবার না।

// ধরো—

// তুমি Mouse Wheel ২০ বার ঘুরালে।

// তাহলে Event-ও অনেকবার fire হবে।

// তাই Console-এ অনেকগুলো

// Scrolling...

// দেখা যাবে।





// ------------------📌 Real Project-এ কোথায় ব্যবহার হয়?---------------



// scroll Event অনেক জায়গায় ব্যবহার হয়।

// উদাহরণ—

// ✅ Facebook Feed

// User নিচে scroll করলে নতুন post load হয়।

// ✅ YouTube

// নিচে গেলে আরও video আসে।

// ✅ LinkedIn

// Scroll করলে আরও post দেখা যায়।

// ✅ News Website

// Scroll করলে Progress Bar move করে।

// ✅ Portfolio Website

// Scroll করলে Animation শুরু হয়।

// ✅ E-commerce Website

// Scroll করলে "Back To Top" button দেখা যায়।













// -------------------------📖 Code Explain------------------


// window

// 👉 পুরো Browser Window-কে বোঝায়।

// আমরা পুরো webpage-এর scroll observe করছি।

addEventListener()











// 👉 Event শোনার জন্য ব্যবহার করা হয়।

// অর্থাৎ,

// "কোনো event ঘটলে আমাকে জানাও।"

// "scroll"









// 👉 এখানে আমরা Scroll Event listen করছি।

// User scroll করলেই এই event fire হবে।

// () => {

// }











// 👉 এটি একটি Arrow Function।

// Scroll Event trigger হলেই এই function execute হবে।

console.log("Scrolling...");

// 👉 Console-এ "Scrolling..." print করবে।

// প্রতিবার scroll করলে আবার print করবে।








// 🧠 আজ কী shikhlam?
// scroll একটি Event।
// User scroll করলেই Event fire হয়।
// এটি বারবার execute হয়।
// Browser-এর Console-এ output দেখা যায়।
// Real project-এ এটি animation, infinite scroll, 
// sticky navbar, progress bar ইত্যাদিতে ব্যবহৃত হয়।
