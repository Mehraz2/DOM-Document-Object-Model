// // event.key কী?

// // event.key হলো যে key user চাপেছে, তার value।

// // অর্থাৎ, browser তোমাকে বলে:

// // "User কোন key চাপল?"





// document.addEventListener("keyup", function () {
//     console.log("Key Up");
// });

// // Browser-এ page open 
// // F12 → Console open 
// // কোনো একটা key চাপে ধরে rakkhi......
// // এরপর ছেড়ে di, then.........
// // 🖥️ Output

// // Key ছাড়ার পর Console-এ দেখাবে—

// // Key Up

// // =======================================================================


// // 🤔 event কী?

// // যখন কোনো event trigger হয়, browser একটি event object তৈরি করে।

// // এই object-এর মধ্যে event সম্পর্কিত অনেক তথ্য থাকে।

// // যেমন:

// // কোন key চাপা হয়েছে
// // Mouse কোথায় click হয়েছে
// // কোন element-এ event হয়েছে
// // আরও অনেক কিছু

// // আমরা সেই object-টা parameter হিসেবে পাই।


// document.addEventListener("keydown", function (event) {
//     console.log(event.key);
// });

// // ▶️ এবার Run 

// // এক এক করে tap kori

// // a
// // b
// // Enter
// // Escape
// // Shift
// // ArrowLeft
// // ArrowRight
// // 1
// // 🖥️ Expected Output

// // যদি A tap kori

// // a

// // যদি Enter

// // Enter

// // যদি Escape

// // Escape

// // যদি Left Arrow

// // ArrowLeft

// // ===========================================================