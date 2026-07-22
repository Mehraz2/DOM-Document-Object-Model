// let btn = document.getElementById("btn");

// btn.addEventListener("click", function(event){

//     console.log(event);

//     console.log(event.type);

//     console.log(event.target);

//     console.log(event.currentTarget);

//     console.log(event.timeStamp);

// });

// Run → button click  → console 


// Click হলো
//    ↓
// Browser event object বানালো
//    ↓
// Function-এর parameter এ পাঠালো
//    ↓
// event থেকে information নিলাম

// ======================================================================

// let btn = document.getElementById("btn");

// btn.addEventListener("click", function(event){

//     console.log("Event Type:", event.type);

//     console.log("Clicked Element:", event.target);

//     console.log("Mouse X:", event.clientX);

//     console.log("Mouse Y:", event.clientY);

// });

// এখন button-এর বিভিন্ন জায়গায় click kori,

// Console এ এমন আসবে:

// Event Type: click

// Clicked Element: <button id="btn">Click Me</button>

// Mouse X: 540

// Mouse Y: 320