



// আগের Practice 3-এ আমরা scrollTop read করেছি।

// এবার Practice 4-এ আমরা scrollTop set করব।

// 🎯 অর্থাৎ, scrollTop শুধু value দেয় না, value পরিবর্তনও করতে পারে।

// 🟢 Scroll Properties — scrollTop Practice 4
// 🎯 Goal:

// Button-এ Click করলে Scrollable Box আবার Top-এ চলে যাবে।






const box = document.getElementById("box");
const topBtn = document.getElementById("topBtn");

topBtn.addEventListener("click", () => {

    box.scrollTop = 0;

});






// 🖥️ Output

// প্রথমে—

// Box-এর ভিতরে নিচে Scroll ।

// তারপর—

// "Go To Top" Button-এ Click।

// ফলাফল:

// আগে
// 👇

// Lorem ipsum...
// Lorem ipsum...
// Lorem ipsum...

// (Button Click)

// 👇

// Box আবার একদম উপরে চলে যাবে।




// 🎯 Output Explain




// 📌 কোথায় Execute হবে?

// Output সরাসরি Scrollable Box-এ দেখা যাবে।

// Console-এ কিছু দেখাবে না।






// 📌 কখন Execute হবে?

// যখন User—

// Box-এর ভিতরে নিচে Scroll করবে।
// তারপর Go To Top Button-এ Click করবে।



// 📌 কীভাবে কাজ করছে?

// ধরো Box-এর 250px নিচে আছো।

// তখন—

// scrollTop = 250

// Button-এ Click করার পর—

// box.scrollTop = 0;

// হয়ে যাবে।

// ফলাফল—

// scrollTop = 0

// অর্থাৎ Box আবার একদম উপরে চলে যাবে।







// 📌 Real Project-এ কোথায় ব্যবহার হয়?

// এই technique ব্যবহার করা হয়—

// ✅ Chat Application (নতুন Message-এ Top/Bottom নেওয়া)
// ✅ Comment Section
// ✅ Long Sidebar
// ✅ Settings Panel
// ✅ Custom Scroll Container
// ✅ Documentation Website











//)))))))))))))))))))))))))) 📖 Code Explain((((((((((((((((((((((((



// 1️⃣
const box = document.getElementById("box");

// 👉 Scrollable Box select করা হয়েছে।

// 2️⃣
const topBtn = document.getElementById("topBtn");

// 👉 Button select করা হয়েছে।

// 3️⃣
topBtn.addEventListener("click", () => {

// 👉 Button-এ Click করলে নিচের Code Execute হবে।

// 4️⃣
box.scrollTop = 0;

})

// 👉 scrollTop-এর Value 0 করে দেওয়া হয়েছে।




// এর মানে—

// Box-এর Scroll Position একদম Top-এ নিয়ে যাও।




// 🧠 কী shikhlam?


// scrollTop দিয়ে Value পড়া যায়।
// scrollTop দিয়ে Value পরিবর্তনও করা যায়।
// scrollTop = 0 করলে Element একদম Top-এ চলে যায়।
// এটি Scrollable Element নিয়ন্ত্রণ করার সবচেয়ে সাধারণ উপায়।




// =====================scrollTop Summary

// Value Read
console.log(box.scrollTop);


// // Value Change
box.scrollTop = 0;

// 📌 একটা Property, দুইটা কাজ:

// ✅ Read (বর্তমান Scroll Position জানা)
// ✅ Write (Scroll Position পরিবর্তন করা)