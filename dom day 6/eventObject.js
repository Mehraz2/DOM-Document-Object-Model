btn.addEventListener("click", function(event) {

    console.log(event);

});

let btn = document.getElementById("btn");

btn.addEventListener("click", function (event) {
    console.log("Clicked");
    console.log(event);
});

let btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {
    alert("Clicked");
    console.log(e);
});

// ============================================================

let red = document.getElementById("red");
let blue = document.getElementById("blue");

console.log(red);
console.log(blue);

// ===============================================
let red = document.getElementById("red");
let blue = document.getElementById("blue");

red.addEventListener("click", function (e) {
    console.log(e.target.id);
});

blue.addEventListener("click", function (e) {
    console.log(e.target.id);
});

// alert("JS Loaded");

let red = document.getElementById("red");

console.log(red);
