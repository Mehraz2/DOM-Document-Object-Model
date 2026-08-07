




// ✅ Practice 1 — পুরো DOMRect Object দেখো
// 🎯 Goal

// getBoundingClientRect() কী return করে, সেটা Console-এ দেখে বুঝবে।










const box = document.querySelector(".box");

const rect = box.getBoundingClientRect();

console.log(rect);






// 🖥️ Output (Console)
// DOMRect {
//   x: 545,
//   y: 154,
//   width: 250,
//   height: 150,
//   top: 154,
//   right: 795,
//   bottom: 304,
//   left: 545
// }













// =================================🧠 Code Explain=====================




const box = document.querySelector(".box");

// ➡️ .box element-টাকে select করা হয়েছে।




const rect = box.getBoundingClientRect();

// ➡️ getBoundingClientRect() method element-এর size এবং viewport-এর 
// relative position নিয়ে একটি DOMRect object return করে।











console.log(rect);

// ➡️ পুরো DOMRect object Console-এ দেখাবে।







// 📚 কী shikhlam?



// getBoundingClientRect() একটি DOM Method।
// এটি একটি DOMRect Object return করে।
// Object-এর মধ্যে top, left, right, bottom, width, height, x, y ইত্যাদি থাকে।
// Position সবসময় Viewport-এর relative হয়, পুরো document-এর নয়।
































