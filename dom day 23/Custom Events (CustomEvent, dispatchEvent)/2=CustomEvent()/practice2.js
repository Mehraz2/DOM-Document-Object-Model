











const btn2 = document.getElementById("btn2");

btn2.addEventListener("userData", function (event) {
    console.log("Name:", event.detail.name);
    console.log("Age:", event.detail.age);
});

const userEvent2 = new CustomEvent("userData", {
    detail: {
        name: "Mehraz",
        age: 22
    }
});

btn2.addEventListener("click", function () {
    btn2.dispatchEvent(userEvent2);
});






