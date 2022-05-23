let button = document.getElementById('button');
let input = document.getElementById('input')

button.addEventListener('click', adicionar)

function adicionar() {
    let list = document.getElementById("div");
    let checkbox = document.createElement("input")
    let label = document.createElement("label");
    let valor = document.createTextNode(input.value);

    checkbox.setAttribute('type', 'checkbox');

    list.appendChild(input);
    list.appendChild(label);
}