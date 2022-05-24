let button = document.getElementById('button'); //elemento button
let input = document.getElementById('input') // elemento input

button.addEventListener('click', adicionar) //escutador clique botão

function adicionar() {
    let list = document.getElementById('list'); //elemento lista
    let item = document.createElement('li'); //cria item
	let checkbox = document.createElement('input') //cria input checkbox
	let label = document.createElement('label'); //cria label
    let value = document.createTextNode(input.value); //cria texto com o valor

	checkbox.setAttribute('type', 'checkbox'); //atribui o tipo checkbox para o input criado
	label.setAttribute('type', 'label') //atribui o tipo label para a label criada

	label.appendChild(value); //label recebe value com o texto
	item.appendChild(checkbox); //item recebe checkbox
	item.appendChild(label); //item recebe label
    list.appendChild(item); //lista recebe item com checkbox e label

	input.value = ""; //limpa o campo do input
}

