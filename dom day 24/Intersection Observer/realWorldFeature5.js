



// 🟢 Day 24 — Practice 5: Lazy Loading with IntersectionObserver

// এবার real-world use case করব। 🔥

// এই practice-এ user page খুললেই সব image load না করে, image viewport-এর কাছে এলে তখন load ।

// এটাই Lazy Loading।







const image11 = document.getElementById("image11");
const image12 = document.getElementById("image12");
const image13 = document.getElementById("image13");

const observer5 = new IntersectionObserver((entries) => {

    entries.forEach((entry5) => {

        if (entry5.isIntersecting) {

            const image5 = entry5.target;

            image5.src = image5.dataset.src;

            image5.addEventListener("load", () => {
                image5.classList.add("loaded5");
            });

            observer5.unobserve(image5);
        }

    });

}, {
    rootMargin: "200px"
});

observer5.observe(image11);
observer5.observe(image12);
observer5.observe(image13);










// 4️⃣ JS Output 🖥️

// এবার Console output-এর পরিবর্তে image loading behaviour দেখব।

// Page load করার সময়:

// Image 11 → Load হয়নি
// Image 12 → Load হয়নি
// Image 13 → Load হয়নি

// নিচে scroll করব।

// যখন image11 observer-এর area-তে আসবে:

// image11
//    ↓
// data-src নেওয়া
//    ↓
// src সেট করা
//    ↓
// Image load
//    ↓
// loaded5 class
//    ↓
// Image visible

// তারপর একইভাবে:

// image12 → load
// image13 → load










// 5️⃣ Output Logic 🧠

// পুরো process:

// Page Load
//     ↓
// Images-এর src নেই
//     ↓
// User Scroll
//     ↓
// Image observer area-তে আসে
//     ↓
// isIntersecting = true
//     ↓
// data-src থেকে URL নেওয়া
//     ↓
// src সেট করা
//     ↓
// Browser image load করে
//     ↓
// loaded5 class
//     ↓
// Image Fade In ✨















// 6️⃣ JavaScript Explanation
// Step 1 — Images select
// const image11 = document.getElementById("image11");
// const image12 = document.getElementById("image12");
// const image13 = document.getElementById("image13");

// তিনটা image JavaScript-এ নিয়ে আসলাম।













// Step 2 — Observer তৈরি
// const observer5 = new IntersectionObserver((entries) => {

// Practice 5-এর observer তৈরি করলাম।










// Step 3 — প্রতিটি entry check
// entries.forEach((entry5) => {

// কারণ একাধিক image আছে।














// Step 4 — Image viewport-এর কাছে এসেছে?
// if (entry5.isIntersecting) {

// যদি image observer-এর intersection area-তে আসে, তাহলে condition true হবে।














// 7️⃣ entry5.target
// const image5 = entry5.target;

// entry5.target হচ্ছে যে image বর্তমানে intersect করেছে।

// তাই:

// image11 → target
// image12 → target
// image13 → target

// যে image আসবে, সেটাই image5 variable-এ থাকবে।















// 8️⃣ dataset.src 🔥

// HTML:

// data-src="https://picsum.photos/id/1015/600/400"

// JavaScript:

// image5.dataset.src

// এটা আমাদের data-src-এর value দেবে।

// তারপর:

// image5.src = image5.dataset.src;

// মানে:

// data-src-এর URL-কে আসল src বানিয়ে ।

// তখন browser image load করব।
















// 9️⃣ load Event
// image5.addEventListener("load", () => {
//     image5.classList.add("loaded5");
// });

// Image successfully load হওয়ার পর load event fire হবে।

// তারপর:

// classList.add("loaded5");

// CSS:

// .image5.loaded5 {
//     opacity: 1;
// }

// তাই image fade-in হবে। ✨
















// 🔟 unobserve()
// observer5.unobserve(image5);

// Image একবার load হয়ে গেলে আর observe করার দরকার নেই।

// তাই observation বন্ধ করছি।

// এতে unnecessary repeated observation কমে।



















// 1️⃣1️⃣ rootMargin

// এখানে:

// {
//     rootMargin: "200px"
// }

// দিয়েছি।

// এর মানে image actual viewport-এ আসার আগেই observer-এর expanded area-তে ঢুকতে পারে।

// তাই user image দেখতে পাওয়ার আগেই browser loading শুরু করতে পারে।

//         Image
//           ↓
//       200px আগে
//           ↓
//    Observer Trigger
//           ↓
//       Image Load
//           ↓
//      User দেখতে পায়

// এতে loading delay কমানো যায়।

// ⚠️ একটা গুরুত্বপূর্ণ বাস্তব কথা

// এই practice-টা concept শেখানোর জন্য excellent, কিন্তু production website-এ lazy loading করার আগে browser-এর native:

// loading="lazy"

// ব্যবহার করা যায়।

// তবে যেহেতু IntersectionObserver শিখছ, এই practice-টা করা খুব দরকার—কারণ এখানে  বুঝছ Observer বাস্তবে কীভাবে resource loading trigger করতে পারে।


















// 🧠 Practice 1 → Practice 5

// এখন পুরো Day 24-এর progression:

// Practice 1
// Basic Detection
//       ↓
// Practice 2
// Multiple Elements
//       ↓
// Practice 3
// Scroll Reveal Animation
//       ↓
// Practice 4
// threshold + rootMargin
//       ↓
// Practice 5
// Real-world Lazy Loading

// এটা ভালো progression, কারণ প্রতিটা practice আগেরটার ওপর build করেছে। 🔥

