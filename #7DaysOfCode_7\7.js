alert("Bem-vindo a Calculadora JavaScript!")

function soma(valor1, valor2){
    return Number(valor1) + Number(valor2);
}

function subtracao(valor1, valor2){
    return Number(valor1) - Number(valor2);
}

function multiplicacao(valor1, valor2){
    return Number(valor1) * Number(valor2);
}

function divisao(valor1, valor2){
    return Number(valor1) / Number(valor2);
}

let NumeroUm;
let NumeroDois;
let operacao = "";

do {
	
    operacao = prompt(`Qual operação você deseja fazer? Responda 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'.`);
  
    while (operacao != "soma" && operacao != "subtração" && operacao != "multiplicação" && operacao != "divisão" && operacao != "sair") {
	alert(`Operação não definida!`);
	operacao = prompt(`Qual operação você quer realizar? Responda 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'.`);
    }
	
    if (operacao === "sair"){
		break;	
    }
	
    NumeroUm = prompt(`Informe o primeiro valor:`);
    NumeroDois = prompt(`Informe o primeiro valor:`);
    switch (operacao) {
        case 'soma':
          alert(`O resultado da ${operacao} é ${soma(NumeroUm, NumeroDois)}`);
          break;
        case 'subtração':
            alert(`O resultado da ${operacao} é ${subtracao(NumeroUm, NumeroDois)}`);
            break;
        case 'multiplicação':
            alert(`O resultado da ${operacao} é ${multiplicacao(NumeroUm, NumeroDois)}`);
            break;
        case 'divisão':
            alert(`O resultado da ${operacao} é ${divisao(NumeroUm, NumeroDois)}`);
            break;
    }
} while(operacao === "soma" || operacao === "subtração" || operacao === "multiplicação" || operacao === "divisão")
alert(`Finalizando operação. Até mais!`);
