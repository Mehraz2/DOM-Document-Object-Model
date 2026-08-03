const nameInput = document.getElementById("nameInput");
const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", () => {
  const name = nameInput.value;

  localStorage.setItem("name", name);

  console.log("Name Saved Successfully!");
});




// ▶️ Output

// ধরো Input-এ লিখল:

// Mehraz

// Button-এ click করলে—

// Console:

// Name Saved Successfully!

// Local Storage:

// Key      Value
// ---------------------
// name     Mehraz
// 🎯 এই Practice-এ কী bujhlam?
// input.value নেওয়া
// localStorage.setItem() দিয়ে data save করা
// User-এর input Browser-এর Local Storage-এ সংরক্ষণ করা













