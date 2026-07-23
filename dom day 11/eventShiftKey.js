//  event.shiftKey কী?

// shiftKey একটি Boolean property।

// true → Shift চাপা আছে।
// false → Shift চাপা নেই।

document.addEventListener("keydown", (event => {
   console.log(event.shiftKey);
   
}));

// Output

// Normal key

// false

// Shift + A

// true

// ================================================

document.addEventListener("keydown", (event) => {
  if (event.shiftKey) {
    console.log("Shift is pressed");
  }
});

// output =যেকোনো key-এর সাথে Shift চাপলেই

// Shift is pressed

// ============================================================

document.addEventListener("keydown", (event) => {
  if (event.shiftKey) {
    console.log(`You pressed Shift + ${event.key}`);
  }
});
// Output

// Press Shift + A

// You pressed Shift + A

// Press Shift + Enter

// You pressed Shift + Enter

// Press Shift + ArrowLeft

// You pressed Shift + ArrowLeft

// ==================================================

document.addEventListener("keydown", (event) => {
  if (event.shiftKey && event.key === "A") {
    console.log("Shortcut Activated");
  }
});


// Output

// Press Shift + A

// Shortcut Activated

// Press only A

// Nothing

// 💡 Note: event.key-এর value Shift-এর কারণে "A" (uppercase) হতে পারে। 
// যদি lowercase/uppercase দুইটাই handle করতে cai..........