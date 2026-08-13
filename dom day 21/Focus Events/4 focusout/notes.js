



// 📚 focusout কী?

// যখন কোনো element focus হারায়, তখন focusout event fire হয়।

// Basic syntax:

element.addEventListener("focusout", function () {

    console.log("Focus removed");

});






// 🤔 তাহলে blur আর focusout-এর মধ্যে পার্থক্য কী?

// দুটোই focus চলে গেলে কাজ করে।

// blur
//  ↓
// Focus চলে যায়




// focusout
//  ↓
// Focus চলে যায়




// দেখতে একই মনে হচ্ছে।

// কিন্তু আসল পার্থক্য হলো:

// blur            →              Bubble করে না ❌

// focusout        →              Bubble করে ✅













// =============================🧠 Bubbling কী?==================

// suppose

// <form>

//     <input>

// </form>

// HTML structure:

// form
//  └── input



// যখন input থেকে focus চলে যায়:

// input
//  ↓
// form
//  ↓
// body
//  ↓
// document



// Event যদি child থেকে parent-এ যায়, তাহলে তাকে event bubbling বলে।




// ❌ blur Bubbling করে না




const form = document.querySelector("form");

form.addEventListener("blur", function () {

    console.log("Blur detected");

});

// User যদি input থেকে বের হয়ে যায়, তাহলে form এই event ধরতে পারবে না।







// ✅ focusout Bubbling করে

const form = document.querySelector("form");

form.addEventListener("focusout", function () {

    console.log("Focus removed");

});


// এখন input থেকে বের হয়ে গেলে event parent form পর্যন্ত পৌঁছে যাবে।















// 🎯 focusout কেন দরকার?

// এটাই সবচেয়ে গুরুত্বপূর্ণ প্রশ্ন।

// ✅ বড় Form Handle করার জন্য

// suppose

// <form>

//     <input>

//     <input>

//     <textarea>

//     <select>

// </form>

// যদি ২০টা field থাকে, তাহলে কি ২০টা blur event লিখব?

name.addEventListener();

email.addEventListener();

password.addEventListener();

phone.addEventListener();

// ❌ এটা efficient না।

// বরং:

form.addEventListener("focusout", function () {

});



// একটা event listener দিয়েই পুরো form নিয়ন্ত্রণ করা যায়।












// ✅ Form Validation-এর জন্য

// ধরো:

// Name field
//      ↓
// User typing
//      ↓
// User leaves the field
//      ↓
// Validation starts

// এটা focusout দিয়ে খুব সহজে করা যায়।














// ✅ Error Message দেখানোর জন্য
// Input খালি
//      ↓
// focusout
//      ↓
// Show error













// ✅ Data Save করার জন্য

// User updates a field
//          ↓
// User leaves the field
//          ↓
// focusout
//          ↓
// Save the data











// ❌ কোথায় focusout ব্যবহার করা হয় না?

// একটা মাত্র Input থাকলে

// <input>

// তাহলে:

input.addEventListener("blur");

// ব্যবহার করাই সহজ।

// Bubbling-এর প্রয়োজন না হলে

// One input
//      ↓
// No parent event
//      ↓
// blur is enough












// ⚡ Basic Example

const form = document.querySelector("#form");

form.addEventListener("focusout", function () {

    console.log("Focus lost");

});













// 🧠 event.target

// focusout-এর সবচেয়ে powerful feature হলো:

// event.target

// এটা বলে দেয়:

// কোন element focus হারিয়েছে

// উদাহরণ:

form.addEventListener("focusout", function (event) {

    console.log(event.target.id);

});

// Output:

// name

// email

// password













// 🔥 focusout + Validation

form.addEventListener("focusout", function (event) {

    if (event.target.value === "") {

        console.log("Required field");

    }

});




// Logic:

// User leaves input
//         ↓
// focusout
//         ↓
// event.target.value
//         ↓
// Validation
















// 📊 blur বনাম focusout


// Feature                                            	blur	                      focusout
// Focus চলে গেলে কাজ করে	                           ✅	                          ✅
// Bubbling	                                            ❌	                           ✅
// Event delegation                                 	❌                           	✅
// বড় Form	                                            ❌                           	✅
// Single Input	                                       ✅	                           ❌







// 📊 focus → blur → focusin → focusout

// Event	                              Focus আসে               	Focus চলে যায়	                  Bubble

// focus	                                ✅	                        ❌                          	❌
// blur	                                    ❌	                        ✅                       	❌
// focusin                               	✅	                        ❌	                       ✅
// focusout                             	❌                       	✅                       	✅









// 🧠 পুরো Mental Model


// User clicks input
//          ↓
// focusin
//          ↓
// User types
//          ↓
// User leaves input
//          ↓
// focusout
//          ↓
// Event bubbles
//          ↓
// Parent receives the event
//          ↓
// Validation / Message / Save / Update
















