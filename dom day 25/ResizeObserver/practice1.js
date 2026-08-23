






const box1 = document.getElementById("box1");

const observer1 = new ResizeObserver((entries) => {

    entries.forEach((entry) => {

        console.log("Width:", entry.contentRect.width);
        console.log("Hight:", entry.contentRect.height);
        
        
    });
});


observer1.observe(box1);
















// 2. Output

// শুরুতে box-এর CSS:

// width: 200px;
// height: 150px;

// তাই প্রথমে Console-এ:

// Width: 200
// Height: 150

// এখন element-এর size যদি পরিবর্তন হয়:

// Width: 300
// Height: 200

// আবার পরিবর্তন হলে:

// Width: 400
// Height: 250

// অর্থাৎ যখনই box1-এর width বা height পরিবর্তন হবে, নতুন size Console-এ পাওয়া যাবে।


















// 3. Output Logic 🧠

// পুরো logic:

// box1 select
//    ↓
// ResizeObserver তৈরি
//    ↓
// box1 observe করা
//    ↓
// box1-এর size পরিবর্তন
//    ↓
// ResizeObserver callback চালায়
//    ↓
// entries-এর মধ্যে information আসে
//    ↓
// entry.contentRect
//    ↓
// width + height
//    ↓
// console.log()

// এখন code-এর প্রতিটা অংশ:

// Step 1
// const box1 = document.getElementById("box1");

// HTML থেকে:

// <div id="box1">
//     Resize Me
// </div>

// element-টা JavaScript-এ নিয়ে এলাম।









// Step 2
// const observer1 = new ResizeObserver((entries) => {

// একটা ResizeObserver তৈরি করলাম।

// এখানে বলছি:

// যখন observed element-এর size পরিবর্তন হবে, এই callback function চালাও।












// Step 3
// entries.forEach((entry) => {

// entries-এর মধ্যে resize হওয়া element-এর information থাকে।

// একাধিক element observe করা সম্ভব, তাই forEach() দিয়ে প্রতিটি entry-এর উপর কাজ করছি।














// Step 4
// entry.contentRect.width

// Resize হওয়া element-এর width বের করছি।

// আর:

// entry.contentRect.height

// দিয়ে height বের করছি।















// Step 5
// console.log("Width:", entry.contentRect.width);
// console.log("Height:", entry.contentRect.height);

// নতুন width এবং height Console-এ দেখাচ্ছি।



















// Step 6 ⭐ সবচেয়ে গুরুত্বপূর্ণ
// observer1.observe(box1);

// এখানে আমরা বলছি:

// box1-কে observe করো।

// এই line না থাকলে observer জানবে না কোন element-এর size দেখতে হবে।





