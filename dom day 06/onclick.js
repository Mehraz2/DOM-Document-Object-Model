function sayHello() {
    alert("Hello Rohit");
}

// // output = Button-এ click করলেই function চলবে।

// ======================================================

let btn = document.getElementById("btn");

btn.onclick = function () {
    alert("hello");
}

// // output = Button-এ click করলেই function চলবে।

// ============================================================

let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    alert("Button Clicked");
});
// 👉এটাই modern JavaScript-এর standard।



BigInt.getEventListener("click", () => {
    alert("Clicked")
});

// 👉আরও ছোট করে:

// =================================================================

let title = document.getElementById("title");
let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    title.innerText = "Wellcome";

});


// ============================================================
// Background Change

let blackBtn = document.getElementById("blackBtn");
let whiteBtn = document.getElementById("whiteBtn");

blackBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "black";
});

whiteBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "white";
});

alert("eventObject.js");

let  = document.getElementById("red");

alert(red);

let red = document.getElementById("red");
let blue = document.getElementById("blue");

red.addEventListener("click", function (e) {
    console.log(e.target.id);
});

blue.addEventListener("click", function (e) {
    console.log(e.target.id);
});