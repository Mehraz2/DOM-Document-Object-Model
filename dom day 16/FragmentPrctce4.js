// আগের Practice-এ শুধু text list ছিল। এবার আমরা একটা Product Card List বানাবো।

// এখানে শিখব:

// Array of objects
// forEach()
// Dynamic element creation
// Multiple elements একসাথে Fragment-এ রাখা
// একবারে DOM render করা



const productsContainer = document.getElementById("products");

const products = [
    {
        name: "Laptop",
        price: "$800"
    },
    {
        name: "Keyboard",
        price: "$50"
    },
    {
        name: "Mouse",
        price: "$20"
    }
];


const fragment = document.createDocumentFragment();


products.forEach((product) => {

    const card = document.createElement("div");

    const title = document.createElement("h3");
    title.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = `Price: ${product.price}`;


    card.appendChild(title);
    card.appendChild(price);


    fragment.appendChild(card);

});


productsContainer.appendChild(fragment);





// 🖥️ Output



// Product List

// Laptop
// Price: $800

// Keyboard
// Price: $50

// Mouse
// Price: $20
// 🔍 কী হচ্ছে এখানে?
// 1️⃣ Data আছে Array of Object হিসেবে
// const products = [
//  {
//    name:"Laptop",
//    price:"$800"
//  }
// ];

// এটা সাধারণত API থেকে আসে।

// 2️⃣ প্রতিটি product-এর জন্য card তৈরি হচ্ছে
// products.forEach((product)=>{

// প্রথমবার:

// product.name
// // Laptop
// 3️⃣ নতুন element তৈরি
// const card = document.createElement("div");

// তার ভিতরে:

// div
// │
// ├── h3
// └── p

// তৈরি হচ্ছে।

// 4️⃣ Fragment-এ রাখা হচ্ছে
// fragment.appendChild(card);

// এখন:

// Fragment

// ├── Laptop Card
// ├── Keyboard Card
// └── Mouse Card
// 5️⃣ একবারে DOM update
// productsContainer.appendChild(fragment);

// সব card একসাথে screen-এ চলে আসবে।

// 🎯 Practice 4 থেকে যা শিখলে

// ✅ Array of objects render করা
// ✅ Dynamic UI তৈরি করা
// ✅ Multiple nested element তৈরি করা
// ✅ Fragment দিয়ে efficient rendering করা

// এটা অনেকটা React-এর component rendering concept-এর কাছাকাছি। 🔥

// এখন এটা শেষ করে GitHub Commit 5 দিবে। তারপর যাব Practice 5 (Final C