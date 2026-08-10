




// 1. focus কী?

// focus event তখন ঘটে যখন কোনো focusable element-এ user focus দেয়।

// সবচেয়ে common example:

// <input type="text">

// User যখন input-এ click করে বা keyboard দিয়ে input-এ যায়, তখন input focused হয়।

// তখন আমরা JavaScript দিয়ে focus event ধরতে পারি।



// 2. Basic Syntax
element.addEventListener("focus", function () {
//     // focus হলে যা হবে
});

// উদাহরণ:
// 
const input = document.querySelector("#name");

input.addEventListener("focus", function () {
    console.log("Input focused");
});

// এখন input-এ click করলে console-এ:

// Input focused

// দেখাবে।







// 3. Focus কখন হয়?

// Input-এ focus আসতে পারে কয়েকভাবে:

// Mouse click
//      ↓
// Input focused

// অথবা:

// Keyboard Tab
//      ↓
// Input focused

// অর্থাৎ শুধু mouse click করলেই focus হয় না।










// 4. Focus হওয়ার পর কী করতে পারি?

// অনেক কিছু করা যায়:

// background পরিবর্তন
// border পরিবর্তন
// text দেখানো
// error/message দেখানো
// class add করা
// অন্য element পরিবর্তন করা
// input-এর value নিয়ে কাজ করা

// যেমন:

input.addEventListener("focus", function () {
    input.style.backgroundColor = "yellow";
});

// Input-এ focus করলেই background yellow হবে।

// 🧠 সবচেয়ে গুরুত্বপূর্ণ বিষয়

// focus হলো event।

// আর:

// focus()

// হলো method।

// দুটো এক জিনিস না।

// Event:
input.addEventListener("focus", () => {
    console.log("Focused");
});

// এখানে user focus করলে event fire হবে।

// Method:
input.focus();

// এখানে JavaScript নিজে থেকে input-এ focus দেবে।

// এই পার্থক্যটা মাথায় রাখব⚠️


