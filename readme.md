
<h1>:warning::construction:Em Desenvolvimento:construction:</h1>
<h3>Lógica JS 1/7: Operações Booleanas</h3>
<h4>A sua tarefa de hoje é reescrever o código abaixo de maneira que ele imprima as informações de maneira correta, que faça sentido e sem erros:</h4>

	let numeroUm = 1
	let stringUm = '1'
	let numeroTrinta = 30
	let stringTrinta = '30'
	let numeroDez = 10
	let stringDez = '10'

	if (COMPARAR O numeroUm e a stringUm) {
  		console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
	} else {
 		 console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
	}

	if (COMPARAR O numeroTrinta e a stringTrinta) {
  		console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
	} else {
  		console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
	}

	if (COMPARAR O numeroDez e a stringDez) {
 		 console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
	} else {
  		console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
	}
	
<h3>#7DaysOfCode - Lógica JS 2/7: 👩🏽‍💻 Variáveis</h3>
<h4>Por isso, hoje, eu vou te ensinar a desenvolver um programa simulando um desses sites. Ele deve pedir para o usuário responder 3 perguntas:</h4>

	- Qual o seu nome?
	- Quantos anos você tem?
	- Qual linguagem de programação você está estudando?

<h4>No final, o sistema vai exibir a mensagem:</h4>

	"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"
	
<h4>Você vai complementar o código para que, depois de exibir a mensagem anterior, o programa pergunte:</h4>

	Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.

<h4>E aí, dependendo da resposta, ele deve mostrar uma das seguintes mensagens:</h4>

	1 > Muito bom! Continue estudando e você terá muito sucesso.
	2 > Ahh que pena... Já tentou aprender outras linguagens?

<h3>#7DaysOfCode - Lógica JS 3/7: Fluxo de decisão</h3>
<h4>Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:</h4>

<p><strong>1.</strong> Se quer seguir para área de Front-End ou seguir para a área de Back-End.</p>

<p><strong>2.</strong> Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.</p>

<p><strong>3.</strong> Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.</p>

<p><strong>4.</strong> Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: "Tem mais alguma tecnologia que você gostaria de aprender?", continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.</p>

<h3>#7DaysOfCode - Lógica JS 4/7: 👩🏽‍💻 Mais loops e randomização</h3>
<h4>Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).</h4>

<p>Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.</p>

<p>No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.</p>

<h3>#7DaysOfCode - Lógica JS 5/7: Arrays e coleções</h3>
<h4>Criar um programa em Javascript que perguntará se você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não.</h4>

<p>Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata.</p>

<p>Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas, como frutas, laticínios, congelados, doces e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo.</p>

<p>Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá exibir uma lista com todos os itens agrupados, da seguinte forma:</p>

<p><strong>Caso você adicione na sua lista:</strong></p>

	banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca

<p><strong>O programa deverá imprimir, por exemplo:</strong></p>

	Lista de compras:
    	Frutas: banana, tomate, maçã, uva, abacate
    	Laticínios: leite vegetal, leite de vaca, leite em pó
    	Congelados:
    	Doces: chiclete e bala de ursinho
	
<h3>#7DaysOfCode - Lógica JS 6/7: 👩🏽‍💻 Remoção de Arrays</h3>
<p><strong>Sabe o programinha que você criou ontem para montar a sua própria lista de compras? Hoje o seu desafio é deixar ele ainda mais legal!
Você deverá criar a opção de remover algum item da lista, que será exibida junto à pergunta de "você deseja adicionar uma comida na lista de compras"?</strong></p>

<p>A partir daí, caso a pessoa escolha essa opção, o programa irá imprimir os elementos presentes na lista atual, e a pessoa deverá escrever qual deles deseja remover.</p>

<p>Depois disso, o programa irá remover o elemento da lista e imprimir a confirmação de que o item realmente não está mais lá.</p>

<p>Por fim, ele voltará para o ciclo inicial de perguntas.</p>

<p>Se, na hora de deletar o item, o mesmo não for encontrado na lista, você deverá exibir uma mensagem avisando isso.</p>

<p>Por exemplo: "Não foi possível encontrar o item dentro da lista!"</p>

<p>Lembre-se que a opção de remover um item só deverá estar disponível a partir do momento que existir ao menos um elemento dentro da lista de compras.</p>
