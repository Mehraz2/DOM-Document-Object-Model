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