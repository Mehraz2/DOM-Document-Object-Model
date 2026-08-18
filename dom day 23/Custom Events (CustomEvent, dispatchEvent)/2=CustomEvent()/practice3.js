














// // এবার Product Added নিয়ে practice করব। Event-এর সাথে একাধিক data পাঠাবো।





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
// Add Product Button
//         ↓
//      Click
//         ↓
// dispatchEvent(productEvent3)
//         ↓
// "productAdded" event trigger
//         ↓
// event.detail থেকে data পাওয়া
//         ↓
// Product + Price Output











// 5️⃣ ছোট ছোট Code Explanation
// Button select
// const btn3 = document.getElementById("btn3");

// HTML-এর btn3 button-টাকে JavaScript-এ select করেছি।

// Custom event listen
// btn3.addEventListener("productAdded", function (event) {

// productAdded event trigger হলে এই function চলবে।

// Product data
// event.detail.product

// detail থেকে product-এর নাম নেওয়া হচ্ছে।

// Price data
// event.detail.price

// detail থেকে product-এর price নেওয়া হচ্ছে।

// CustomEvent() তৈরি
// const productEvent3 = new CustomEvent("productAdded", {

// productAdded নামে custom event তৈরি করা হয়েছে।

// Data পাঠানো
// detail: {
//     product: "Laptop",
//     price: 85000
// }

// Event-এর সাথে product এবং price পাঠানো হয়েছে।

// Event trigger
// btn3.dispatchEvent(productEvent3);

// productAdded event-টাকে manually trigger করছে।



























