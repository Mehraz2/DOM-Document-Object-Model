





// 🟢 Scroll Methods — scrollIntoView() Practice 3
// 🎯 Goal

// Button-এ Click করলে Contact Section Screen-এর Center-এ এসে থামবে।





const btn = document.getElementById("btn");
const contact = document.getElementById("contact");

btn.addEventListener("click", () => {

    contact.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});







// 🖥️ Output

// Website খুললে তুমি Home section-এ থাকবে।

// Button-এ Click করলে—

// আগের Practice 2-এর মতো শুধু Smooth Scroll করবে না,

// বরং Contact Section Viewport-এর মাঝখানে (Center) এসে থামবে।






// 🎯 Output Explain


// 📌 কোথায় Execute হবে?

// Browser-এর Web Page-এ।





// 📌 কখন Execute হবে?

// যখন User—

// Go To Contact Button-এ Click করবে।






// 📌 block: "center" কী করছে?

// এটি Browser-কে বলছে—

// "Contact Section-টাকে Viewport-এর Center-এ এনে থামাও।"

// অর্থাৎ শুধু Scroll করাই নয়, কোথায় থামবে সেটাও নিয়ন্ত্রণ করছে।







// 📌 Real Project-এ কোথায় ব্যবহার হয়?

// block option ব্যবহার করা হয়—

// ✅ Documentation Website
// ✅ FAQ Section
// ✅ Search Result Highlight
// ✅ Form Validation (Error Field-এ Scroll)
// ✅ Long Article Navigation









//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 📖 Code Explain-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


// 1️⃣
contact.scrollIntoView({

// 👉 scrollIntoView() Method শুরু হয়েছে।



// 2️⃣
behavior: "smooth",

// 👉 ধীরে ধীরে Scroll করবে।



// 3️⃣
block: "center"

// 👉 Element-টিকে Viewport-এর মাঝখানে এনে থামাবে।

// 4️⃣
});

// 👉 Method শেষ।







// 🧠 block-এর Common Values
// block: "start"



// ➡️ Element Viewport-এর Top-এ থাকবে।

// block: "center"

// ➡️ Element Viewport-এর Center-এ থাকবে।

// block: "end"

// ➡️ Element Viewport-এর Bottom-এ থাকবে।

// block: "nearest"

// ➡️ Browser সবচেয়ে কাছের উপযুক্ত Position বেছে নেব।






// 🧠 কী shikhlam?


// block Option দিয়ে Element-এর Final Position নিয়ন্ত্রণ করা যায়।
// center দিলে Element Screen-এর মাঝখানে আসে।
// behavior এবং block একসাথে ব্যবহার করা যায়।








