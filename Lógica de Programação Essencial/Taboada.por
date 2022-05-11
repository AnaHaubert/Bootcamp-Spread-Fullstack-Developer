programa
{
	
	funcao inicio()
	{
		inteiro contador, limite, resultado, taboada
		escreva("Digite o número desejado:")
		leia(taboada)
		contador = 0
		limite = 10

		faca {
			resultado = taboada * contador
			escreva(taboada + " x " + contador + " = " + resultado + "\n")
			contador ++
		} enquanto (contador <= limite)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 168; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */