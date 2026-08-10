












const box = document.getElementById("box");

console.log(box.clientHeight);






//  Output Logic

// CSS-এ:

// height = 200px
// padding-top = 20px
// padding-bottom = 20px

// clientHeight হিসাব করে:

// clientHeight
// = height + top padding + bottom padding

// = 200 + 20 + 20

// = 240px
// Console Output:
// 240

// ⚠️ border: 10px এখানে যোগ হবে না।

// অর্থাৎ:

// clientHeight = Content Height + Vertical Padding



// 5️⃣ Code Logic Explain
// HTML
// <div id="box">client Height</div>

// এখানে একটি div তৈরি করেছি।

// এর:

// id = box

// এই id ব্যবহার করে JavaScript থেকে element-টাকে ধরব।

// CSS
// #box {
//     height: 200px;
//     padding: 20px;
//     border: 10px solid black;
// }

// এখানে box-এর মূল height:

// 200px

// Padding:

// Top    = 20px
// Bottom = 20px

// তাই clientHeight হবে:

// 200 + 20 + 20
// = 240px

// Border:

// 10px

// হলেও clientHeight-এর মধ্যে border ধরা হয় না।

// JavaScript
// const box = document.getElementById("box");

// getElementById() দিয়ে HTML-এর box element-টাকে JavaScript-এর মধ্যে নিয়ে এলাম।

// তারপর:

// console.log(box.clientHeight);

// clientHeight দিয়ে element-এর:

// Content Height
// +
// Top Padding
// +
// Bottom Padding

// বের করলাম।

// তাই output:

// 240













