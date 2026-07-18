let btn = document.getElementById("btn");

btn.addEventListener("click", function(event){
    console.log(event.target);
    
})

// ===========================================================

// console.log("JS file connected");

// ================================================================
let btn = document.getElementById("btn");

console.log(btn);

btn.addEventListener("click", function () {
    console.log("Button clicked");
});

// ============================================================

let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    console.log("Button clicked");
    
})

// এখন browser এ button এ click করো।

// Console এ আসবে:

// Button clicked

// ================================================================

let input = document.getElementById("nameInput");

input.addEventListener("input", function(event) {
    console.log(event.target.value);
});

// এখন কী হবে?

// input box এ লিখব....

// Mehraz

// Console এ আসবে:

// M
// Me
// Meh
// Mehr
// Mehra
// Mehraz
