


// আগের ২টা practice-এ আমরা পুরো webpage-এর scroll দেখেছি (window.scrollY)।

// এবার আমরা একটা scrollable box বানাবো এবং তার scrollTop দেখব। 
// এটাই scrollTop property-এর সবচেয়ে common use।

// 🟢 Scroll Properties — scrollTop 
// 🎯 Goal:

// element.scrollTop Live দেখা।



const box = document.getElementById("box");
const result = document.getElementById("result");

box.addEventListener("scroll", () => {

    result.textContent = `${box.scrollTop} px`;

});






// Value Live পরিবর্তন হবে।

// ⚠️ এবার পুরো Web Page Scroll করলে কিছু হবে না। শুধু Box-এর ভিতরে Scroll করলে Value বদলাবে।








// 🎯 Output Explain

// 📌 কোথায় Execute হবে?

// Output Web Page-এর <h2> element-এ দেখা যাবে।





// 📌 কখন Execute হবে?

// যখন User Box-এর ভিতরে Scroll করবে।

// Page Scroll করলে কোনো পরিবর্তন হবে না।






// 📌 এই Value-এর মানে কী?


// Suppose—

// 80 px

// মানে,




// 👉 Box-এর Content Top থেকে 80 Pixel নিচে Scroll হয়েছে।

// যদি দেখায়—

// 0 px

// মানে,



// 👉 Box একদম Top-এ আছে।


// 📌 Real Project-এ কোথায় ব্যবহার হয়?

// element.scrollTop খুব বেশি ব্যবহার হয়—

// ✅ Chat Box
// ✅ Messenger
// ✅ Comment Section
// ✅ Sidebar
// ✅ Custom Scroll Container
// ✅ Code Editor
// ✅ Modal Window

// যেখানে পুরো page নয়, শুধু একটি নির্দিষ্ট element scroll হয়।










// ======================================📖 Code Explain==========================



// 1️⃣
const box = document.getElementById("box");

// 👉 Scrollable div-টিকে select করা হয়েছে।

// 2️⃣
const result = document.getElementById("result");

// 👉 Value দেখানোর জন্য <h2> select করা হয়েছে।

// 3️⃣
box.addEventListener("scroll", () => {

// 👉 এবার window নয়।

// শুধু box scroll হলেই Event Trigger হবে।

// 4️⃣
box.scrollTop

// 👉 box-এর বর্তমান Scroll Position (Pixel) Return করছে।

// 5️⃣
result.textContent = `${box.scrollTop} px`;

})



// 👉 scrollTop-এর Value <h2>-এর মধ্যে দেখাচ্ছে।







// 🧠 কী shikhlam ?

// window.scrollY পুরো webpage-এর Scroll Position জানায়।
// element.scrollTop একটি নির্দিষ্ট element কতটা Scroll হয়েছে তা জানায়।
// scrollTop Property সাধারণত scrollable element-এর জন্য ব্যবহার করা হয়।
// এটাই scrollTop-এর সবচেয়ে গুরুত্বপূর্ণ এবং বাস্তব ব্যবহার।





