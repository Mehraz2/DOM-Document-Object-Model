







const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {

  localStorage.setItem("email", emailInput.value);

  localStorage.setItem("password", passwordInput.value);

  console.log("Login Information Saved!");

});












// ▶️ Output

// ধরো User লিখল—

// Email: mehraz@gmail.com
// Password: 12345678

// Button-এ click করার পরে—








// Console:

// Login Information Saved!

// Local Storage:

// Key          Value
// ------------------------------
// email        mehraz@gmail.com
// password     12345678











// ⚠️ গুরুত্বপূর্ণ (Real World)

// এই Practice শুধু শেখার জন্য।

// ❌ কখনোই আসল website-এ password localStorage-এ save করব না।

// কারণ localStorage-এর data browser থেকে সহজেই দেখা যায়। 
// Password সাধারণত server-side session, secure cookie, 
// বা token-based authentication দিয়ে handle করা হয়।









// ------------------------------------------------------
// ===========🧠 Explain=========================
// -------------------------------------------------------





// প্রথমে email এবং password input থেকে value নেওয়া হচ্ছে।

// তারপর—

// localStorage.setItem("email", emailInput.value);

// Email save করছে।

// এরপর—

// localStorage.setItem("password", passwordInput.value);

// Password save করছে।

// অর্থাৎ দুইটা আলাদা key তৈরি হবে।
