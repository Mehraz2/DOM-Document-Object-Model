// এবার removeItem() না, এক ক্লিকে সব data delete করব।






const saveBtn = document.getElementById("saveBtn");
const clearBtn = document.getElementById("clearBtn");
const showBtn = document.getElementById("showBtn");

// Save Multiple Data
saveBtn.addEventListener("click", () => {
  sessionStorage.setItem("name", "Mehraz");
  sessionStorage.setItem("city", "Noakhali");
  sessionStorage.setItem("country", "Bangladesh");

  console.log("Data Saved");
});

// Clear All Data
clearBtn.addEventListener("click", () => {
  sessionStorage.clear();

  console.log("All Data Cleared");
});

// Show Data
showBtn.addEventListener("click", () => {
  console.log("Name:", sessionStorage.getItem("name"));
  console.log("City:", sessionStorage.getItem("city"));
  console.log("Country:", sessionStorage.getItem("country"));
});








// ▶️ Output


// Step 1: Save Data

// Console:

// Data Saved

// Session Storage:

// Key	Value
// name	Mehraz
// city	Noakhali
// country	Bangladesh






// Step 2: Show Data

// Console:

// Name: Mehraz
// City: Noakhali
// Country: Bangladesh








// Step 3: Clear Storage

// Console:

// All Data Cleared

// Session Storage:

// (Empty)











// Step 4: Show Data আবার

// Console:

// Name: null
// City: null
// Country: null










// 🎯 কী shikhlam

// sessionStorage.clear() সব key-value একসাথে delete করে।
// removeItem() শুধু একটি key delete করে।
// clear() চালানোর পর getItem() সব key-এর জন্য null return করে।







































