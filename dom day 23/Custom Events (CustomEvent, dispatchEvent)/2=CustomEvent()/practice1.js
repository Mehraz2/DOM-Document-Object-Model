

// আজকের Practice 1-এ শুধু CustomEvent() দিয়ে event তৈরি করব এবং dispatchEvent() দিয়ে trigger করব।






const btn1 = document.getElementById("btn1");

btn1.addEventListener("userLogin", function () {
    console.log("User Logged In");
});

const loginEvent1 = new CustomEvent("userLogin");

btn1.addEventListener("click", function () {
    btn1.dispatchEvent(loginEvent1);
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
// "hello" custom event trigger
//      ↓
// "hello" event listener কাজ করে
//      ↓
// Hello Custom Event




// 5️⃣ ছোট ছোট Code Explanation




// Button select
// const btn1 = document.getElementById("btn1");

// HTML-এর btn1 button-টাকে JavaScript-এ select করেছি।

// Custom event listen
// btn1.addEventListener("hello", function () {
//     console.log("Hello Custom Event");
// });

// hello নামে custom event ঘটলে এই function চলবে।

// CustomEvent() দিয়ে event তৈরি
// const myEvent1 = new CustomEvent("hello");

// hello নামে একটি custom event তৈরি করা হয়েছে।

// Click event
// btn1.addEventListener("click", function () {

// Button-এ click করলে ভিতরের code চলবে।

// dispatchEvent()
// btn1.dispatchEvent(myEvent1);

// তৈরি করা hello event-টাকে manually trigger করছে।




// 🔥 মূল concept
// CustomEvent()           →    Event তৈরি
// dispatchEvent()         →    Event trigger
// addEventListener()      →    Event listen








