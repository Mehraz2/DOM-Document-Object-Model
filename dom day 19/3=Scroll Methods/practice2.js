



// 🟢 Scroll Methods — scrollIntoView() Practice 2
// 🎯 Goal

// Button-এ Click করলে Smooth Scroll করে Contact Section-এ যাবে।



const btn = document.getElementById("btn");
const contact = document.getElementById("contact");

btn.addEventListener("click", () => {

    contact.scrollIntoView({
        behavior: "smooth"
    });

});















