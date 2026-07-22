let paragraphs = document.getElementsByTagName("p")

console.log(paragraphs);


// output =  HTMLCollection(3) [p.text, p.text, p.text]
// 0
// : 
// p.text
// 1
// : 
// p.text
// 2
// : 
// p.text
// length
// : 
// 3
// [[Prototype]]
// : 
// HTMLCollection

// ==========================================================


let paragraphs = document.getElementsByTagName("p");

console.log(paragraphs[0]);
console.log(paragraphs[1]);
console.log(paragraphs[2]);


// output =  <p class="text">Paragraph 1</p>
//         = <p class="text">Paragraph 2</p>
//         = <p class="text">Paragraph 3</p>

// ============================================================

let paragraphs = document.getElementsByTagName("p");

console.log(paragraphs[0].innerText);
console.log(paragraphs[1].innerText);
console.log(paragraphs[2].innerText);

// output = 
// Paragraph 1
// Paragraph 2
// Paragraph 3

// ==============================================================

let paragraphs = document.getElementsByTagName("p");

paragraphs[0].innerText = "React";
paragraphs[1].innerText = "Node.js";
paragraphs[2].innerText = "MongoDB";