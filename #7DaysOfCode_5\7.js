alert ('Olá, seja bem vindo á lista de compras automatizada!')

let desejaAdicionar = "sim";
let itemASerInserido = "";
let categoria = "";
let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

while (desejaAdicionar != "não"){
  
  desejaAdicionar = prompt ('Deseja adicionar um item na sua lista de compras? "sim" ou "não"');
  
  while(desejaAdicionar != "sim" && desejaAdicionar != "não"){
    
    alert(`Operação não reconhecida!`);
    
        desejaAdicionar = prompt ('Deseja adicionar um item na sua lista de compras? "sim" ou "não"');
  }
  
  if(desejaAdicionar == "não"){
     break;
     }
    
  itemASerInserido = prompt ("Qual item deseja inserir?")
  
  categoria = prompt ('Em qual categoria esse item se encaixa: "frutas", "laticinios", "congelados" ou "doces".')
  
  if (categoria === "frutas"){
  frutas.push(itemASerInserido)
  }
  
  else if (categoria === "laticinios"){
   laticinios.push(itemASerInserido)     
  }
  
  else if (categoria === "congelados"){
   congelados.push(itemASerInserido)     
  }
  
  else if (categoria === "doces"){
   doces.push(itemASerInserido)    
  }
  
  else {
    
    alert ("Categoria não encontrada.")
  }
}

alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);
