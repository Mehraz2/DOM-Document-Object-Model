

// 📂 setInterval() Notes Breakdown

// 1️⃣ setInterval() কী?

// শুধু "setInterval() কী?"—এটাই থাকবে।

// 2️⃣ কেন setInterval() ব্যবহার করি?

// কোন কোন পরিস্থিতিতে ব্যবহার করা হয়।

// 3️⃣ Real Life Examples
// Digital Clock
// Stopwatch
// Countdown
// Auto Slider
// Notification
// Game Timer




// 4️⃣ Syntax

// Basic Syntax

// Arrow Function Syntax

// Named Function Syntax





// 5️⃣ প্রথম Parameter (Callback Function)

// এখানে শুধু প্রথম parameter নিয়ে আলোচনা হবে।

// Callback কী?
// Function কেন লাগে?
// Arrow Function
// Named Function




// 6️⃣ দ্বিতীয় Parameter (Delay)

// এখানে শুধু Delay।

// Delay কী?
// Millisecond কী?
// 1000 = 1 second
// Common Values




// 7️⃣ Milliseconds

// এটাকে আলাদা রাখলে ভালো।

// 1000 = 1 second

// 2000 = 2 seconds

// 500 = Half second

// 100 = 0.1 second




// 8️⃣ Callback Function কীভাবে কাজ করে?

// Execution Flow

// Create Interval

// ↓

// Wait Delay

// ↓

// Run Callback

// ↓

// Again Wait

// ↓

// Again Run

// ↓

// Again Wait

// ↓

// Again Run...




// 9️⃣ Return Value

// Interval ID

// const id = setInterval(...);

// কেন ID return করে?




// 🔟 clearInterval()

// এটা আলাদা Topic।

// কী?
// কেন?
// কিভাবে?



// 1️⃣1️⃣ Browser-এর ভিতরে কী হয়?

// এটা অনেকেই শেখায় না।

// setInterval()

// ↓

// Browser Timer শুরু করে

// ↓

// Delay শেষ

// ↓

// Callback Queue

// ↓

// Call Stack Empty?

// ↓

// Run Function

// ↓

// আবার Timer শুরু







// 1️⃣2️⃣ Delay কি Accurate?

// না।

// কারণ—

// CPU Busy
// Browser Busy
// Event Loop





// 1️⃣3️⃣ setTimeout() vs setInterval()

// Table





// 1️⃣4️⃣ Common Mistakes

// ভুলগুলো

// 1️⃣5️⃣ Best Practices

// Tips





// 1️⃣6️⃣ Interview Questions

// শেষে।

// তাহলে Commit-ও সুন্দর হবে
// Commit 1
// Add notes for setInterval() introduction

// Commit 2
// Explain callback function in setInterval()

// Commit 3
// Document delay and milliseconds

// Commit 4
// Add return value and clearInterval() notes

// Commit 5
// Compare setTimeout() and setInterval()

// Commit 6
// Document common mistakes and best practices