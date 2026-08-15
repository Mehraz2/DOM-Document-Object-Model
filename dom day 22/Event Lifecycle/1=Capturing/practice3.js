



// 🎯 Practice 3 — Capturing vs Bubbling

// এবার আমরা একই code-এ Capturing এবং Bubbling-এর পার্থক্য দেখব।






// ⚡ JavaScript (Capturing)

const parent3 = document.getElementById("parent3");

const child3 = document.getElementById("child3");

parent3.addEventListener(
    "click",
    function () {
        console.log("Parent3");
    },
    true
);

child3.addEventListener(
    "click",
    function () {
        console.log("Child3");
    },
    true
);

// 🖥️ Capturing Output

// Parent


// Child


// ====================================================================


// ⚡ JavaScript (Bubbling)

// আগের code থেকে শুধু true মুছে 

const parent = document.getElementById("parent");

const child = document.getElementById("child");

parent.addEventListener("click", function () {
    console.log("Parent");
});

child.addEventListener("click", function () {
    console.log("Child");
});



// 🖥️ Bubbling Output
// Child


// Parent







//===========================================================🧠 Output Logic

// Capturing
// Parent
//  ↓
// Child

// Event উপরের element থেকে নিচের element-এর দিকে যায়।

// Bubbling
// Child
//  ↑
// Parent

// Event নিচের element থেকে উপরের element-এর দিকে যায়।















// 🔥 সবচেয়ে গুরুত্বপূর্ণ বিষয়
// addEventListener("click", callback, true);
// true = Capturing
// addEventListener("click", callback);
// false = Bubbling (Default)


















// 📝 VS Code Notes
// // Capturing = Top → Bottom


// // Parent → Child


// // true = Capturing


// // Bubbling = Bottom → Top


// // Child → Parent


// // false = Bubbling (Default)

























