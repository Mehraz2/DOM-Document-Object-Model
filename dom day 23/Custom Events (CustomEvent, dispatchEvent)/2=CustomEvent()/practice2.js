











const btn2 = document.getElementById("btn2");

btn2.addEventListener("userData", function (event) {
    console.log("Name:", event.detail.name);
    console.log("Age:", event.detail.age);
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

// Name: Mehraz
// Age: 22




// 4️⃣ Output Logic
// Button Click
//      ↓
// dispatchEvent(userEvent2)
//      ↓
// "userData" event trigger
//      ↓
// event.detail থেকে data নেওয়া
//      ↓
// Name + Age output





// 5️⃣ ছোট ছোট Code Explanation
// Button select
// const btn2 = document.getElementById("btn2");

// HTML-এর btn2 button-টাকে JavaScript-এ select করেছি।

// Custom event listen
// btn2.addEventListener("userData", function (event) {

// userData event trigger হলে এই function চলবে।

// CustomEvent() তৈরি
// const userEvent2 = new CustomEvent("userData", {

// userData নামে custom event তৈরি করা হয়েছে।

// detail দিয়ে data পাঠানো
// detail: {
//     name: "Mehraz",
//     age: 22
// }

// Event-এর সাথে name এবং age data পাঠানো হচ্ছে।

// Data receive
// event.detail.name

// detail থেকে name নেওয়া হচ্ছে।

// event.detail.age

// detail থেকে age নেওয়া হচ্ছে।

// Event trigger
// btn2.dispatchEvent(userEvent2);

// userData event-টাকে manually trigger করছে।


