


const usernameInput = document.getElementById("username");
const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", () => {

  sessionStorage.setItem("username", usernameInput.value);

  console.log("Username Saved!");

});