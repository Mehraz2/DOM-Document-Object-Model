





// event.target এবং event.currentTarget-এর মধ্যে পার্থক্য বোঝার জন্য এটি খুব গুরুত্বপূর্ণ একটি practice।





const grandparent3 = document.getElementById("grandparent3");
const parent3 = document.getElementById("parent3");
const child3 = document.getElementById("child3");

grandparent3.addEventListener("click", function (event){
    console.log("Grandparent");
    console.log("target:", event.target);
    console.log("currentTarget:", event.currentTarget);
});


parent3.addEventListener("click", function (event) {
    console.log("Parent");
    console.log("target", event.target);
    console.log("currentTarget" ,event.currentTarget);  
});


child3.addEventListener("click", function (event) {
    console.log("Button");
    console.log("target:", event.target);
    console.log("currentTarget:", event.currentTarget); 
})





// 🖥️ Output

// যদি Button-এ ক্লিক , তাহলে Console-এ দেখাবে:

// Button


// target: <button id="child3">...</button>


// currentTarget: <button id="child3">...</button>


// Parent


// target: <button id="child3">...</button>


// currentTarget: <div id="parent3">...</div>


// Grandparent


// target: <button id="child3">...</button>


// currentTarget: <div id="grandparent3">...</div>












// 🧠 Output Logic
// target = কোথায় click হয়েছে?


// currentTarget = বর্তমানে কোন eventListener চলছে?















// 🔍 Code Logic Explain

// event.target
// console.log(event.target);

// এটি সব সময় সেই element-কে দেখায়, যেখানে প্রথমে click হয়েছে।

// event.currentTarget
// console.log(event.currentTarget);

// এটি সেই element-কে দেখায়, যার eventListener বর্তমানে চলছে।







// 🎯 সবচেয়ে গুরুত্বপূর্ণ পার্থক্য
// -----------------------------------------------------------------------------------------------------
// Property                                                                	Result
// -----------------------------------------------------------------------------------------------------
// event.target	                                                  যে element-এ click হয়েছে
// event.currentTarget                                         	যে element-এর listener চলছে








