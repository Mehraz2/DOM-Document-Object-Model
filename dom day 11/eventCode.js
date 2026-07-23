// event.code কী?

// event.code হলো event object-এর একটি property, যা বলে keyboard-এর কোন physical key (button) চাপা হয়েছে।

// সহজ ভাষায়:

// event.code keyboard-এর button-এর identity বলে, character না।

// উদাহরণ

// তুমি keyboard-এর A button চাপলে:

console.log(event.code);

// এখানে KeyA মানে:

// "Keyboard-এর A নামের button চাপা হয়েছে।"


// Browser-এর ভিতরে কী থাকে?

// তুমি A চাপলে browser একটা object বানায়:

event = {
    key: "a",
    code: "KeyA"
}


document.addEventListener("keydown", function (event) {
    console.log(event.code);
});



// ===============================================================

document.addEventListener("keydown", function (event) {
    console.log("Button Pressed:", event.code);
});

//  output:

// Button Pressed: KeyA
// Button Pressed: KeyB
// Button Pressed: Digit1
// Button Pressed: Enter
// Button Pressed: Space

// =============================================================

