


// একটি array থাকবে।
// Array থেকে li তৈরি করব।
// সব li আগে DocumentFragment-এ যাবে।
// শেষে একবারে DOM-এ append হবে।


const list = document.getElementById("list");

const languages = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "PHP"
];

const fragment = document.createDocumentFragment();

languages.forEach((language) => {
    const li = document.createElement("li");

    li.textContent = language;

    fragment.appendChild(li);
});

list.appendChild(fragment);