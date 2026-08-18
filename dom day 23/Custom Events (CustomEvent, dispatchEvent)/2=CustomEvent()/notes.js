








// CustomEvent() হলো JavaScript-এর এমন একটি constructor, 
// যেটা দিয়ে নিজের custom event তৈরি করা যায় এবং সেই event-এর সাথে নিজের data পাঠানো যায়।

// সহজ ভাষায়:

// Event() → custom event তৈরি করতে পারে
// CustomEvent() → custom event + data তৈরি করতে পারে




// 1. কেন CustomEvent() দরকার? 🤔

// Browser-এর কিছু built-in event আছে:

// click
// submit
// focus
// blur
// keydown

// কিন্তু বড় application-এ  নিজের কিছু ঘটনা তৈরি করতে হতে পারে।

// যেমন:

// userLogin
// productAdded
// cartUpdated
// themeChanged
// orderPlaced

// এগুলো browser-এর built-in event না।

//  নিজের application-এর জন্য এগুলো তৈরি করতে CustomEvent() দিয়ে।












// 2. CustomEvent() কীভাবে কাজ করে?

// পুরো flow:

// CustomEvent()
//      ↓
// Custom Event তৈরি
//      ↓
// detail-এর মধ্যে data রাখা
//      ↓
// dispatchEvent()
//      ↓
// Event trigger
//      ↓
// addEventListener()
//      ↓
// Event receive
//      ↓
// event.detail দিয়ে data পাওয়া

// এখানে তিনটা জিনিস খুব গুরুত্বপূর্ণ:

// CustomEvent()
// addEventListener()
// dispatchEvent()















// 3. Basic Syntax
// const event = new CustomEvent("eventName");

// উদাহরণ:

// const loginEvent = new CustomEvent("userLogin");

// এখানে userLogin নামে একটি custom event তৈরি হলো।

// কিন্তু এখনো event-এর সাথে কোনো data নেই।

















// 4. Data সহ CustomEvent()

// এখানেই CustomEvent() আসল শক্তিশালী হয়।

// const loginEvent = new CustomEvent("userLogin", {
//     detail: {
//         name: "Mehraz",
//         role: "Frontend Developer"
//     }
// });

// এখানে:

// "userLogin"

// → event-এর নাম।

// আর:

// detail: {
//     name: "Mehraz",
//     role: "Frontend Developer"
// }

// → event-এর সাথে পাঠানো data।

















// 5. detail কী? 🎯

// detail হলো custom event-এর নিজের data রাখার জায়গা।

// যেমন:

// detail: {
//     name: "Mehraz",
//     age: 22
// }

// তারপর event receive করার সময়:

// event.detail.name

// দিয়ে Mehraz পাওয়া যাবে।

// আর:

// event.detail.age

// দিয়ে 22 পাওয়া যাবে।


















// 6. CustomEvent() একা event trigger করে না ⚠️

// এটা খুব ভালোভাবে মনে রাখব।

// const event = new CustomEvent("userLogin");

// এটা শুধু event তৈরি করে।

// Event trigger করার জন্য দরকার:

// element.dispatchEvent(event);

// অর্থাৎ:

// CustomEvent()       → Event তৈরি
// dispatchEvent()     → Event trigger
// addEventListener()  → Event receive


















// 7. Complete Example

// HTML
// <button id="loginBtn">Login</button>
// JavaScript
// const loginBtn = document.getElementById("loginBtn");


// loginBtn.addEventListener("userLogin", function (event) {
//     console.log("User Logged In");
//     console.log(event.detail.name);
//     console.log(event.detail.role);
// });


// const loginEvent = new CustomEvent("userLogin", {
//     detail: {
//         name: "Mehraz",
//         role: "Frontend Developer"
//     }
// });


// loginBtn.addEventListener("click", function () {
//     loginBtn.dispatchEvent(loginEvent);
// });
// Output
// User Logged In
// Mehraz
// Frontend Developer
















// 8. পুরো Code-এর Logic
// Step 1 — Element select
// const loginBtn = document.getElementById("loginBtn");

// Login button-কে JavaScript-এ নিয়ে আসলাম।





// Step 2 — Custom event listen
// loginBtn.addEventListener("userLogin", function (event) {

// userLogin event ঘটলে এই function চলবে।





// Step 3 — Data receive
// event.detail.name

// Custom event-এর detail থেকে name নেওয়া হচ্ছে।






// Step 4 — Custom event তৈরি
// const loginEvent = new CustomEvent("userLogin", {

// userLogin নামে custom event তৈরি হলো।






// Step 5 — Data পাঠানো
// detail: {
//     name: "Mehraz",
//     role: "Frontend Developer"
// }

// Event-এর সাথে data পাঠানো হলো।







// Step 6 — Event trigger
// loginBtn.dispatchEvent(loginEvent);

// Custom event manually trigger হলো।







// 9. কোথায় ব্যবহার হয়? 🚀
// ① Component Communication

// একটা component-এর কোনো action অন্য component-কে জানাতে।

// Component A
//     ↓
// Custom Event
//     ↓
// Component B
// ② Shopping Cart

// যখন product cart-এ যোগ করা হয়:

// new CustomEvent("productAdded", {
//     detail: {
//         product: "Laptop",
//         price: 85000
//     }
// });

// অন্য code সেটা শুনতে 

// ③ Login System

// User login করলে:

// new CustomEvent("userLogin", {
//     detail: {
//         username: "Mehraz"
//     }
// });

// অন্য component জানতে পারে user login ।

// ④ Theme Change

// Dark mode পরিবর্তন হলে:

// new CustomEvent("themeChanged", {
//     detail: {
//         theme: "dark"
//     }
// });
// ⑤ Notification System

// নতুন notification এলে:

// new CustomEvent("notification", {
//     detail: {
//         message: "New message received"
//     }
// });















// 10. Event() বনাম CustomEvent() 🔥


// Event()                                                                	CustomEvent()
// -----------------------------------------------------------------------------------------------
// Event তৈরি করে	                                                       Event তৈরি করে
// সাধারণ event                                                           	Custom event
// detail নেই	                                                             detail আছে
// Data পাঠানোর সুবিধা নেই	                                                Data পাঠানো যায়
// new Event()	                                                           new CustomEvent()
// মনে রাখার shortcut:
// Event()
//     ↓
// শুধু Event


// CustomEvent()
//     ↓
// Event + Data
















// 11. সবচেয়ে গুরুত্বপূর্ণ ৪টা জিনিস
// const event = new CustomEvent("userLogin", {
//     detail: {
//         name: "Mehraz"
//     }
// });







// ১. CustomEvent() → event তৈরি

// addEventListener()







// ২. Event listen

// dispatchEvent()

// ৩. Event trigger

// event.detail

// ৪. Data receive















// 🧠 Final Mental Model:

//                  CustomEvent()
//                       ↓
//                Event তৈরি হলো
//                       ↓
//                  detail
//                       ↓
//                 Data attach
//                       ↓
//                 dispatchEvent()
//                       ↓
//                 Event trigger
//                       ↓
//              addEventListener()
//                       ↓
//                  event receive
//                       ↓
//                 event.detail
//                       ↓
//                   Data পাওয়া

// এক লাইনে:
// CustomEvent() ব্যবহার করি যখন নিজের custom event তৈরি করার পাশাপাশি সেই event-এর সাথে নিজের data পাঠাতে চাই।
















