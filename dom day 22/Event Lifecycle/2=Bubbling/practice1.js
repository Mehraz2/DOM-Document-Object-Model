




const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandparent.addEventListener("click", function () {
  console.log("Grandparent Clicked");
});

parent.addEventListener("click", function () {
  console.log("Parent Clicked");
});

child.addEventListener("click", function () {
  console.log("Button Clicked");
});






// 🖥️ Output

// যদি Click Me বাটনে ক্লিক , তাহলে Console-এ দেখাব:

// Button Clicked
// Parent Clicked
// Grandparent Clicked












// 🧠 Output Logic
// Button
//    ↓
// Parent
//    ↓
// Grandparent










// 🔍 Code Logic Explain
// Step 1
// const grandparent = document.getElementById("grandparent");
// const parent = document.getElementById("parent");
// const child = document.getElementById("child");

// তিনটি element select করেছি।

// Step 2
// grandparent.addEventListener("click", function () {
//   console.log("Grandparent Clicked");
// });

// Grandparent-এর জন্য একটি click event যোগ করেছি।








// Step 3
// parent.addEventListener("click", function () {
//   console.log("Parent Clicked");
// });

// Parent-এর জন্য একটি click event যোগ করেছি।








// Step 4
// child.addEventListener("click", function () {
//   console.log("Button Clicked");
// });

// Button-এর জন্য একটি click event যোগ করেছি।










// Step 5 (সবচেয়ে গুরুত্বপূর্ণ)

// যখন Button-এ ক্লিক , event প্রথমে Button-এ ঘটে।

// এরপর event উপরের element-এ যেতে শুরু করে।

// Child → Parent → Grandparent

// এই নিচ থেকে উপরে যাওয়ার প্রক্রিয়াকেই Event Bubbling বলা হয়।






