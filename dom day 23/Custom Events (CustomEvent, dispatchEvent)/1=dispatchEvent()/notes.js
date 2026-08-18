










// =========================================
// dispatchEvent() (A to Z)
// =========================================

// dispatchEvent() হলো এমন একটি method, যা কোনো event-কে manually trigger করে।

// সাধারণত browser নিজেই event trigger করে।

// উদাহরণ:

// click → Browser trigger করে

// submit → Browser trigger করে

// focus → Browser trigger করে

// blur → Browser trigger করে

// কিন্তু developer চাইলে নিজের ইচ্ছামতো event trigger করতে পারে।

// সেই কাজের জন্য dispatchEvent() ব্যবহার করা হয়।








// =========================================
// Syntax
// =========================================

element.dispatchEvent(event);

// element = যে element-এর ওপর event trigger হবে।

// event = যে event trigger করা হবে।











// =========================================
// How it works
// =========================================

// ১. প্রথমে একটি event তৈরি করতে হবে।

const myEvent = new Event("hello");

// ↓

// ২.  addEventListener() দিয়ে event listen করতে হবে।

button.addEventListener("hello", function () {});

// ↓

// ৩. dispatchEvent() দিয়ে event trigger করতে হবে।

button.dispatchEvent(myEvent);









// =========================================
// Normal Event
// =========================================

button.addEventListener("click", function () {
    console.log("Clicked");
});

// এখানে click event browser automatically trigger করছে।












// =========================================
// Manual Event
// =========================================

const myEvent = new Event("hello");

button.dispatchEvent(myEvent);

// এখানে developer manually event trigger করছে।












// =========================================
// dispatchEvent() কোথায় ব্যবহার করা হয়?
// =========================================

// ১. Component communication

// ২. Custom event তৈরি করার জন্য

// ৩. Data pass করার জন্য

// ৪. বড় application-এ module-এর মধ্যে communication করার জন্য

// ৫. React, Vue, Angular-এর মতো framework-এর event system বোঝার জন্য













// =========================================
// Remember
// =========================================

// Event তৈরি করে → Event()

// Event listen করে → addEventListener()

// Event trigger করে → dispatchEvent()

// =========================================



