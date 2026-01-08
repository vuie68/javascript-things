const button = document.getElementById("button");
const output = document.getElementById("output");

function handleclick() {
    output.textContent = "yay you clicked him";
}

button.addEventListener("click", handleclick);