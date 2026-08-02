

// এবার একটু real-world scenario করব। 
// User-এর Name, City, Country আলাদা আলাদা key দিয়ে save করব।






const nameInput = document.getElementById("name");
const cityInput = document.getElementById("city");
const countryInput = document.getElementById("country");
const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", () => {

  localStorage.setItem("name", nameInput.value);

  localStorage.setItem("city", cityInput.value);

  localStorage.setItem("country", countryInput.value);

  console.log("All Data Saved Successfully!");

});






// ▶️ Output

// ধরো user লিখল—

// Name: Mehraz
// City: Noakhali
// Country: Bangladesh

// Button-এ click করার পর—

// Console:

// All Data Saved Successfully!

// Local Storage:

// Key         Value
// --------------------------
// name        Mehraz
// city        Noakhali
// country     Bangladesh


// ------------------------------------------
// ==========🧠 Explain=================
// --------------------------------------------



// 🧠 Explain

// প্রথমে তিনটা input-এর value নেওয়া হচ্ছে।

nameInput.value
cityInput.value
countryInput.value

// তারপর প্রতিটা value আলাদা key দিয়ে save হচ্ছে।

// localStorage.setItem("name", ...);

// localStorage.setItem("city", ...);

// localStorage.setItem("country", ...);

// setItem() যতবার খুশি ব্যবহার করা যায়। প্রতিবার নতুন key-value pair save হয়।








































