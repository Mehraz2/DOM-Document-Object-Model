let btn = document.getElementById("btn");

btn.addEventListener("mouseover", function(){
     console.log("Mouse Entered");
    });

    btn.addEventListener("mouseout", function(){
      console.log("Mouse Left");
      
    });

// 🧠 Concept =

// এখানে একটা জিনিস 

// suppose button হলো একটা ঘর। 🏠

// +----------------+
// |                |
// |   Hover Me     |
// |                |
// +----------------+

// Mouse যখন ঘরের ভিতরে ঢোকে:

// mouseover

// Mouse যখন ঘর থেকে বের হয়:

// mouseout

// এটা click-এর মতো না।

// Click করতে হবে না।
// শুধু mouse ঢুকলেই event হবে।
// বের হলেই আরেকটা event হবে।

// ===============================================================

// document.addEventListener("mousemove", function(event){

//     console.log("X", event.clientX);

//     console.log("Y" event.clientY);
    
    
// });

// Output =

// Mouse একটু নড়ালেই console-এ আসবে:

// X: 421
// Y: 183

// X: 422
// Y: 183

// X: 423
// Y: 184

// X: 424
// Y: 184

// =====================================================================



let position = document.getElementById("position");

document.addEventListener("mousemove", function (event) {

    position.textContent = `X: ${event.clientX} | Y: ${event.clientY}`;

});

// Output = 

// শুরুতে:

// Move your mouse...

// Mouse নড়ালেই:

// X: 350 | Y: 220

// তারপর:

// X: 351 | Y: 221

// তারপর:

// X: 352 | Y: 223

// সব live update হবে। 🎉