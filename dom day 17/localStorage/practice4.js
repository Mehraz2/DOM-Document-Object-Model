







const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {

  localStorage.setItem("email", emailInput.value);

  localStorage.setItem("password", passwordInput.value);

  console.log("Login Information Saved!");

});