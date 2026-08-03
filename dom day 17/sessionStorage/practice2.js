


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



// ▶️ কীভাবে Test করব?
// Step 1

// Save Name button-এ click করো।

// Console:

// Name Saved

// Session Storage:

// Key	Value
// name	Mehraz




// Step 2

// Show Name button-এ click করো।

// Console:

// Mehraz




// Step 3

// Remove Name button-এ click kori

// Console:

// Name Removed





// Session Storage:

// খালি (key name আর থাকবে না)।





// Step 4

// আবার Show Name button-এ click করো।

// Console:

// null





// 💡 কী shikhlam
// sessionStorage.removeItem("key") একটি নির্দিষ্ট key delete করে।
// অন্য key থাকলে সেগুলো মুছে যায় না।
// key delete হওয়ার পরে getItem() করলে null পাওয়া যায়।
// removeItem() শুধু একটি item remove করে, clear()-এর মতো সব data মুছে দেয় না।











































































