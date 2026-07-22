//  input event ki?
 
//  input event তখনই fire হয় যখন user টাইপ করে <input>, <textarea>, 
// বা <select>-এর value বদলায়; এটা প্রতিবার value change হলে চলে

const nameInput = document.getElementById("name");

nameInput.addEventListener("input", function () {
  console.log("Input changed!");
});

// output =

// যদি input-এ লেখো Rahim (৫টা অক্ষর), তাহলে কন্সোলে ৫ বার এই আউটপুট আসবে:


// =========================================================================================


const nameInput = document.getElementById("name");

nameInput.addEventListener("input", function (event) {
  console.log("Name:", event.target.value);
});

// Output:

// যদি input-এ টাইপ করো Rahim, 
// তাহলে কন্সোলে এভাবে প্রতিটি অক্ষর টাইপ করার সাথে সাথে আউটপুট আসবে:

// Plaintext
// Name: R
// Name: Ra
// Name: Rah
// Name: Rahi
// Name: Rahim

//==========================practice 2 ======================================

const username = document.getElementById("username");

username.addEventListener("input", function (event) {
  const currentText = event.target.value;
  console.log("Total Characters:", currentText.length);
});