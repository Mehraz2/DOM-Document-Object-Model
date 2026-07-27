

// 📌 remove() Method

// remove() হলো একটি DOM method 
// যা নিজেকেই (the element itself) DOM থেকে delete করে দেয়।

// অর্থাৎ, remove() কল করলে element-টি তার parent থেকে নিজেই remove হয়ে যায়।

const box = document.getElementById("box");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    box.remove();
});



// Output

// Before Click

// Hello World

// [Remove]

// After Click

// [Remove]

// Hello World লেখা <div> সম্পূর্ণ DOM থেকে remove হয়ে যাবে।


// 🔥 মনে রাখার Shortcut
// remove() 👉 নিজেকে delete করে।
// removeChild() 👉 Parent দিয়ে child delete করে।


// =============== practice 2======================================================

const notification = document.querySelector(".notification");
const closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener("click", () => {
    notification.remove();
});

//  Output=



// Before Click
// ┌─────────────────────────────────────┐
// │ ✅ Your profile has been updated... │
// └─────────────────────────────────────┘

// [ Close Notification ]




// After Click
// [ Close Notification ]

// Notification box সম্পূর্ণ DOM থেকে remove হয়ে যাবে।

// ==================== practice 3 ============================================


const card = document.getElementById("card");
const deleteBtn = document.getElementById("deleteBtn");

deleteBtn.addEventListener("click", () => {
    card.remove();
});


//  Output



// Before Click
// ┌────────────────────────────┐
// │ JavaScript DOM             │
// │ This is a practice card.   │
// │                            │
// │ [ Delete Card ]            │
// └────────────────────────────┘



// After Click
// (Card has been removed)

// Nothing is displayed.


// 🧠 এখানে কী shikhlam ?
// getElementById() দিয়ে Card এবং Button select করা।
// click event ব্যবহার করা।
// card.remove() দিয়ে পুরো Card DOM থেকে delete করা।
// remove() element-টিকে তার parent থেকে নিজেই remove করে দেয়।

// ========== practice 4 ==============================================================================



const deleteButtons = document.querySelectorAll(".deleteBtn");

deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {

        const card = event.target.closest(".card");

        card.remove();

    });
});



//  Output


// Before Click
// Card 1
// [Delete]

// Card 2
// [Delete]

// Card 3
// [Delete]

// যদি Card 2-এর Delete button-এ click করো...

// After Click
// Card 1
// [Delete]

// Card 3
// [Delete]

// শুধুমাত্র Card 2 remove হবে।
