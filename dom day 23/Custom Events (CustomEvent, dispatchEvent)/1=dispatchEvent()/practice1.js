



// এখানে লক্ষ্য একটাই: 
// 
// নিজে একটি event তৈরি করে dispatchEvent() দিয়ে manually trigger করা।







const btn1 = document.getElementById("btn1");

btn1.addEventListener("hello", function () {
    console.log("Hello Custom Event");
});

const myEvent1 = new Event("hello");

btn1.addEventListener("click", function () {
    btn1.dispatchEvent(myEvent1);
});






// 3️⃣ Output

// Button-এ click করলে:

// Hello Custom Event





// 4️⃣ Output Logic

// Button Click
//      ↓
// click event
//      ↓
// dispatchEvent(myEvent1)
//      ↓
// "hello" event trigger
//      ↓
// hello event listener কাজ করে
//      ↓
// "Hello Custom Event"










// 5️⃣ ছোট ছোট Code Explanation
// btn1 select করা
// const btn1 = document.getElementById("btn1");

// HTML-এর id="btn1" button-টাকে JavaScript-এ আনা হয়েছে।

// Custom event listen করা
// btn1.addEventListener("hello", function () {
//     console.log("Hello Custom Event");
// });

// hello নামে event ঘটলে এই function চলবে।

// Event তৈরি করা
// const myEvent1 = new Event("hello");

// hello নামে একটি নতুন event তৈরি করা হয়েছে।

// click event listen করা
// btn1.addEventListener("click", function () {

// Button-এ click করলে function-এর ভিতরের code চলবে।

// dispatchEvent()
// btn1.dispatchEvent(myEvent1);

// এটাই আজকের মূল অংশ।

// myEvent1-কে manually trigger করছে।

// অর্থাৎ:

// dispatchEvent() = Event manually trigger করা



















