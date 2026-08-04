




// প্রতি ১ সেকেন্ডে ওয়েবপেজে থাকা সংখ্যাটি ১ করে বাড়বে।



const counter = document.getElementById("counter");

let count = 0;

setInterval(() => {
    count++;
    counter.textContent = count;
}, 1000);








// ✅ Output

// ওয়েবপেজে প্রথমে দেখা যাবে:

// 0

// ১ সেকেন্ড পরে:

// 1

// আরও ১ সেকেন্ড পরে:

// 2

// তারপর:

// 3
// 4
// 5

// এভাবে প্রতি ১ সেকেন্ডে সংখ্যাটি বাড়তেই থাকবে।









// =-=-=-=-==-=-=-=-=-=-=-=-=-📝 Code Explain=-=-===-=-=-===-=-=-=-=-=-=-=-=-==-=



// 1.
// const counter = document.getElementById("counter");

// id="counter" থাকা <h1> Element-টি Select করা হয়েছে।




// 2.
// let count = 0;

// Counter-এর শুরুর মান 0 রাখা হয়েছে।




// 3.
// setInterval(() => {

// setInterval() প্রতি ১ সেকেন্ডে Callback Function চালাবে।




// 4.
// count++;

// প্রতিবার Counter-এর মান ১ করে বাড়বে।




// 5.
// counter.textContent = count;






// নতুন count-এর মান <h1>-এর ভিতরে দেখানো হচ্ছে।

// প্রথমে:

// 0

// তারপর:

// 1

// তারপর:

// 2

// এভাবেই Live Update হবে।

// 6.
// }, 1000);

// 1000 milliseconds = 1 second

// অর্থাৎ প্রতি ১ সেকেন্ডে Counter Update হবে।




// 🔄 Execution Flow
// Page Load
//     │
//     ▼
// count = 0
//     │
//     ▼
// Wait 1 Second
//     │
//     ▼
// count++
//     │
//     ▼
// Update <h1>
//     │
//     ▼
// Wait 1 Second
//     │
//     ▼
// count++
//     │
//     ▼
// Update <h1>
//     │
//     ▼
// Repeat Forever...







// 🧠 কী shikhlam ?

// setInterval() দিয়ে DOM Element বারবার Update করা যায়।
// textContent ব্যবহার করে Web Page-এর Content পরিবর্তন করা যায়।
// Variable-এর মান পরিবর্তন করে UI Live Update করা সম্ভব।


































