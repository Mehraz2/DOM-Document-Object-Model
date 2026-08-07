



// 📌 getBoundingClientRect() কী?

// getBoundingClientRect() হলো একটি DOM Method যা কোনো HTML element-এর 
// size এবং viewport-এর তুলনায় position জানায়।

// অর্থাৎ এটি বলে—

// Element কোথা থেকে শুরু হয়েছে।
// কতটা width।
// কতটা height।
// Screen-এর (Viewport) কোথায় আছে।
// 📌 Syntax
// element.getBoundingClientRect();

// উদাহরণ—

const box = document.querySelector(".box");

const rect = box.getBoundingClientRect();

console.log(rect);





// Output (Example)

// DOMRect {
//   x: 120,
//   y: 80,
//   width: 300,
//   height: 150,
//   top: 80,
//   right: 420,
//   bottom: 230,
//   left: 120
// }












// 📌 এটা কী Return করে?

// এটা একটি DOMRect Object return করে।

const rect = box.getBoundingClientRect();

// এখন

rect.top
rect.left
rect.right
rect.bottom
rect.width
rect.height

// সব access করা যাবে।














// 📌 Viewport কী?

// Viewport = Browser-এর visible area।

// যেটুকু অংশ user এখন screen-এ দেখতে পাচ্ছে।

// +--------------------------------------+
// |              Viewport                |
// |                                      |
// |     +-----------+                    |
// |     |   Box     |                    |
// |     +-----------+                    |
// |                                      |
// +--------------------------------------+

// getBoundingClientRect() Document-এর তুলনায় নয়, Viewport-এর তুলনায় হিসাব করে।



// 📌 Example
// <div class="box"></div>
// .box{
//     width:200px;
//     height:100px;
//     margin-top:100px;
//     margin-left:50px;
// }
const box = document.querySelector(".box");

const rect = box.getBoundingClientRect();

console.log(rect);









// 📌 গুরুত্বপূর্ণ Properties

// ✅ top

// Element-এর উপরের অংশ Viewport-এর top থেকে কত pixel নিচে।

// Viewport Top
// |
// |
// |   80px
// |
// +-------------+
// |   BOX       |
// +-------------+

console.log(rect.top);





// ✅ left
// Viewport-এর left থেকে Element কত pixel ডানে।

console.log(rect.left);




// ✅ right
// Viewport-এর left থেকে Element-এর ডান পাশ পর্যন্ত distance।

console.log(rect.right);



// ✅ bottom
// Viewport-এর top থেকে Element-এর নিচ পর্যন্ত distance।

console.log(rect.bottom);



// ✅ width
// Element-এর প্রকৃত width।

console.log(rect.width);



// ✅ height
// Element-এর প্রকৃত height।

console.log(rect.height);






// 📌 মনে রাখবে ⚠️

// getBoundingClientRect() scroll-এর সাথে পরিবর্তন হয়।

// ধরো page scroll করল—

rect.top

// এর value পরিবর্তন হবে, কারণ Element-এর Viewport-এর relative position বদলে যায়।

// 📌 সংক্ষেপে


// Property	                                         কী বোঝায়

// top	                                     Viewport-এর top থেকে element-এর top
// left	                                     Viewport-এর left থেকে element-এর left
// right	                                 Viewport-এর left থেকে element-এর right
// bottom	                                 Viewport-এর top থেকে element-এর bottom
// width	                                        Element-এর width
// height	                                        Element-এর height









