let heading = document.createElement("h1")

console.log(heading);s

// output = <h1></h1>
// createElement() নতুন Element তৈরি করে, কিন্তু Browser-এ দেখায় না।

// কারণ সেটা এখনও HTML Page-এ যোগ করা হয়নি।

// =========================================================

let heading = document.createElement("h1");

heading.textContent = "Hello Mehraz";

console.log(heading);

// output = 
// createElement("h1") ➜ <h1> বানিয়েছে।
// heading.textContent = "Hello Mehraz" ➜ ওই <h1>-এর ভিতরে লেখা বসিয়েছে।

// কিন্তু একটা জিনিস...........

// 🤔 Browser Page-এ কি "Hello Mehraz" দেখাচ্ছে?

// না।

// কেন?

// কারণ আমরা এখনও Browser-কে বলিনি:

// "এই <h1>-টা page-এর মধ্যে রাখো।"