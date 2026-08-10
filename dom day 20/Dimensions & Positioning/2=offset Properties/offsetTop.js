




// 📁 Offset Properties
// Practice 3A — offsetTop
// 🎯 Goal

// আজ শুধু:

// element.offsetTop

// এটা বুঝব।

// আমরা দেখব element তার offset parent-এর top থেকে কত pixel নিচে আছে।


const box = document.querySelector(".box");

const topPosition = box.offsetTop;

console.log("Offset Top:", topPosition);





// 🖥️ Output

// Console-এ:

// Offset Top: 80
// 🧠 কেন 80?

// CSS-এ আমরা দিয়েছি:

// .box {
//     position: absolute;
//     top: 80px;
// }

// এবং .parent:

// .parent {
//     position: relative;
// }

// তাই .parent হচ্ছে .box-এর offset parent।

// অর্থাৎ:

// Parent
// ┌──────────────────────────────┐
// │                              │
// │          ↑ 80px              │
// │          │                   │
// │          │                   │
// │          ▼                   │
// │      ┌─────────────┐         │
// │      │     BOX     │         │
// │      └─────────────┘         │
// │                              │
// └──────────────────────────────┘

// তাই:

// box.offsetTop

// ফলাফল:

// 80
// ⚠️ margin: 100px দেখে ভুল করবে না

// .parent-এ আছে:

// margin: 100px;

// কিন্তু offsetTop 100px দেবে না।

// কারণ offsetTop এখানে .parent থেকে .box-এর distance দেখছে।

// Parent → Box
//    ↓
//   80px

// তাই:

// box.offsetTop
// // 80







// ================================🧠 এক লাইনে মনে rimind==========================


// box.offsetTop

// 👉 Box তার offset parent-এর top থেকে কত দূরে আছে।

// আর:

// box.getBoundingClientRect().top




// 👉 Box viewport-এর top থেকে কত দূরে আছে।

// এই দুইটা গুলিয়ে ফেলবে না। ⚠️











