/*

02 - Encontre o menor número de um array

Escreva um algoritmo que recebe um array de números inteiros, procure o menor valor e o retorne.

*/

function getMinNumber(numbers) {
  let lowestNumber = numbers[0];

  for(let iterator = 0; iterator < numbers.length; iterator++){

    if(numbers[iterator] < lowestNumber){
      lowestNumber = numbers[iterator];
    }


  }
  
  return lowestNumber;
}

getMinNumber([875, 65, 42, 100, 12, 77])
getMinNumber([-875, 65, -42, 100, 12, 77])

module.exports = getMinNumber;
