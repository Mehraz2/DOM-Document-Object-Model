// event.metaKey কী?

// event.metaKey হলো KeyboardEvent-এর একটি Boolean property।

// এটি বলে দেয় Meta key (Windows Key / Command ⌘) চাপা ছিল কি না।

// 🪟 Windows → Windows key (⊞)
// 🍎 macOS → Command key (⌘)

// Return Value

// true  → Meta key pressed
// false → Meta key not pressed

document.addEventListener("keydown", (event) => {
  console.log(event.metaKey);
});


// Output

// Press a

// false

// Press Windows + a

// true

// ==============================================

document.addEventListener("keydown", (event) => {
  if (event.metaKey) {
    console.log("Meta Key Pressed");
  }
});

// Output

// Press a

// Nothing

// Press Windows + a

// Meta Key Pressed

// ======================================================


document.addEventListener("keydown", (event) => {
  if (event.metaKey) {
    console.log(`Meta + ${event.key}`);
  }
});

// Output

// Press

// Windows + A
// Meta + a

// Press

// Windows + Enter
// Meta + Enter

// Press

// Windows + ArrowLeft
// Meta + ArrowLeft

// ===========================================================

document.addEventListener("keydown", (event) => {
  if (event.metaKey && event.key.toLowerCase() === "k") {
    console.log("Search Shortcut");
  }
});


// Output

// Press

// Windows + k
// Search Shortcut

// Press

// k
// Nothing

// Press

// Windows + a
// Nothing