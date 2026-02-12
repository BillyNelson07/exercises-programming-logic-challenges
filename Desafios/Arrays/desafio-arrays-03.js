/*

03 - Encontre uma pessoa convidada em uma lista de nomes

Escreva um algoritmo que recebe um array de nomes quaisquer e o nome da pessoa convida a ser encontrada. 

Se encontrar o nome na lista retorne:
-----------------------
"O nome está na lista."
-----------------------

Caso o contrário:
---------------------------
"O nome não está na lista."
---------------------------

*/

function findGuest(names, guest){

  let isOnTheList = false;

  for(let iterator = 0; iterator < names.length; iterator++){

    if(names[iterator] === guest){
      isOnTheList = true;
    };

  }

  if(isOnTheList == true){
    return "O nome está na lista.";
    
  } else {
    return "O nome não está na lista.";
    
  };

}

findGuest(["Sara", "Gabriel", "Maria", "Davi", "Julio"], "Davi");
findGuest(["Sara", "Gabriel", "Maria", "Davi", "Julio"], "Antônio");

module.exports = findGuest;
