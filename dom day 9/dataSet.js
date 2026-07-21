// ==================================================
// Topic : dataset
//
// dataset ব্যবহার করে HTML-এর data-* attribute
// JavaScript থেকে access করা যায়।
//
// HTML:
//
// data-id="101"
//
// JS:
//
// element.dataset.id
//
// কেন ব্যবহার করি?
//
// - Product ID
// - User ID
// - Todo ID
// - Category
// - Price
//
// Real Life:
// Todo App, E-commerce, Delete Button,
// Edit Button, Shopping Cart
// ==================================================

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {

    console.log(btn.dataset.id);
    console.log(btn.dataset.name);
    console.log(btn.dataset.age);
    
    
    
});

// Output =
// 101
// Mehraz
// 22

// ================================================


// Element ধরছি
const btn = document.getElementById("btn");

// ===============================================
// Practice 2 : Multiple data-* Attributes
//
// dataset ব্যবহার করে একাধিক data attribute
// access করা যায়.
//
// data-id    -> dataset.id
// data-name  -> dataset.name
// data-role  -> dataset.role
// ===============================================

btn.addEventListener("click", function () {

    console.log(btn.dataset.id);
    console.log(btn.dataset.name);
    console.log(btn.dataset.role);

});

// ▶️ Output

// Button-এ click করলে Console-এ দেখাবে:

// 101
// Mehraz
// Student





// 📝 VS Code Comment
// ===============================================
// Practice 2 : Multiple data-*
//
// একাধিক data attribute রাখা যায়।
//
// HTML:
// data-id
// data-name
// data-role
//
// JS:
// dataset.id
// dataset.name
// dataset.role
//
// Output:
// 101
// Mehraz
// Student
// ===============================================