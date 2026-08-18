





// এবার dispatchEvent()-এর সাথে CustomEvent() ব্যবহার করব।
// এখানে event-এর সাথে data পাঠানো হবে।







const btn2 = document.getElementById("btn2");

btn2.addEventListener("userData", function (event) {
    console.log(event.detail.name);
    console.log(event.detail.age);
});

const userEvent2 = new CustomEvent("userData", {
    detail: {
        name: "Mehraz",
        age: 22
    }
});

btn2.addEventListener("click", function () {
    btn2.dispatchEvent(userEvent2);
});



// 3️⃣ Output


// Button-এ click করলে:

// Mehraz
// 22





// 4️⃣ Output Logic
// Button Click
//      ↓
// click event
//      ↓
// dispatchEvent(userEvent2)
//      ↓
// "userData" event trigger
//      ↓
// event.detail থেকে data নেওয়া
//      ↓
// Mehraz
// 22








// 5️⃣ ছোট ছোট Code Explanation

// Button select
// const btn2 = document.getElementById("btn2");

// HTML-এর btn2 button-টাকে JavaScript-এ আনা হয়েছে।

// Custom event listen
// btn2.addEventListener("userData", function (event) {

// userData event trigger হলে এই function চলবে।

// event.detail
// event.detail.name

// detail-এর ভিতর থেকে name নেওয়া হচ্ছে।

// event.detail.age

// detail-এর ভিতর থেকে age নেওয়া হচ্ছে।

// CustomEvent()
// const userEvent2 = new CustomEvent("userData", {

// userData নামে একটি custom event তৈরি করা হয়েছে।

// Data পাঠানো
// detail: {
//     name: "Mehraz",
//     age: 22
// }

// Event-এর সাথে name এবং age পাঠানো হচ্ছে।

// Event manually trigger
// btn2.dispatchEvent(userEvent2);

// userData event-টাকে manually trigger করছে।



