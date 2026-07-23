// আগে বুঝি Modifier Key কী?

// Modifier Key হলো এমন key, যা একা সাধারণত কোনো কাজ করে না, 
// কিন্তু অন্য key-এর সাথে মিলিয়ে কাজ করে।

// যেমন:

// Ctrl + C → Copy
// Ctrl + V → Paste
// Ctrl + S → Save
// Ctrl + Z → Undo
// Shift + A → Capital A
// Alt + Tab → Window Switch

// এখানে:

// Ctrl
// Shift
// Alt

// এগুলোই Modifier Keys।

// 🤔 event.ctrlKey কী?

// event.ctrlKey হলো event object-এর একটি boolean property।

// এটা মাত্র দুইটা value return করে:

// true
// false
// true → Ctrl চাপা আছে।
// false → Ctrl চাপা নেই।

document.addEventListener("keydown", function (event) {
    console.log(event.ctrlKey);
});

// শুধু A tap korle

// Output:

// false

// এবার Ctrl + A tap korle

// Output:

// true

document.addEventListener("keydown", function (event) {
    if (event.ctrlKey) {
        console.log("Ctrl is pressed");
    }
});

// Output

// Ctrl + S

// Ctrl is pressed

// Ctrl + C

// Ctrl is pressed

// Ctrl + A

// Ctrl is pressed


// 💡 কেন এটা গুরুত্বপূর্ণ?

// কারণ বাস্তব application-এ shortcut detect করতে হয়।


// ===================================================

document.addEventListener("keydown", function (event) {

    if (event.ctrlKey) {
        console.log("Ctrl is pressed");
    }

});

// শুধু A tap korle

// Output:

// (কোনো output হবে না)

// কারণ event.ctrlKey = false

// এবার Ctrl + A চাপো

// Output:

// Ctrl is pressed

// কারণ event.ctrlKey = true

document.addEventListener("keydown", function (event) {

    if (event.ctrlKey) {
        console.log("Ctrl +", event.key);
    }

});

//  Output

// যদি চাপো:

// Ctrl + C

// Ctrl + c

// Ctrl + S

// Ctrl + s

// Ctrl + A

// Ctrl + a

// 🤔 এটা কেন দরকার?

// কারণ বাস্তবে আমরা শুধু জানতে চাই না যে Ctrl চাপা আছে।

// আমরা জানতে চাই:

// Ctrl-এর সাথে কোন key চাপা হয়েছে?

// তখন আমরা shortcut detect করতে পারি।

if (event.ctrlKey && event.key === "s") {
    console.log("Saving...");
}

// event.ctrlKey → Ctrl চাপা আছে?
// event.key === "s" → S চাপা হয়েছে?

// দুটোই true হলে: