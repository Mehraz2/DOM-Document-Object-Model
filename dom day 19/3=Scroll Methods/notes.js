







// ==========================================
// scrollIntoView() Method
// ==========================================

// scrollIntoView() একটি Scroll Method।

// এটি কোনো Element-কে
// Browser-এর Visible Area (Viewport)-এ নিয়ে আসে।

// অর্থাৎ,

// যদি Element Screen-এর বাইরে থাকে,

// scrollIntoView() ব্যবহার করলে,

// Browser নিজে থেকেই Scroll করে
// Element-টিকে Screen-এ নিয়ে আসবে।









// 🟢 সহজভাবে বুঝো

// ধরো একটি Page-এ ১০০টা Section আছে।

// Section 1

// Section 2

// Section 3

// ...

// Section 50

// ...

// Section 100

// তুমি এখন Section 1-এ আছো।

// JavaScript বলল—

section100.scrollIntoView();

// তখন Browser নিজে থেকেই Scroll করবে এবং—

// Section 100

// Screen-এ চলে আসবে।





// 🟢 Real Life Example



// Table Of Contents

// FAQ Section

// Contact Section

// Pricing Section

// About Section

// Navigation Menu-তে Click করলে Page নিজে থেকেই ওই Section-এ Scroll করে যায়।








// 🟢 মনে রাখার Trick 🎯




scrollIntoView()

// ↓

// Bring Element Into View

// অর্থাৎ,

// Element-কে Screen-এ নিয়ে আসো।






// 🟢 কোথায় ব্যবহার হয়?


// ✔ Navigation Menu

// ✔ Back To Section

// ✔ FAQ

// ✔ Contact Button

// ✔ Documentation Website

// ✔ Landing Page

// ✔ Portfolio Website




// 🟢 Syntax

element.scrollIntoView()









// 🟢 Important

scrollIntoView()

// ✔ Method

// ✘ Event নয়

// ✘ Property নয়


// এটি Browser-কে Scroll করায়।






// 🟢 Summary

// scroll Event
// ↓

// User Scroll করলে Event Fire হয়


scrollTop
// ↓

// কত Pixel Scroll হয়েছে


scrollHeight
// ↓

// মোট Content Height


scrollIntoView()
// ↓

// JavaScript নিজে Scroll করে
// Element-কে Screen-এ নিয়ে আসে।