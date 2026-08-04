



// একটি Counter প্রতি ১ সেকেন্ডে ১ করে বাড়বে।

// কিন্তু ৫-এ পৌঁছালে নিজে থেকেই বন্ধ হয়ে যাবে।




let count =1 ;

const intervalId = setInterval(() => {
    console.log(count);
    

    if (count ===5) {
        clearInterval(intervalId);
        console.log("Counter Stopped!");
        
    }
    count ++;
}, 1000);


// ✅ Output

// 1
// 2
// 3
// 4
// 5
// Counter Stopped!

// তারপর আর কিছুই Print হবে না।









// =-=-=-=-=-=-=-=-=-=-==-📝 Code Explain=-=-=-=-=-=-=-=-==-=-=-=-=--=



// 1.
// let count = 1;
// Counter-এর শুরু ১ থেকে।



// 2.
// const intervalId = setInterval(() => {



// setInterval() একটি Interval ID return করে।

// আমরা সেটিকে intervalId Variable-এ রাখছি।

// কারণ পরে clearInterval()-এ এই ID লাগবে।





// 3.
// console.log(count);

// বর্তমান সংখ্যাটি Console-এ দেখাবে।

// 4.
// if (count === 5) {

// প্রতিবার Check করবে,

// count কি ৫ হয়েছে?

// 5.
// clearInterval(intervalId);

// যদি count ৫ হয়,

// তাহলে Interval বন্ধ করে দেবে।

// এরপর আর Callback Function চলবে না।

// 6.
// console.log("Counter Stopped!");

// User-কে জানিয়ে দিচ্ছে যে Counter বন্ধ হয়েছে।

// 7.
// count++;

// প্রতিবার Counter ১ করে বাড়ছে।

// 🔄 Execution Flow
// count = 1
//     │
//     ▼
// Print 1
//     │
//     ▼
// count = 2
//     │
//     ▼
// Print 2
//     │
//     ▼
// count = 3
//     │
//     ▼
// Print 3
//     │
//     ▼
// count = 4
//     │
//     ▼
// Print 4
//     │
//     ▼
// count = 5
//     │
//     ▼
// Print 5
//     │
//     ▼
// clearInterval()
//     │
//     ▼
// Counter Stopped!
//     │
//     ▼
// Program Ends





// 🧠 কী shikhlam?



// setInterval() থেকে পাওয়া Interval ID সংরক্ষণ করতে হয়।
// clearInterval(intervalId) দিয়ে Interval বন্ধ করা যায়।
// Condition ব্যবহার করে নির্দিষ্ট সময়ে Timer থামানো যায়।







