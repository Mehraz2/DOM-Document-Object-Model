// classList.contains()
// 🤔 contains() কী?

// contains() হলো classList-এর একটি method।

// এর কাজ হলো—

// একটি element-এর মধ্যে নির্দিষ্ট class আছে কি না তা check করা।

// এটা কোনো class add করে না।

// এটা কোনো class remove করে না।

// এটা শুধু check করে।

// Element ধরছি
const title = document.getElementById("title");
const checkBtn = document.getElementById("checkBtn");


// ===============================================
// Topic : classList.contains()
//
// কাজ:
// নির্দিষ্ট class আছে কি না check করে।
//
// Return:
// true  -> class আছে
// false -> class নেই
//
// কোনো class add/remove করে না।
// ===============================================


// Check Button এ click করলে
checkBtn.addEventListener("click", function () {

    console.log(title.classList.contains("red"));

});

// Output কী হবে?
// HTML
// <h1 id="title" class="red">Hello World</h1>

// Click করলে Console-এ দেখাবে

// true

// কারণ red class আছে।


// ================================================

