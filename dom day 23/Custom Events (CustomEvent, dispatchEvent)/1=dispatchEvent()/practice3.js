


// এবার একটা Product Added event বানাবো। Event-এর সাথে product-এর name এবং price পাঠাবো।








    const btn3 = document.getElementById("btn3");

  btn3.addEventListener("productAdded", function (event) {
    console.log("Product Added");
    console.log("Product:", event.detail.product);
    console.log("Price:", event.detail.price);
});

const productEvent3 = new CustomEvent("productAdded", {
    detail: {
        product: "Laptop",
        price: 85000
    }
});

btn3.addEventListener("click", function () {
    btn3.dispatchEvent(productEvent3);
});













// 3️⃣ Output

// Button-এ click করলে:

// Product Added
// Product: Laptop
// Price: 85000




// 4️⃣ Output Logic
// Button Click
//      ↓
// click event
//      ↓
// dispatchEvent(productEvent3)
//      ↓
// "productAdded" event trigger
//      ↓
// event.detail থেকে product ও price নেওয়া
//      ↓
// Output






// 5️⃣ ছোট ছোট Code Explanation

// Button select
// const btn3 = document.getElementById("btn3");

// btn3 button-টাকে JavaScript-এ select করা হয়েছে।

// Event listen
// btn3.addEventListener("productAdded", function (event) {

// productAdded event trigger হলে এই function চলবে।

// Product data নেওয়া
// event.detail.product

// detail থেকে product-এর নাম নেওয়া হচ্ছে।

// Price নেওয়া
// event.detail.price

// detail থেকে product-এর price নেওয়া হচ্ছে।

// Custom Event তৈরি
// const productEvent3 = new CustomEvent("productAdded", {

// productAdded নামে একটি custom event তৈরি করা হয়েছে।

// Data পাঠানো
// detail: {
//     product: "Laptop",
//     price: 85000
// }

// Event-এর সাথে product এবং price পাঠানো হয়েছে।

// Event trigger
// btn3.dispatchEvent(productEvent3);

// productAdded event-টাকে manually trigger করছে।










