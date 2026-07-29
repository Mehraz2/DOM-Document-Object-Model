


// for loop দিয়ে ৫টি <li> তৈরি করা
// আগে DocumentFragment-এ রাখা
// শেষে একবারে <ul>-এ append করা


const list = document.getElementById("list");

const fragment = document.createDocumentFragment();

for ( let i = 1; i <= 5; i++ ) {
    const li = document.createElement("li");
    li.textContent = 'Student ${i}'; 

    fragment.appendChild(li);

}

list.appendChild(fragment);




// 🖥️ Output
// Students List

// • Student 1
// • Student 2
// • Student 3
// • Student 4
// • Student 5



// 💡 কেন DocumentFragment ব্যবহার করলাম?

// যদি loop-এর ভেতরেই লিখতে—

list.appendChild(li);

// তাহলে প্রতি iteration-এ DOM update হতো।

// কিন্তু আমরা লিখেছি—

fragment.appendChild(li);

// তাই DOM update হচ্ছে মাত্র একবার, যখন—

list.appendChild(fragment);

// এটাই DocumentFragment-এর সবচেয়ে বড় সুবিধা। 🎯


// ✅ Practice 2 থেকে যা শিখলে
// = for loop-এর সাথে DocumentFragment ব্যবহার
// = Loop-এর মধ্যে element তৈরি করা
// = সব element আগে Fragment-এ রাখা
// = শেষে একবারে DOM-এ append করা
// = অনেক element render করার efficient উপায় বোঝা