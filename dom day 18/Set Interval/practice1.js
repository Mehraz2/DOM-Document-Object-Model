

// প্রতি 2 সেকেন্ড পর "Learning setInterval..." Console-এ দেখাবে।





setInterval (() => {
    console.log(("Learning setInterval"));
    
}, 2000)






// ✅ Output

// Console:

// Learning setInterval...
// Learning setInterval...
// Learning setInterval...
// Learning setInterval...
// Learning setInterval...
// ...





// মেসেজটি বারবার আসবে, যতক্ষণ না ami

// Browser Tab বন্ধ kori,
// Page Refresh kori,
// অথবা clearInterval() ব্যবহার করো (এটা আমরা পরের Practice-এ শিখব)।



// ===============
// 📝 Code Explanation--------
// ====================================




// 1.
// setInterval(

// এখানে setInterval() timer শুরু করা হচ্ছে।

// 2.
// () => {

// Arrow Function ব্যবহার করা হয়েছে।

// এই function-টাই Callback Function।

// 3.
console.log("Learning setInterval...");

// Console-এ মেসেজ দেখাবে।

// 4.
// 2000

// 2000 মানে 2000 milliseconds = 2 seconds।

// অর্থাৎ প্রতি 2 সেকেন্ড পর Callback Function আবার চলবে।

// 🔄 Execution Flow
// Page Load
//     │
//     ▼
// setInterval() Starts
//     │
//     ▼
// Wait 2 Seconds
//     │
//     ▼
// Print "Learning setInterval..."
//     │
//     ▼
// Wait 2 Seconds
//     │
//     ▼
// Print Again
//     │
//     ▼
// Repeat Forever...






























