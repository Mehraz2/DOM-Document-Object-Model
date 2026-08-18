





// এবার একটু real-world style practice করব। User login করলে name, role, 
// আর status custom event-এর মাধ্যমে পাঠানো হবে।

// 






const btn4 = document.getElementById("btn4");

btn4.addEventListener("userLogin", function (event) {
    console.log("User Logged In");
    console.log("Name:", event.detail.name);
    console.log("Role:", event.detail.role);
    console.log("Status:", event.detail.status);
});

const loginEvent4 = new CustomEvent("userLogin", {
    detail: {
        name: "Mehraz",
        role: "Frontend Developer",
        status: "Active"
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
// Status: Active







// 4️⃣ Output Logic
// Login Button
//      ↓
//    Click
//      ↓
// dispatchEvent(loginEvent4)
//      ↓
// "userLogin" event trigger
//      ↓
// event.detail
//      ↓
// name + role + status
//      ↓
// Console Output










// 5️⃣ ছোট ছোট Code Explanation
// Button select
// const btn4 = document.getElementById("btn4");

// HTML-এর btn4 button-টাকে JavaScript-এ select করেছি।

// Custom event listen
// btn4.addEventListener("userLogin", function (event) {

// userLogin event trigger হলে এই function চলবে।

// Name নেওয়া
// event.detail.name

// detail থেকে user-এর name নেওয়া হচ্ছে।

// Role নেওয়া
// event.detail.role

// detail থেকে user-এর role নেওয়া হচ্ছে।

// Status নেওয়া
// event.detail.status

// detail থেকে user-এর status নেওয়া হচ্ছে।

// CustomEvent তৈরি
// const loginEvent4 = new CustomEvent("userLogin", {

// userLogin নামে custom event তৈরি করা হয়েছে।

// Data পাঠানো
// detail: {
//     name: "Mehraz",
//     role: "Frontend Developer",
//     status: "Active"
// }

// Event-এর সাথে তিনটি data পাঠানো হয়েছে।

// Event trigger
// btn4.dispatchEvent(loginEvent4);

// userLogin event-টাকে manually trigger করছে।









