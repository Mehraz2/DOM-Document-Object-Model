




// // এবার একটু real-world example: User Login Event। Event-এর সাথে user-এর name এবং role পাঠাবো।












const btn4 = document.getElementById("btn4");

btn4.addEventListener("userLogin", function (event) {
    console.log("User Logged In");
    console.log("Name:", event.detail.name);
    console.log("Role:", event.detail.role);
});

const loginEvent4 = new CustomEvent("userLogin", {
    detail: {
        name: "Mehraz",
        role: "Frontend Developer"
    }
});

btn4.addEventListener("click", function () {
    btn4.dispatchEvent(loginEvent4);
});








// 3️⃣ Output

// Button-এ click করলে:

// User Logged In
// Name: Mehraz
// Role: Frontend Developer








// 4️⃣ Output Logic
// Login Button Click
//        ↓
// click event
//        ↓
// dispatchEvent(loginEvent4)
//        ↓
// "userLogin" event trigger
//        ↓
// event.detail থেকে user data নেওয়া
//        ↓
// Name + Role Output












// 5️⃣ ছোট ছোট Code Explanation
// Button select
// const btn4 = document.getElementById("btn4");

// HTML-এর login button-টাকে JavaScript-এ select করা হয়েছে।

// Custom event listen
// btn4.addEventListener("userLogin", function (event) {

// userLogin event trigger হলে এই function চলবে।

// Name নেওয়া
// event.detail.name

// Event-এর detail থেকে user-এর name নেওয়া হচ্ছে।

// Role নেওয়া
// event.detail.role

// Event-এর detail থেকে user-এর role নেওয়া হচ্ছে।

// CustomEvent তৈরি
// const loginEvent4 = new CustomEvent("userLogin", {

// userLogin নামে একটি custom event তৈরি করা হয়েছে।

// User data পাঠানো
// detail: {
//     name: "Mehraz",
//     role: "Frontend Developer"
// }

// Event-এর সাথে user-এর data পাঠানো হয়েছে।

// Event trigger
// btn4.dispatchEvent(loginEvent4);

// userLogin event-টাকে manually trigger করছে।






















































