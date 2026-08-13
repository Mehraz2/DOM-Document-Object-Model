



// 🧪 Practice 4 — Dynamic Help Message Using focusin

// 🎯 Goal

// Name input
//      ↓
// Show → Enter your full name

// Email input
//       ↓
// Show → Enter a valid email address





const form = document.querySelector("#form");
const message = document.querySelector("#message");

form.addEventListener("focusin", function (event) {

    if (event.target.id === "name") {

        message.textContent = "Enter your full name";

    } else if (event.target.id === "email") {

        message.textContent = "Enter a valid email address";

    }

});

















