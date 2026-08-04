

// প্রতি ১ সেকেন্ডে একটি সংখ্যা ১ করে বাড়বে এবং Console-এ দেখাবে।





let count  = 1; 

setInterval(() => {


    console.log(count);
    count++;
}, 1000);



// ✅ Output
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// ...




// 🧠 কী shikhlam?



// Variable-এর মান setInterval()-এর ভিতরে পরিবর্তন করা যায়।
// প্রতিবার Callback Function চললে নতুন Value নিয়ে কাজ করে।
// count++ ব্যবহার করে Counter তৈরি করা যায়।





// ==========================📝 Code Explanation============================



// 1.
let count = 1;

// একটি Variable তৈরি করেছি।

// শুরুতে এর Value 1।

// 2.
// setInterval(() => {

// setInterval() প্রতি ১ সেকেন্ডে এই Callback Function চালাবে।

// 3.
console.log(count);

// বর্তমান count Console-এ দেখাবে।

// প্রথমবার Output হবে:

// 1
// 4.
count++;

// এর মানে:

count = count + 1;

// অর্থাৎ প্রতিবার count ১ করে বাড়বে।

// 5.
// 1000

// 1000 milliseconds = 1 second

// অর্থাৎ প্রতি ১ সেকেন্ডে পুরো Callback Function আবার চলবে।



// 🔄 Execution Flow
// count = 1

// ↓

// ১ সেকেন্ড অপেক্ষা

// ↓

// Print 1

// ↓

// count = 2

// ↓

// ১ সেকেন্ড অপেক্ষা

// ↓

// Print 2

// ↓

// count = 3

// ↓

// ১ সেকেন্ড অপেক্ষা

// ↓

// Print 3

// ↓

// Repeat...




































