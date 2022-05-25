function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin')
usuarios.set('Stephany', 'Admin')
usuarios.set('Horge', 'User')
usuarios.set('Natália', 'Admin')

console.log(getAdmins(usuarios));

//O objeto Map contém pares de chave-valor e lembra a ordem original da inserção das chaves. Qualquer valor pode ser usados como chave ou valor.
//Um objeto Map itera seus elementos na order da inserção