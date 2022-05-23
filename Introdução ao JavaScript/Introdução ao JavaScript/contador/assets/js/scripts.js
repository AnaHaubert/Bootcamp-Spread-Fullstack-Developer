
var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;

var subtrair = document.getElementById('subtrair');
var adicionar = document.getElementById('adicionar');

subtrair.addEventListener("click", decrementar);
adicionar.addEventListener("click", incrementar);

function decrementar() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber <= -10) {
        subtrair.removeEventListener('click', decrementar);
    }
}

function incrementar() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber >= 10) {
        adicionar.removeEventListener('click', incrementar);
    }
}