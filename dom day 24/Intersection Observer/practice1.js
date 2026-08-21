










const box1 = document.getElementById("box1");


const observer1 = new IntersectionObserver((entries) => {

    const entry1 = entries[0];

    if (entry1.intersecting) {
        console.log(("Box 1 is "));
        
    } else { console.log("box 1 is not visible!");
    

    } 
});


observer1.observe(box1);





// 4️⃣ JS Output 🖥️

// Page load করার সময় box viewport-এর বাইরে থাকলে:

// Box is not visible!

// Scroll করে box viewport-এর মধ্যে আনলে:

// Box is visible!

// আবার box viewport-এর বাইরে গেলে:

// Box is not visible!








// 5️⃣ Output Logic 🧠

// Page Load
//     ↓
// Box viewport-এর বাইরে
//     ↓
// isIntersecting = false
//     ↓
// "Box is not visible!"




// Scroll ↓




// Box viewport-এর মধ্যে
//     ↓
// isIntersecting = true
//     ↓
// "Box is visible!"




// Scroll ↑




// Box আবার বাইরে
//     ↓
// isIntersecting = false
//     ↓
// "Box is not visible!"







// 6️⃣ JavaScript Code Explanation
// box select
// const box = document.getElementById("box");

// HTML থেকে #box element নিয়ে আসছি।

// Observer তৈরি
// const observer = new IntersectionObserver((entries) => {


// });

// IntersectionObserver তৈরি করছি।

// এটা browser-কে বলছে:

// box viewport-এর সাথে intersect করলে আমাকে জানাও।

// entries
// const entry = entries[0];

// Observer যে intersection information দেয়, সেটা entries-এর মধ্যে থাকে।

// একটি element observe করছি, তাই প্রথম entry:

// entries[0]
// isIntersecting
// entry.isIntersecting

// এটা বলে element viewport-এর মধ্যে intersect করছে কিনা।

// true  → intersect করছে
// false → intersect করছে না











// Condition

// if (entry.isIntersecting) {
//     console.log("Box is visible!");
// }

// true হলে visible message।

// else {
//     console.log("Box is not visible!");
// }

// false হলে not visible message।

// observe()
// observer.observe(box);

// এখানে আমরা বলছি:

// এই box element-টাকে observe করো।











