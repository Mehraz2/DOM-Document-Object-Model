// matches() ki?

// matches() কোনো element নির্দিষ্ট 
// CSS selector-এর সাথে মিলে কিনা তা check করে।

// যদি selector-এর সাথে মিলে:

// true

// যদি না মিলে:

// false

const button = document.getElementById("btn");

console.log(button.matches("button"));

// Output

// true

// কারণ element-এর tag button।

console.log(button.matches("#btn"));

// Output

// true

// কারণ element-এর id btn।

console.log(button.matches(".delete"));

// Output

// true

// কারণ element-এর class delete।

console.log(button.matches("h1"));

// Output

// false

// কারণ element h1 নয়।


// মূল কাজ
// element.matches("selector");

// অর্থ:

// Element টি selector-এর সাথে match করে কিনা check করা।


// =======practice 2====================


const ul = document.getElementById("fruits");

ul.addEventListener("click", (event) => {

    if (event.target.matches("li")) {
        console.log("Fruit Clicked");
    }

});

// Output

// Apple-এ click

// Fruit Clicked

// Mango-এ click

// Fruit Clicked

// Banana-এ click

// Fruit Clicked

// Add Fruit button-এ click

// কোনো Output হবে না।

