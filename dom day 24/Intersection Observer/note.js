




// 1. Intersection Observer কী?

// IntersectionObserver হলো JavaScript-এর একটি Web API, যেটা দিয়ে আমরা detect করতে পারি—

// কোনো HTML element browser-এর viewport বা অন্য কোনো নির্দিষ্ট container-এর visible area-এর মধ্যে 
// ঢুকেছে বা বের হয়েছে কিনা।

// সহজ করে:

// Element
//    ↓
// Viewport-এর সাথে দেখা হলো?
//    ↓
// YES → Intersection detected
// NO  → Intersection detected নয়

// উদাহরণ:

// webpage অনেক লম্বা।

// ──────────────
//    Viewport
// ──────────────


//       ↓ Scroll


//        [ BOX ]


//       ↓ Scroll


// ──────────────
//    Viewport
// ──────────────


//        [BOX]

// Box যখন screen-এর visible area-তে আসবে, IntersectionObserver সেটা detect করতে পারবে।














// 2. "Intersection" মানে কী?

// Intersection = দুইটা জিনিসের মধ্যে overlap হওয়া।

// suppose

// Viewport
// ┌─────────────────────┐
// │                     │
// │       ┌──────┐      │
// │       │ BOX  │      │
// │       └──────┘      │
// │                     │
// └─────────────────────┘

// Box viewport-এর ভিতরে আছে।

// তাহলে:

// isIntersecting === true

// কিন্তু:

//         [ BOX ]




// ┌─────────────────────┐
// │      Viewport       │
// └─────────────────────┘

// Box screen-এর বাইরে।

// তখন:

// isIntersecting === false















// 3. কেন IntersectionObserver দরকার?

// এখানে আসল ব্যাপারটা। 👇

// চাইলে scroll event দিয়ে কাজটা করতে 

window.addEventListener("scroll", () => {
//     // element কোথায় আছে check 
});

// কিন্তু scroll করলে এই event অনেকবার fire হতে পারে।

// তখন বারবার হিসাব করতে হতে পারে:

// Element কোথায়?
// Viewport কোথায়?
// দেখা যাচ্ছে?
// কতটুকু দেখা যাচ্ছে?

// এটা unnecessary work তৈরি করতে পারে।

// IntersectionObserver-এর উদ্দেশ্যই হলো:

// Browser-কে বলো, "এই element viewport-এর সাথে intersect করলে আমাকে জানিও।"

// Browser নিজেই observation handle করবে।


















// 4. তাহলে IntersectionObserver কোথায় ব্যবহার হয়?

// এখানেই topicটা important। 🔥

// সবচেয়ে common use:
// ① Scroll Animation

// Website-এ scroll করলে section fade-in হয়।

// Scroll ↓


// ────────────
//    About
// ────────────
//        ↓


//    Fade In ✨
// ② Lazy Loading

// ছবিটা আগে load না করে user যখন ছবির কাছে আসবে তখন load করা।

// Page open
//    ↓
// Image এখনো অনেক নিচে
//    ↓
// Image load করলাম না
//    ↓
// User scroll করলো
//    ↓
// Image viewport-এর কাছে
//    ↓
// Image load

// এতে initial page load দ্রুত হতে পারে এবং অপ্রয়োজনীয় resource loading কমানো যায়।

// ③ Infinite Scroll

// Facebook/YouTube-এর মতো:

// Post 1
// Post 2
// Post 3
// Post 4
// Post 5


//       ↓


//    Loading...


//       ↓


// Post 6
// Post 7
// Post 8

// নিচের একটা invisible element viewport-এ আসলে নতুন data load করা যায়।

// ④ "Load More" Trigger

// User page-এর নিচে গেলে:

// Products
// Products
// Products
// Products


//       ↓


//    [Observer]

// Observer detect করলে:

// Fetch more products
// ⑤ Counter / Animation Trigger

// suppose : statistics section:

// 500+
// Projects


// 100+
// Clients

// User section-এ পৌঁছালে counter animation শুরু করতে par।

// ⑥ Navigation / Section Tracking

// User কোন section দেখছে সেটা detect করে navigation update করা যায়।

// যেমন:

// Home
// About ← active
// Skills
// Projects
// Contact

// User About section-এ গেলে About active হবে।
















// 5. কোথায় ব্যবহার করা উচিত না?

// এটাও জানা জরুরি। ❌

// IntersectionObserver সব ধরনের event-এর replacement না।

// Mouse movement:
// mousemove

// এর জন্য IntersectionObserver না।

// Button click:
// click

// এর জন্য IntersectionObserver না।

// Keyboard:
// keydown
// keyup

// এর জন্য IntersectionObserver না।

// Input change:
// input
// change

// এর জন্য IntersectionObserver না।

// Element-এর exact position continuously track করা

// যদি দরকার হয়:

// "Mouse/scroll করার প্রতিটা মুহূর্তে element-এর exact position কী?"

// তাহলে IntersectionObserver সেটা করার tool না।

// IntersectionObserver মূলত বলে:

// "Element visible/intersecting হলো কি না বা intersection কীভাবে পরিবর্তিত হচ্ছে।"














// 6. Basic Structure

// এখন code বুঝি।

// const observer = new IntersectionObserver((entries) => {


// });

// এখানে observer তৈরি হচ্ছে।

// তারপর:

// observer.observe(box);

// মানে:

// "এই box-কে observe করো।"












// 7. Callback কী?
// const observer = new IntersectionObserver((entries) => {


// });

// যখন intersection change হবে, এই callback function execute হতে পারে।

// entries-এর মধ্যে intersection সম্পর্কিত information থাকে।













// 8. entry কী?

// একাধিক element observe করলে:

// entries.forEach((entry) => {


// });

// প্রতিটা entry একটি observed element-এর intersection information বহন করে।


















// 9. entry.target
// entry.target

// মানে:

// যে element-এর ব্যাপারে এই entry এসেছে।

// Example:

// <div class="box">Hello</div>

// তাহলে:

// console.log(entry.target);

// ওই div-টা পাওয়া যাবে।





















// 10. isIntersecting — সবচেয়ে গুরুত্বপূর্ণ 🔥
// entry.isIntersecting

// এটা boolean:

// true
// false
// true:

// Element intersection করছে।

// false:

// Element intersection করছে না।

// Example:

// if (entry.isIntersecting) {
//     console.log("Element is visible");
// }
















// 11. threshold

// এটা খুব গুরুত্বপূর্ণ।

// const observer = new IntersectionObserver(callback, {
//     threshold: 0.5
// });

// 0.5 মানে roughly element-এর 50% intersection হলে callback condition অনুযায়ী trigger হবে।

// Example:
// threshold: 0

// সামান্য intersection থেকেই।

// threshold: 0.5

// প্রায় 50%।

// threshold: 1

// পুরো element intersect করলে।













// 12. root

// Default:

// root: null

// মানে browser viewport।

//  চাইলে নির্দিষ্ট scrollable container-ও root করতে পারো।

// Page
//  └── Scroll Container
//        └── Box

// তখন observer সেই container-এর intersection অনুযায়ী কাজ করতে পারে।



















// 13. rootMargin

// এটা intersection area-কে virtualভাবে expand/contract করতে সাহায্য করে।

// rootMargin: "100px"

// এর ফলে element actual viewport-এ পুরোপুরি পৌঁছানোর আগেই intersection trigger হওয়ার সুযোগ থাকে।

// Lazy loading-এ এটা useful।
















// 14. observe()
// observer.observe(element);

// Observer-কে বলে:

// এই element observe করো।














// 15. unobserve()

// observer.unobserve(element);

// একটা নির্দিষ্ট element আর observe করব না।

// একবার animation চালিয়ে আবার observe করার দরকার না থাকলে এটা খুব useful।














// 16. disconnect()

// observer.disconnect();

// পুরো observer-এর observation বন্ধ করে দেয়।
















// 🧠 পুরো Flow

// :

// Create Observer
//       ↓
// Observe Element
//       ↓
// Element + Viewport
//       ↓
// Intersection হলো?
//       ↓
// Callback
//       ↓
// entries
//       ↓
// entry
//       ↓
// isIntersecting
//       ↓
// true / false
//       ↓
// My action






// =================================0000=================================




