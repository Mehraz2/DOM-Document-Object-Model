// Event Bubbling
// Click event child element থেকে parent element-এ bubble করে।


// let parent = document.getElementById("parent");
// let child = document.getElementById("child");

// child.addEventListener("click", function (){
//     console.log("Button Clicked");
    
// })

// parent.addEventListener("click", function(){
//     console.log("Parent Clicked");
    
// });

// Button-এ click করলে output হবে:

// Button Clicked
// Parent Clicked

// এই order-এই হবে।

// কারণ:

// আগে Button-এর event run করে।
// তারপর event bubble হয়ে Parent-এ যায়।
// তাই Parent-এর event run করে।


// ============================================================

// console.log("JS Loaded");

// let parent = document.getElementById("parent");
// let child = document.getElementById("child");

// console.log(parent);
// console.log(child);

// child.addEventListener("click", function () {
//     console.log("Button Clicked");
// });

// parent.addEventListener("click", function () {
//     console.log("Parent Clicked");
// });

//  output=

// JS Loaded
// <div id="parent">...</div>
// <button id="child">Click Me</button>

// ============================================================

// let parent = document.getElementById("parent");
// let child = document.getElementById("child");

// child.onclick = function () {
//     console.log("Button Clicked");
// };

// parent.onclick = function () {
//     console.log("Parent Clicked");
// };

// output =
// Button Clicked
// Parent Clicked

// =================<!-- Practice 2  -->====================================

let grandParent = document.getElementById("grandParent");
let parent = document.getElementById("parent");
let child = document.getElementById("child");

console.log("Grand Parent Clicked");
console.log("Parent Clicked");
console.log("Button Clicked");