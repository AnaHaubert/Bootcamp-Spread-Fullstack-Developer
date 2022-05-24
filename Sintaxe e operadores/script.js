let buttonEnviar = document.getElementById('enviar'); 
let input1 = document.getElementById('numero1');
let input2 = document.getElementById('numero2'); 
let mensagem = document.getElementById('mensagem');

buttonEnviar.addEventListener('click', compara);

function compara() {
  let num1 = parseInt(input1.value);
  let num2 = parseInt(input2.value);

  if (!num1 || !num2) {
    alert('Defina números válidos.');
    input1.value = '';
    input2.value = '';
    return;
  }

  let comparaNumeros = num1 == num2 ? `são iguais` : `não são iguais`;
  let soma = num1 + num2;
  let compara10 = soma > 10 ? `maior que` : `menor que`;
  if (soma === 10) {
    compara10 = `igual a`;
  }
  let compara20 = soma < 20 ? `menor que` : `maior que`;
  if (soma === 20) {
    compara20 = `igual a`;
  }

  let texto = document.createTextNode(
    `Os números ${num1} e ${num2} ${comparaNumeros}. Sua soma é ${soma}, que é ${compara10} 10 e ${compara20} 20.`
  );

  mensagem.appendChild(texto);
  mensagem.classList.add('mensagem');
}
