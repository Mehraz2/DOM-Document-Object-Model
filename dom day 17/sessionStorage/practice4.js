

// এবার শিখব Object এবং Array কীভাবে sessionStorage-এ store করতে হয়।




// Practice 4 — JSON.stringify() & JSON.parse()


const saveBtn = document.getElementById("saveBtn");
const showBtn = document.getElementById("showBtn");

// Object
const user = {
  name: "Mehraz",
  age: 20,
  city: "Noakhali",
};

// Save Object
saveBtn.addEventListener("click", () => {
  const userString = JSON.stringify(user);

  sessionStorage.setItem("user", userString);

  console.log("User Saved");
});

// Show Object
showBtn.addEventListener("click", () => {
  const data = sessionStorage.getItem("user");

  const userObject = JSON.parse(data);

  console.log(userObject);
});



// ▶️ Output





// Step 1 — Save User

// Console

// User Saved

// Session Storage

// Key	Value
// user	{"name":"Mehraz","age":20,"city":"Noakhali"}








// Step 2 — Show User

// Console



// {
//   name: "Mehraz",
//   age: 20,
//   city: "Noakhali"
// }
// 🎯 কী shikhlam
// sessionStorage শুধুমাত্র String store করতে পারে।
// Object store করার আগে JSON.stringify() ব্যবহার করতে হয়।
// আবার Object হিসেবে ফিরে পেতে JSON.parse() ব্যবহার করতে হয়।
// localStorage-এর ক্ষেত্রেও একই নিয়ম প্রযোজ্য।




















































