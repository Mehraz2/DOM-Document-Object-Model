



// 📁 Practice 3 — Width & Height
// 🎯 Goal

// Element-এর প্রকৃত width এবং height Console-এ দেখা।





const box = document.querySelector(".box");

const rect = box.getBoundingClientRect();

console.log("Width :", rect.width);
console.log("Height :", rect.height);









// 🖥️ Example Output
// Width : 350
// Height : 230







// 🧠 কেন এমন হলো?

// CSS-এ আমরা দিয়েছি—

// width: 300px;
// height: 180px;
// padding: 20px;
// border: 5px solid black;

// getBoundingClientRect() element-এর border box-এর size return করে।

// তাই হিসাব হবে—

// Width
// 300
// + 20 (left padding)
// + 20 (right padding)
// + 5 (left border)
// + 5 (right border)
// ------------------------

// 350px
// Height
// 180
// + 20 (top padding)
// + 20 (bottom padding)
// + 5 (top border)
// + 5 (bottom border)
// -------------------------
// 230px











// 📚 কী shikhlam?
// rect.width → Element-এর render হওয়া মোট width (content + padding + border)
// rect.height → Element-এর render হওয়া মোট height (content + padding + border)
// getBoundingClientRect() border box অনুযায়ী size দেয়।




















