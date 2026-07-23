
// event.altKey কী?

// event.altKey হলো KeyboardEvent-এর একটি Boolean property।

// এটি বলে দেয় key press করার সময় Alt key চাপা ছিল কি না।

// true → Alt চাপা ছিল।
// false → Alt চাপা ছিল না।

document.addEventListener("keydown", (event) => {
  console.log(event.altKey);
});

// Output

// Press a

// false

// Press Alt + a

// true

// ===============================================================


document.addEventListener("keydown", (event) => {
  if (event.altKey) {
    console.log("Alt is Pressed");
  }
});


// Output

// Press a

// Nothing

// Press Alt + a

// Alt is Pressed

// ===========================================================


document.addEventListener("keydown", (event) => {
  if (event.altKey) {
    console.log(`Alt + ${event.key}`);
  }
});


// Output

// Press

// Alt + a
// Alt + a

// Press

// Alt + Enter
// Alt + Enter

// Press

// Alt + ArrowLeft
// Alt + ArrowLeft

// =============================================================

document.addEventListener("keydown", (event) => {
  if (event.altKey && event.key.toLowerCase() === "d") {
    console.log("Developer Shortcut");
  }
});


// Output

// Press

// Alt + d
// Developer Shortcut

// Press

// d
// Nothing

// Press

// Alt + a
// Nothing

// =======================================================================

document.addEventListener("keydown", (event) => {
  console.log("Ctrl :", event.ctrlKey);
  console.log("Shift:", event.shiftKey);
  console.log("Alt  :", event.altKey);
});


// Output

// Press

// Alt + x
// Ctrl : false
// Shift: false
// Alt  : true

// Press

// Shift + x
// Ctrl : false
// Shift: true
// Alt  : false