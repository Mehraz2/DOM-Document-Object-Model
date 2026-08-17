






// 🎯 Practice 2 — Click the Parent Element (Capturing)

// আজকের টাস্ক: Child-এ ক্লিক করব না। Parent-এ ক্লিক করব এবং Capturing-এর flow দেখব। 🔥






const grandparent2 = document.getElementById("grandparent2");
const parent2 = document.getElementById("parent2");
const child2 = document.getElementById("child2");

grandparent2.addEventListener(
  "click",
  function () {
    console.log("Grandparent");
  },
  true
);

parent2.addEventListener(
  "click",
  function () {
    console.log("Parent");
  },
  true
);

child2.addEventListener(
  "click",
  function () {
    console.log("Child");
  },
  true
);




// 📌 কোথায় ক্লিক করব? 👇

// Grandparent
//      │
//      ▼
//    [Parent]  ← এখানে ক্লিক করব
//      │
//      ▼
//     Child




// 📌 Output

// Grandparent
// Parent




// 📌 কেন Child দেখাচ্ছে না? 🤔

// কারণ Child-এ ক্লিক kori nai

// Event-এর target এখন Parent।

// তাই Browser-এর flow হবে:

// Grandparent
//      ▼
// Parent (Target)

// Child পর্যন্ত event যাব না।









// 📌 মনে রাখব🧠
// Child-এ ক্লিক → Grandparent → Parent → Child


// Parent-এ ক্লিক → Grandparent → Parent


// Grandparent-এ ক্লিক → Grandparent



