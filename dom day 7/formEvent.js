// Form Events কী?

// Form Event হলো Form-এর ভিতরে user কিছু করলে যে event trigger হয়।

// যেমন—

// User input দিল।
// User form submit করল।
// User input box-এ click করল।
// User input থেকে বের হয়ে গেল।
// User form reset করল।

// এগুলোই Form Events।

// let form = document.getElementById("myForm");

// form.addEventListener("submit", function () {
//     console.log("Form Submitted");
// });



// let form = document.getElementById("myForm");

// form.addEventListener("submit", function (event) {

//     event.preventDefault();

//     console.log("Submitted");

// });

// এখন Submit button-এ click করলে Console-এ দেখবে:

// Submitted

// =======================================================

// Practice 2: Name + Email Form

// let form = document.getElementById("myForm");

// let nameInput = document.getElementById("name");

// let emailInput = document.getElementById("email");

// form.addEventListener("submit", function (event){

//     event.preventDefault();

//     console.log("Name:", nameInput.value);

//     console.log("Email:", emailInput.value);
    
    
// }) ;

// Output

// যদি user লিখে:

// Name

// Mehraz

// Email

// mehraz@gmail.com

// তাহলে Console:

// Name: Mehraz
// Email: mehraz@gmail.com

// =============================================


