/*

01 - Encontre o maior número de um array

Escreva um algoritmo que recebe um array de números inteiros, procure o maior valor e o retorne.

*/

function getMaxNumber(numbers) {
  let highestNumber = 0;

  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > highestNumber) {
      highestNumber = numbers[index];
    }
  }

  return highestNumber;
}

getMaxNumber([22, 65, 80, 1, 4]);
getMaxNumber([-22, 65, -80, 1, 4]);

module.exports = getMaxNumber;
