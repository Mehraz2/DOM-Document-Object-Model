// stopPropagation() কী?

// Definition

// event.stopPropagation() event-কে parent element-এ bubble হতে বাধা দেয়।

// stopPropagation()
// Event-কে parent element-এ যেতে বাধা দেয়।

let parent = document.getElementById("parent");
let child = document.getElementById("child");

child.addEventListener("click", function (event) {

    event.stopPropagation();

    console.log("Button Clicked");

});

parent.addEventListener("click", function () {

    console.log("Parent Clicked");

});

// Button-এ click করলে:

// Button Clicked

// শুধু এটুকুই।

// Parent Clicked আর আসবে না।

