


// 📚 focusin কী?

// যখন কোনো element focus পায়, তখন focusin event fire হয়।

// Basic syntax:

element.addEventListener("focusin", function () {
    console.log("Focused");
});




// 🤔 তাহলে focus আর focusin-এর মধ্যে পার্থক্য কোথায়?

// এখানেই আসল বিষয়।

// দুটোই focus পাওয়ার সময় কাজ করে।



// focus
//  ↓
// Element focus পায়



// focusin
//  ↓
// Element focus পায়



// দেখতে একই মনে হচ্ছে।

// কিন্তু আসল পার্থক্য:

// focus    → Bubble করে না ❌


// focusin  → Bubble করে ✅







// ----------------------------------- 🧠 Bubbling কী? ------------------------------------------

// suppose:

// <form>

//     <input>

// </form>

// HTML structure:

// form
//  └── input

// User input-এ click করল।



// তখন event-এর পথ:

// input
//  ↓
// form
//  ↓
// body
//  ↓
// document

// Child element থেকে Parent element-এর দিকে event যাওয়াকে Event Bubbling বলে।









// ❌ focus Bubbling করে না

const form = document.querySelector("form");

form.addEventListener("focus", function () {
    console.log("Form focused");
});

// User যদি input-এ click করে:

// Input focused

// কিন্তু:

// Form focused

// দেখাবে না।

// কারণ focus bubble করে না।
















// ================================  ✅ focusin Bubbling করে ====================================

const form = document.querySelector("form");

form.addEventListener("focusin", function () {
    console.log("Form focused");
});

// এখন user input-এ click করলে:

// Input focused
//         ↓
// focusin bubble
//         ↓
// Form receives the event
//         ↓
// Console message
// কোথায় focusin ব্যবহার করা হয়?







// ✅ বড় Form-এ

// suppose

// <form>

//     <input>

//     <input>

//     <textarea>

// </form>

// ১০টা input থাকলে:

// ❌ খারাপ উপায়:

input1.addEventListener();

input2.addEventListener();

input3.addEventListener();

input4.addEventListener();



// ✅ ভালো উপায়:

form.addEventListener("focusin", function () {

});

// একটা event listener দিয়েই সব input নিয়ন্ত্রণ করা যায়।






// ✅ Form Highlight করার জন্য
// User form-এর যেকোনো field-এ যায়
//               ↓



// পুরো form highlight হয়
// ✅ Event Delegation-এর জন্য

// focusin event delegation-এর সময় অনেক কাজে লাগে।

// কোথায় focusin ব্যবহার করা হয় না?









// ❌ Single Input

// যদি শুধু একটা input থাকে:

// <input>

// তাহলে:

input.addEventListener("focus");

// ব্যবহার করাই সহজ।











// ❌ Bubbling-এর প্রয়োজন না হলে

// যদি parent element-এর কোনো দরকার না থাকে:

// Input
//  ↓
// নিজের কাজ নিজেই করবে

// তাহলে focus-ই যথেষ্ট।












// focusin দিয়ে কী কী করা যায়?

// Style পরিবর্তন
element.style.backgroundColor = "yellow";

// Message দেখানো
message.textContent = "Typing...";

// Class যোগ করা
element.classList.add("active");

// Border পরিবর্তন
element.style.border = "2px solid blue";

// focusin Event Object
form.addEventListener("focusin", function (event) {

    console.log(event.target);

});

// event.target আমাদের বলে:

// কোন element-এ focus হয়েছে
// focusin   বনাম       focus

// Feature	         
//            ======================================   focus	 =========================  focusin
// Focus হলে কাজ করে	                             ✅                              	✅
// Bubble করে	                                     ❌                                 	✅
// Event delegation                                	❌	                                ✅
// বড় form-এর জন্য	                               ❌                                	✅













//  ==========================================পুরো Flow 🧠 ============================

// User clicks input
//          ↓
// Input gets focus
//          ↓
// focusin event fires
//          ↓
// Event bubbles
//          ↓
// Parent receives the event
//          ↓
// JavaScript executes







