// removeChild() কী?

// removeChild() হলো এমন একটি DOM Method 
// যেটা parent element থেকে একটি child element delete করে।

// ⚠️ গুরুত্বপূর্ণ:

// removeChild() child-এর উপর call করা যায় না।

// এটা সবসময় parent element-এর উপর call করতে হয়।

const list = document.getElementById("list");
const orange = document.getElementById("orange");

list.removeChild(orange);

// Output=

// Before:

// Apple
// Orange
// Mango

// After:

// Apple
// Mango


// এটা কীভাবে কাজ করে?

// Step 1️⃣ Parent Element খুঁজে বের করে।

// const list = document.getElementById("list");

// Step 2️⃣ যে Child remove করতে হবে সেটা select করে।

// const orange = document.getElementById("orange");

// Step 3️⃣ Parent থেকে Child remove করে।

// list.removeChild(orange);


// কখন ব্যবহার করা হয়?

// ✅ Todo App

// Delete Button

// Shopping Cart

// Notification Remove

// Chat Message Delete

// Dynamic List Update


// =============practice 2===============================

           const content = document.getElementById("content");
const para2 = document.getElementById("para2");
const removeBtn = document.getElementById("removeBtn");

removeBtn.addEventListener("click", () => {
    content.removeChild(para2);
});

// ▶️ Output
// Before Click
// Paragraph 1
// Paragraph 2
// Paragraph 3

// [Remove Paragraph 2]
// After Click
// Paragraph 1
// Paragraph 3

// [Remove Paragraph 2]

//=========== practice 3 ===================

const fruits = document.getElementById("fruits");
const banana = document.getElementById("banana");
const removeBtn = document.getElementById("removeBtn");

removeBtn.addEventListener("click", () => {
    fruits.removeChild(banana);
});

//  Output

// Before Click
// • Apple
// • Orange
// • Banana
// • Mango


// [Remove Banana]
// After Click
// • Apple
// • Orange
// • Mango

// [Remove Banana]

// ========== practice 4=========================

const notifications = document.getElementById("notifications");
const removeBtn = document.getElementById("removeBtn");

removeBtn.addEventListener("click", () => {

    const lastNotification = notifications.lastElementChild;

    if (lastNotification) {
        notifications.removeChild(lastNotification);
    }

})



//  Output=


// Before First Click
// 🔔 New Message
// 🔔 Friend Request
// 🔔 New Comment
// 🔔 New Like


// [Remove Last Notification]
// After First Click
// 🔔 New Message
// 🔔 Friend Request
// 🔔 New Comment


// [Remove Last Notification]
// After Second Click
// 🔔 New Message
// 🔔 Friend Request


// [Remove Last Notification]
// After Third Click
// 🔔 New Message


// [Remove Last Notification]
// After Fourth Click
// (No Notifications)


// [Remove Last Notification]