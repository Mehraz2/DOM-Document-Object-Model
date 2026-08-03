


const usernameInput = document.getElementById("username");
const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", () => {

  sessionStorage.setItem("username", usernameInput.value);

  console.log("Username Saved!");

});









// ▶️ Output

// User লিখল—

// Mehraz

// Button-এ Click করল।





// Console:

// Username Saved!

// Session Storage:










// Key            Value
// -------------------------
// username       Mehraz









// 🧠 Explain

// প্রথমে input থেকে username নেওয়া হচ্ছে।

// usernameInput.value

// তারপর—

sessionStorage.setItem("username", usernameInput.value);

// এখানে

"username" = Key
usernameInput.value = Value

// এই data Session Storage-এ save হবে।















