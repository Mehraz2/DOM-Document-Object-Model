


// একটি array থাকবে।
// Array থেকে li তৈরি করব।
// সব li আগে DocumentFragment-এ যাবে।
// শেষে একবারে DOM-এ append হবে।


const list = document.getElementById("list");

const languages = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "PHP"
];

const fragment = document.createDocumentFragment();

languages.forEach((language) => {
    const li = document.createElement("li");

    li.textContent = language;

    fragment.appendChild(li);
});

list.appendChild(fragment);



// 🖥️ Output=


// Programming Languages

// • JavaScript
// • Python
// • Java
// • C++
// • PHP












// 🔍 Step by Step
// 1️⃣ Array তৈরি
const languages = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "PHP"
];

// এটাই আমাদের data।

// 2️⃣ Fragment তৈরি
const fragment = document.createDocumentFragment();

// এখানে সব <li> অস্থায়ীভাবে রাখা হবে।

// 3️⃣ forEach() চালানো
// languages.forEach((language) => {

// Array-এর প্রতিটি item একবার করে language-এ আসবে।

// প্রথমবার:

language = "JavaScript"

// দ্বিতীয়বার:

language = "Python"

// এভাবেই সব item আসবে।

// 4️⃣ <li> তৈরি
const li = document.createElement("li");

// প্রতিটি item-এর জন্য নতুন <li> তৈরি হচ্ছে।

// 5️⃣ Text বসানো
li.textContent = language;

// ফলাফল:

// {/* <li>JavaScript</li> */}
// {/* <li>Python</li> */}
// {/* <li>Java</li> */}
// // ...


// 6️⃣ Fragment-এ রাখা
fragment.appendChild(li);

// Loop শেষ হলে Fragment-এর অবস্থা—

// Fragment
// │
// ├── JavaScript
// ├── Python
// ├── Java
// ├── C++
// └── PHP
// 7️⃣ একবারে DOM-এ যোগ করা

list.appendChild(fragment);

// এখন সব <li> একসাথে <ul>-এর মধ্যে চলে যাবে।

// 🎯 কেন এই Practice গুরুত্বপূর্ণ?

// বাস্তব project-এ data সাধারণত API, Database, বা JSON থেকে আসে।

// উদাহরণ:

const users = ["Mehraz", "Rahim", "Karim"];

// অথবা

const products = ["Laptop", "Mouse", "Keyboard"];

// এসব data থেকে list render করার সময় DocumentFragment + forEach() 
// একটি খুব ভালো pattern।


