function draw(){
  destinoAreaDeAtuacao();
  msgArea();
  msgSoftwareFront();
  msgSoftwareBack();
  especializacaoOuFullstack();
  msgFinal();
  querAprenderTecnologias();
  noLoop();
}

alert ("Seja bem vindo!");

const nomeDoUsuario = prompt ("Qual o seu nome?");
const areaDeAtuacao = prompt('Em qual área você gostaria de trabalhar? Digite 1 para "Front-end" ou 2 para "Back-end".');

//Variáveis

let areaDeEspecializacaoFront;
let areaDeEspecializacaoBack ;
let msgAreaDeAtuacaoFront;
let msgAreaDeAtuacaoBack;
let msgEspecializacaoFront;
let msgEspecializacaoBack;
let msgEspecializarOuFullstack

function destinoAreaDeAtuacao (){
  
  if (areaDeAtuacao == 1){
    areaDeEspecializacaoFront = prompt ('Você deseja se especializar em qual software. Digite 1 para "React" ou 2 para "Vue". ');
  }
    
  else if(areaDeAtuacao == 2){ 
    areaDeEspecializacaoBack = prompt ('Você deseja se especializar em qual software. Digite 1 para "C#" ou 2 para "Java". ');      
  }  
}

function msgArea(){
  if (areaDeAtuacao == 1){
    msgAreaDeAtuacaoFront = 'Front-end'
  }
  else if (areaDeAtuacao == 2){
    msgAreaDeAtuacaoBack = 'Back-end'   
  }
}

function msgSoftwareFront(){
  if (areaDeEspecializacaoFront == 1){
    msgEspecializacaoFront = 'React'
  }
  else if (areaDeEspecializacaoFront == 2){
    msgEspecializacaoFront ='Vue'
  }
}

function msgSoftwareBack(){
  if (areaDeEspecializacaoBack == 1){
    msgEspecializacaoBack = 'C#'
  }
  else if (areaDeEspecializacaoBack == 2){
    msgEspecializacaoBack = "Java"
  }
}

function especializacaoOuFullstack(){
  
  let destinoProfissional = prompt('A partir das suas decisões o que você deseja? Digite 1 para se "Especializar" ou 2 para ser "Fullstack".');
    
  if (destinoProfissional == 1){
    msgEspecializarOuFullstack = "se Especializar"
  }
  
  else if (destinoProfissional == 2){
    msgEspecializarOuFullstack = "ser FullStack"
  }
}

function msgFinal(){
  if ( areaDeAtuacao == 1){
    alert("Parabéns " + String(nomeDoUsuario) + ", você optou por atuar na área de " + String(msgAreaDeAtuacaoFront) + " e trabalhar com o software " + String(msgEspecializacaoFront) + ". Também decidiu " + String(msgEspecializarOuFullstack) + " na área de programação.");
  }
  else if (areaDeAtuacao == 2){
    alert("Parabéns " + String(nomeDoUsuario) + ", você optou por atuar na área de " + String(msgAreaDeAtuacaoBack) + " e trabalhar com o software " + String(msgEspecializacaoBack) + ". Também decidiu " + String(msgEspecializarOuFullstack) + " na área de programação.");
  }
}

//Variáveis

var tecnologiasAdicionais;
var listaTecAdicionais = [];

function querAprenderTecnologias(){
  
  tecnologiasAdicionais = prompt ('Existe mais alguma tecnologia que gostaria de se especializar ou conhecer? Responda 1 para "Sim" 2 para "Nao".')
  
  while (tecnologiasAdicionais == 1){
  let adicionar = prompt ("Qual?");
    listaTecAdicionais.push(adicionar)
    tecnologiasAdicionais = prompt ('Existe mais alguma tecnologia que gostaria de se especializar ou conhecer? Responda 1 para "Sim" 2 para "Nao".')
  
  if (tecnologiasAdicionais == 2){
    alert ("Essa é a lista de tecnologias que você gostaria de aprender : ")
    alert (listaTecAdicionais.join('\n')); 
    alert ("Espero que vocé tenha sucesso em aprender cada uma delas!");
    }
  }
}

