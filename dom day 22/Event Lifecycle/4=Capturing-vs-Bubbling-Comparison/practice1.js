





// 🎯 Practice 1 — Only Capturing

// আজকের প্র্যাকটিসের লক্ষ্য:

// 👉 true ব্যবহার করলে event কীভাবে উপরে থেকে নিচে (Top → Bottom) যায়, সেটা দেখা।





const grandparent1 = document.getElementById("grandparent");
const parent1 = document.getElementById("parent");
const child = document.getElementById("child");

grandparent1.addEventListener("click",function () {
    console.log("Grandparent");
  },
  true
);

parent1.addEventListener("click",function () {
    console.log("Parent");
  },
  true
);

child1.addEventListener("click",function () {
    console.log("Child");
  },
  true
);













