

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





















































