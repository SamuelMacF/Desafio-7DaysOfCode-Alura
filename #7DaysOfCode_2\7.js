var nomeUsuario = prompt("Qual o seu nome?");
var idadeDoUsuario = prompt("Quantos anos você tem?");
var linguagemDeProgramacao = prompt("Qual linguagem de programação você está estudando?");
 
alert("Olá " + String(nomeUsuario) + ", você tem " + String(idadeDoUsuario) + " anos e já está aprendendo " + String(linguagemDeProgramacao) + "!");

var gostaDeEstudar = prompt("Você gosta de estudar " + String(linguagemDeProgramacao) + " ? Responda com o número 1 para SIM ou 2 para NÃO.");

function gostaDeEstudarProgramacao(){
  if (gostaDeEstudar == 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
  }
  if(gostaDeEstudar == 2)
    alert("Ahh que pena... Já tentou aprender outras linguagens?")
}
  if(gostaDeEstudar != 1 && gostaDeEstudar != 2)
   gostaDeEstudar = prompt("Favor digitar um numero valido. Responda com o número 1 para SIM ou 2 para NÃO.")
  
function draw(){
  gostaDeEstudarProgramacao(noLoop(gostaDeEstudar));
}
