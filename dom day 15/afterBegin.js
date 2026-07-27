// 📘 "afterbegin" কী?

// "afterbegin" মানে হলো—

// Target element-এর ভিতরে, 
// একদম শুরুতে (first child হিসেবে) HTML insert করা।

// এটি element-এর বাইরে নয়, ভিতরে insert করে।


const box = document.getElementById("box");

box.insertAdjacentHTML(
    "afterbegin",
    "<h2>📚 Course Contents</h2>"
);

// output = 


// 🖥️ Before
// JavaScript DOM


// 🖥️ After
// 📚 Course Contents

// JavaScript DOM


// ============= practice 2 =======================================


const menu = document.getElementById("menu")

menu.insertAdjacentHTML(
    "afterbegin",
    '<a href="#">Home</a> '
);

// output = 

// 🖥️ Before
// About | Services | Contact


// 🖥️ After
// Home | About | Services | Contact


// ===========  practice 3 ====================================

const notification = document.getElementById("notification");

notification.insertAdjacentHTML(
    "afterbegin",
    "<span>🆕 NEW</span>"
);