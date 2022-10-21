alert("Olá, seja bem vindo")
alert("Vamos jogar um jogo?")

const numeroAleatorio = Math.floor(Math.random() * (10 - 0 + 1) + 0)
let numeroDoUsuario;
let acertou = false;
  
 for (let numeroDeTentativas = 0; numeroDeTentativas < 3 ; numeroDeTentativas ++){
     numeroDoUsuario = prompt("Você tem 3 tentativas para adivinhar o numero que eu escolhi. Qual número de 0 a 10 você deseja chutar?")
   
    if(numeroDoUsuario == numeroAleatorio){
      alert (`Parabéns você acertou, o número era ${numeroAleatorio}!`)
      acertou = true;
      break;
    }
   
   alert("Você errou, tente novamente!");
   
}

if (!acertou){
  alert(`Infelizmente, você não acertou. O número era ${numeroAleatorio}!`);
}
