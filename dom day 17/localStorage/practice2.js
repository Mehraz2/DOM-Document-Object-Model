// User input থেকে data নিয়ে localStorage-এ save করা। 
// আগের practice-এ name save করেছিল, 
// এবার favorite color save করব





const colorInput = document.getElementById("colorInput");
const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", () => {

        const favoriteColor = colorInput.value;

        localStorage.setItem("favoriteColor", favoriteColor);

        console.log("Favorite Color Saved");
        

})




// ▶️ Output

// User লিখল—

// Green

// Button-এ click করল।

// Console:

// Favorite Color Saved!

// Local Storage:

// Key               Value
// -----------------------------
// favoriteColor     Green

// Page Refresh করলেও এই data থাকবে।






















