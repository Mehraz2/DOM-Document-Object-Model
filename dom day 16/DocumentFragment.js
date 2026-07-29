

// document.createDocumentFragment()

// এটা এমন একটি method, যা একটি খালি DocumentFragment object তৈরি করে।

// Syntax:

const fragment = document.createDocumentFragment();

// এখন fragment একটি temporary container।

// এতে element রাখা যাবে, কিন্তু browser-এ কিছুই দেখা যাবে না।

// এটা কেন দরকার?

// ধরো  একটা খালি ul আছে।

<ul id="list"></ul>

//  ১০০টা <li> যোগ করতে চাও।

// সাধারণভাবে করলে—

// list.appendChild(li1);
// list.appendChild(li2);
// list.appendChild(li3);

// প্রতিবার DOM update হবে।

// কিন্তু DocumentFragment ব্যবহার করলে—

// Fragment
// │
// ├── li
// ├── li
// ├── li
// └── li

// সব আগে Fragment-এর মধ্যে যাবে।

// শেষে—

// list.appendChild(fragment);

// একবারেই সব li DOM-এ চলে যাবে।

// ⚠️ গুরুত্বপূর্ণ

// অনেকেই মনে করে DocumentFragment নিজেই DOM-এ যোগ হয়।

// এটা ভুল।

// যখন লিখো—

// list.appendChild(fragment);

// তখন fragment নিজে যায় না।

// শুধু তার children DOM-এ চলে যায়।

// তারপর Fragment আবার খালি হয়ে যায়।

// উদাহরণ:

const fragment = document.createDocumentFragment();

const p = document.createElement("p");
p.textContent = "Hello";

fragment.appendChild(p);

console.log(fragment.childNodes.length);

// Output:

// 1





// এরপর—

document.body.appendChild(fragment);

console.log(fragment.childNodes.length);

// Output:

// 0





// কারণ p এখন body-এর child হয়ে গেছে।

// 🧠 মনে রাখার Shortcut
// DocumentFragment = Temporary Container
// ✅ DOM-এর বাইরে থাকে।
// ✅ Browser-এ দেখা যায় না।
// ✅ অনেক element আগে জমা রাখে।
// ✅ একবারে DOM-এ পাঠানো যায়।
// ✅ Append করার পরে Fragment খালি হয়ে যায়।