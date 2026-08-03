


// একটি data sessionStorage-এ save করবে, 
// তারপর button-এ click করলে শুধু সেই data delete হবে।






const saveBtn = document.getElementById("saveBtn");
const removeBtn = document.getElementById("removeBtn");
const showBtn = document.getElementById("showBtn");

// Save Data
saveBtn.addEventListener("click", () => {
  sessionStorage.setItem("name", "Mehraz");
  console.log("Name Saved");
});

// Remove Data
removeBtn.addEventListener("click", () => {
  sessionStorage.removeItem("name");
  console.log("Name Removed");
});

// Show Data
showBtn.addEventListener("click", () => {
  const name = sessionStorage.getItem("name");
  console.log(name);
});















































































