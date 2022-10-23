alert ('Olá, seja bem vindo á lista de compras automatizada!')

let desejaAdicionar = "sim";
let itemASerInserido = "";
let categoria = "";
let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

while (desejaAdicionar != "não"){

  if (frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0){
    
  desejaAdicionar = prompt ('Deseja adicionar um item na sua lista de compras? "sim" ou "não"');
    }
  
  else {
        desejaAdicionar = prompt("Você deseja adicionar um item na lista de compras? Responda 'sim', 'não' ou 'remover'.");
    }
  
  while(desejaAdicionar != "sim" && desejaAdicionar != "não" && desejaAdicionar != "remover"){
    
    alert(`Operação não reconhecida!`);
    
        desejaAdicionar = prompt ('Deseja adicionar um item na sua lista de compras? "sim" ou "não" ou "remover"');
  }
  
  if(desejaAdicionar == "não"){
     break;
     }
  
  if (desejaAdicionar === "sim"){
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
  else if (desejaAdicionar === "remover"){
	
    if(frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0){  
		alert("A lista está vazia!");
    }
    
    else {
      let removerItem = prompt(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n "Qual item você deseja remover?"`);
      
      if(frutas.indexOf(removerItem) != -1){
			frutas.splice(frutas.indexOf(removerItem), 1);
			alert(`O item ${removerItem} foi removido com sucesso!`)
		} 
      else if(laticinios.indexOf(removerItem) != -1){
			laticinios.splice(laticinios.indexOf(removerItem), 1);
			alert(`O item ${removerItem} foi removido com sucesso!`)
		} 
      else if (doces.indexOf(removerItem) != -1){
			doces.splice(doces.indexOf(removerItem), 1);
			alert(`O item ${removerItem} foi removido com sucesso!`)
		} 
      else if (congelados.indexOf(removerItem) != -1){
			congelados.splice(congelados.indexOf(removerItem), 1);
			alert(`O item ${removerItem} foi removido com sucesso!`)
		} 
      else {
			alert(`Não foi possível encontrar o item dentro da lista!`)
         }    
      }
   }
}

alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);
