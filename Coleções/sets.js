const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5]

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet]
}

console.log(valoresUnicos(meuArray));

//O objeto Set permite que você armazene valores únicos de qualquer tipo
//Objetos Set são coleções de valores nas quais é possível iterar os elementos em ordem de inserção. 