// ==========================================
// Scroll Event
// ==========================================

// Scroll মানে হলো কোনো element বা পুরো webpage উপরে বা নিচে সরানো।

// যখন user mouse wheel, touchpad, keyboard,
// অথবা scrollbar ব্যবহার করে scroll করে,
// তখন "scroll" event fire হয়।







// 🟢 Step 2 — Scroll Event কী?
// Scroll Event হলো এমন একটি Event,
// যা user scroll করার সময় বারবার trigger হয়।

// অর্থাৎ,
// যতক্ষণ scroll চলছে,
// ততক্ষণ scroll event বারবার fire হবে।








// 🟢 Step 3 — Real Life Example
// ধরো,

// Facebook
// YouTube
// Instagram
// LinkedIn

// তুমি নিচে scroll করছো।

// Scroll করার সাথে সাথে

// ✔ নতুন post load হয়
// ✔ Header change হয়
// ✔ Back To Top button আসে
// ✔ Progress bar move করে

// এগুলোর পিছনে Scroll Event কাজ করে।












// 🟢 Step 4 — কখন Trigger হয়?
// Scroll Event trigger হতে পারে যখন,

// ✔ Mouse Wheel ঘোরাও
// ✔ Touchpad দিয়ে scroll করো
// ✔ Mobile swipe করো
// ✔ Keyboard Arrow Key ব্যবহার করো
// ✔ Page Up / Page Down চাপো
// ✔ Home / End চাপো
// ✔ Scrollbar drag করো










// 🟢 Step 5 — Syntax
window.addEventListener("scroll", () => {
  console.log("Scrolling...");
});

// Explanation:

// window
// পুরো webpage observe করছে।

addEventListener()
// Event listen করছে।

// "scroll"
// Scroll Event

// ()=>{}
// Scroll হলেই এই function run হবে।











// 🟢 Step 6 — Important
// Scroll Event শুধু একবার run হয় না।

// User যত scroll করবে,
// Event ততবার fire হবে।

// তাই Scroll Event
// অনেক বেশি call হতে পারে।















// 🟢 Step 7 — মনে রাখবে
// click করলে

// Click Event
// ১ click = ১ event


// কিন্তু

// Scroll Event

// একটু scroll

// Event

// আবার scroll

// Event

// আবার scroll

// Event

// অর্থাৎ,
// অনেকবার fire হয়।