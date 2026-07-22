//  Form Submit কী?

// যখন user একটি form পূরণ করে Submit button চাপবে, তখন submit event fire হবে।

// উদাহরণ:

// Name: Mehraz
// Email: mehraz@gmail.com

// [ Submit ]

// যখন Submit-এ click করবে...

// ➡️ Form submit হবে।
// ➡️ submit event run করবে।


const form = document.getElementById("myForm");

form.addEventListener("submit", function (){

    console.log("Form Submitted");
    
});

// output =  Form Submitted


  const form = document.getElementById("myForm");
  const name = document.getElementById("name");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Name:", name.value);
  });

//   Output
// যদি input-এ লেখো Rahim, তাহলে console-এ এইটা ashbe:

// javascript
// Name: Rahim
// যদি input খালি থাকে, তাহলে console-এ হবে:

// javascript
// Name:

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form Submitted");
  });
});